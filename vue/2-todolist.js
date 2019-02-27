Vue.component('todo-item',{
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
    props:['title']
  })
  let todolist = new Vue({
    el: '#todo-list-example',
    data: {
      todos:[
        {title:'标题一',id:1},
        {title:'标题二',id:2},
        {title:'标题三',id:3},
        {title:'标题四',id:4}
      ],
      nextTodoId:5,
      newText:''
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id:this.nextTodoId++,
          title:this.newText
        })
      },
      log:function () {
        console.log('2333');
      }
    }
  });
  