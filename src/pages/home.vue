<template>
<div id="container">
    <mdb-container fluid>
        <mdb-row>
            <mdb-col  sm="3">
            <div class="sidebar">
                <router-link :to="{name:'Home', query:{ category:category}}" v-for="category in categories" @click.native="()=>clicked(category)"  :class="{visit:active === category}" class="sidebar__items" :key="category">
        
                    <a class="sidebar__btn" 
                    :class="{Active:active === category}">
                    {{category}}</a>
                </router-link>

            </div>
            </mdb-col>
            <mdb-col  sm="9">
                
                <CarouselPage></CarouselPage>
                
                <Spinner v-if='loadingProducts'></Spinner>
                <div v-else class="product__container">
        
                    <div class="product__item"  v-for="product of !filtering?getProducts:filteredProducts" :key ="product.productId">
                        <Product :product =product></Product>
                    </div>
                </div>
                   
                


                
            </mdb-col>

        </mdb-row>

    </mdb-container>
    

</div>
    
</template>

<script>
import CarouselPage from "../components/ui/slider"
import {mdbContainer , mdbRow ,mdbCol} from "mdbvue"
import {mapGetters} from "vuex"
import Product from "../components/product"
import Spinner from "../components/ui/spinner"
export default {

    components:{
        CarouselPage,
        mdbContainer,
        mdbRow,
        mdbCol,
        Product,
        Spinner

    },

    created(){
        this.$store.dispatch('getproducts')
        

    },

    computed:{
        ...mapGetters([
            'getProducts',
            'filteredProducts',
            'loadingProducts',
            
        ])

    
    },

    data(){
        return{
            active:'All Categories',
            categories:['All Categories' , 'Men Fashion' , 'Electronics' ,'Grocery', 'Fruits' , 'Books'],
            filtering:false
        }
    },
    methods:{
        clicked(value){
            this.active = value
            let category = this.$route.query.category;
            if(category === 'All Categories'){
                this.filtering = false
            }

            else{
                this.$store.dispatch('getFilteredProducts',category)
                this.filtering = true
            }
                
        }
    }
}
</script>

<style lang="scss">

#container{
    margin-top:20px;
}

.product__container{
    margin-top: 50px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns:repeat(auto-fit , 250px);
    grid-column-gap: 30px;
    grid-row-gap:30px;
}


.sidebar{

display: flex;
flex-direction: column;
position: fixed;
width:22%;


&__btn{
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 600;




}

&__items{
    padding:15px;
    padding-left: 20px;
    border: none;
    outline: none;
    color:#333;

}
}

.visit{
    background-color: #30f000;
}

.Active{
    color: #fff !important;
}

@media screen and (max-width: 600px) {

    .product__container{
    justify-content: center;

    }
    
}

@media screen and (max-width: 600px){
     .sidebar{
        position: relative;
        width: 100%;
    }
}

@media screen and (max-width: 440px) {

    .product__container{
    grid-template-columns:repeat(auto-fit , 300px);
    grid-column-gap: 25px;
    
    


    }
}


</style>