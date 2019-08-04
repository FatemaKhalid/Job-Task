<template>
<div>
    <Sidebar/>
    <AdminBoard/>
</div>
</template>
<script>
import Sidebar from './Sidebar'
import AdminBoard from './AdminBoard'
export default {
    name:'DboardContent',
    components:{
    Sidebar,
    AdminBoard
    }
}
</script>
