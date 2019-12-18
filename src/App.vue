<template>
  <div id="app">
    <Header/>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
#app {
 font-family:"Palatino";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #FCFCF9 ;
  margin: 0%;
  padding: 0%;
  font-weight: 700;

}
</style>
