<template>
    <div>
      <mdb-modal :show="modal" @close="hideModal">

      <mdb-modal-body>
          <slot></slot>
          
      </mdb-modal-body>

      </mdb-modal>


    </div>
</template>

<script>
import {mdbModal, mdbModalBody} from 'mdbvue'
    export default {
        components:{
            mdbModal,
            mdbModalBody
        },
        props:['modal' , 'hideModal']
        
    
        
    }
</script>

<style lang="scss" scoped>

</style>