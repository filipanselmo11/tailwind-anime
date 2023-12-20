<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Card',
    props:{
        titulo: {
            type: String,
            default: '',
            required: true,
        },
        genero: {
            type: String,
            default: '',
            required: true,
        },
        anoLancamento:{
            type: Number,
            default: 0,
            required: true,
        },
        temporadas:{
            type: Number,
            default: 0,
            required: true,
        },
    },
});
</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-600">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                {{ titulo }}
            </div>
            <p class="text-gray-dark text-base">
                {{ genero }}
            </p>
            <p class="text-gray-dark text-base">
                {{ temporadas }}
            </p>
            <p class="text-gray-dark text-base">
                {{ anoLancamento }}
            </p>
        </div>
    </div>
</template>