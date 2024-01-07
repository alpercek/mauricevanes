<template><div class="absolute inset-0 pt-10 pb-12 bg-white"><Bounded as="section" class=" w-screen pb-0">
  <div class="relative"><div class="gap-0 grid-cols-1 justify-items-center grid">
        <a href="/" class=" text-gray-400 !z-40 absolute top-0 -translate-y-full left-1/2 -translate-x-1/2">&#x2715</a>
   
      
    <VueSlickCarousel  ref="carousel" :arrows="false" :dots="true" :fade="true"  class="z-0 h-[calc(100vh-5.5rem)] w-full">
        <template #customPaging="page">
      <div class="custom-dot font-circular !font-normal text-lg ">
        {{ page+1 }}
      </div>
    </template>
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}` " class="!relative !grid items-center gap-1">    
        <div class="flex w-full justify-center"><PrismicImage :field="item.image" class="h-[calc(100vh-5.5rem)] object-scale-down"/></div>
          <div class="!no-underline justify-start ml-[calc(44vw-1rem)] md:ml-[calc(44vw-3rem)] text-lg font-metrik max-w-sm">{{ $prismic.asText(item.title) }}<span v-if="$prismic.asText(item.title).length === 0">{{ $prismic.asText(slice.items[0].title) }}</span><span v-if="$prismic.asText(item.year).length === 0 && $prismic.asText(slice.items[0].year).length !== 0"> ({{ $prismic.asText(slice.items[0].year) }})</span><span v-if="$prismic.asText(item.year).length !== 0"> ({{ $prismic.asText(item.year) }})</span> <span v-if="$prismic.asText(slice.items[0].dimentions).length !== 0 && $prismic.asText(slice.items[0].materials).length !== 0 || $prismic.asText(item.dimentions).length !== 0 && $prismic.asText(item.materials).length !== 0">-</span> <span v-if="$prismic.asText(item.materials).length === 0">{{ $prismic.asText(slice.items[0].materials) }}</span>{{ $prismic.asText(item.materials) }}<span v-if="$prismic.asText(item.dimentions).length !== 0 && $prismic.asText(item.materials).length !== 0 || $prismic.asText(slice.items[0].dimentions).length !== 0 && $prismic.asText(slice.items[0].materials).length !== 0">,</span><span v-if="$prismic.asText(item.dimentions).length === 0"> {{ $prismic.asText(slice.items[0].dimentions) }}</span> {{ $prismic.asText(item.dimentions) }}<span v-if="$prismic.asText(item.location).length !== 0"> ({{ $prismic.asText(item.location) }})</span><span v-if="$prismic.asText(item.location).length === 0"> ({{ $prismic.asText(slice.items[0].location) }})</span></div>
          
          <div :id="i"  class="absolute inline-0 z-40 h-full w-full top-0 cursor-zoom-in misir"></div>
        </div>
    </VueSlickCarousel><div class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2" v-if="slice.items.length > 1"> <button @click="showPrev" class="hidden md:block"><i class="arrow left !border-neutral-500"></i></button><button @click="showNext" class="hidden md:block"><i class="arrow right !border-neutral-500"></i></button></div>
  
  </div></div></Bounded><div><div v-for="(item, i) in slice.items" :key="`slice-item-${i}` "><div :id="i+'a'" @click="sakla" class="overflow-scroll hidden h-screen w-screen inset-0 fixed z-50 cursor-crosshair kaykay ff"><PrismicImage :field="item.image" class="w-[200%] z-60 !max-w-none"/></div></div></div></div>
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
    goster: false,

    }
  },
  
  mounted(){

    document.getElementById("topitop").style.display = "none"
    for (let index = 0; index < document.getElementsByClassName("ff").length; index++) {
      
    document.getElementById(index+"a").addEventListener('mousemove', function(){
      document.getElementById(index+"a").scrollTo({
  top: `${event.y}`/(window.innerHeight*2)*10000,
  left: `${event.x}`/(window.innerWidth*2)*10000,
});
    });}


let fed = document.getElementsByClassName("misir")
 
for (let index = 0; index < fed.length; index++) {
  
  fed[index].addEventListener("click", function(){
    document.getElementById(event.target.id + "a").style.display = "block"
  
  },false);
}

  },
  methods: {
    
    
      showNext() {
        this.$refs.carousel.next()
        
      },
      showPrev() {
        
        this.$refs.carousel.prev()
      },
      sakla(){
        event.target.parentElement.style.display = "none"
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
  padding: 9px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.giz{
  display: none;
}
.slick-dots{
width: unset;
bottom: -32px;
right: calc(56vw + 1.2rem);;

}
.slick-dots li{
  width: 5px;
}
</style>