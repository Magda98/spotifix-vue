<template>
  <v-app>
     <sideBar/>
    <v-content>
      <router-view/>
    </v-content>
    <player/>
          <v-snackbar
      class="sp-snackbar"
      @input="hideAlert"
      :value="showAlert"
      :multi-line="true"
      :timeout="timeout"
    >
      <div v-bind:class="[ alertType + '--text' ]">
        <v-icon color="white" v-bind:class="[ alertType + '--text'  ]">{{alertIcon}}</v-icon>
        {{message}}
        <v-btn text @click="hideAlert">Zamknij</v-btn>
      </div>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import sideBar from "./components/sideBar"
import player from "./components/player"
export default {
  name: 'App',

  components:{
    sideBar,
    player
  },
  computed: {
    ...mapGetters("toastMessage", [
      "timeout",
      "alertType",
      "alertIcon",
      "message",
      "showAlert"
    ]),
    ...mapGetters("user", ["userInfo", "loggedIn", "noTokenProvided"])
  },
 methods: {
    ...mapActions("toastMessage", ["hideAlert"]),
  },
  beforeCreate(){
    this.$store.dispatch("user/getUserInfo");
  },
  beforeMount(){
      this.$store.dispatch("user/getToken");
  },
};
</script>
<style lang="scss">
#app{
  overflow: hidden;
}
.v-application--wrap{
  overflow: hidden;
}
.v-list-item{
  padding: 0;
}
body {
  overflow: hidden; /* Hide scrollbars */
}
</style>