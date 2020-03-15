<template>
<songsList :songs="recomendations" :objTrack="true" title="My TOP songs"/>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import songsList from "@/components/songsList"
  export default {
    name: 'Home',

    components: {
      songsList
    },
    computed:{
          ...mapGetters("spotify", ["recomendations"]),
    },
    methods: {
    ...mapActions("toastMessage", ["hideAlert"]),
     ...mapActions("user", ["login", "getUserInfo"])
  },
  created() {
    this.$store.dispatch("spotify/getRecomendedTracks");
  },
  }
</script>
