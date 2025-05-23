import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: (() => {
      const saved = localStorage.getItem('categories');
      return saved ? JSON.parse(saved) : [];
    })(),
  }),
  actions: {
    // Добавить новую категорию
    addCategory(category) {
      if (category && !this.categories.includes(category)) {
        this.categories.push(category);
        this.saveToLocalStorage();
      }
    },

    // Удалить категорию
    deleteCategory(category) {
      this.categories = this.categories.filter(c => c !== category);
      this.saveToLocalStorage();
    },

    // Обновить название категории
    editCategory(oldName, newName) {
      const index = this.categories.indexOf(oldName);
      if (index !== -1 && newName && !this.categories.includes(newName)) {
        this.categories[index] = newName;
        this.saveToLocalStorage();
      }
    },

    // Сохранение в localStorage
    saveToLocalStorage() {
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },
  },
});