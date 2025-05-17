<script setup>
import { useTovarStore } from '../store/tovarStore';
import { useCategoryStore } from '../store/categoryStore';
import { ref } from 'vue';

const tovarStore = useTovarStore();
const categoryStore = useCategoryStore();

const newTovarName = ref('');
const selectedCategory = ref('');
const editInput = ref('');
const editCategory = ref('');
</script>

<template>
  <div>
    <h2>Товары</h2>

    <!-- Форма добавления товара -->
    <div>
      <input v-model="newTovarName" placeholder="Название товара" />
      <select v-model="selectedCategory">
        <option disabled value="">Выберите категорию</option>
        <option v-for="cat in categoryStore.categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
      <button @click="tovarStore.addTovar({ name: newTovarName, category: selectedCategory })">
        Добавить товар
      </button>
    </div>

    <ul>
      <li v-for="tovar in tovarStore.tovares" :key="tovar.id">
        {{ tovar.name }} (Категория: {{ tovar.category }})

        <div>
          <input v-model="editInput" placeholder="Новое имя" />
          <select v-model="editCategory">
            <option disabled value="">Выберите новую категорию</option>
            <option v-for="cat in categoryStore.categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
          <button @click="tovarStore.editTovar(tovar.id, editInput, editCategory)">
            Редактировать
          </button>
          <button @click="tovarStore.deleteTovar(tovar.id)">Удалить</button>
        </div>
      </li>
    </ul>
  </div>
</template>