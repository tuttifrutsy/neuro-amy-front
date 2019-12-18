<template>
  <div>
  <div class="container">
    <img src="../assets/Brain-health.jpg" alt="brain">
    <h1 class="centered" >Neurología Vascular / Terapia Endovascular</h1>
    <a class="bottom">Agendar Cita</a>
  </div>
  <article>
    <h2>¿Sabías qué?</h2>
    <h3>Un cerebro sano, tiene un flujo sanguíneo requerido para un rendimiento máximo. </h3> 
    <h3>Un cerebro sano es escencial para tener una vida larga y plena.</h3> 
    <h3>Cuando su cerebro está sano, puede prestar atención, resolver problemas y comunicarse mucho mejor</h3>
  </article>
  </div>
</template>
<script>
export default {
  name: 'home',
}
</script>
<style scoped>

.container{
  position: relative;
  text-align: center;
  width: 100%;

}

.container img{
  width: 100%;
  height: 50%;
}


.centered{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.bottom{
  position: absolute;
  bottom: 5%;
  left: 41%;
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

.container a{
  color: #fff;
}

h2, h3{
  color: #222;
  font-family: "Palatino";
   
}

h2{
  font-size: 3em;
  margin: 3%;
  font-weight: 700;
}

h3{
  text-align: justify;
  width: 60%;
  margin:2% auto;
  font-weight: 400;
}
 
</style>