<template>
  <aside class="bg-[#fff] flex flex-col justify-between sidebar text-white h-[calc(100vh - 10px)] p-2 z-[10] rounded-[8px] border-[1px] m-[10px]">
    <div>
      <div class="logo flex items-center justify-between mb-[30px]">
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
      <div class="sidebar-menu text-[#000]">
        <ul>
          <li class="mb-[10px]">
            <div class="flex items-center border-[1px] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#9CA3AF] mr-[10px]">search</i>
              <input class="outline-none w-[160px] text-[#9CA3AF]" type="text" placeholder="Qidiruv...">
              <i class="material-icons text-[#9CA3AF]">keyboard_command</i>
            </div>
          </li>
          <li class="mb-[10px]">
            <div class="flex font-bold items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#016F75] justify-center bg-[#01565B] border-[1px] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#fff] mr-[10px]">add</i>
              <button class="btn text-[#fff] text-[14px]">Yangi murojaat qo`shish</button>
            </div>
          </li>
          <li class="mb-[10px] item">
            <button class="flex w-full text-[14px] font-bold items-center cursor-pointer transition ease-in-out delay-50 active rounded-[5px] p-[8px]">
              <i class="material-icons text-[#01565B] mr-[10px]">insert_drive_file</i>
              Murojaatlar
            </button>
          </li>
          <li class="mb-[10px] item">
            <button class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#9CA3AF] mr-[10px]">insert_drive_file</i>
              Mening hisoblarim
            </button>
          </li>
          <li class="mb-[10px] item">
            <button class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#9CA3AF] mr-[10px]">insert_drive_file</i>
              Billing
            </button>
          </li>
          <li class="mb-[10px] item">
            <button class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#9CA3AF] mr-[10px]">insert_drive_file</i>
              Mening xatlarim
            </button>
          </li>
          <li class="mb-[10px] item">
            <button class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#9CA3AF] mr-[10px]">insert_drive_file</i>
              E`lonlar
            </button>
          </li>
          <li class="mb-[10px] item">
            <button class="flex w-full text-[14px] font-bold hover:text-[#01565B] items-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#E6EEEF] rounded-[5px] p-[8px]">
              <i class="material-icons text-[#9CA3AF] mr-[10px]">insert_drive_file</i>
              Bilimlar bazasi
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="profile text-[#000] border-[1px] rounded-[5px] bg-[#fcfcfc]">
      <button class="flex items-center justify-between w-full p-[8px]">
       <div class="flex items-start">
         <img class="w-[36px] h-[36px] rounded-[5px] mr-[10px]" src="/public/sidebar/profile.webp" alt="profile">
         <span class="flex flex-col items-start">
          <span class="text-[16px] leading-[24px] font-[500]">Salimov Bekhruz</span>
          <span class="text-[12px] text-[#9CA3AF] leading-[20px] font-[400]">FullStack Developer</span>
        </span>
       </div>
        <i class="material-icons text-[#9CA3AF]">keyboard_arrow_up</i>
      </button>
    </div>
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

.active{
  background-color: #E6EEEF;
  color: #01565B;
}
</style>