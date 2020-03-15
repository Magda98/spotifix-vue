<template>
    <v-navigation-drawer
        
        :color="color"
        :expand-on-hover="expandOnHover"
        :right="right"
        absolute
        dark
        v-if="userInfo"
        app
      >
        <v-list
          dense
          nav
          class="py-0"
        >
            <v-list-item-avatar >
              <img :src="userInfo.images[0].url">
            </v-list-item-avatar>
          <v-list-item two-line :class="true && 'px-0'">
            <v-list-item-content>
              <v-list-item-title>{{userInfo.display_name}}</v-list-item-title>
              <v-list-item-subtitle>{{userInfo.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="(item, index) in items"
            :key="item.title"
            link
            :to="item.url"
            :href="index===0? userProfile : ''"
            :target="item.tg"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           
        </v-list>
          <v-switch
          outlined
        v-model="expandOnHover"
        class="ma-2"
      ></v-switch>
      </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
    return {
        drawer: true,
        items: [
          { title: 'MyAccount', icon: 'mdi-view-dashboard', account: true, tg: "_blank"},
          {title: 'Home', icon: 'mdi-home-outline', url: '/'},
          { title: 'Albums', icon: 'mdi-image', url:"/albums" },
          { title: 'Liked songs', icon: 'mdi-heart', url: "/saved" },
          {title: 'Browse', icon: 'mdi-animation-outline', url:'/browse'}
        ],
        color: 'teal',
        right: false,
        expandOnHover: false,
      }
    },
     computed:{
      ...mapGetters("user", ["userInfo", "loggedIn", "userProfile"]),
      label(){
        if(this.expandOnHover)
            return "pokaż"
        else
            return "ukryj"
      }
    },
    created() {
  },
    
}
</script>