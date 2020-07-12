<template>
<div class="cart">
     <h2 class="cart__title">Shopping Cart</h2>
    <p class="cart__count"><strong>You have {{cartLength}} items in shopping cart</strong></p>
    <div class="cart__items">

        <p v-if="cartLength == 0">Add items to the cart</p>

        
        <CartItem v-for = "item in cart" :key="item.productId" :item="item"></CartItem>
        

        <div class="footer" v-if="cartLength >0">
            <div>
            <button @click="clear" class="clear">Clear Cart</button>
            <router-link to="/checkout">
                <button  class="checkout">Checkout</button>
            </router-link>


            </div>
             <div class="totalPrice">
               Total Price:<svg class="icon" viewBox="0 0 24 24">
                <path d="M11.813 10.922q1.031 0.281 1.711 0.563t1.43 0.773 1.148 1.242 0.398 1.781q0 1.453-0.961 2.367t-2.555 1.195v2.156h-3v-2.156q-1.547-0.328-2.555-1.313t-1.102-2.531h2.203q0.188 2.109 2.953 2.109 1.453 0 2.086-0.539t0.633-1.242q0-1.688-3-2.438-4.688-1.078-4.688-4.125 0-1.359 0.984-2.32t2.484-1.289v-2.156h3v2.203q1.547 0.375 2.367 1.406t0.867 2.391h-2.203q-0.094-2.109-2.531-2.109-1.219 0-1.945 0.516t-0.727 1.359q0 1.359 3 2.156z"></path>
            </svg>{{price}}
        </div>
        </div>

       

    </div>

</div>
   
</template>

<script>
import {mapGetters} from "vuex"
import CartItem from "../components/cartItem"
export default {

    computed:{
        ...mapGetters([
            'cart',
            'cartLength',
            'user',
            'price'
        ])
    },
    components:{
        CartItem

    },
    methods:{

        clear(){
        this.$store.dispatch('clearCart')

        
        setTimeout(()=>{

            if(this.cartLength === 0){
            this.cartItems = []
        }

        },500)
      

      
}

    },

    data(){
        return{
            cartItems:null

        }
    }

   
}
</script>

<style lang="scss" scoped>

.cart{
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    margin: 100px auto 100px auto;
}

.cart__items{
    display: grid;
    margin-top: 20px;
    grid-row-gap: 20px;
}

.cart__count{
    color:#757575;
}

.cart__title{
    font-size: 60px;
    font-weight: 500;
    margin-left: -30px;

}


.header{
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    padding: 5px;
}

.icon{
    height:27px;
    fill:#757575;
}

.footer{
    display: flex;
    justify-content: space-between;

}

.clear{
    padding:10px;
    font-size: 18px;
    border-radius: 10px;
    color:#fff;
    background-color: #f44336;
    margin: 10px;
    border:none;
    width:120px;
    outline:none;
}

.checkout{
    width:100px;
    padding:10px;
    font-size: 18px;
    color:#fff;
    border-radius: 10px;
    background-color: #FF8800;
    margin: 10px;
    border:none;
    outline:none;

}


.totalPrice{

    font-size: 20px;
    display: flex;
}

@media screen and(max-width: 550px){

    .cart{
    margin: 100px 0 100px 0;
    max-width: 100vw;


    }

   

    .cart__title{
        font-size: 40px;
        margin-left: 10px;

    }

    .cart__count{
        margin-left: 10px;
    

    }

    .header{
        font-size: 15px;
    }

    .icon{
        font-size: 15px;
    }
    
    .totalPrice{

    font-size: 15px;
    margin-right:30px;
}


}



</style>