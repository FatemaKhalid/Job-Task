<template>
<div class="login">
   <form name="login-form" class="login-form" action="#" @submit.prevent="login" method="post">
	
		<div class="header">
		<h1>LOG IN</h1>
		</div>
		<div class="content">
      <input name="email"  type="email" class="input email" placeholder="Email" v-model="email" required/>      
      <input name="password" type="password" class="input password" placeholder="Password" v-model="password" required/>
      <div class="checks">
        <input type="checkbox" class="remeberMe">
        <label class="remeberMe">Remember me</label>
        <a class="forgetPass">Forgot Password?</a>
      </div>
		</div>

		<div class="footer">
		<button type="submit" class="button">Login</button>
		</div>
	
	</form>
</div>

</template>

<script>
// import BootstrapVue from 'bootstrap-vue'
export default {
  name: 'LoginCard',
  data() {
    return{
      email:'',
      password:'',
    }
  },
  methods: {
    login(){
		this.$store.dispatch('loginUser', {email:this.email,password:this.password})
    }
  }
}
</script>

<style scoped>

* {
	margin: 0;
	padding: 0;
	border: none;
	outline: none;
}

/*******************
LOGIN FORM
*******************/
.login {
	width: 25%;
  height: 70%;
	margin: 0 auto;
}
.login-form {
  height: 100%;
	position: relative;
	
	background: #fff;
	border: 1px solid rgb(175, 175, 177);
	border-radius: 5px;
}

/*******************
HEADER
*******************/

.login-form .header {
  height: 10%;
  padding: 20%;
}

.login-form .header h1 {
	font-weight: 800;
	font-size: 2em;
	line-height:2.25em;
	color: #414848;
}

/*******************
CONTENT
*******************/

.login-form .content {
	padding: 0 30px 25px 30px;
}

/* Input field */
.login-form .content .input {
	padding: 11px 4px;
  width: 95%;
	font-weight: 400;
	font-size: 14px;
	color: #000;
	
	background: #fff;
	border: 1px solid rgb(175, 175, 177);
	border-radius: 5px;
	
}

/* Second input field */
.login-form .content .password{
	margin-top: 25px;
}

.login-form .content .input:hover {
	background: #dfe9ec;
}

.login-form .content .input:focus {
	background: #dfe9ec;
	border-color: #3f9db8;
	box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
	-moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
	-webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
}


/* Animation */
.input, .button {
	transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	-ms-transition: all 0.5s ease;
}

/*******************
CHECKS
*******************/

.checks {
  height: 10%;
	margin-top: 15px;
  font-size: 12px;
  color: #3f9db8;
}

.checks .remeberMe {
  float: left;
  padding-left: .2em;
}

.checks .forgetPass {
  text-decoration: underline;
  float: right;
  cursor: pointer;
}
/*******************
FOOTER
*******************/

.login-form .footer {
	/* padding: 25px 30px 40px 30px; */
	overflow: auto;
	width: 100%;
}

/* Login button */
.login-form .footer .button {
	padding: 11px 0px;
  display: block;
	width: 80%;
  margin: 10% auto;

	font-size: 18px;
	color: #fff;
	
	background: #0072AD;
	border-radius: 5px;
	cursor: pointer;
  text-decoration: none;

}

.login-form .footer .button:hover {
	background: #3f9db8;
}

</style>