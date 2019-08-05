<template>
    <div class="sideBar">
        <span class="bar-content">
            <font-awesome-icon v-on:click="toggleSidebar" icon="bars" class="toggle-side-bar-btn" />
            <div class="iconImg"><img src="../assets/dashbarIcons/accomodation.png">
                <span class="menuItem" href="#">Accomodation</span>
            </div>
            <div class="iconImg"><img src="../assets/dashbarIcons/transportation.png"> 
            <span class="menuItem" href="#">Transportation</span>
            </div>
            <div class="iconImg"><img src="../assets/dashbarIcons/tour guide.png"> 
            <span class="menuItem" href="#">Tour Guides</span>
            </div>
            <div class="iconImg"><img src="../assets/dashbarIcons/hot-air-balloon.png"> 
            <span class="menuItem" href="#">Sightseeig</span>
            </div>
            <div class="iconImg"><img src="../assets/dashbarIcons/flights.png"> 
            <span class="menuItem" href="#">Flights</span>
            </div>
            <div class="iconImg"><img src="../assets/dashbarIcons/archive.png"> 
            <span class="menuItem" href="#">Archived</span>
            </div>
            <div class="iconImg"><img src="../assets/dashbarIcons/user-3.png"> 
            <span class="menuItem" href="#">Account</span>
            </div>
        </span>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    toggleSidebar: function(){
        document.querySelector('.sideBar').classList.toggle('active')
        
    }
  }
}
</script>
<style scoped>

.openNav {
	position: fixed;
	z-index: 10;
	left: 0;
	top: 10vh;
	background: #2196F3;
	border: none;
	width: 60px;
	color: #fff;
	height: 10vh;
	cursor: pointer;
	transition: 0.2s ease;
	font-size: 22px;
	padding: 0;
}


.sideBar {
    z-index:3;
    user-select: none;
    position:fixed;
    top:10vh;
    left:0px;
    width:5vw;
    height:90vh;
    box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 2px 2px;
    transition: width 0.2s;
    min-height:600px;
}

.sideBar .toggle-side-bar-btn {
    margin:10px 10px 15vh 0px;
    color: #0072AD;
    font-size: 24px
}

.bar-content .menuItem{
    display: none;
    font-size: 18px;
    font-weight: 500;
}

.bar-content .iconImg {
    margin-bottom: 15px;
}

.iconImg img{
    width: 30px;
    display: inline-block;
    margin: 5px 15px 0 5px ;
    
 }

.active {
    width: 15vw;
}

.active .bar-content{
    text-align: right;
    display: inline-block;
}
.active .iconImg{
    text-align: left;

}
.active .menuItem{
    display: inline-block;
}


</style>

