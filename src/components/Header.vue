<template>
  <div>
    <header class="header">
      <img 
      src="../assets/android-brain_icon-icons.com_66654.png" 
      alt="brain">
    <router-link 
     class="title" 
     to="/">NeuroAmy</router-link>
      <p>Dra. Yolanda Aburto Murrieta  Ced. Prof. 2564813 Ced. Esp. 4412798</p>
      <Navbar />
    </header>
    
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Header',
  components:{
    Navbar
  }
}
</script>
<style  scoped>

p{
  color: #666666;
}

.title {
  text-decoration: none;
  color: #ca2017  ;
  font-size: 3em;
  font-weight: bold;
}

.title:hover {
  color:#222;
}


.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FCFCF9 ;
  flex-direction: column;
  height: 60vh;
  margin: 0%;
}

.header img{
  display: inline-block;
  width: 15%;
  height: 40%;

}
</style>