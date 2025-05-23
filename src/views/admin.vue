<script setup>
import { ref } from 'vue';
import CategoriaAdmin from '../components/CategoriaAdmin.vue';
import TovarAdmin from '../components/TovarAdmin.vue';
import { useCategoryStore } from '../store/categoryStore';
import { useTovarStore } from '../store/tovarStore';
import { useAdminStore } from '../store/index';

const categoryStore = useCategoryStore();
const tovarStore = useTovarStore();
const adminStore = useAdminStore();

const msg = ref('');
const msgg = ref('');

function addCategory() {
  const name = msg.value.trim();
  if (!name) return console.log('Введите название категории');
  if (categoryStore.categories.includes(name)) return console.log('Такая категория уже существует');
  categoryStore.addCategory(name);
}

function addTovar() {
  const name = msgg.value.trim();
  if (!name) return console.log('Введите название товара');
  if (tovarStore.tovares.some(t => t.name === name)) return console.log('Такой товар уже существует');
  tovarStore.addTovar({ id: Date.now(), name });
}
</script>

<template>
  <div class="password" v-if="adminStore.logg !== 1">
    <p>Введите пароль</p>
    <input type="text" v-model="adminStore.inp" />
    <button @click="adminStore.login">Войти</button>
    <p v-if="adminStore.log === 1">Ошибка входа</p>
  </div>

  <div v-if="adminStore.logg === 1">
    <button @click="adminStore.setLogButton(1)">Категории</button>
    <button @click="adminStore.setLogButton(2)">Товары</button>

    <div class="create_category" v-if="adminStore.log_button === 1">
      <div>
        <input v-model="msg" placeholder="Название категории" />
        <button @click="addCategory">Добавить</button>
      </div>
      <CategoriaAdmin />
    </div>

    <div class="create_tovar" v-if="adminStore.log_button === 2">
      <div>
        <input v-model="msgg" placeholder="Название товара" />
        <button @click="addTovar">Добавить</button>
      </div>
      <TovarAdmin />
    </div>
  </div>
</template>