const app = new Vue({
  el: '#app',
  data: {
    title: 'ToDo List',
    newTodo: '',
    newTodo1: '',
    newTodo2: '',
    title0: 'ToDo Input',
    todos: []
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        title1: this.newTodo1,
        title2: this.newTodo2,
        done: false
      });
      this.newTodo = '';
      this.newTodo1 = '';
      this.newTodo2 = '';
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  }
});
