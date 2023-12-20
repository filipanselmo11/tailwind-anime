<script lang="ts" setup>
import { ref } from 'vue';
import Form from '../components/Form.vue';
const titulo = ref('');
const genero = ref('');
const anoLancamento = ref(0);
const temporadas = ref(0);
</script>


<template>
    <div>
        <h2 class="text-xl flex justify-center mt-4">
            Cadastrar Anime
        </h2>
        <Form :titulo="titulo" :genero="genero" :ano-lancamento="anoLancamento" :temporadas="temporadas" />
    </div>
</template>