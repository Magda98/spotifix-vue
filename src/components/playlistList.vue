<template>
  <v-container
    fluid
    style="overflow-y: scroll; width: 100%; height: 69vh;  padding: 0 34px 0 0;
    box-sizing: content-box; "
  >
    <v-row align="center" justify="center">
      <v-col cols="5" v-for="item in playlists.items" :key="item.id">
        <v-card class="mx-auto" max-width="400">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-img
              :elevation="hover ? 16 : 2"
              v-on:click="playPlaylist(item.uri)"
              class="white--text align-end sp-album"
              height="200px"
              :src="item.images[0].url"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex justify-center align-center transition-fast-in-fast-out  darken-2 v-card--reveal display-3 white--text"
                  style="height: 200px"
                >
                  <v-btn
                    icon
                    color="white"
                    class="mx-2"
                    fab
                    dark
                    small
                    style="margin-top: 60px;"
                    ><v-icon style="font-size:40px;"
                      >mdi-play-circle-outline</v-icon
                    ></v-btn
                  >

                  <v-card-title
                    font-size="25px"
                    align="center"
                    justify="center"
                    >{{ item.name }}</v-card-title
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
          <v-card-subtitle class="pb-0"
            >Number of songs:
            {{
              releases ? item.total_tracks : item.tracks.total
            }}</v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>{{ item.description }}</div>
            <div v-if="artists" font-size="12px">
              <span
                v-for="artist in item.artists"
                :key="artist.id"
                v-html="artist.name + ' '"
              ></span>
            </div>
          </v-card-text>

          <v-card-actions v-if="actions">
            <v-btn color="teal" text v-on:click="goto(item)">
              <v-icon>mdi-music-box-multiple-outline</v-icon>
              Songs
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "@/router";
export default {
  props: {
    playlists: {},
    releases: Boolean,
    trackObj: Boolean,
    actions: Boolean,
    artists: Boolean
  },
  methods: {
    goto(item) {
      this.$store.dispatch("spotify/saveAlbumName", {
        name: item.name,
        type: item.type,
        trackObj: this.trackObj
      });
      this.$router.push("albums/" + item.id);
    },
    ...mapActions("player", ["playPlaylist"])
  }
};
</script>
<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  background-color: rgba(0, 150, 136, 0.5);
  position: absolute;
  width: 100%;
  flex-direction: column;
}
</style>
