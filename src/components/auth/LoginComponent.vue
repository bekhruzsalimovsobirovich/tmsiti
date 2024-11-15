<template>
  <div class="flex justify-center h-[100vh] w-full">
    <div class="login flex flex-col text-center justify-center w-[40%] justify-center items-center">
      <div class="w-[450px]">
        <div class="top mb-[30px]">
          <h1 class="font-bold text-[24px] mb-[5px]">Platformaga kirish</h1>
          <p class="color-[#393C4E] text-center leading-[24px]">
            Loyiha-smeta hujjatlarini ekspertizadan o'tkazish axborot tizimiga xush kelibsiz
          </p>
        </div>
        <div class="bottom">
          <div class="buttons flex items-center justify-between mb-[30px]">
            <button
              v-for="(tab,index) in tabs"
              :key="index"
              @click="activeTab = index"
              :class="{
                'text-[#000] border-[#01565B]' : activeTab === index,
                'text-[#595959] border-[#595959]' :activeTab !== index
              }"
              class="btn w-[134px] h-[40px] py-[8px] px-[12px] border-[1px] rounded-[5px] bg-[#fff]"
            >{{tab}}</button>
          </div>
          <div class="form">
            <form class="flex flex-col">
              <div v-if="activeTab === 0">
                <div class="flex flex-col text-start mb-[15px]">
                  <label for="login" class="mb-[5px] font-[400] leading-[24px]">Login</label>
                  <input class="border-[1px] rounded-[5px] py-[8px] outline-none px-[12px] rounded-[#f0f0f0]" id="login" type="text" placeholder="Loginni kiriting">
                </div>
                <div class="flex flex-col text-start mb-[35px]">
                  <label for="password" class="mb-[5px] font-[400] leading-[24px]">Parol</label>
                  <input class="border-[1px] rounded-[5px] py-[8px] outline-none px-[12px] rounded-[#f0f0f0]" id="password" type="password" placeholder="Parolni kiriting">
                </div>
                <div class="flex flex-col">
                  <button class="rounded-[8px] mb-[20px] text-[#fff] leading-[20px] text-[14px] font-[500] bg-[#01565B] py-[8px] outline-none px-[12px] rounded-[#f0f0f0]">Kirish</button>
                  <a href="#" class="text-[#8c8c8c] font-[400] text-[14px] leading-[20px]">Login yoki parolni unutdingizmi?</a>
                </div>
              </div>
              <div v-if="activeTab === 1">
                <div class="flex flex-col text-start mb-[15px]">
                  <label for="phone" class="mb-[10px] font-[400] leading-[24px]">Telefon raqam</label>
                  <input class="border-[1px] rounded-[5px] py-[8px] outline-none px-[12px] rounded-[#f0f0f0]" id="phone" type="text" placeholder="Telefon raqamni kiriting">
                </div>
                <div class="flex flex-col">
                  <p class="text-[#8c8c8c] mb-[20px] text-start font-[400] text-[14px] leading-[20px]">Tizimga kirish uchun Mobile-ID xizmati telefon raqamingizga ulangan bo'lishi kerak.</p>
                  <button class="rounded-[8px] mb-[20px] text-[#fff] leading-[20px] text-[14px] font-[500] bg-[#01565B] py-[8px] outline-none px-[12px] rounded-[#f0f0f0]">SMS kodni olish</button>
                </div>
              </div>
              <div v-if="activeTab === 2">
                <div class="flex flex-col text-start mb-[15px]">
                  <label for="eri" class="mb-[5px] font-[400] leading-[24px]">Eri kaliti</label>
                  <input class="border-[1px] rounded-[5px] py-[8px] outline-none px-[12px] rounded-[#f0f0f0]" id="eri" type="text" placeholder="ERI kalitini kiriting">
                </div>
                <div class="flex flex-col">
                  <button class="rounded-[8px] mb-[20px] text-[#fff] leading-[20px] text-[14px] font-[500] bg-[#01565B] py-[8px] outline-none px-[12px] rounded-[#f0f0f0]">Kirish</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="content bg-[] w-[60%]">
      <img class="h-[100vh] w-full object-cover" src="/public/images/architecture-company.webp" alt="architect">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return {
        activeTab:0,
        tabs: ['One ID', 'Mobile-ID', 'ERI']
      }
    }
  }
</script>