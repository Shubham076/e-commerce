<template>
  <section class="form-elegant" id="product__form">
  
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5"><slot name="title"></slot></h3>
            </div>
            <mdb-input label="Name of the Product"  v-model ="name" type="text"/>
            <mdb-input label="Price" type="number"   v-model="price" containerClass="mb-0"/>
            <mdb-input label="Quantity" type="number"  v-model="quantity" containerClass="mb-0"/>
            <mdb-input v-if="add" label="Enter the url of image" v-model ="imgUrl" type="url" containerClass="mb-0"/>
            
             
            <select class="browser-default custom-select"  v-model="category">
                <option selected>Select the categories</option>
                <option value="Men Fashion">Men Fashion</option>
                <option value="Electronics">Electronics</option>
                <option value="Grocery">Grocery</option>
                <option value="Books">Books</option>
                <option value="Books">Fruits</option>



            </select>
          </mdb-card-body>
          <mdb-modal-footer>
        <mdb-btn  @click = "close" color="secondary">Close</mdb-btn>
        <mdb-btn color="primary" v-if="add" @click="submit">Add</mdb-btn>
        <mdb-btn color="primary" v-else @click="update">Update</mdb-btn>

        </mdb-modal-footer>
      
  </section>
</template>

<script>
import {  mdbCardBody, mdbInput ,mdbModalFooter , mdbBtn } from 'mdbvue';
  export default {
    
    components: {
      mdbCardBody,
      mdbInput,
      mdbModalFooter,
      mdbBtn

    },

     data(){
      return{
        name:this.product ?this.product.name:'',
        price:this.product ?this.product.price:'',
        quantity:this.product ?this.product.quantity:'',
        imgUrl:this.product ?this.product.imgUrl:'',
        category:this.product ?this.product.category:'Grocery'
        
        
          
      }
},

    props:{
      close:Function,
      product:Object,
      add:String
    },

    methods:{
       submit(){
          let newProduct = {
            name:this.name,
            price:this.price,
            quantity:this.quantity,
            category:this.category,
            imgUrl:this.imgUrl
            }
          
        this.$store.dispatch('addAdminProducts',newProduct)
        this.close()


        },
      
      update(){
        let updatedProduct={
          name:this.name,
          price:this.price,
          quantity:this.quantity,
          category:this.category,

        }

        let id = this.product.productId
        this.$store.dispatch('UpdateProduct',{updatedProduct:updatedProduct ,id:id })
        this.close()
      }
    }
   
    
  }
</script>

<style>
  .form-elegant .font-small {
    font-size: 0.8rem; }

  .form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

  .form-elegant .z-depth-1-half,
  .form-elegant .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }

    .modal-body{
      flex:0 0 auto;
    }
</style>