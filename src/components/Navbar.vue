<template>
        <nav class="navbar">
            <div class="tab logo">LOGO</div>
            <a class="chosen tab" href="#">Production Employee</a>
            <a class="tab close" href="#">Ahmed Yasser<br/><span>Operation</span></a>
            <a class="tab close" href="#">Mohamed Yasser<br/><span>Manager</span></a>
            <div class="options">
                <span>Agency Admin</span>
                <span><img class="bar-img" src="../assets/dashbarIcons/user-3.png"> </span>
                <span><img class="bar-img" src="../assets/dashbarIcons/arrow-up.png"> </span>
            </div>
        </nav>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>
<style scoped>
.navbar {
	position: fixed;
	right: 0;
	top: 0;
	width: 100vw;
    padding: 0 2vw;
	background: #fff;
	height: 10%;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	z-index: 10;
    border-bottom: 1px solid #dfe9ec;
}
.navbar .tab {
    display: block;
    color: #444;
    margin: 2vh 1vw;
    margin-bottom: 0;
    padding: 10px 30px;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 12px;
    height: 80%;
    float: right;
    background-color: #dfe9ec;
    border-radius: 5px;
}
.close {
    display: inline-block;
}
.close:after {
    content: "\f00d";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    display: inline-block;
    margin:  4px;
}
.tab span {
    font-size: 8px;
    font-weight: lighter;
}
.navbar .chosen {
    background-color: #fff;
    border: 1px solid #dfe9ec;
    border-bottom: 4px solid #fff;
    padding-top: 20px;

}
.navbar .logo{
    width: 20%;
    text-align: left;
    color: #0072AD;
    background-color: #fff;
    border-bottom: 0;
    padding-left: 15px;
    font-weight: 900;
    font-size: 1.5rem;

}
.options {
    width: 35%;
    float: right;
    text-align: right;
}
.options .bar-img{
    width: 1em;
    margin:  10px;
}

</style>

