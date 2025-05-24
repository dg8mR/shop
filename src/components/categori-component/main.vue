<template>
  <div>
    {{ categoryStore.categories[$route.params.id] }}
  </div>


</template>

<script setup>
import { useCategoryStore } from '../../store/categoryStore';
import { useRouter } from 'vue-router'

// Получаем стор
const categoryStore = useCategoryStore();

// Функция для вывода в консоль


// Если нужно, можешь получить id текущей категории:
const router = useRouter();
const currentId = router.currentRoute.value.params.id;
console.log('Текущий ID категории:', currentId);
</script>