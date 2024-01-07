<template>
  <Bounded as="section" class="bg-white px-4 overflow-hidden"><div :class="{ aaactive: sshowMobileMenu}" class="transition-all max-h-0 md:max-h-none">
    <div><p @click="sshowMobileMenu = !sshowMobileMenu" class="!text-sm font-circularbold hidden md:block">Education</p>
      <div class="block md:hidden items-baseline flex gap-2" @click="sshowMobileMenu = !sshowMobileMenu"><p class="!text-2xl pb-4 font-metrikbold" >Education</p><b v-if="sshowMobileMenu" class="!text-2xl">(-)</b><b v-else class="!text-2xl">(+)</b></div>
      
        <div class="max-w-sm md:max-w-4xl grid grid-cols-1 md:justify-items-stretch items-center gap-0 justify-items-start text-lg font-metrik md:text-base"><div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
          <div class="flex  gap-4"><PrismicRichText :field="item.date" class="w-24 flex-[1_0_auto] md:!leading-tight leading-normal"/>
          <PrismicRichText :field="item.text" class="md:w-full md:!leading-tight leading-normal"/></div>
        </div></div></div></div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  data(){
    return{
    sshowMobileMenu: false,
    }
  },
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
<style>
p{
  margin-bottom: 0px !important;
}
.aaactive{
  max-height: 200rem;
}

</style>