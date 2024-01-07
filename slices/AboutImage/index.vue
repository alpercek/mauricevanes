<template><Bounded as="section" :style="{'border-top-color':slice.primary.color}" class="bg-white w-screen pb-8">
  <div class="relative">
   
      
    <VueSlickCarousel ref="carousel" :arrows="false" :adaptiveHeight="true" :autoplaySpeed="5000" :autoplay="true" >
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}` " class="relative">    
          <PrismicImage :field="item.image" />
          <PrismicRichText :field="item.fig" class="hidden text-xs md:block px-4 md:px-0 max-w-xs text-gray-300 !pl-2 pt-1 font-circular"/>
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
        </div>
    </VueSlickCarousel><div v-if="slice.items.length > 1" class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
  
  </div></Bounded>
</template>

<script>
  import { getSliceComponentProps } from '@prismicio/vue/components'

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    data(){
    return{
    sshowMobileMenu: false,
    }
  },
  methods: {
      showNext() {
        this.$refs.carousel.next()
        
      },
      showPrev() {
        
        this.$refs.carousel.prev()
      },
    },
    name: 'MyComponent',
    components: { VueSlickCarousel },
    props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
  }
</script> 
<style>
.arrow {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

</style>