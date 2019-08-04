<template>
<nav class="navbar">
    <ul class="navbar-nav">
      <li><a href="#">Accomodation</a></li>
      <li><a href="#">Transportation</a></li>
      <li class="chose"><a href="#">Tour Guides</a></li>
      <li><a href="#">Sightseeig</a></li>
      <li ><a href="#">Flights</a></li>
      <li><a href="#">Archived  <font-awesome-icon v-on:click="toggleSidebar" icon="angle-down"/></a></li>


    </ul>
</nav>
</template>
<script>
export default {
    name:'AdminNav',
}
</script>
<style scoped>

.navbar{
  width: 70vw;
  float: right;
  text-align: left;
  background-color: #fff;
  transition: all ease 0.4s;
}

.navbar-nav {
  padding-left: 1vw;
}
.navbar-nav li {
  padding: 2vh 1vw;
  border-bottom: 1px solid #dfe9ec;
  display: inline-block;
  width: 8vw;
}

.navbar-nav li a{
  font-size: 16px;
  color: #000;
  text-decoration: none;
}

.navbar-nav .chose {
  border-bottom: 2px solid #0072AD;
  font-weight: bold;
}


</style>
