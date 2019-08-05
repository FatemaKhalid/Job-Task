<template>
<div class="tour-guides">
    <div class="toolbar">
        <!-- <b-button size="lg">Large Button</b-button> -->

    </div>
    <GuidesTable/>
</div>
</template>
<script>
import GuidesTable from './GuidesTable'
export default {
    name:'TourGuides',
    components:{
        GuidesTable
    }, methods:{

    }
}
</script>
<style scoped>

</style>
