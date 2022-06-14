<template>
    <div>
        <!--Footer-->
        <footer class="bg-white dark:bg-gray-800">
        <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6 text-black">
                <a class="flex text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-2xl" href="#">
                    <!--Icon from: http://www.potlabicons.com/ -->
                    <img width="32" class="mr-4" src="@/assets/pokecard_logo.svg" />
                    <span>{{ $t('appname') }}</span>
                </a>
            </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Links</p>
                <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 dark:text-white hover:text-pink-500">FAQ</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 dark:text-white hover:text-pink-500">Help</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 dark:text-white hover:text-pink-500">Support</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <a href="https://www.freepik.com/free-photos-vectors/background" class="text-gray-500">Use TCG pokemon API for all data.</a>
        </footer>
    </div>
</template>