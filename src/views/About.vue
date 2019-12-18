<template>
<div>
  <div class="container">
    <h2>Acerca de mí</h2>
    <img src="../assets/doctor-avatar.png" alt="avatar">
    <em>
      Médico Especialista en Neurología Vascular y 
      Terapia Endovascular Neurológica, adscrita al 
      Instituto Nacional de Neurología y Neurocirugía</em>
      <h3>Recuerda:</h3>
    <div class="tips">
      <article>
        <h3>Cerebro sano, envejecimiento saludable</h3>
      <span><i> 
        Las elecciones que haga hoy pueden ayudar a prevenir 
        derrames cerebrales y enfermedades del corazón y 
        mantenerlo mentalmente afilado a medida que envejece.
      </i></span>
      </article>
      <article>
        <h3>Trazos y salud cerebral</h3>
      <span> <i>
        Las acciones que realiza afectan la salud de su cerebro.
        Nunca es demasiado tarde para mejorarlo.
      </i></span>
      </article>
    </div>
  </div>
    <Info />
  </div>
</template>
<script>
import Info from '../components/Info'
export default {
  name:"about",
  components: {
    Info
  }
}
</script>
<style scoped>
.container img{
  width: 30%;
  border-radius: 50%;
  margin: auto;
}

.container{
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

em, span {
  font-size: 25px;
  font-weight: 200;
}
em{
  text-align: justify;
  width: 70%;
  padding: 5%;
  line-height: 45px;
  border-left: solid 4px #ca2017;
}

.container h2{
  font-size: 3em;
}

h3{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.6em;
}

article {
  border-left: solid 4px#ca2017;
  width: 40%;
  text-align: left;
  padding: 2%;
}

.tips{
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin: 5% auto
}
</style>