<template>
  <v-bottom-navigation
    dark
    height="120px"
  >
   <v-row justify="center" align="center">
       <v-col  cols="2"> </v-col>
       <v-col  cols="2">
        <v-card v-if="currentTrack" color="#2E2E2E"  >
        <div class="d-flex flex-no-wrap justify-space-between">
              <div>
    <v-card-title   style="font-size:12px !important; line-height:12px;"
                  class="headline"
                  v-text="currentTrack.name"
                ></v-card-title>

                <v-card-subtitle style="font-size:10px;"><span v-for="artist in (currentTrack.artists)" :key="artist.id" v-html="artist.name + ' ' "></span></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="50"
                tile
              >
                <v-img :src="currentTrack.album.images[1].url"></v-img>
              </v-avatar>
            </div>
          </v-card>
       </v-col>
       <v-col cols="3">
          <v-btn v-on:click="prev">
      <v-icon>mdi-skip-previous-circle-outline</v-icon>
    </v-btn>
    <v-btn v-if="!playing" v-on:click="resumed()">
      <v-icon style="font-size: 35px;">mdi-play-circle-outline</v-icon>
    </v-btn>

    <v-btn v-if="playing" v-on:click="paused()" >
      <v-icon style="font-size: 35px;">mdi-pause-circle-outline</v-icon>
    </v-btn>
    <v-btn v-on:click="next">
      <v-icon >mdi-skip-next-circle-outline</v-icon>
    </v-btn>
       </v-col>
        <v-col style="" cols="3">
    <v-slider 
          :label="(parseInt(maxSec/60)).toString() +':'+( parseInt(maxSec%60) < 10 ? ('0'+parseInt(maxSec%60).toString()) : parseInt(maxSec%60).toString() )"
          min="0"
          step="1000"
          v-on:change="seek"
          :max="songDuration"
          v-model="slider"
        ></v-slider>
            </v-col>
    </v-row>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data(){
      return{
        play: false,
      }
    },
     computed: {
        ...mapGetters("player", ["currentSec", "maxSec", "playing", "currentTrack", "songCurrentMilisec", "songDuration"]),
          slider: {
         get() { return this.songCurrentMilisec },
         set(value) { this.updateSongTime(value)}
      },
    },
    methods:{
        ...mapActions("player", ["pause", "resume", "next", "prev", "seek", "updateSongTime"]),
        resumed(){
          if(!this.playing){this.resume();}
        },
        paused(){
          if(this.playing){
            this.pause();
          }
        }
    },
    
}
</script>
<style lang="scss" scoped>
.v-slider__track-background, .v-slider__track-fill, .v-input__slot, .v-slider__thumb-container, .v-slider__thumb:before {
    transition: 3.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;  
}
</style>