<template>
<v-container fluid style="overflow: hidden;  width: 100%;
    height: 100%;">
    <songsList :songs="saved" title="My ❤️ songs"/>
</v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import songsList from "@/components/songsList"
export default {
    components:{
        songsList
    },
    computed: {
    ...mapGetters("spotify", ["saved"]),
}, 
    created() {
    },
}
</script>