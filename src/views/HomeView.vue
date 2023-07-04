<script setup>
import { onMounted } from 'vue';
import StepCard from '../components/StepCard.vue';


onMounted(() => {
    let dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
    });
});
</script>

<template>
    <section class="hero is-normal has-background-light">
        <div class="hero-body">
            <div class="container columns">
                <div class="column is-four-fifths">
                    <h1 class="is-size-1">
                        Sistema de supervisión del <br /><span class="has-text-warning">casco de seguridad</span> <br />en
                        obras de construcción
                    </h1>

                    <div class="dropdown">
                        <div class="dropdown-trigger">
                            <button class="button is-warning is-normal is-rounded mt-4" style="max-width: fit-content;"
                                aria-haspopup="true" aria-controls="drop-2">
                                <span>Detección</span>
                                <span class="icon">
                                    <i class="fas fa-chevron-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="drop-2" role="menu">
                            <div class="dropdown-content">
                                <router-link class="dropdown-item" :to="{ name: 'upload', query: { type: 'image' } }">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-images" />
                                        </span>
                                        <span>Imagen</span>
                                    </span>
                                </router-link>
                                <router-link class="dropdown-item" :to="{ name: 'upload', query: { type: 'video' } }">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-film" />
                                        </span>
                                        <span>Video</span>
                                    </span>
                                </router-link>
                                <router-link class="dropdown-item" :to="{ name: 'stream' }">
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
                <div class="column">
                    <img src="@/assets/safemet_spotter_imagotipo.png" alt="Safemet Spotter Imagotipo" />
                </div>
            </div>
        </div>
    </section>

    <section class="container has-text-centered mt-6">
        <h2 class="is-size-3">¿Cómo funciona?</h2>

        <div class="columns mt-6">
            <div class="column">
                <StepCard title="1. Sube una imagen o video" description="Sube una imagen o video de una obra de construcción, o activa la cámara para streamear el video
                en vivo.">
                    <template #icon>
                        <fa-icon icon="fa-solid fa-cloud-arrow-up" style="color: #6494E8; height: 100%;" />
                    </template>
                </StepCard>
            </div>
            <div class="column">
                <StepCard title="2. Proceso de detección"
                    description="Espera mientras se procesa la detección del casco de seguridad mediante imágenes, video o stream.">
                    <template #icon>
                        <fa-icon icon="fa-solid fa-spinner" style="color: #6494E8; height: 100%;" spin-pulse />
                    </template>
                </StepCard>
            </div>
            <div class="column">
                <StepCard title="3. Vizualiza el resultado"
                    description="Podrás observar mediante una etiqueta naranja que el sistema ha detectado el casco de seguridad. Y en el caso del stream el sistema te alertará si el trabajador no porta el casco de seguridad.">
                    <template #icon>
                        <fa-icon icon="fa-solid fa-helmet-safety" style="color: #6494E8; height: 100%;" />
                    </template>
                </StepCard>
            </div>
        </div>
    </section>
</template>