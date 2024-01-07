<template>
  <Bounded as="section" class="bg-white relative font-metrik pb-4 md:pb-6">
    
    <!--Code for 100 section-->
    <div v-if="slice.variation === 'default'">
      <div class="grid grid-cols-1 items-center gap-1.5 justify-items-center md:justify-items-start">
        <div v-if="slice.primary.image" class="bg-gray-100">
          <PrismicLink v-if="slice.primary.enlarge.id" :field="slice.primary.enlarge" class="cursor-pointer"><PrismicImage :field="slice.primary.image" class="w-screen"/></PrismicLink><PrismicImage v-if="!slice.primary.enlarge.id" :field="slice.primary.image" class=" w-screen md:block cursor-default set cursor-pointer"/>
        </div>
          <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title) }}</b><span v-if="$prismic.asText(slice.primary.year).length !== 0"> ({{ $prismic.asText(slice.primary.year) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 || $prismic.asText(slice.primary.materials).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials) }}<span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 && $prismic.asText(slice.primary.materials).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions) }}<span v-if="$prismic.asText(slice.primary.location).length !== 0">, {{ $prismic.asText(slice.primary.location) }}</span><span v-if="$prismic.asText(slice.primary.photographer).length !== 0"> ({{ $prismic.asText(slice.primary.photographer) }})</span></div>
      </div>
  </div>
    <!--Code for 33/66 section-->
    <div v-if="slice.variation === '3366'"><div class="md:flex md:flex-wrap items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[33.33%]">
    <div v-if="slice.primary.image" class="bg-gray-100 h-full">
      <PrismicLink v-if="slice.primary.enlarge2.id" :field="slice.primary.enlarge2" class="cursor-pointer"><PrismicImage :field="slice.primary.image2" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge2.id" :field="slice.primary.image2" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title2) }}</b><span v-if="$prismic.asText(slice.primary.year2).length !== 0"> ({{ $prismic.asText(slice.primary.year2) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 || $prismic.asText(slice.primary.materials2).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials2) }}<span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 && $prismic.asText(slice.primary.materials2).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions2) }}<span v-if="$prismic.asText(slice.primary.location2).length !== 0">, {{ $prismic.asText(slice.primary.location2) }}</span><span v-if="$prismic.asText(slice.primary.photographer2).length !== 0"> ({{ $prismic.asText(slice.primary.photographer2) }})</span></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[calc(66.66%-1rem)]">
      <div v-if="slice.primary.image" class="bg-gray-100 h-full">
        <PrismicLink v-if="slice.primary.enlarge.id" :field="slice.primary.enlarge" class="cursor-pointer"><PrismicImage :field="slice.primary.image" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge.id" :field="slice.primary.image" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title) }}</b><span v-if="$prismic.asText(slice.primary.year).length !== 0"> ({{ $prismic.asText(slice.primary.year) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 || $prismic.asText(slice.primary.materials).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials) }}<span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 && $prismic.asText(slice.primary.materials).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions) }}<span v-if="$prismic.asText(slice.primary.location).length !== 0">, {{ $prismic.asText(slice.primary.location) }}</span><span v-if="$prismic.asText(slice.primary.photographer).length !== 0"> ({{ $prismic.asText(slice.primary.photographer) }})</span></div>
  </div>
  </div>
</div>
    <!--Code for 50/50 section-->
    <div v-if="slice.variation === '5050'"><div class="md:flex md:flex-wrap md:justify-between items-start gap-4 grid px-0">
        <div v-if="slice.primary.image3" class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[calc(50%-0.5rem)]">
    <div class="bg-gray-100 h-full">
      <PrismicLink v-if="slice.primary.enlarge3.id" :field="slice.primary.enlarge3" class="cursor-pointer"><PrismicImage :field="slice.primary.image3" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge3.id" :field="slice.primary.image3" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title3) }}</b><span v-if="$prismic.asText(slice.primary.year3).length !== 0"> ({{ $prismic.asText(slice.primary.year3) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions3).length !== 0 || $prismic.asText(slice.primary.materials3).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials3) }}<span v-if="$prismic.asText(slice.primary.dimentions3).length !== 0 && $prismic.asText(slice.primary.materials3).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions3) }}<span v-if="$prismic.asText(slice.primary.location3).length !== 0">, {{ $prismic.asText(slice.primary.location3) }}</span><span v-if="$prismic.asText(slice.primary.photographer3).length !== 0"> ({{ $prismic.asText(slice.primary.photographer3) }})</span></div>
  </div>
  
  <div class="md:w-[calc(50%-0.5rem)] grid gap-4">
  <div v-if="slice.primary.image.url" class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-full">
      <div class="bg-gray-100 h-full">
        <PrismicLink v-if="slice.primary.enlarge.id" :field="slice.primary.enlarge" class="cursor-pointer"><PrismicImage :field="slice.primary.image" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge.id" :field="slice.primary.image" class=" w-screen md:block set cursor-pointer"/>
      </div>
        <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title) }}</b><span v-if="$prismic.asText(slice.primary.year).length !== 0"> ({{ $prismic.asText(slice.primary.year) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 || $prismic.asText(slice.primary.materials).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials) }}<span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 && $prismic.asText(slice.primary.materials).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions) }}<span v-if="$prismic.asText(slice.primary.location).length !== 0">, {{ $prismic.asText(slice.primary.location) }}</span><span v-if="$prismic.asText(slice.primary.photographer).length !== 0"> ({{ $prismic.asText(slice.primary.photographer) }})</span></div>
  </div><div v-if="slice.primary.image2" class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-full">
      <div class="bg-gray-100 h-full">
        <PrismicLink v-if="slice.primary.enlarge2.id" :field="slice.primary.enlarge2" class="cursor-pointer"><PrismicImage :field="slice.primary.image2" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge2.id" :field="slice.primary.image2" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title2) }}</b><span v-if="$prismic.asText(slice.primary.year2).length !== 0"> ({{ $prismic.asText(slice.primary.year2) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 || $prismic.asText(slice.primary.materials2).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials2) }}<span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 && $prismic.asText(slice.primary.materials2).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions2) }}<span v-if="$prismic.asText(slice.primary.location2).length !== 0">, {{ $prismic.asText(slice.primary.location2) }}</span><span v-if="$prismic.asText(slice.primary.photographer2).length !== 0"> ({{ $prismic.asText(slice.primary.photographer2) }})</span></div>
  </div></div>
  </div>
</div>
    <!--Code for 33/33/33 section-->
    <div v-if="slice.variation === '333333'"><div class="md:flex md:flex-wrap md:justify-between items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[calc(33%-0.6rem)]">
    <div v-if="slice.primary.image" class="bg-gray-100 h-full">
      <PrismicLink v-if="slice.primary.enlarge.id" :field="slice.primary.enlarge" class="cursor-pointer"><PrismicImage :field="slice.primary.image" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge.id" :field="slice.primary.image" class=" w-screen md:block cursor-pointer set"/>
    </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title) }}</b><span v-if="$prismic.asText(slice.primary.year).length !== 0"> ({{ $prismic.asText(slice.primary.year) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 || $prismic.asText(slice.primary.materials).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials) }}<span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 && $prismic.asText(slice.primary.materials).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions) }}<span v-if="$prismic.asText(slice.primary.location).length !== 0">, {{ $prismic.asText(slice.primary.location) }}</span><span v-if="$prismic.asText(slice.primary.photographer).length !== 0"> ({{ $prismic.asText(slice.primary.photographer) }})</span></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[calc(33%-0.6rem)]">
      <div v-if="slice.primary.image2" class="bg-gray-100 h-full">
        <PrismicLink v-if="slice.primary.enlarge2.id" :field="slice.primary.enlarge2" class="cursor-pointer"><PrismicImage :field="slice.primary.image2" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge2.id" :field="slice.primary.image2" class=" w-screen md:block cursor-pointer set"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title2) }}</b><span v-if="$prismic.asText(slice.primary.year2).length !== 0"> ({{ $prismic.asText(slice.primary.year2) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 || $prismic.asText(slice.primary.materials2).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials2) }}<span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 && $prismic.asText(slice.primary.materials2).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions2) }}<span v-if="$prismic.asText(slice.primary.location2).length !== 0">, {{ $prismic.asText(slice.primary.location2) }}</span><span v-if="$prismic.asText(slice.primary.photographer2).length !== 0"> ({{ $prismic.asText(slice.primary.photographer2) }})</span></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[calc(33%-0.6rem)]">
      <div v-if="slice.primary.image3" class="bg-gray-100 h-full">
        <PrismicLink v-if="slice.primary.enlarge3.id" :field="slice.primary.enlarge3" class="cursor-pointer"><PrismicImage :field="slice.primary.image3" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge3.id" :field="slice.primary.image3" class=" w-screen md:block cursor-pointer set"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title3) }}</b><span v-if="$prismic.asText(slice.primary.year3).length !== 0"> ({{ $prismic.asText(slice.primary.year3) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions3).length !== 0 || $prismic.asText(slice.primary.materials3).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials3) }}<span v-if="$prismic.asText(slice.primary.dimentions3).length !== 0 && $prismic.asText(slice.primary.materials3).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions3) }}<span v-if="$prismic.asText(slice.primary.location3).length !== 0">, {{ $prismic.asText(slice.primary.location3) }}</span><span v-if="$prismic.asText(slice.primary.photographer3).length !== 0"> ({{ $prismic.asText(slice.primary.photographer3) }})</span></div>
  </div>
  </div>
</div>
    <!--Code for 40/60 section-->
    <div v-if="slice.variation === '4060'"><div class="md:flex md:flex-wrap items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[40%]">
    <div v-if="slice.primary.image" class="bg-gray-100 h-full">
      <PrismicLink v-if="slice.primary.enlarge.id" :field="slice.primary.enlarge" class="cursor-pointer"><PrismicImage :field="slice.primary.image" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge.id" :field="slice.primary.image" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title) }}</b><span v-if="$prismic.asText(slice.primary.year).length !== 0"> ({{ $prismic.asText(slice.primary.year) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 || $prismic.asText(slice.primary.materials).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials) }}<span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 && $prismic.asText(slice.primary.materials).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions) }}<span v-if="$prismic.asText(slice.primary.location).length !== 0">, {{ $prismic.asText(slice.primary.location) }}</span><span v-if="$prismic.asText(slice.primary.photographer).length !== 0"> ({{ $prismic.asText(slice.primary.photographer) }})</span></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[calc(60%-1rem)]">
      <div v-if="slice.primary.image2" class="bg-gray-100 h-full">
        <PrismicLink v-if="slice.primary.enlarge2.id" :field="slice.primary.enlarge2" class="cursor-pointer"><PrismicImage :field="slice.primary.image2" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge2.id" :field="slice.primary.image2" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title2) }}</b><span v-if="$prismic.asText(slice.primary.year2).length !== 0"> ({{ $prismic.asText(slice.primary.year2) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 || $prismic.asText(slice.primary.materials2).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials2) }}<span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 && $prismic.asText(slice.primary.materials2).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions2) }}<span v-if="$prismic.asText(slice.primary.location2).length !== 0">, {{ $prismic.asText(slice.primary.location2) }}</span><span v-if="$prismic.asText(slice.primary.photographer2).length !== 0"> ({{ $prismic.asText(slice.primary.photographer2) }})</span></div>
  </div>
  </div>
</div>
    <!--Code for 60/40section-->
    <div v-if="slice.variation === '6040'"><div class="md:flex md:flex-wrap items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[calc(60%-1rem)]">
    <div v-if="slice.primary.image" class="bg-gray-100 h-full">
      <PrismicLink v-if="slice.primary.enlarge2.id" :field="slice.primary.enlarge2" class="cursor-pointer"><PrismicImage :field="slice.primary.image2" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge2.id" :field="slice.primary.image2" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title2) }}</b><span v-if="$prismic.asText(slice.primary.year2).length !== 0"> ({{ $prismic.asText(slice.primary.year2) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 || $prismic.asText(slice.primary.materials2).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials2) }}<span v-if="$prismic.asText(slice.primary.dimentions2).length !== 0 && $prismic.asText(slice.primary.materials2).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions2) }}<span v-if="$prismic.asText(slice.primary.location2).length !== 0">, {{ $prismic.asText(slice.primary.location2) }}</span><span v-if="$prismic.asText(slice.primary.photographer2).length !== 0"> ({{ $prismic.asText(slice.primary.photographer2) }})</span></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-1.5 md:w-[40%]">
      <div v-if="slice.primary.image" class="bg-gray-100 h-full">
        <PrismicLink v-if="slice.primary.enlarge.id" :field="slice.primary.enlarge" class="cursor-pointer"><PrismicImage :field="slice.primary.image" /></PrismicLink><PrismicImage v-if="!slice.primary.enlarge.id" :field="slice.primary.image" class=" w-screen md:block set cursor-pointer"/>
      </div>
      <div class="max-w-xs text-center md:text-left md:max-w-[90%] md:pl-1 text-sm md:tracking-tight"><b>{{ $prismic.asText(slice.primary.title) }}</b><span v-if="$prismic.asText(slice.primary.year).length !== 0"> ({{ $prismic.asText(slice.primary.year) }})</span> <span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 || $prismic.asText(slice.primary.materials).length !== 0 ">-</span> {{ $prismic.asText(slice.primary.materials) }}<span v-if="$prismic.asText(slice.primary.dimentions).length !== 0 && $prismic.asText(slice.primary.materials).length !== 0 ">,</span> {{ $prismic.asText(slice.primary.dimentions) }}<span v-if="$prismic.asText(slice.primary.location).length !== 0">, {{ $prismic.asText(slice.primary.location) }}</span><span v-if="$prismic.asText(slice.primary.photographer).length !== 0"> ({{ $prismic.asText(slice.primary.photographer) }})</span></div>
  </div>
  </div>
</div>
  </Bounded>
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
    }
  },
  
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
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
}
</script>
<style>
.foo{
  display: block;
}
.bigg{
  display: grid;
}
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
.slick-dots .slick-active {
  text-decoration-line: underline;
}
.custom-dot{
  font-weight: 700;
 
}
b{
  font-weight: normal;
  font-family: METRIKBOLD;
  
}
</style>