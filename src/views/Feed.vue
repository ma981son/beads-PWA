<template>
  <h3>This page is for users only</h3>

    <div class="home">
      <Template></Template>
    </div>
    <div>
      <PropPanel></PropPanel>
    </div>

</template>

<script>
import Template from '@/components/Template.vue'
import PropPanel from "@/components/PropPanel";

export default {
  name: 'Feed',
  components: {
    Template,
    PropPanel
  }
}
</script>
<script setup>
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function(user) {
  if (!user) { // not logged in
    alert('you must be logged in to view this. redirecting to the home page')
    router.push('/')
  }
})
onBeforeUnmount(() => {
  // clear up listener
  authListener()
})
</script>