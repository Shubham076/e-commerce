<template>
    <div v-if="show" class="item">
        <div class="item__header">
            <img class="item__image" :src="item.imgUrl" alt="">
            <div class="item__name">{{item.name}}</div>
        </div>
        <div class="btns">
              <button class="add" @click="()=>increase(item)">
                <svg class="icon"  viewBox="0 0 24 24">
                    <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
                </svg>
            </button>
            <h6 class="count">{{itemCount}}</h6>
            <button class="remove" @click="()=>decrease(item)">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                </svg>
            </button>

        </div>
        <div class="item__price">
             <svg class="icon" viewBox="0 0 24 24">
                <path d="M11.813 10.922q1.031 0.281 1.711 0.563t1.43 0.773 1.148 1.242 0.398 1.781q0 1.453-0.961 2.367t-2.555 1.195v2.156h-3v-2.156q-1.547-0.328-2.555-1.313t-1.102-2.531h2.203q0.188 2.109 2.953 2.109 1.453 0 2.086-0.539t0.633-1.242q0-1.688-3-2.438-4.688-1.078-4.688-4.125 0-1.359 0.984-2.32t2.484-1.289v-2.156h3v2.203q1.547 0.375 2.367 1.406t0.867 2.391h-2.203q-0.094-2.109-2.531-2.109-1.219 0-1.945 0.516t-0.727 1.359q0 1.359 3 2.156z"></path>
            </svg>
            {{price}}
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex"
    export default {

        props:{
            item:Object
        },

        data(){
            return{
                itemCount:this.item.count,
                show:true
            }
        },

        computed:{
            ...mapGetters([
                'cart'
            ]),

            price(){
                return this.item.price * this.item.count
            }

        },
         

         methods:{
             increase(product){
                this.$store.dispatch('addInCart',product)
                this.productCount(product.productId)
                this.price

            },

            decrease(product){
                this.$store.dispatch('removeFromCart',product)
                this.productCount(product.productId)
                this.price

            },
            productCount(id){
                let product = this.cart.find(p=>p.productId === id)
                this.itemCount = product ?product.count:0

                if(this.itemCount == 0){
                    this.show = false

                }
                

            }
         }
        
    }
</script>

<style lang="scss" scoped>

.item{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-top: 10px;

    &__price{
        justify-self: center;
        color:#757575;
    }

    &__image{
        height: 80px;
        width:80px;
        object-fit: cover;
        margin-left: 10px;

    }

    &__header{
        display: grid;
        grid-column-gap: 15px;
        grid-template-columns: minmax(min-content,40%) minmax(min-content,60%);
    }

    &__name{
        font-weight: bold;
        font-size:14px;
    }


}

.icon{
    height:20px;
    font-weight: bold;
    fill:#757575;
  
}

.btns{
    border:1px solid #757575;
    border-radius: 40px;
    justify-self: center;
    width:50%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    padding:6px;    
}

.add{
    border: none;
    background-color: #fff;
    outline: none;
    width:20px;
   
}

.remove{
    border: none;
    outline: none;
    background-color: #fff;
    width:20px;


   
}

@media screen and(max-width: 600px) {

    .btns{
        width: 70%;
        height: 70%;
    }

    .icon{
        font-size: 13px;
    }

    .item{
        grid-column-gap: 5px;

        &__price{
            font-size: 13px;
        }

        &__image{
            height: 60px;
            width:60px;
        }
    }
   

  
    
}



</style>