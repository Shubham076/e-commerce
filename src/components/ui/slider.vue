<template>
   <mdb-carousel
    :items="items"
    :interval="5000"
    controlls
    indicators
  ></mdb-carousel>
</template>

<script>
   import { mdbCarousel } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,
            src:
              require("../../assets/bg_1.jpg"),
            mask: "black-light",
            alt: "First Slide",
            
          },
          {
            img: true,
            src:
              require("../../assets/4.jpg"),
            mask: "black-light",
           

          },{
            img: true,
            src:
              require("../../assets/5.jpg"),
            mask: "black-light",
            
          },
           
          {
            img: true,
            src:
              require("../../assets/1.jpg"),
            mask: "black-light",
           
          },
            {
            img: true,
            src:
              require("../../assets/2.jpg"),
            mask: "black-light",
            }
         
         
        ]
      };
    }
  };
</script>

<style lang="scss">

.carousel-inner{
  height: 50vh;
}



</style>