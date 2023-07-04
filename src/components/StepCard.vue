<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Lorem ipsum dolor sit amet'
    },
});
</script>

<template>
    <div class="box" style="height: 100%;">
        <div class="content">
            <h3 class="is-size-4">{{ title }}</h3>
            <span class="icon" style="height: 5rem;">
                <slot name="icon">
                    <fa-icon icon="fa-solid fa-cloud-arrow-up" style="height: 100%;" />
                </slot>
            </span>
            <p class="mt-2">
                {{ description }}
            </p>
        </div>
    </div>
</template>