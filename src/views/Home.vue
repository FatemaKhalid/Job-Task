<template>
    <div class="home">
        <LoginCard/>
    </div>
</template>

<script>
import LoginCard from '../components/LoginCard'
export default {
    name: 'Home',
    components: {
        LoginCard,
    }
}
</script>
<style>
body{
    background-color: rgb(249, 250, 246);
}
</style>

