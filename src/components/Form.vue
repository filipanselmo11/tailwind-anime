<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Form',
    props:{
        titulo: {
            type: String,
            required: true,
        },
        genero: {
            type: String,
            required: true,
        },
        anoLancamento: {
            type: Number,
            required: true,
        },
        temporadas: {
            type: Number,
            required: true,
        },
    },
});

</script>

<template>
    <form class="max-w-sm mx-auto mt-8">
        <div class="mb-5">
            <label for="titulo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Título
            </label>
            <input
                type="text"
                id="titulo"
                v-model="titulo"
                class="shadow-sm bg-green-400 border border-green-900 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required>
        </div>
        <div class="mb-5">
            <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gênero
            </label>
            <input
                type="text"
                id="genero"
                v-model="genero"
                class="shadow-sm bg-green-400 border border-green-900 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required>
        </div>
        <div class="mb-5">
            <label for="ano" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ano De Lançamento
            </label>
            <input
                type="number"
                id="ano"
                v-model="anoLancamento"
                class="shadow-sm bg-green-400 border border-green-900 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required>
        </div>
        <div class="mb-5">
            <label for="temporadas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Número de Temporadas
            </label>
            <input
                type="number"
                id="temporadas"
                v-model="temporadas"
                class="shadow-sm bg-green-400 border border-green-900 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required>
        </div>
        <div class="mt-9">
            <button type="submit"
                class="shadow-sm bg-green-400 border border-green-900 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                Cadastrar
            </button>
        </div>
    </form>
</template>