<template>
    <div class="dashboard">
        <Navbar/>
        <DboardContent/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import DboardContent from '../components/DboardContent'
export default {
    name: 'Dashboard',
    components: {
        Navbar,
        DboardContent
    }
}
</script>
<style>
body{
    background-color: rgb(255, 255, 255);
}
</style>

