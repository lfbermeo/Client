<script setup>
import { ref } from 'vue';

const navBurger = ref(null);
const navMenu = ref(null);

const burgerButtonHandler = () => {
    navBurger.value.classList.toggle('is-active');
    navMenu.value.classList.toggle('is-active');
}

</script>

<template>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <img src="@/assets/safemet_spotter_brand.png" style="max-height: 3rem;">
            </router-link>

            <a @click="burgerButtonHandler" ref="navBurger" role="button" class="navbar-burger" aria-label="menu"
                aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div ref="navMenu" class="navbar-menu">
            <div class="navbar-end">
                <router-link to="/" class="navbar-item">
                    Inicio
                </router-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-arrowless">
                        <button class="button is-warning is-normal is-rounded" style="max-width: fit-content;">
                            <span>Detección</span>
                            <span class="icon">
                                <i class="fas fa-chevron-down"></i>
                            </span>
                        </button>
                    </a>

                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" :to="{ name: 'upload', query: { type: 'image' } }">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-images" />
                                </span>
                                <span>Imagen</span>
                            </span>
                        </router-link>
                        <router-link class="navbar-item" :to="{ name: 'upload', query: { type: 'video' } }">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-film" />
                                </span>
                                <span>Video</span>
                            </span>
                        </router-link>
                        <router-link class="navbar-item" :to="{ name: 'stream' }">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-video" />
                                </span>
                                <span>Stream</span>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    border-bottom: 1px solid #1b1b1b;
}
</style>
