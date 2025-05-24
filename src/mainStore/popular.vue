  <script setup>
    import { useCategoryStore } from '../store/categoryStore';
  import { useTovarStore } from '../store/tovarStore';
  import { ref } from 'vue';
  import mainn from './main.vue';
const categoryStore = useCategoryStore();
const tovarStore = useTovarStore();
let r = getRandomInt(0, tovarStore.tovares.length)
let names = tovarStore.tovares[r].name
names = tovarStore.tovares[r].name
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function test(){
    console.log(tovarStore.tovares)
}
</script>

<template>
    <mainn />
     <section class="products">
    <h2>Популярные товары</h2>
    <div class="product-list">
      
        <!---<li v-for="tovar in tovarStore.tovares" :key="tovar.id">
        {{ tovar.name }} 
        </li>-->
        <p>{{ names }}</p>

    </div>
  </section>
</template>