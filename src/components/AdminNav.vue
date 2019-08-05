<template>
<nav class="navigation">
    <ul class="navList">
      <li><a href="#">Accomodation</a></li>
      <li><a href="#">Transportation</a></li>
      <li class="chose"><a href="#">Tour Guides</a></li>
      <li><a href="#">Sightseeig</a></li>
      <li ><a href="#">Flights</a></li>
      <li><a href="#">Archived  <font-awesome-icon icon="angle-down"/></a></li>


    </ul>
</nav>
</template>
<script>
export default {
    name:'AdminNav',
}
</script>
<style scoped>

.navigation{
  width: 70vw;
  float: right;
  text-align: left;
  background-color: #fff;
  transition: all ease 0.4s;
}

.navList {
  padding-left: 1vw;
}
.navList li {
  padding: 2vh 1vw;
  border-bottom: 1px solid #dfe9ec;
  display: inline-block;
  width:10vw;
}

.navList li a{
  font-size: 16px;
  color: #000;
  text-decoration: none;
}

.navList .chose {
  border-bottom: 2px solid #0072AD;
  font-weight: bold;
}


</style>
