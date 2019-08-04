<template>
<div class="admin-board">
  <AdminNav/>
</div>
</template>
<script>
import AdminNav from './AdminNav'
export default {
    name:'AdminBoard',
    components:{
      AdminNav,
    }
}
</script>
<style scoped>
.admin-board {
  margin-right: 10vw;
  margin-top: 15vh;
}
</style>
