<template>
    <div>
        <nav id="header" class="fixed w-full z-30 top-0 text-black">
            <div class="w-full container mx-auto flex justify-items-center flex-wrap items-center mt-0 py-2">
                <div class="flex items-center">
                    <router-link to="/" class="flex items-center toggleColour text-white no-underline hover:no-underline font-bold text-2xl" href="#">
                        <img width="64" class="mr-2" src="@/assets/pokecard_logo.svg" />
                        <span>{{ $t('appname') }}</span>
                    </router-link>
                </div>
                <div class="flex">
                    <div class="flex">
                        <div class="mr-4 lg:block">
                            <div class="dropdown inline-block relative">
                                <button class="text-gray-700 font-semibold py-6 px-4 rounded inline-flex items-center">
                                    <span class="mr-1 toggleColour text-white">{{capitalizeFirstLetter($i18n.locale)}}</span>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </button>
                                <ul class="dropdown-menu absolute hidden text-gray-700 pt-2">
                                    <li
                                        v-for="(locale, index) in availableLocales"
                                        :key="index"
                                        class="cursor-pointer"
                                        @click="onChangeLocale(locale)"
                                    >
                                        <span class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap toggleColour text-white">{{locale}}</span >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mr-4" @click="onChangeDarkMode" @mouseover="onHoverDarkMode(true)" @mouseleave="onHoverDarkMode(false)">
                            <a class="cursor-pointer py-1 px-2">
                                <svg v-show="!$store.state.darkMode" class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" :fill="(isDarkModeHover) ? colorIconDarkMode : 'none'" viewBox="0 0 24 24" :stroke="colorIconDarkMode">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <svg v-show="$store.state.darkMode" class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" :fill="(isDarkModeHover) ? 'white' : 'none'" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex lg:hidden">
                        <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center">
                        <li class="lg:mr-3 text-left">
                            <router-link class="w-full toggleColour inline-block py-2 px-4 text-white font-bold no-underline" to="/About">{{ $t('menu-link-1') }}</router-link>
                        </li>
                        <li class="lg:mr-3 text-left">
                            <router-link class="w-full toggleColour inline-block py-2 px-4 text-white font-bold no-underline" to="/About">{{ $t('menu-link-2') }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colorIconDarkMode: 'white',
            isDarkModeHover: false,
            availableLocales: []
        }
    },

    methods: {
        check(e) {
            let target = (e && e.target);
            let navMenuDiv = document.getElementById("nav-content");
            let navMenu = document.getElementById("nav-toggle");

            //Nav Menu
            if (!this.checkParent(target, navMenuDiv)) {
                // click NOT on the menu
                if (this.checkParent(target, navMenu)) {
                    // click on the link
                    if (navMenuDiv.classList.contains("hidden")) {
                        navMenuDiv.classList.remove("hidden");
                    } else {
                        navMenuDiv.classList.add("hidden");
                    }
                } else {
                    // click both outside link and outside menu, hide menu
                    navMenuDiv.classList.add("hidden");
                }
            }
        },

        checkParent(t, elm) {
            while (t.parentNode) {
                if (t == elm) {
                    return true;
                }
                t = t.parentNode;
            }
            return false;
        },

        onChangeLocale(locale) {
            const lowerLocale = locale.toLowerCase()
            if (this.$i18n.locale !== lowerLocale) {
                this.$i18n.locale = lowerLocale;
            }
        },

        onHoverDarkMode(hover) {
            this.isDarkModeHover = hover
        },

        onChangeDarkMode() {
            this.$store.dispatch('setDarkMode', !this.$store.state.darkMode);

            if (this.$store.state.darkMode === true) {
                // Whenever the user explicitly chooses dark mode
                localStorage.theme = 'dark'
                document.getElementById('app').classList.add('dark')
            } else {
                // Whenever the user explicitly chooses light mode
                localStorage.theme = 'light'
                document.getElementById('app').classList.remove('dark')
            }
        }
    },

    created() {
        this.availableLocales = this.$i18n.availableLocales.map((locale) => this.capitalizeFirstLetter(locale))
    },

    mounted() {
        var scrollpos = window.scrollY;
        var header = document.getElementById("header");
        var navcontent = document.getElementById("nav-content");
        var toToggle = document.querySelectorAll(".toggleColour");

        document.onclick = this.check;
        document.addEventListener("scroll", () =>  {
            /*Apply classes for slide in bar*/
            scrollpos = window.scrollY;

            if (scrollpos > 10) {
                this.colorIconDarkMode = 'black';
                header.classList.add("bg-white");
                header.classList.add("dark:bg-gray-800");
                header.classList.add("shadow");

                //Use to switch toggleColour colours
                for (let i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.add("dark:text-white");
                    toToggle[i].classList.remove("text-white");
                }

                navcontent.classList.remove("gradient-menu");
            } else {
                this.colorIconDarkMode = 'white';
                header.classList.remove("bg-white");
                header.classList.remove("dark:bg-gray-800");
                header.classList.remove("shadow");

                //Use to switch toggleColour colours
                for (let i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("dark:text-white");
                    toToggle[i].classList.remove("text-gray-800");
                }

                navcontent.classList.add("gradient-menu");
            }
        });
    }
}
</script>
<style lang="css" scoped>
.dropdown {
    z-index: 2;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.gradient-menu {
    background: linear-gradient(90deg, #FB7E52 0%, #DE7266 100%);
}

</style>