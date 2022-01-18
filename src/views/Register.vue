<template>
  <div class="q-pa-md" style="max-width: 60vh" id="container">
    <q-card class="my-card">
      <q-card-section class="bg-secondary text-black" align="center">
        <div class="text-h4">Create an Account</div>
      </q-card-section>

      <q-separator />

  <q-form
  @submit="register"
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
      <q-btn @click="register" label="Submit" type="submit" color="secondary"/>
      <q-btn @click="reset" label="Reset" type="reset" color="secondary" flat class="q-ml-sm" />
    </div>
  </q-form>
      <div style="padding: 2vh; margin-top: 2vh; text-align: center;display: grid" class="bg-primary">
        <p>Already have an Account ?</p>
        <q-btn to="/sign-in" label="Login here" type="submit" color="accent"/>
      </div>

    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const register = () => {
  firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then(() => {
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
}
const reset = () => {
  email.value = ""
  password.value = ""
}
</script>

<style>
#container {
  margin: auto;
}
.my-card{
  align-self: center;

}
</style>