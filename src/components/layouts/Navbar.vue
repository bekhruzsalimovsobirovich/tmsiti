<template>
  <nav class="navbar text-white p-4 rounded-[8px] border-[1px] flex justify-between items-center fixed m-[10px]">
    <div class="text-[#000]">
      <button class="flex itmes-center leading-[24px]">
        <i class="material-icons mr-[12px]">keyboard_arrow_left</i>
        Murojaat yuborish
      </button>
    </div>
    <div class="text-[#000] flex items-center text-[14px]">
      <i class="material-icons text-[#9CA3AF] mr-[15px]">notifications_none</i>
      <button class="flex items-center text-[#9CA3AF] border-[1px] px-[12px] rounded-[5px] py-[8px]">
        <i class="material-icons w-[24px] mr-[10px]">calendar_months</i>
        Seshanba, 10 Avgust, 2024
      </button>
    </div>
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