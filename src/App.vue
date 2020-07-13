<template>
  <div id="app">

    <Layout>
    </Layout> 

<router-view></router-view>

<div :style="{
  display:'flex',
  padding:'15px',
  justifyContent:'center',
  fontSize:'25px',
  color:'#fff',
  backgroundColor:'#212121',
  width:'100%',
  position:'absolute',
  bottom:'0%',
}">&copy; Shubham Dogra</div>


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

#app{
  position: relative;
  min-height: 90vh;
}




</style>


