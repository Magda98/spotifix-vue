<template>

    <v-tabs
      background-color="white"
      color="teal accent-4"
      left
    >
      <v-tab>Featured playlists</v-tab>
      <v-tab>New releases</v-tab>
      <!-- <v-tab>My Recomendations</v-tab> -->
      <v-tab-item
      >
        <v-container fluid>
        <playlistList actions="true" :trackObj="false" v-if="featured" :playlists="featured" />
        </v-container>
      </v-tab-item>
       <v-tab-item
      >
        <v-container fluid>
          <playlistList artists="true" :trackObj="true" v-if="releases" :releases="true" :playlists="releases.albums" />
        </v-container>
      </v-tab-item>
       <!-- <v-tab-item>
        <v-container fluid>
          <v-row>
              #3
          </v-row>
        </v-container>
      </v-tab-item> -->
    </v-tabs>
</template>

<script>
import { mapGetters } from 'vuex';
import playlistList from "@/components/playlistList"
export default {
  components:{
    playlistList
  },
    computed: {
        ...mapGetters("spotify", ["featured", "releases"])
    }, 
  
}
</script>