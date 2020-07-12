<template>
    <div class="orders">
        <div class="orderItem" v-for="order of getOrders" :key="order.orderId">
            <p>
                <span class="header">Order Id:</span>
                {{order.orderId}}
            </p>

            <div class="address">
                <span class="header">Shipping to:</span>
                {{order.shippingDetails.address}}
            </div>

            <div class="orderSummary">
                <p>
                    <span class="header">Order Summary :-</span>
                </p>

                <li v-for="item in order.orderSummary" :key="Object.keys(item)[0]">
                    {{item[Object.keys(item)[0]].count}}-
                    {{Object.keys(item)[0]}}
                </li>
            </div>

            <div class="price">
                <span class="header">
                    Price to be Paid at the time of delivery:
                </span>
                <svg class="icon icon__dollar" viewBox="0 0 24 24">
                    <path d="M11.813 10.922q1.031 0.281 1.711 0.563t1.43 0.773 1.148 1.242 0.398 1.781q0 1.453-0.961 2.367t-2.555 1.195v2.156h-3v-2.156q-1.547-0.328-2.555-1.313t-1.102-2.531h2.203q0.188 2.109 2.953 2.109 1.453 0 2.086-0.539t0.633-1.242q0-1.688-3-2.438-4.688-1.078-4.688-4.125 0-1.359 0.984-2.32t2.484-1.289v-2.156h3v2.203q1.547 0.375 2.367 1.406t0.867 2.391h-2.203q-0.094-2.109-2.531-2.109-1.219 0-1.945 0.516t-0.727 1.359q0 1.359 3 2.156z"></path>350
                </svg>
                {{order.TotalPrice}}
            </div>

        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {

    created(){
        this.$store.dispatch('getOrders')

    },

    computed:{

        ...mapGetters([
            'getOrders'

        ])

    }
    
}
</script>

<style lang="scss" scoped>

.orders{
    display: grid;
    grid-row-gap: 30px;
    width: 70vw;
    margin:50px auto

}

.orderItem{
    display: grid;
    border:2px solid #eee;
    box-shadow: 2px 6px 6px #ccc;
    padding:10px;
    grid-row-gap: 10px;
}

div,p{
    margin: 0;
    padding: 0;
    color:#3F729B;
    font-size: 15px;
}

li{
    list-style: none;
}

.icon{
    height: 25px;
    fill:#616161;
}

.header{
    color:#4B515D;
    font-size: 20px;
}



</style>