<template>
<div class="tour-guides">
    <AdminTools/>
    <GuidesTable/>
</div>
</template>
<script>
import GuidesTable from './GuidesTable'
import AdminTools from './AdminTools'
export default {
    name:'TourGuides',
    components:{
        GuidesTable,
        AdminTools,
    }, methods:{

    }
}
</script>
<style scoped>
.tour-guides {
    width: 70vw;
    float: right;
}
</style>
