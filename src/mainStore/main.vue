<script setup>
  import { useCategoryStore } from '../store/categoryStore';
  import { useTovarStore } from '../store/tovarStore';
  import { ref } from 'vue';

  const categoryStore = useCategoryStore();
    const tovarStore = useTovarStore();
  // Пример данных о товарах
  

</script>

<template>
  <header>
    <nav class="main-menu">
      <!-- Логотип или название сайта -->
      <div class="logo">
        <p>BROLA</p>
      </div>

      <!-- Меню -->
      <ul class="menu">
        <!-- Категории -->
        <li class="menu-item dropdown">
          <a href="#">Категории</a>
          <ul class="dropdown-menu">
            <li v-for="category in categoryStore.categories" :key="category">
              <a href="#">{{ category }}</a>
            </li>
          </ul>
        </li>

        <!-- Остальные пункты меню -->
        <li class="menu-item"><a href="#">Главная</a></li>
        <li class="menu-item"><a href="#">Связь</a></li>
        <li class="menu-item"><a href="#">Магазин</a></li>
      </ul>
    </nav>
  </header>

  <!-- Секция с товарами -->
  <section class="products">
    <h2>Популярные товары</h2>
    <div class="product-list">
      
        <li v-for="tovar in tovarStore.tovares" :key="tovar.id">
        {{ tovar.name }} 
        </li>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style scoped>
/* Общие стили */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

/* Шапка */
header {
  background-color: #b35e5e; /* Очень темный красный оттенок */
  color: #333;
  padding: 10px 0;
  text-align: center; /* Центрирование содержимого */
}

/* Логотип */
.logo p {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #fff; /* Белый текст для контраста */
}

/* Основное меню */
.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex; /* Выравнивание по центру */
  gap: 20px;
}

.menu-item {
  position: relative;
}

.menu-item a {
  text-decoration: none;
  color: #fff; /* Белый текст для контраста */
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.menu-item a:hover {
  background-color: #9c4f4f; /* Очень темный красный оттенок при наведении */
}

/* Выпадающее меню */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #b35e5e; /* Очень темный красный оттенок */
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 150px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu li a {
  padding: 10px;
  color: #fff; /* Белый текст для контраста */
  font-size: 16px;
  display: block;
  text-align: center; /* Центрирование текста */
}

.dropdown-menu li a:hover {
  background-color: #9c4f4f; /* Очень темный красный оттенок при наведении */
}

/* Показать выпадающее меню при наведении */
.dropdown:hover .dropdown-menu {
  display: block;
}

/* Стили для секции с товарами */
.products {
  text-align: center;
  padding: 40px 20px;
  background-color: #fff;
}

.products h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.product-item {
  width: 150px;
  text-align: center;
}

.product-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product-item h3 {
  font-size: 18px;
  margin: 5px 0;
  color: #555;
}

.product-item p {
  font-size: 14px;
  color: #777;
}
</style>