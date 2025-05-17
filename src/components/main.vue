<script setup>
import { ref } from 'vue';
import { useTovarStore } from '../store/tovarStore';
import { useCategoryStore } from '../store/categoryStore';

const tovariesStore = useTovarStore();
const categoryiesStore = useCategoryStore();
</script>

<template>
    <div class="top">
        <a href="">Главная</a>
        <select name="" id="">
            <option v-for="cat in categoryiesStore.categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
        </select>
        <a href="">Товары</a>
        <a href="">Связь</a>
    </div>

</template>