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
        descricao: {
            type: String,
            default: '',
            required: true,
        },
    },
});
</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                {{ titulo }}
            </div>
            <p class="text-gray-dark text-base">
                {{ descricao }}
            </p>
        </div>
    </div>
</template>