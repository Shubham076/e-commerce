<template>
    <div>

    </div>
</template>

<script>
    export default {
        mounted(){
            this.$router.push("/")
            this.$store.dispatch('logout')
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>