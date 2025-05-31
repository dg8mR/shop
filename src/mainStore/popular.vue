<script setup>
import { useTovarStore } from '../store/tovarStore';
import { ref, onMounted } from 'vue';
import mainn from './main.vue';

const tovarStore = useTovarStore();

// Реактивное состояние для популярных товаров
const popularTovares = ref([]);

// Функция получения случайного числа
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Обновляем список популярных товаров
function updatePopularTovares(count = 3) {
  if (tovarStore.tovares.length === 0) {
    popularTovares.value = [];
    return;
  }

  // Перемешиваем товары случайным образом и берем первые `count` штук
  const shuffled = [...tovarStore.tovares].sort(() => 0.5 - Math.random());
  popularTovares.value = shuffled.slice(0, count);
}

onMounted(() => {
  updatePopularTovares();
});
</script>

<template>
  <mainn />
  <section class="products">
    <h2>Популярные товары</h2>

    <div v-if="popularTovares.length" class="product-list">
      <ul>
        <li v-for="tovar in popularTovares" :key="tovar.id" class="product-item">
          <h3>{{ tovar.name }}</h3>
          
          <!-- Картинка -->
          <div v-if="tovar.image">
            <img :src="tovar.image" :alt="tovar.name" style="max-width: 200px; height: auto;" />
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

    <p v-else>Нет популярных товаров.</p>
  </section>
</template>

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
  width: calc(33% - 20px);
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