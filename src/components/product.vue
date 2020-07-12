<template>
    <div class="card">
        <Modal :modal="modal" :hideModal="hidemodal">
            <div>
                <h6 style="{margin:'20px'}">Please login first to add item to the cart</h6>
                <router-link tag="a" class="btn__login" to="/login">Login</router-link>
            </div>
        </Modal>

        <img class="card__image" :src="product.imgUrl" alt="">
        <h6 class="card__title"><strong>{{product.name}}</strong></h6>
        <p class="card__price">
            <svg class="icon icon__money" viewBox="0 0 24 24">
                <path d="M11.813 10.922q1.031 0.281 1.711 0.563t1.43 0.773 1.148 1.242 0.398 1.781q0 1.453-0.961 2.367t-2.555 1.195v2.156h-3v-2.156q-1.547-0.328-2.555-1.313t-1.102-2.531h2.203q0.188 2.109 2.953 2.109 1.453 0 2.086-0.539t0.633-1.242q0-1.688-3-2.438-4.688-1.078-4.688-4.125 0-1.359 0.984-2.32t2.484-1.289v-2.156h3v2.203q1.547 0.375 2.367 1.406t0.867 2.391h-2.203q-0.094-2.109-2.531-2.109-1.219 0-1.945 0.516t-0.727 1.359q0 1.359 3 2.156z"></path>
            </svg>{{product.price}}
        </p>
        
        <p class="card__quantity">{{product.quantity}} left in stock</p>

        <button class="card__button" v-if="!clicked" @click="()=>add(product)">
            <svg class="icon icon__cart" viewBox="0 0 24 24">
                <path d="M17.016 18q0.797 0 1.383 0.609t0.586 1.406-0.586 1.383-1.383 0.586-1.406-0.586-0.609-1.383 0.609-1.406 1.406-0.609zM0.984 2.016h3.281l0.938 1.969h14.813q0.422 0 0.703 0.305t0.281 0.727q0 0.047-0.141 0.469l-3.563 6.469q-0.563 1.031-1.734 1.031h-7.453l-0.891 1.641-0.047 0.141q0 0.234 0.234 0.234h11.578v2.016h-12q-0.797 0-1.383-0.609t-0.586-1.406q0-0.469 0.234-0.938l1.359-2.484-3.609-7.594h-2.016v-1.969zM6.984 18q0.797 0 1.406 0.609t0.609 1.406-0.609 1.383-1.406 0.586-1.383-0.586-0.586-1.383 0.586-1.406 1.383-0.609z"></path>
            </svg>
            Add to cart
        </button>

        <div class="card__btns" v-else>
            <button class="add" @click="()=>increase(product)">
                <svg class="icon icon__add"  viewBox="0 0 24 24">
                    <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
                </svg>
            </button>
            <h6 class="count">{{itemCount}} in cart</h6>
            <button class="remove" @click="()=>decrease(product)">
                <svg class="icon icon__minus" viewBox="0 0 24 24">
                    <path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                </svg>
            </button>
        </div>


    </div>
</template>

<script>
import Modal from "./ui/modal"
import {mapGetters} from "vuex"
    export default {
        props:{
            product:Object
        },

        data(){
            return{
                modal:false,
                clicked:false,
                itemCount:0
            }
        },

        mounted(){
            let id = this.product.productId
            let item = this.cart ? this.cart.find(p=>p.productId === id) :null
            let count = item ? item.count :0

            if(count>0 && this.authenticated){
                this.clicked = true
                this.itemCount = count
            }

        },

        computed:{
            ...mapGetters([
                'authenticated',
                'cart',
                'user',
            ])
        },

        methods:{
            hidemodal(){
                this.modal = false
            },

            add(product){

                if(!this.authenticated){
                    this.modal = true
                }
                else{
                    this.clicked = true;
                    this.$store.dispatch('addInCart',product)
                    this.productCount(product.productId)
                    
                    
                }

            },

            increase(product){
                this.$store.dispatch('addInCart',product)
                this.productCount(product.productId)
                

            },

            decrease(product){
                this.$store.dispatch('removeFromCart',product)
                this.productCount(product.productId)
                if(this.itemCount == 0){
                    this.clicked = false
                }

            },

            productCount(id){
                setTimeout(()=>{
                    let item = this.cart.find(p=>p.productId === id)
                    this.itemCount = item ? item.count:0

                },700)
                 
                
            }
        },

        components:{
            Modal
        }
        
    }
</script>

<style lang="scss" scoped>

.card{
    display: flex;
    height: 350px;
    flex-direction: column;
    padding:5px;
    border-radius: 8px;
    position: relative;
    border:1px solid #ccc;
    box-shadow: 4px 2px 5px #ccc;


    &__image{
        position:relative;
        left:10%;
        width:70%;
        height: 50%;
    }

    &__title{
        margin-top: 10px;
    }
    &__price{
        margin: 0;

    }

    &__quantity{
        margin: 0;
        margin-bottom:10px;
        font-size: 12px;
        color: #37474F;
    }

    &__button{
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 8px;
        align-self:center;
        position: absolute;
        top:87%;
        font-size: 18px;
        font-weight: 400;
        width: 100%;
        background-color: #30f000;
        color: #fff;
        transition: all 0.2s ease-in;


        &:hover{
            transform: scale(1.06);
        }
    }
}
.icon{
    height: 18px;

    &__cart,&__minus,&__add{
        fill:#fff;
    }
}

.btn__login{
    padding:10px;
    color:#fff;
    background-color: #30f000;
    margin-top:20px;
    width:100px;
    display: inline-block;
    text-align: center;  
}

.card__btns{

    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 2px;
    position: absolute;
    top:90%;
    left:0%;
    width: 100%;

}

.add{
    justify-self: flex-start;
    background-color: #30f000;
    color:#fff;
    border-radius: 8px;
    border: none;
    outline: none;
    padding:5px;
    width:50px;
}

.remove{
    justify-self: flex-end;
    background-color: #30f000;
    color: #fff;
    border-radius: 8px;
    border: none;
    outline: none;
    padding:5px;
    width:50px;
}

.count{
    align-self: center;
}

@media screen and (max-width: 440px) {

    .card{
    height: 380px;
    
    


    }
    
}




</style>