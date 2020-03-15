<template>
    <songsList v-if="songs" :songs="songs" :objTrack="trackObj" :title="albumName"/>
</template>

<script>
import _ from "lodash";
import { mapGetters, mapActions } from 'vuex';
import songsList from "@/components/songsList"
export default {
    components:{
        songsList
    },
    computed: {
    ...mapGetters("spotify", ["songs", "albumName", "trackObj"]),
   },
    beforeCreate(){
        this.$store.dispatch("spotify/getUserPlaylistSongs");
    },
}
</script>