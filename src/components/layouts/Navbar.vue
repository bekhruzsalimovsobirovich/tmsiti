<template>
  <nav class="navbar text-white p-4 rounded-[8px] border-[1px] flex justify-between items-center fixed m-[10px]">
    <div class="text-[#000]">Myapp</div>
    <ul>
      <li>nav1 </li>
      <li>nav 2</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  height: 60px;
  margin-left: 290px;
  width: calc(100% - 300px);
}
</style>