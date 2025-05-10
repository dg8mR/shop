<script setup>
    import { state } from '../store/index.js'
    import CategoriaAdmin from '../components/CategoriaAdmin.vue'
    import { useCategoryStore } from '../store/categoryStore';
    import { ref } from 'vue'
    const store = useCategoryStore()
    let msg = ref()
    const bbb = 0
    console.log(state.admins.log)
    function proverka() {
        if (state.admins.inp == state.admins.password){
            state.admins.logg = 1
        }
        if (state.admins.inp != state.admins.password){
            state.admins.log = 1
        }
        inp = ''
    }
    function n(){
        state.admins.log_button = 1
    }
    function nn(){
        state.admins.log_button = 2
    }
    function addCat() {
    const categoryName = msg.value.trim(); // Убираем лишние пробелы

    if (!categoryName) {
        console.log("Введите название категории");
        return;
    }

    // Проверяем, есть ли уже такая категория
    if (store.categories.includes(categoryName)) {
        console.log("Такая категория уже есть");
        return;
    }

    // Если такой категории нет — добавляем
    store.addCategory(categoryName);
    console.log("Категория добавлена:", categoryName);
}

</script>
<template>
    <div class="password" v-if="state.admins.logg != 1">
        <p>Write password</p>
        <input type="text" v-model="state.admins.inp"/>
        <button @click="proverka">log-in</button>
        <p v-if="state.admins.log == 1">failed log-in</p>

    </div>
    <div v-if="state.admins.logg == 1">
        <button @click="n">категорию</button>
        <button @click="nn">товар</button>
        <div class="create_categor">
            <div v-if="state.admins.log_button == 1">
                <div >
                    <button @click="addCat">add</button>
                    <input v-model="msg">
                </div>
                <CategoriaAdmin></CategoriaAdmin>

            </div>
        </div>

        <div class="create_tovar" >
            
            <div v-if="state.admins.log_button == 2">
                <div>
                    <button>create</button>
                    <button>edit</button>
                    <button>delete</button>
                </div>
                <p>товар 1</p>
                <p>товар 2</p>
                <p>товар 3</p>
                <p>товар 4</p>
                <p>товар 5</p>
            </div>
        </div>
        </div>
</template>
