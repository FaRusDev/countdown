<template>
    <div id="tes">
        <p>this is from tes </p>
        <HelloWorld msg="this is from tes component hello world"/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name:"tes",
    components:{
        HelloWorld,    
    }
}

</script>

<style scoped>


</style>