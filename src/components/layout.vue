<template>

<div>
<Navbar>

<slot></slot>

</Navbar>
<div :style="{marginBottom:'100px'}"></div>

</div>




    
</template>

<script>
import Navbar from "./ui/navbar"
export default{
    components:{
        Navbar
    }
}
</script>