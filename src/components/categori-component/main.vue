<template>
  <div class="products">
    <mainn />

    <h2>Категория: {{ categoryName }}</h2>

    <div v-if="categoryToTovares.length" class="product-list">
      <ul>
        <li v-for="tovar in categoryToTovares" :key="tovar.id" class="product-item">
          <h3>{{ tovar.name }}</h3>
          
          <!-- Картинка -->
          <div v-if="tovar.image">
            <img :src="tovar.image" :alt="tovar.name" style="max-width: 100%; height: auto;" />
          </div>

          <!-- Цена -->
          <p v-if="tovar.price">Цена: {{ tovar.price }} ₽</p>

          <!-- Ссылка на Avito -->
          <div v-if="tovar.link">
            <a :href="tovar.link" target="_blank" class="buy-button">Купить на Avito</a>
          </div>
        </li>
      </ul>
    </div>
    <p v-else>Товаров в этой категории нет.</p>
  </div>
</template>

<script setup>
import { useCategoryStore } from '../../store/categoryStore';
import { useTovarStore } from '../../store/tovarStore';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
import { computed } from 'vue';
import mainn from '../../mainStore/main.vue';

// Получаем сторы
const categoryStore = useCategoryStore();
const tovarStore = useTovarStore();

// Роутер для получения id категории
const router = useRouter();

// Реактивное вычисление currentId
const currentId = computed(() => router.currentRoute.value.params.id);

// Название категории по индексу
const categoryName = computed(() => {
  const index = parseInt(currentId.value);
  return categoryStore.categories[index] || 'Неизвестная категория';
});

// Фильтруем товары, относящиеся к текущей категории
const categoryToTovares = computed(() => {
  return tovarStore.tovares.filter(tovar => tovar.category === categoryName.value);
});

// Реагируем на изменение маршрута внутри того же компонента
onBeforeRouteUpdate((to, from, next) => {
  next(); // обязательно!
});
</script>

<style scoped>
.products {
  padding: 20px;
}

.product-list ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 0;
}

.product-item {
  border: 1px solid #ddd;
  padding: 15px;
  width: calc(33% - 20px); /* Три товара в ряд */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-item img {
  margin-bottom: 10px;
}

.buy-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.buy-button:hover {
  background-color: #36976b;
}
</style>