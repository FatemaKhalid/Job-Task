<template>
<div class="admin-board">
  <AdminNav/>
  <TourGuides/>
</div>
</template>
<script>
import AdminNav from './AdminNav'
import TourGuides from './TourGuides'
export default {
    name:'AdminBoard',
    components:{
      AdminNav,
      TourGuides
    }
}
</script>
<style scoped>
.admin-board {
  margin-right: 10vw;
  margin-left: 15vw;
  margin-top: 15vh;
}
</style>
