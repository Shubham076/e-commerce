<template>
<mdb-container id="checkout" fluid>
  <mdb-row>
    <mdb-col md="5">
       <div class="order__summary">
            <div class="header">
              <svg class="icon__store" viewBox="0 0 24 24">
                <path d="M11 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM22 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM7.221 7h14.57l-1.371 7.191c-0.046 0.228-0.166 0.425-0.332 0.568-0.18 0.156-0.413 0.246-0.688 0.241h-9.734c-0.232 0.003-0.451-0.071-0.626-0.203-0.19-0.143-0.329-0.351-0.379-0.603zM1 2h3.18l0.848 4.239c0.108 0.437 0.502 0.761 0.972 0.761h1.221l-0.4-2h-0.821c-0.552 0-1 0.448-1 1 0 0.053 0.004 0.105 0.012 0.155 0.004 0.028 0.010 0.057 0.017 0.084l1.671 8.347c0.149 0.751 0.57 1.383 1.14 1.811 0.521 0.392 1.17 0.613 1.854 0.603h9.706c0.748 0.015 1.455-0.261 1.995-0.727 0.494-0.426 0.848-1.013 0.985-1.683l1.602-8.402c0.103-0.543-0.252-1.066-0.795-1.17-0.065-0.013-0.13-0.019-0.187-0.018h-16.18l-0.84-4.196c-0.094-0.462-0.497-0.804-0.98-0.804h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
              </svg>
              <p class="cartLength">You have {{cartLength}} {{cartLength ==1 ?'item':'items'}} in the cart</p> 
            </div>

            <div class="item" v-for="item of cart" :key="item.productId">
              <div class="name">{{item.count}}
                <svg class="icon__clear" viewBox="0 0 24 24">
                  <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                </svg>
                {{item.name}}
              </div>
              <div class="price">
                <svg class="icon__dollar" viewBox="0 0 24 24">
                  <path d="M11.813 10.922q1.031 0.281 1.711 0.563t1.43 0.773 1.148 1.242 0.398 1.781q0 1.453-0.961 2.367t-2.555 1.195v2.156h-3v-2.156q-1.547-0.328-2.555-1.313t-1.102-2.531h2.203q0.188 2.109 2.953 2.109 1.453 0 2.086-0.539t0.633-1.242q0-1.688-3-2.438-4.688-1.078-4.688-4.125 0-1.359 0.984-2.32t2.484-1.289v-2.156h3v2.203q1.547 0.375 2.367 1.406t0.867 2.391h-2.203q-0.094-2.109-2.531-2.109-1.219 0-1.945 0.516t-0.727 1.359q0 1.359 3 2.156z"></path>350
                </svg>
                {{item.price * item.count}}
              </div>
            </div>
          
            <div class="footer">
              <router-link tag="button" to="/cart" class="footer__btn">Back To Cart</router-link>
              <div>

                Total Price:
              <svg class="icon__dollar" viewBox="0 0 24 24">
                <path d="M11.813 10.922q1.031 0.281 1.711 0.563t1.43 0.773 1.148 1.242 0.398 1.781q0 1.453-0.961 2.367t-2.555 1.195v2.156h-3v-2.156q-1.547-0.328-2.555-1.313t-1.102-2.531h2.203q0.188 2.109 2.953 2.109 1.453 0 2.086-0.539t0.633-1.242q0-1.688-3-2.438-4.688-1.078-4.688-4.125 0-1.359 0.984-2.32t2.484-1.289v-2.156h3v2.203q1.547 0.375 2.367 1.406t0.867 2.391h-2.203q-0.094-2.109-2.531-2.109-1.219 0-1.945 0.516t-0.727 1.359q0 1.359 3 2.156z"></path>350
              </svg>
              {{price}}
                
              </div>
              


            </div>
        </div>
      
    </mdb-col>


    <mdb-col  md="7">
      <div id="form">
        <div class="text-center">
              <h3 class="dark-grey-text">Shipping Form</h3>
            </div>
            <div>
              <mdb-input label="Name"  v-model ="Name" type="text"/>
          <mdb-input label="Address" type="text"   v-model="Address" containerClass="mb-0"/>
          <mdb-input label="Pincode" type="number"  v-model="pincode" containerClass="mb-0"/>
          <mdb-input label="Contact No" type="number"  v-model="contactNo" containerClass="mb-0"/>
          <mdb-btn   @click="order" color="success" id="btn">Order</mdb-btn>

            </div>
          



      </div>
     
    </mdb-col>
  </mdb-row>

      
  

</mdb-container>
  
</template>

<script>
import {mapGetters} from "vuex"
import {mdbContainer , mdbRow , mdbCol , mdbInput , mdbBtn} from "mdbvue"
export default {

  data(){
    return{
      Name:'',
      Address:'',
      pincode:'',
      contactNo:''
      
    }
  },

  components:{
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn

  },

  methods:{
    order(){

      let shippingDetails = {
        name:this.Name,
        address:this.Address,
        pincode:this.pincode,
        contactNo:this.contactNo
      }

      let orderDetails = []
      for(let item of this.cart){
        
        let orderItem = {}
        orderItem[item.name] = {count:item.count,price:item.price}
        orderDetails.push(orderItem)
      }

      let order = {
        orderSummary:orderDetails,
        shippingDetails:shippingDetails,
        TotalPrice:this.price

      }

      this.$store.dispatch('addOrder',order)
      this.$store.dispatch('clearCart')
      
    }

  },

  computed:{
    ...mapGetters([
      'cart',
      'getProducts',
      'user',
      'price',
      'cartLength'
    ])
  }
    
}
</script>

<style lang="scss" scoped src="./checkout.scss">

</style>