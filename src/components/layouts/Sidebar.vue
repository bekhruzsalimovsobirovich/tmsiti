<template>
  <aside :class="{sidebarActive: isSidebar}"
         class="bg-[#fff] flex flex-col justify-between sidebar text-white h-[calc(100vh - 10px)] p-2 z-[10] rounded-[8px] border-[1px] m-[10px]">
    <div>
      <div v-if="!isSidebar" class="logo flex items-center justify-between mb-[30px]">
        <div class="right flex items-center justify-start">
          <img class="mr-[7px]" src="/public/sidebar/sidebarimg.png" alt="sidebarimg">
          <h2 class="text-[#000] font-bold text-[18px] leading-[28px]">Wiko</h2>
        </div>
        <div class="left text-center flex">
          <button class="text-[#000] w-[24px] h-[24px] font-bold" @click="toggleSidebar">
            <i class="material-icons">keyboard_arrow_left</i>
          </button>
        </div>
      </div>
      <div v-else class="text-center mb-[30px] flex justify-center">
        <div class="left text-center flex">
          <button class="text-[#000] w-[30px] h-[30px] font-bold" @click="toggleSidebar">
            <i class="material-icons" style="font-size: 30px">arrow_circle_right</i>
          </button>
        </div>
      </div>
      <div class="sidebar-menu text-[#000]">
        <ul>
          <li :class="{hidden: isSidebar}" class="mb-[10px]">
            <div class="flex items-center border-[1px] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#9CA3AF] mr-[10px]">search</i>
              <input class="outline-none w-[160px] text-[#9CA3AF]" type="text" placeholder="Qidiruv...">
              <i class="material-icons text-[#9CA3AF]">keyboard_command</i>
            </div>
          </li>
          <li class="mb-[10px]" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
            <div :class="{'!p-[5px]': isSidebar}" class="flex font-bold items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#016F75] justify-center bg-[#01565B] border-[1px] rounded-[5px] p-[8px]">
              <i :class="{'mr-[10px]': !isSidebar}" class="material-icons text-[#fff]">add</i>
              <button :class="{hidden: isSidebar}" class="btn text-[#fff] text-[14px]">Yangi murojaat qo`shish</button>
            </div>
          </li>
          <li class="mb-[10px] item">
            <button :class="{'!p-[5px]': isSidebar}" class="flex w-full text-[14px] font-bold items-center cursor-pointer transition ease-in-out delay-50 active rounded-[5px] p-[8px]">
              <i :class="[{'mr-[10px]': !isSidebar}]" class="material-icons text-[#01565B]">insert_drive_file</i>
              <span :class="{hidden: isSidebar}">Murojaatlar</span>
            </button>
          </li>
          <li class="mb-[10px] item">
            <button :class="{'!p-[5px]': isSidebar}" class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i :class="[{'mr-[10px]': !isSidebar}]" class="material-icons text-[#9CA3AF]">insert_drive_file</i>
              <span :class="{hidden: isSidebar}">Mening hisoblarim</span>
            </button>
          </li>
          <li class="mb-[10px] item">
            <button :class="{'!p-[5px]': isSidebar}" class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i :class="[{'mr-[10px]': !isSidebar}]" class="material-icons text-[#9CA3AF]">insert_drive_file</i>
              <span :class="{hidden: isSidebar}">Billing</span>
            </button>
          </li>
          <li class="mb-[10px] item">
            <button :class="{'!p-[5px]': isSidebar}" class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i :class="[{'mr-[10px]': !isSidebar}]" class="material-icons text-[#9CA3AF]">insert_drive_file</i>
              <span :class="{hidden: isSidebar}">Mening xatlarim</span>
            </button>
          </li>
          <li class="mb-[10px] item">
            <button :class="{'!p-[5px]': isSidebar}" class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i :class="[{'mr-[10px]': !isSidebar}]" class="material-icons text-[#9CA3AF]">insert_drive_file</i>
              <span :class="{hidden: isSidebar}">E`lonlar</span>
            </button>
          </li>
          <li class="mb-[10px] item">
            <button :class="{'!p-[5px]': isSidebar}" class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i :class="[{'mr-[10px]': !isSidebar}]" class="material-icons text-[#9CA3AF]">insert_drive_file</i>
              <span :class="{hidden: isSidebar}">Bilimlar bazasi</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="profile text-[#000] border-[1px] rounded-[5px] bg-[#fcfcfc]">
      <button
          :class="isSidebar ? '!p-[5px] transition-all font-bold hover:bg-[#e5e7eb] hover:rounded-[5px]' : ''"
          class="flex items-center justify-between w-full p-[8px]">
       <div class="flex items-start">
         <img :class="isSidebar ? '!w-[24px] font-bold !h-[24px] !mr-[0px]':''" class="w-[36px] h-[36px] rounded-[5px] mr-[10px]" src="/public/sidebar/profile.webp" alt="profile">
          <span :class="{hidden: isSidebar}" class="flex flex-col items-start">
            <span class="text-[14px] leading-[24px] font-[500]">Salimov Bekhruz</span>
            <span class="text-[12px] text-[#9CA3AF] leading-[20px] font-[400]">FullStack Developer</span>
          </span>
       </div>
        <i :class="{'!hidden':isSidebar}" class="material-icons text-[#9CA3AF]">keyboard_arrow_up</i>
      </button>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'Sidebar',
    props:{
      isSidebar:{
        type: Boolean,
        required: true
      }
    },
    data(){
      return {
        // isSidebar: false,
        isHovered: false
      }
    },
    methods: {
      toggleSidebar(){
        this.$emit('update:isSidebar', !this.isSidebar);
        // this.isSidebar = !this.isSidebar;
        // document.querySelector(".sidebar").classList.toggle('sidebarActive')
      }
    }
  }
</script>


<style scoped>
.sidebar {
  width: 270px;
  transition: .5s ease-out;
}

.sidebar.sidebarActive{
  width: 53px;
  overflow: hidden;
  /*transform: translateX(53px);*/
  transition: .5s ease-in;
}

.active{
  background-color: #E6EEEF;
  color: #01565B;
}
</style>