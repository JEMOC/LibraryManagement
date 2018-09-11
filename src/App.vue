<template>
  <div id="app">
    <Header></Header>
    <SideBar></SideBar>
    <ViewPage></ViewPage>
  </div>
</template>

<script>

import Header from './components/header/Header.vue'
import SideBar from './components/sidebar/SideBar.vue'
import ViewPage from './components/viewpage/ViewPage.vue'

export default {
  name: 'app',
  components: {
    Header,
    SideBar,
    ViewPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  padding: 0;
  margin: 0;
}
h1, h2, ul, p, body, html{
  padding: 0;
  margin: 0;
}
ul{
  list-style-type: none;
}
a{
  text-decoration: none;
  cursor: pointer;
}
.clearfix::after{
  content: '';
  display: table;
  clear: both;
}
.clearfix::before{
  content: '';
  display: table;
}
</style>
