<template>
    <div>
        <transition name="fade">
            <div class="bg-gray-200">
                <div class="container max-w-2xl h-screen mx-auto flex flex-col justify-center items-center">
                    <div>
                        <img width="100" class="u-bounce" src="@/assets/pokecard_logo.png"/>
                    </div>
                    <!-- <hollow-dots-spinner
                        :animation-duration="1000"
                        :dot-size="15"
                        :dots-num="3"
                        color="#FF7F50"
                    /> -->
                    <div class="text-3xl font-semibold">
                        {{ $t('loading') }}...
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
//   import 'epic-spinners/dist/lib/epic-spinners.min.css'
//   import { HollowDotsSpinner } from 'epic-spinners/dist/lib/epic-spinners.min.js'
export default {
    // components: {
    //     HollowDotsSpinner
    // },

    mounted() {
        setInterval(() => {
            if (this.percent < 100) {
                this.percent += 10

                // tmp to delete
                if (this.percent === 100) {
                    this.$emit('on-loaded')
                }
            }
        }, 100)
    },

    data() {
        return {
            show: false,
            percent: 0,
        }
    }
}
</script>
<style lang="scss" scoped>
/* 
 * Animations are provided by Animate.css (https://daneden.github.io/animate.css/)
 * Go ahead and make your own sample!
 */
.u-bounce {
  animation: bounce 1000ms infinite;
  //animation-timing-function: cubic-bezier(0,1.28,0,1.27);
}
</style>
<style lang="scss">
.k-progress-outer {
    padding-right: 0 !important;
}
</style>