<template><v-container fluid v-if="songs" style="overflow-y: scroll; width: 100%; height: 80vh;  padding: 0 34px 0 0;
    box-sizing: content-box; ">
      <v-tabs
      background-color="white"
      color="teal accent-4"
      left
    >
       <v-tab>{{title}}</v-tab>
      </v-tabs>
    <v-row justify="center">
    <v-col
        cols="8"
        v-for="(item, index) in songs.items"
        :key="index"
      >
    <v-card v-if="objTrack? true: item.track" flat :class="{ 'grey lighten-5' : index%2 == 0}" v-on:click="objTrack? playSong({uris: uris, position: index}) : playSong({uris: uris, position: index})">
        <div class="d-flex flex-no-wrap justify-space-between">
              <div>
    <v-card-title   font-size="16px"
                  class="headline"
                  v-text="objTrack ? item.name : item.track.name"
                ></v-card-title>

                <v-card-subtitle font-size="12px"><span v-for="artist in (objTrack ? item.artists : item.track.artists)" :key="artist.id" v-html="artist.name + ' ' "></span></v-card-subtitle>
              </div>

              <v-avatar v-if="objTrack? item.album : item.track.album" 
                class="ma-3"
                size="50"
                tile
              >
                <v-img :src="objTrack? item.album.images[1].url : item.track.album.images[1].url"></v-img>
              </v-avatar>
            </div>
          </v-card>
    </v-col>
    </v-row>
          </v-container>
</template>

<script>
import _ from "lodash";
import { mapActions, mapGetters } from 'vuex';
export default {
  props:{
    songs: Object,
    objTrack: false,
    title: "",
    listType: "",
  },
  computed:{
    ...mapGetters("spotify", ["image", "type", "uris"])
  },
    methods:{
        ...mapActions("player", ["playSong"]),
    },
}
</script>
<style lang="scss" scoped>
.v-card__subtitle{
    font-size: 12px;
}
.col-8{
    padding: 0;
}
</style>