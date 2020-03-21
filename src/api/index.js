import _ from "lodash";
import SETTINGS from "../settings";
import axios from "axios";
import router from "@/router"

axios.defaults.baseURL = SETTINGS.API_BASE_PATH;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = {
    clientID: "9e71951e46e74a79ac078ac56f76ba69",
    clientSecret: "***REMOVED***"
}

export default {
    getUserInfo(cb) {
        axios.get("me").then(response => {
            cb(response.data);
        }).catch(e => {
            cb(e.response.data.error);
        })
    },
    getAlbums(cb) {
        axios.get("me/playlists").then(response => {
            cb(response.data)
        }).catch(e => cb(e.response.data.error))
    },
    getPlaylistSongs(cb, type) {
        axios.get(type + "s/" + router.apps[0].$route.params.id + "/tracks").then(response => {
            cb(response.data);
        }).catch(e => cb(e.response.data.error))
    },
    playSong(cb, data) {
        axios.put(`me/player/play?device_id=${data.id}`,
            data.track.position != undefined ? {
                uris: data.track.uris,
                offset: { position: data.track.position }
            } : {
                uris: [data.track.uri],
            }
        ).then(response => {
            cb(response.data)
        }).catch(e => cb(e.response.data.error))
    },
    playPlaylist(cb, data) {
        axios.put(`me/player/play?device_id=${data.id}`, {
            context_uri: data.uri
        }).then(response => {
            cb(response.data)
        }).catch(e => cb(e.response.data.error))
    },
    getSavedTracks(cb) {
        axios.get(`me/tracks`, {
                limit: 50
            }).then(response => {
                cb(response.data)
            })
            .catch(e => cb(e.response.data.error))
    },
    getRecomendations(cb) {
        axios.get(`me/top/tracks`).then(response => {
            cb(response.data);
        }).catch(e => cb(e.response.data.error))
    },
    getFeaturedPlaylists(cb) {
        axios.get(`browse/featured-playlists`).then(response => {
            cb(response.data);
        }).catch(e => cb(e.response.data.error))
    },
    getNewReleases(cb) {
        axios.get(`browse/new-releases`).then(response => {
            cb(response.data);
        }).catch(e => cb(response.data.error))
    }
};