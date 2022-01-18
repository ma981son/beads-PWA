<template>
  <div style="margin: 2vw">
    {{json}}
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

  },

}
</script>