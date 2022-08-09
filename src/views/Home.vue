<template>
  <div class="home">
    <div class="pt-24 pb-8">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-4/5 justify-center items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full">{{$t('home-subtitle')}}</p>
          <h1 class="text-5xl font-bold leading-tight mt-4">
            {{$t('home-main')}}
          </h1>
          <div class="relative text-gray-600 my-10">
            <input type="search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" :placeholder="$t('search-placeholder')">
            <button class="absolute right-0 top-0 mt-3 mr-4">
              <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center">
        </div>
      </div>
    </div>
    <WaveInverse />
    <section class="bg-white dark:bg-gray-800 py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
          {{$t('home-title-1')}}
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div>
          <VueSlickCarousel
            v-if="cards.length > 0"
            :arrows="false"
            :autoplay="true"
            :rows="1"
            :slidesPerRow="3"
            :draggable="false"
            :fade="true"
            :swipe="false"
            :touchMove="false"
            :centerMode="true"
          >
            <div :style="{'padding': '10px'}" v-for="card in cards" :key="card.id">
              <img :src="card.images" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
    <!-- Change the colour #f8fafc to match the previous section colour -->
    <Wave />
    <section class="container mx-auto text-center py-6 mb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        {{$t('build-title')}}
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 class="my-4 text-3xl leading-tight">
        {{$t('build-description')}}
      </h3>
      <a :href="getMailTo">
        <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          {{$t('build-action')}}
        </button>
      </a>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Wave from '@/components/globals/Wave'
import WaveInverse from '@/components/globals/WaveInverse'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    WaveInverse,
    Wave,
    VueSlickCarousel
  },

  created() {
    this.axios.get('https://api.tcgdex.net/v2/en/cards').then(({data}) => {
      console.log(data)
      this.cards = data
    })

    // this.axios.get('https://api.pokemontcg.io/v2/cards', {
    //   headers: {
    //     'X-Api-Key': 'd4ab021b-1794-484f-b3a2-57a9d629ae68'
    //   },
    //   params: {
    //     pageSize: 99,
    //     page: this.pageNumber
    //   }
    // }).then(({data}) => {
    //   this.cards = data.data
    // })
  },

  computed: {
    getMailTo() {
      return `mailto:ludo.nvl@gmail.com?subject=${this.$t('build-mail-subject')}`
    }
  },

  data() {
    return {
      cards: [],
      pageNumber: Math.floor(Math.random() * 6) + 1,
    }
  }
}
</script>
