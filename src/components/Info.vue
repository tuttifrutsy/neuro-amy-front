<template>
  <div class="info">
    <h2>Requiere más informacion</h2>
    <a class="bottom">Agendar Cita</a>
  </div>
</template>
<script>
export default {
  name: 'info',
}
</script>
<style scoped>
.bottom{
  position: absolute;
  bottom: 25%;
  left: 35%;
  color:#fff;
  transform: traslate(-50%, -50%);
  background-color: #ca2017;
  padding:  16px 30px;
  font-size: 1.5em;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.bottom:hover{
  background-color: #222;
 
}

.info{
  position: relative;
  width: 60%;
  border-top:solid 1px #8f98a1;
  border-bottom:solid 1px #8f98a1;
  margin: auto;
  height: 300px;
}

.info h2{
  padding: 5%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>