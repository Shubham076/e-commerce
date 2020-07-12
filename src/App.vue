<template>
  <div id="app">
    <Layout>
    </Layout> 

<router-view></router-view>


  </div>
</template>

<script>
import Layout from "./components/layout"


export default {
  name: 'App',
  components: {
    Layout
  },

  created(){
    this.$store.dispatch('autoLogin')
  }


}
</script>

<style>

*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}




</style>


