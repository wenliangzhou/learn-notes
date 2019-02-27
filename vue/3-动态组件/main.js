Vue.component('tab-home', { 
	template: '<div>Home component</div>' 
})
Vue.component('tab-posts', { 
	template: '<div>Posts component</div>' 
})
Vue.component('tab-archive', { 
	template: '<div>Archive component</div>' 
})
Vue.component('tab-dfsdf',{
    template:'<div>Archive componsdfsdfent</div>'
})
let app = new Vue({
    el: '#dynamic-component-demo',
    data: {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    },
    computed: {
      currentTabComponent: function () {
        return 'tab-' + this.currentTab.toLowerCase()
      }
    },
    methods:{
        changeative:function (tab) {
            this.currentTab = tab;
            this.tabs[0] = "dfsdf";
        }
    }
  })


