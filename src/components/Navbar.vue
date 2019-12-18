<template>
  <div>
    <ul>
      <li>
        <router-link to="/" exact>
         HOME
        </router-link>
      </li>
      <li>
        <router-link to="/services" exact>
         SERVICIOS
        </router-link>
      </li>
      <li>
        <router-link to="/about" exact>
        ABOUT
        </router-link>
      </li>
      <li>
        <router-link to="/news" exact>
          NEWS
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
         CONTACT
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
}
</script>
<style scoped>
ul {
  margin: auto;
  padding: 0;
  text-decoration: none;
  display: flex;
}
h1 {
  margin: 0;
}
li {
  list-style: none;
  text-decoration: none;
   margin: 2%;
}

li a{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 4px;
  padding: 12px;
  color: #222;
 font-size: 1; 
 text-decoration: none;
}

li a:hover{
  background-color: #ca2017;
  padding: 12px;
  color: #FFFF;
}

.router-link-active{
  background-color: #ca2017;
  padding: 12px;
  color: #FFFF;
}


</style>