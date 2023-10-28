<script setup>
    import myHeader from '../components/header.vue';
    import Sidebar from '../components/sidebar.vue';
    import mymain from '../components/main.vue';
    import myFooter from '../components/footer.vue';

</script>
<template>
    <div class="container">
        <div class="sidebar">
            <Sidebar/>
        </div>
        <div class="data">
            <myHeader/>
            <mymain/>
            <myFooter/>
        </div>
    </div>
</template>
<style scoped>
   
    .container{
        width: 100vw;
        height: 100vh;
        display: flex;
        /* background-color: green; */
    }
    .container .sidebar{
        width: 20%;
        /* background-color: aquamarine; */
    }
    .data{
        width: 80%;
    }
</style>