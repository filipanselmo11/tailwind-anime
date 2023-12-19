<script setup lang="ts">
import Card from '../components/Card.vue'
import { ref } from 'vue';
const animes = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
const titulo = 'Anime Tal'
const descricao = 'ashdjashdkjadhjkadkjahkjdahsdkjLOREM UPSUMASP aksdnajsdhjsahda'
</script>

<template>
    <div class="grid grid-cols-4 gap-4 mt-5 p-4">
        <div v-for="i in animes" :key="i">
            <Card :titulo="titulo" :descricao="descricao" />
        </div>
    </div>
    <div class="mt-4 flex justify-center">
        <button class="bg-green text-gray-dark font-bold py-2 px-4 rounded-full">
            Add Anime
        </button>
    </div>
</template>