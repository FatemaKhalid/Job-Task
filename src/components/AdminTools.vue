<template>
<div class="tools-con">
    <div class="tool-bar">
        <div class="left-tools">
            <button class="add-guide" v-on:click="addGuide"><font-awesome-icon class="add-icon" icon="plus"/>  |  Add Tour Guide</button>
        </div>
        <div class="right-tools">
        <button class="download-excel"><font-awesome-icon class="dl-icon" icon="download"/>  |  Download Excel Sheet</button>
        <button class="add-guide">All</button>
        <button class="filter"><font-awesome-icon class="fltr-icon" icon="filter"/>  |  Filter</button>
        </div>
        
    </div>
    <div class="guide-form">
        <input name="name"  type="name" class="input name" placeholder="Name" v-model="name" required/>      
        <input name="phoneNumber"  type="phoneNumber" class="input phoneNumber" placeholder="Contact Number" v-model="phoneNumber" required/>
        <input name="city"  type="text" class="input city" placeholder="City" v-model="city" required/>      
        <input name="nationalID"  type="text" class="input nationalID" placeholder="National ID" v-model="nationalID" required/>
        <button class="add-guide">Create</button>
        <button class="filter">Cancle</button>
    </div>
</div>
</template>
<script>
export default {
    name:'AdminTools',
    methods:{
        addGuide:function () {
            document.querySelector('.tools-con').classList.toggle('active')
            
        }
    },
    data() {
        return{
            langs:{
    "ar":{
        "name":"Arabic",
        "nativeName":"العربية"
    },
    "av":{
        "name":"Avaric",
        "nativeName":"авар мацӀ, магӀарул мацӀ"
    },
    "ae":{
        "name":"Avestan",
        "nativeName":"avesta"
    },
    "ay":{
        "name":"Aymara",
        "nativeName":"aymar aru"
    },
    "az":{
        "name":"Azerbaijani",
        "nativeName":"azərbaycan dili"
    },
    "bm":{
        "name":"Bambara",
        "nativeName":"bamanankan"
    },
    "ba":{
        "name":"Bashkir",
        "nativeName":"башҡорт теле"
    },
    "eu":{
        "name":"Basque",
        "nativeName":"euskara, euskera"
    },
    "be":{
        "name":"Belarusian",
        "nativeName":"Беларуская"
    },
    "bn":{
        "name":"Bengali",
        "nativeName":"বাংলা"
    },
    "my":{
        "name":"Burmese",
        "nativeName":"ဗမာစာ"
    },
    "cv":{
        "name":"Chuvash",
        "nativeName":"чӑваш чӗлхи"
    },
    "kw":{
        "name":"Cornish",
        "nativeName":"Kernewek"
    },
    "co":{
        "name":"Corsican",
        "nativeName":"corsu, lingua corsa"
    },
    }
        }
    }
}
</script>
<style scoped>
.tool-bar {
    padding: 0 20px;
    height: 5vh;
}
.left-tools, .right-tools {
    display: inline-block;
}
.left-tools {
    float: left;
}
.right-tools {
    float: right;
}
.add-guide {
    background-color: #0072AD;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 2px;
    padding: 10px 20px;
    border: 0;
    margin: 0 15px;
}
.tool-bar .download-excel{
    border:2px solid #0072AD;
    color: #0072AD;
    background-color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 20px;
    margin: 0 15px;
}

.filter {
    background-color: #fff;
    color: #ccc;
    font-size: 14px;
    font-weight: 500;
    border-radius: 2px;
    padding: 10px 20px;
    border: 2px solid #ccc;
    margin: 0 15px;

}
.guide-form {
    height: 20vh;
    margin-top: 2vh;
    display: none;
}
.active .guide-form {
    display: block;
}
</style>
