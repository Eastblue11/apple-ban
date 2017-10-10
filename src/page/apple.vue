<template>
    <div id="apple">
       <h2>{{title}}</h2>
       <button @click='add'>购买一根{{title}}</button>
       <button @click='reduce'>丢弃一根{{title}}</button>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        title:'苹果',
        price:3
    };
  },
  methods:{
      add(){
            //在组件中使用this.$store来获取vuex的仓库
            //我们要调用仓库中mutations中的 添加方法 这里切记不要直接调用state来操作数据 要走提交mutations的方法 commit的参数就是mutations的一个方法名字 其他自定义参数写后面
            //同步用commit 异步用dispatch
            this.$store.commit('ADD',this.price)
        //  this.$store.dispatch('add',this.price)
      },
      reduce(){
           this.$store.commit('REDUCE',this.price)
        //    this.$store.dispatch('reduce',this.price)
      }
  }
}
</script>
    
<style lang="css" scoped>
    
</style>