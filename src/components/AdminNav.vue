<template>
<nav class="navbar">
    <ul class="navbar-nav">
      <li><a href="#">Accomodation</a></li>
      <li><a href="#">Transportation</a></li>
      <li><a href="#">Tour Guides</a></li>
      <li><a href="#">Sightseeig</a></li>
      <li><a href="#">Flights</a></li>
      <li><a href="#">Archived</a></li>


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
  border-bottom: 1px solid #dfe9ec;
  transition: all ease 0.4s;
}

.navbar-nav {
  padding-left: 1vw;
}
.navbar-nav li {
  display: inline-block;
  width: 10vw;
}

.navbar .navbar-nav li a{
  font-size: 16px;
  color: #000;
  text-decoration: none;
}

/* Animation */
.animate{
  padding: 0px 10px 0px 0px;
  transition: all ease 0.4s;
}


</style>
