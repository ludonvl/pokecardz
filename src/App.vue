<template>
  <div id="app" class="leading-normal tracking-normal text-white">
    <!--Nav-->
    <div v-show="!showLoading" class="gradient">
      <Headbar />
      <router-view/>
      <Footer />
    </div>
    <Loading v-show="showLoading" />
  </div>
</template>
<script>
import Headbar from '@/miscellaneous/Headbar.vue'
import Footer from '@/miscellaneous/Footer.vue'
import Loading from '@/views/Loading'

export default {
  components: {
    Headbar,
    Footer,
    Loading
  },

  methods: {
    initDarkMode() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.$store.dispatch('setDarkMode', true)
        document.getElementById('app').classList.add('dark')
      } else {
        this.$store.dispatch('setDarkMode', false)
      }
    }
  },

  created() {
    console.log(this.$route)
    if ('meta' in this.$route && 'needLoading' in this.$route.meta && this.$route.meta.needLoading) {
      this.showLoading = true
    }
  },
  
  mounted() {
    this.initDarkMode()
  },

  data() {
    return {
      showLoading: false
    }
  }
}
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #FF7F50 0%, #db7169 100%);
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
