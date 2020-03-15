<template>
        <playlistList actions="true" v-if="albumsInfo" :playlists="albumsInfo" />
</template>

<script>
import { mapGetters } from 'vuex';
import playlistList from "@/components/playlistList"
export default {
  components:{
    playlistList
  },
    computed: {
        ...mapGetters("spotify", ["albumsInfo"])
    }, 
}
</script>
