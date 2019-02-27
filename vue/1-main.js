Vue.component('blog-post', {
  inheritAttrs: false,
  props:['title'],
  template: `
  <div class="container">
  <header>
    <slot name="header">dfs</slot>
  </header>
  <main>
    <slot>{{title}}</slot>
  </main>
  <footer>
    <slot name="footer">xx</slot>
  </footer>
</div>
  
  `
})
let app = new Vue({
  el:'#kkk',
  data:{
    post: {
      id: 1,
      title: 'My Journey with Vue'
    }
  }
})