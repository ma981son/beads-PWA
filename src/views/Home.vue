<template>
  <div class="home">
    <Template></Template>
  </div>
  <div>
    <PropPanel></PropPanel>
  </div>
</template>

<script>
// @ is an alias to /src
import Template from '@/components/Template.vue'
import PropPanel from "@/components/PropPanel";

export default {
  name: 'Home',
  components: {
    Template,
    PropPanel
  }
}
</script>