<template>
    <div id="money">
       <h1>{{totalMoney}}</h1>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  },
   //获取vuex中的状态 我们一般使用计算属性
   computed:{
     totalMoney(){
       return this.$store.state.money
     }
   }
}
</script>
    
<style lang="css" scoped>
    
</style>