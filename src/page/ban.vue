<template>
    <div id="ban">
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
        title:'香蕉',
        price:50
    };
  },
  methods:{
      add(){
          this.$store.commit('ADD',this.price)
      },
      reduce(){
          this.$store.commit('REDUCE',this.price)
      }
  }
}
</script>
    
<style lang="css" scoped>
    
</style>