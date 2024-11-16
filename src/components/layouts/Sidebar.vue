<template>
  <aside class="bg-[#fff] sidebar text-white h-[calc(100vh - 10px)] p-4 z-[10] rounded-[8px] border-[1px] m-[10px]">
    <div class="logo flex items-center justify-between">
      <div class="right flex items-center justify-start">
          <img class="mr-[7px]" src="/public/sidebar/sidebarimg.png" alt="sidebarimg">
          <h2 class="text-[#000] font-bold text-[18px] leading-[28px]">Wiko</h2>
      </div>
      <div class="left text-center flex">
        <button class="text-[#000] w-[24px] h-[24px] font-bold">
          <i class="material-icons">keyboard_arrow_left</i>
        </button>
      </div>
    </div>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'Sidebar'
  }
</script>


<style scoped>
.sidebar {
  width: 270px;
}
</style>