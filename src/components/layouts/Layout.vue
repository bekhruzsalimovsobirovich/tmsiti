<template>
  <div class="layout h-screen flex flex-col">
    <Navbar/>
    <div class="flex flex-1">
      <Sidebar/>
      <Content/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Sidebar from "@/components/layouts/Sidebar.vue";
import Content from "@/components/layouts/Content.vue";
  export default {
    name: 'Layout',
    components: {
      Navbar,
      Sidebar,
      Content
    }
  }
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}
</style>s