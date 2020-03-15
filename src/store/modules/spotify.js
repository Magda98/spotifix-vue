import api from '@/api'
import * as types from '../mutation-types'
import router from "@/router";
import querystring from "query-string"
import axios from "axios"

// initial state
const state = {
    albums: false,
    currentAlbumName: "",
    albumSongs: false,
    savedTracks: {},
    recomendedTracks: {},
    featuredPlaylists: false,
    newReleases: false,
    type: "",
    trackObj: false,
    image: false,

}

// getters
const getters = {
    releases: state => state.newReleases,
    featured: state => state.featuredPlaylists,
    albumsInfo: state => state.albums,
    songs: state => state.albumSongs,
    saved: state => state.savedTracks,
    recomendations: state => state.recomendedTracks,
    albumName: state => state.currentAlbumName,
    trackObj: state => state.trackObj,
    type: state => state.type,
    image: state => state.image,

}

// actions
const actions = {
    getUserAlbums({ commit, state }) {
        api.getAlbums(albums => {
            if (albums.status === 401) {
                this.dispatch("user/login");
            } else {
                commit("saveAlbums", { albums });
            }
        });

    },
    getUserPlaylistSongs({ commit, state }) {
        api.getPlaylistSongs(songs => {
            if (songs.status === 401) {
                this.dispatch("user/login");
            } else {
                commit("saveSongs", { songs })
            }
        }, state.type)
    },
    getUserTracks({ commit }) {
        api.getSavedTracks(tracks => {
            if (tracks.status === 401) {
                this.dispatch("user/login");
            } else {
                commit("saveTracks", { tracks });
            }
        })
    },
    getRecomendedTracks({ commit }) {
        api.getRecomendations(tracks => {
            if (tracks.status === 401) {
                this.dispatch("user/login");
            } else {
                commit("recomendations", { tracks })
            }
        })
    },
    saveAlbumName({ commit }, data) {
        commit("currentAlbumName", { data });
    },
    getFeaturedPlaylists({ commit }) {
        api.getFeaturedPlaylists(featured => {
            if (featured.status === 401) {
                this.dispatch("user/login");
            } else {
                commit("saveFeatured", featured);
            }
        })
    },
    getNewReleases({ commit }) {
        api.getNewReleases(releases => {
            if (releases.status === 401) {
                this.dispatch("user/login");
            } else {
                commit("saveNewReleases", releases);
            }
        })
    }
}

// mutations
const mutations = {
    saveNewReleases(state, releases) {
        state.newReleases = releases;
    },
    saveFeatured(state, { playlists }) {
        state.featuredPlaylists = playlists;
    },
    currentAlbumName(state, { data }) {
        state.currentAlbumName = data.name;
        state.type = data.type;
        state.trackObj = data.trackObj;
        state.image = data.image;
    },
    recomendations(state, { tracks }) {
        state.recomendedTracks = tracks;
    },
    saveTracks(state, { tracks }) {
        state.savedTracks = tracks;
    },
    saveAlbums(state, { albums }) {
        state.albums = albums
    },
    saveSongs(state, { songs }) {
        state.albumSongs = songs;
        state.fetched = true;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}