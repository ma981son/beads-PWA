<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-sm no-wrap">
      <h3>JSON: {{json.temp.stitch}}</h3>
    </div>
    <div class="q-pa-md row items-start q-gutter-sm no-wrap">
      <div>{{json}}</div>
    </div>
  </div>
</template>

<script>
import Template from "@/components/Template";

export default {
  name: 'JSON',
  data() {
    return {
      json: Template.data().json,
    };
  },
  methods:{
    getJsonData(){
      const headers = { "Content-Type": "application/json" };
      fetch("http://localhost:9000/json", {headers})
      .then(response => response.json())
      .then(data => this.json = data)
      .catch(err => {
        console.log(err)
      })
    },
  },
  beforeMount() {
    this.getJsonData()
  },

}
</script>