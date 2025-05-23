// tovarStore.js
import { defineStore } from 'pinia';

export const useTovarStore = defineStore('tovarStore', {
  state: () => ({
    tovares: JSON.parse(localStorage.getItem('tovares') || '[]'),
  }),
  actions: {
    // Добавить товар
    addTovar(tovar) {
      if (
        tovar &&
        tovar.name &&
        tovar.category && 
        !this.tovares.some(t => t.name === tovar.name)
      ) {
        this.tovares.push({
          id: Date.now(), // или используй любую генерацию ID
          ...tovar,
        });
        this.saveToLocalStorage();
      }
    },

    // Удалить товар
    deleteTovar(identifier) {
      let id;
      if (typeof identifier === 'object' && identifier !== null) {
        id = identifier.id;
      } else {
        id = identifier;
      }

      this.tovares = this.tovares.filter(t => t.id !== id);
      this.saveToLocalStorage();
    },

    // Редактировать товар
    editTovar(id, newName, newCategory) {
      const index = this.tovares.findIndex(t => t.id === id);
      if (index !== -1) {
        this.tovares[index] = {
          ...this.tovares[index],
          name: newName,
          category: newCategory
        };
        this.saveToLocalStorage();
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('tovares', JSON.stringify(this.tovares));
    },
  },
});