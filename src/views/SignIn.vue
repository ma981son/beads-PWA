<template>
  <div class="q-pa-md" style="max-width: 60vh" id="container">
    <q-card class="my-card">
      <q-card-section class="bg-secondary text-black" align="center">
        <div class="text-h4">Login to Your Account</div>
      </q-card-section>

      <q-separator />

      <q-form
          @submit="signIn"
          class="q-gutter-md"
          style="max-width: 30vh; margin: auto">
        <q-input
            color="purple-12"
            filled
            v-model="email"
            label="Your Email"
            hint="Email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"/>

        <q-input
            color="purple-12"
            filled
            v-model="password"
            label="Your Password"
            type="password"
            hint="Password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <div style=" text-align: center">
          <p v-if="errMsg">{{ errMsg }}</p>
          <q-btn @click="signIn" label="Submit" type="submit" color="secondary"/>
          <q-btn @click="reset" label="Reset" type="reset" color="secondary" flat class="q-ml-sm" />
        </div>

      </q-form>
      <div style="padding: 2vh; margin-top: 2vh; text-align: center;display: grid" class="bg-primary">
        <p>Don't have an Account ?</p>
        <q-btn to="/register" label="Register here" type="submit" color="accent"/>
        </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const signIn = () => { // we also renamed this method
  firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
      .then(() => {
        console.log('Successfully logged in!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break
          default:
            errMsg.value = 'Email or password was incorrect'
            break
        }
      });
}
const reset = () => {
  email.value = ""
  password.value = ""
}
</script>