<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';
import 'primeicons/primeicons.css';
// const name = ref('click');
// const handlClick = ()=>{
//     name.value = "Hello Kon Pa Pa";
// }
// const newChange = () =>{
//     var icon = document.getElementById('icon');
//     icon.classList.toggle('pi-spinner');
//     icon.classList.toggle('pi-cog');
// }

const random = () =>{
    let x = Math.floor((Math.random() * 100) + 1);
    
    var no = document.querySelector('.no');
    no.style.left = x+'px';
    no.style.top  = x+'px';
}


</script>
<template>
<div class="main">
    <!-- <Button  :label="name" @click="handlClick" icon="pi pi-check"  />
    
    <Button @click="newChange" id="hello">
        <i class="pi pi-spin pi-spinner" id="icon"></i>
    </Button> -->

    <div class="flex">
        <div>Hello</div>
        
        <div>I Love you</div>
    </div>



   <div class="data">
        <h1>Do You Love Me ?</h1>
        <Button class="yes">Yes</Button>
        <Button class="no" @mouseover="random">No</Button>
   </div>
   

</div>
</template>
<style scoped>
    .main{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-content: center;
        /* background-color: aqua; */
    }
    :deep(.p-button){
        background-color: red;
    }
    .data{
        position: relative;
    }
    .yes,.no{
        padding: 10px !important;
        margin: 20px 50px !important;
    }
    .no{
        position: absolute;

    }
    .data{
        width: 100%;
        text-align: center;
    }
    #icon{
        font-size: 2em;
    }
</style>