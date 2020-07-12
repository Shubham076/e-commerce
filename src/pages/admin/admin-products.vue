<template>
    <Table   :Products = 'getAdminProducts'></Table>
</template>

<script>
import Table from "../../components/products/adminproducts"
import {mapGetters} from "vuex"
export default {

    components:{
        Table
    },
    computed:{
        ...mapGetters([
            'getAdminProducts'
        ])
    },
    created(){
        this.$store.dispatch('getAdminProducts')

    }

    
    
}
</script>