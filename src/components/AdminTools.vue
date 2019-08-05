<template>
    <div class="tool-bar">
        <div class="left-tools">
        <button class="add-guide"><font-awesome-icon class="add-icon" icon="plus"/>  |  Add Tour Guide</button>
        <div class="guide-form"></div>
        </div>
        <div class="right-tools">
        <button class="download-excel"><font-awesome-icon class="dl-icon" icon="download"/>  |  Download Excel Sheet</button>
        <button class="add-guide">All</button>
        <button class="filter"><font-awesome-icon class="fltr-icon" icon="filter"/>  |  Filter</button>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'AdminTools',
    components:{
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
.tool-bar .add-guide {
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

.tool-bar .filter {
    background-color: #fff;
    color: #ccc;
    font-size: 14px;
    font-weight: 500;
    border-radius: 2px;
    padding: 10px 20px;
    border: 2px solid #ccc;
    margin: 0 15px;

}
</style>
