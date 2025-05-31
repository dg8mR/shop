<script setup>
import { useTovarStore } from '../store/tovarStore';
import { useCategoryStore } from '../store/categoryStore';
import { ref } from 'vue';

const tovarStore = useTovarStore();
const categoryStore = useCategoryStore();

// Поля для добавления
const newTovarName = ref('');
const selectedCategory = ref('');
const newTovarPrice = ref(null);
const newTovarImage = ref('');
const newTovarLink = ref('');

// Поля для редактирования
const editInput = ref('');
const editCategory = ref('');
const editPrice = ref(null);
const editImage = ref('');
const editLink = ref('');
</script>

<template>
  <div>
    <h2>Товары</h2>

    <!-- Форма добавления товара -->
    <div style="margin-bottom: 20px;">
      <input v-model="newTovarName" placeholder="Название товара" />
      <select v-model="selectedCategory">
        <option disabled value="">Выберите категорию</option>
        <option v-for="cat in categoryStore.categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
      <input v-model.number="newTovarPrice" type="number" placeholder="Цена" />
      <input v-model="newTovarImage" placeholder="Ссылка на изображение" />
      <input v-model="newTovarLink" placeholder="Ссылка на Avito" />

      <button @click="
        tovarStore.addTovar({
          name: newTovarName,
          category: selectedCategory,
          price: newTovarPrice,
          image: newTovarImage,
          link: newTovarLink
        });
        newTovarName = '';
        selectedCategory = '';
        newTovarPrice = null;
        newTovarImage = '';
        newTovarLink = '';
      ">
        Добавить товар
      </button>
    </div>

    <ul>
      <li v-for="tovar in tovarStore.tovares" :key="tovar.id" style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
        <strong>{{ tovar.name }}</strong><br/>

        <!-- Категория -->
        <span v-if="tovar.category">Категория: {{ tovar.category }}</span>
        <span v-else>Категория: Не указана</span><br/>

        <!-- Цена -->
        <span v-if="tovar.price">Цена: {{ tovar.price }} ₽</span>
        <span v-else>Цена: Не указана</span><br/>

        <!-- Изображение -->
        <div v-if="tovar.image">
          <img :src="tovar.image" alt="Фото товара" style="max-width: 150px; max-height: 150px;" />
        </div>

        <!-- Ссылка -->
        <div v-if="tovar.link">
          <a :href="tovar.link" target="_blank">Ссылка на Avito</a>
        </div>

        <!-- Форма редактирования -->
        <div style="margin-top: 10px;">
          <input v-model="editInput" placeholder="Новое имя" />
          <select v-model="editCategory">
            <option disabled value="">Выберите новую категорию</option>
            <option v-for="cat in categoryStore.categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
          <input v-model.number="editPrice" type="number" placeholder="Новая цена" />
          <input v-model="editImage" placeholder="Новая картинка" />
          <input v-model="editLink" placeholder="Новая ссылка" />

          <button @click="
            tovarStore.editTovar(tovar.id, {
              name: editInput,
              category: editCategory,
              price: editPrice,
              image: editImage,
              link: editLink
            });
            editInput = '';
            editCategory = '';
            editPrice = null;
            editImage = '';
            editLink = '';
          ">
            Редактировать
          </button>

          <button @click="tovarStore.deleteTovar(tovar.id)">Удалить</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  margin-bottom: 20px;
}
input {
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
}
</style>