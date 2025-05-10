<script setup>
import { useCategoryStore } from '../store/categoryStore';
let msgEdit = ref()
const categoryStore = useCategoryStore();
</script>
<template>
    <div>
      <h2>Категории</h2>
      <ul>
        <li v-for="category in categoryStore.categories" :key="category">
          {{ category }}
          <button @click="categoryStore.editCategory(category,msgEdit)">Редактировать</button>
          <input v-model="msgEdit">
          <button @click="categoryStore.deleteCategory(category)">Удалить</button>
        </li>
      </ul>
    </div>
  </template>