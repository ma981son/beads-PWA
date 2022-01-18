<template>
  <div class="q-pa-md">
    <q-layout>
      <q-header elevated class="$primary" >
        <q-toolbar class="text-black">
          <q-btn flat round dense @click="leftDrawer = !leftDrawer" icon="menu" class="q-mr-sm" />

          <q-space ></q-space><q-tabs v-model="tab" shrink>
          <q-route-tab name="tab1" label="Home"  to="/"/>
          <q-route-tab name="tab2" label="About" to="/about"/>
          <q-route-tab name="tab3" label="Json" to="/json"/>
        </q-tabs>

        </q-toolbar>
        <q-toolbar class="text-black">
          <q-toolbar-title class="q-ml-sm">

            <strong>HTWG</strong> Beads
            <q-avatar>
              <img src="../assets/beads3.png">
            </q-avatar>
          </q-toolbar-title>
          <q-space />
          <q-btn flat round dense icon="file_download" class="material-icons" />
          <q-btn flat round dense icon="add" class="material-icons" />

          <nav>
            <router-link to="/"> Home </router-link> |
            <router-link to="/feed"> Feed </router-link> |
            <span v-if="isLoggedIn"
            >
        <button @click="signOut">Logout</button>
      </span>
            <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
          </nav>

        </q-toolbar>
      </q-header>

      <q-drawer
          v-model="leftDrawer"
          side="left"
          bordered
          class="$primary"
      >
        <q-list>
          <q-item-label header>Links</q-item-label>
          <q-item clickable tag="a" target="_blank" href="https://moodle.htwg-konstanz.de/moodle/course/view.php?id=977">
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Lecture</q-item-label>
              <q-item-label caption>Moodle HTWG Konstanz</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" target="_blank" href="https://github.com/ma981son/Beads_Web-Application">
            <q-item-section avatar>
              <q-icon name="code" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Github</q-item-label>
              <q-item-label caption>github.com/Beads_Web-Application</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container class="q-mt-none">
        <router-view/>
      </q-page-container>

    </q-layout>
  </div>
</template>

<script>

export default {

  name: 'LayoutDefault',
  data: () => {
    return {
      leftDrawer: false
    }
  },
  setup() {

  }
}
</script>

<script setup>
import { ref } from 'vue' // used for conditional rendering
import firebase from 'firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}
</script>