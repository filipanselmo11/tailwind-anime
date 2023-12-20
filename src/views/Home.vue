<script setup lang="ts">

interface AnimeInterface {
    id: number,
    titulo: string,
    genero: string,
    ano_lancamento: number,
    temporadas: number,
}

import Card from '../components/Card.vue'
import { onMounted, ref } from 'vue';
import { api } from '../services/api';
import { useRouter } from 'vue-router';

const animes = ref<AnimeInterface[]>([])

const router = useRouter();

const loadAnimes = async () => {
    await api.get('/api/animes').then(res => {
        console.log('DATA ', res.data);
        animes.value = res.data;
    }).catch(e => {
        console.log('ERRO ', e);
    });

    // console.log('ANIMES ', animes.value);

}

const goToPost = () => {
    router.push('cadastrar-anime')
}

onMounted(() => {
    console.log('OI cai aqui');
    loadAnimes();
});
</script>

<template>
    <div class="grid grid-cols-4 gap-4 mt-5 p-4">
        <div v-for="i in animes" :key="i.id">
            <Card :titulo="i.titulo" :genero="i.genero" :ano-lancamento="i.ano_lancamento" :temporadas="i.temporadas" />
        </div>
    </div>
    <div class="mt-4 flex justify-center">
        <button @click="goToPost()" class="bg-green-600 text-gray-dark font-bold py-2 px-4 rounded-full">
            Add Anime
        </button>
    </div>
</template>