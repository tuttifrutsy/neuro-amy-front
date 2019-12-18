<template>
  <div>
  <article>
    <h2>Servicios</h2>
  <p>El desarrollo de la Terapia Endovascular Neurológica, permite que las operaciones para eliminar aneurismas cerebrales tengan éxito en 98%, y de tumores del 90% de los casos. </p>
  <p>El procedimiento, es la introducción de un cateter por la vena femoral del individuo y, por medio de equipo especializado, llevarlo hasta el punto donde existe la lesión. <i>“La técnica tiene dos objetivos: uno, hacer el diagnóstico de enfermedades o realizar cirugías que resuelvan el problema”</i>.</p>
  </article>
  <Cards v-bind:services="services"/>
  <Info />
  </div>
</template>
<script>
import consulta from '../assets/consulta-médica.jpg';
import tx from '../assets/neurointervencionismo.jpg';
import urg from '../assets/infarto_cerebral.jpg';
import Cards from '@/components/Cards';
import Info from '@/components/Info';
export default {
  name: 'services',
  components:{
    Cards, 
    Info,
  },
  data() {
    return {
      services: [
        { 
          id: 'dx',
          title: 'Diagnóstico',
          img: consulta,
          resume: 'Se puede comprobar, de manera muy precisa, \
          que patología vascular en las arterias presenta el \
          paciente. “Pueden ser isquémicas, hemorrágica, \
          malformación de venas, tumores, efectos de la diabetes, \
          ateroesclerosis, infartos, embolias y coágulos."'
        },
        {
          id: 'tx',
          title: 'Neuro Intervencion',
          img: tx,
          resume: 'Los procedimientos de mínima invasión evitan la cirugía abierta, \
           por medio de un catéter para llegar al punto donde se encuentra las lesión;\
           estos procedimientos tienen un porcentaje de efectividad por arriba del 90% \
           y un periodo de hospitalización de tres días. '
        },
        {
          id: 'urg',
          title: 'Urgencias',
          img: urg,
          resume: ' El más usual es el rescate vascular: destapar \
          una arteria que estaba cerrada por un coágulo. \
          En este caso, el éxito de la operación depende de la edad,\
          cuánto tiempo lleva ocluida la vena, el tamaño, el lugar y \
          qué arterias han tomado su función, la esperanza es de 60%',
        }
      ]
    }
  }
}
</script>
<style scoped>

article{
  width: 60%;
  margin: auto;
}

article p{
  text-align: justify;
  color: #222;
  font-weight: 400;
  font-size: 1.2rem;
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
  margin: 3%;
  font-weight: 700; 
}

h2{
  font-size: 3em;
}

h3{
  text-align: justify;
  width: 60%;
  margin:2% auto;
}
 

</style>