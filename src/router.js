import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Albums from "./views/Albums.vue";
import SavedTracks from "./views/SavedTracks.vue";
import AlbumSongs from "./views/AlbumSongs.vue";
import Browse from "./views/Browse.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/spotifix-vue/",
            name: "home",
            component: Home
        },
        {
            path: "/spotifix-vue/albums/:id",
            name: "albumSongs",
            component: AlbumSongs
        },
        {
            path: "/spotifix-vue/albums",
            name: "albums",
            component: Albums

            // component: () =>
            //     import ( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/spotifix-vue/saved",
            name: "saved",
            component: SavedTracks

            // component: () =>
            //     import ( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/spotifix-vue/browse",
            name: "browse",
            component: Browse
        },


    ]
});