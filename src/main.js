import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import * as types from "./store/mutation-types";
import api from "./api"
import axios from "axios";

Vue.config.productionTip = false;


window.root = new Vue({
    router,
    api,
    store,
    vuetify,
    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'user/SAVE_TOKEN') {
                axios.defaults.headers.common['Authorization'] = `Bearer ${state.user.token}`;
            }
        })
        if (this.$store.state.user.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            this.$store.dispatch("player/spotifyPlayer");
            this.$store.dispatch("spotify/getUserTracks");
            this.$store.dispatch("spotify/getFeaturedPlaylists");
            this.$store.dispatch("spotify/getUserAlbums");
            this.$store.dispatch("spotify/getNewReleases");
            this.$store.dispatch("spotify/getRecomendedTracks");
        }
        this.$store.commit("player/pause");
    },
    render: h => h(App),
}).$mount("#app");