<template>
  <div id="table">

    <Modal :modal="modal" :hideModal = "hideModal">
        <NewProduct  :modal = "modal" add=true :close ="hideModal">
          <strong slot="title">AddProduct</strong>
        </NewProduct>
    </Modal>


<!-- For updating a product -->
    <Modal :modal="modal1" :hideModal = "hideModal1">
        <NewProduct :modal = "modal1" :product="product" :close ="hideModal1">
          <strong slot="title">Update Product</strong>
        </NewProduct>
    </Modal>


    



        <div id="table-header">

        <mdb-btn   @click="showModal" color="success" id="btn">ADD PRODUCT</mdb-btn>
        <div id="input">
            <input type="text" id="form1" v-model="Search" @keyup="find" placeholder="Search by name" class="form-control">


          

    
      </div>

        </div>
        


       <div>
      <mdb-tbl striped>
        <mdb-tbl-head>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th></th>


          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body v-if="!searching">
          <tr v-for="(product,index) of Products" :key="product.productId">

            <td>{{index+1}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.category}}</td>
            <td><mdb-btn color="primary" @click ="()=>editProduct(product.productId)" id="edit">Edit</mdb-btn></td>
          </tr>
        </mdb-tbl-body>

        <mdb-tbl-body v-else>
          <tr v-for="(product,index) of products" :key="product.productId">

            <td>{{index+1}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.category}}</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>


    </div>

  </div>
</template>

<script>
    import { mdbTbl, mdbTblHead, mdbTblBody, mdbBtn } from 'mdbvue';
    import NewProduct from "./newProduct"
    import Modal from "../ui/modal"
    
  export default {
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbBtn,
      NewProduct,
      Modal
      
      
    },
    props:{
      Products:Array

    },
    data(){
      return{
            modal : false,
            modal1:false,
            product:null,
            Search:'',
            searching:false,
            products:null

      }
    },

      methods:{
        editProduct(id){
         let product = this.Products.find(p=>p.productId === id)
          this.product = product
          this.modal1 = true
          
        },
             showModal(){
          this.modal = true
          
        },
        hideModal(){
          this.modal = false

        },
            showModal1(){
          this.modal1 = true
          
        },
        hideModal1(){
          this.modal1 = false

        },
        find(){

          if(this.Search.trim() !== ''){

            this.searching = true

            let name = this.Search.toLowerCase()
            let foundProducts = this.Products.filter(p=>p.name.toLowerCase().indexOf(name) !== -1)
            this.products = foundProducts

          }
          else{
            this.searching = false
          }
          

     

          }
          
          
       
    },

  }
</script>

<style lang="scss" scoped>

#table{
  margin: 150px 30px 0 30px;
}

#table-header{
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: repeat(2,1fr);
}

#btn{
  align-self:center;
  justify-self: flex-start;
  margin: 0;
}

#input{
  justify-self: flex-end;
}
#id{
  margin: 0;
}
</style>