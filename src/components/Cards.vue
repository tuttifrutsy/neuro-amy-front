<template>
<div class="container">
<div class="card"  v-for="service in services" v-bind:key="service.id" >
  <img :src="service.img" alt="Avatar" style="width:100%" class="pic">
  <div class="card-container">
    <h2><b>{{service.title}}</b></h2> 
    <p>{{service.resume}}</p> 
  </div>
</div>
</div>
</template>
<script>

export default {
  name: 'cards',
  props: ['services']
  
}
</script>
<style scoped>
  .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 35%;
  border-radius: 5px;
  margin: 5px;
  height:600px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.pic{
  height: 40%;
}

.container {
  padding: 2px 16px;
  display: flex;
  justify-content: center;
  width: 70%;
  margin:  5% auto;
}

.card-container h2{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2em;
}

.card-container p {
  text-align: justify;
  line-height: 24px;
  margin: 10px;
  font-weight: 300;
}
</style>