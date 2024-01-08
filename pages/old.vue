<template>
  <div>
    <div id="se" class="hidden fixed top-0 inset-0 pt-10 pb-12 bg-white !z-50"><div id="cb" class="cursor-pointer text-gray-400 !z-40 absolute top-4 left-1/2 -translate-x-1/2">&#x2715</div>
  <div class="h-[calc(100vh-5.5rem)] w-full">
    <div class="!relative !grid items-center gap-1">
      <div  class="flex w-full justify-center"><img id="itr" src="" class="h-[calc(100vh-5.5rem)] object-scale-down"></div>
    </div>
    <div id="tt" class="!no-underline text-center text-xs font-metrik max-w-sm absolute left-1/2 -translate-x-1/2"></div>
    <div id="misss" class="absolute inline-0 z-20 h-full w-full top-0 cursor-zoom-in"></div>
  </div>
  <div @click="sakla" id="fff" class="overflow-scroll hidden h-screen w-screen inset-0 fixed z-50 cursor-crosshair kaykay bg-white"><img id="itrr" class="w-[200%] z-60 !max-w-none"/></div>
  </div>



    <SliceZone :slices="page.data.slices" :components="components" /><button id="topitop" class="fixed duration-1000 bottom-28 md:bottom-1/3 right-0 transition-all opacity-0" @click="toTop()">&#8593;</button></div>
</template>

<script>
import { doc } from 'prettier'
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, store }) {
    const page = await $prismic.api.getByUID('page', 'home')
    await store.dispatch('prismic/load')
    return {
      page
    }
  },
  data () {
    return { components, 
    }
    
  },
  head () {
    return {
      title: this.$prismic.asText(this.page.data.title)
    }
  },
  methods: { 
  toTop() {
    window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
  },
  sakla(){
        event.target.parentElement.style.display = "none"
      },

},
mounted(){
  
      var lastScrollTop = 0;
      let set = document.getElementsByClassName("set")
      let sat = document.getElementById("se")
      let imt = document.getElementById("itr")
      let imtt = document.getElementById("itrr")
      let tt = document.getElementById("tt")
document.getElementById("cb").addEventListener("click", function(){sat.style.display = "none"})

document.getElementById("fff").addEventListener('mousemove', function(){
      document.getElementById("fff").scrollTo({
  top: `${event.y}`/(window.innerHeight*2)*10000,
  left: `${event.x}`/(window.innerWidth*2)*10000,
});
    });

    document.getElementById("misss").addEventListener("click", function(){
    document.getElementById("fff").style.display = "block"
  
  },false);



document.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop) {
    document.getElementById("topitop").style.opacity = 0
   } else if (st < lastScrollTop) {
    document.getElementById("topitop").style.opacity = 1
   }
   lastScrollTop = st <= 0 ? 0 : st;

}, false);
  for (let index = 0; index < set.length; index++) {
    set[index].addEventListener("click", function enlarge(){
    imt.src = event.currentTarget.src
    imtt.src = event.currentTarget.src
    sat.style.display = "block"
    tt.innerHTML = event.currentTarget.parentElement.parentElement.lastChild.innerHTML
    console.log(event.currentTarget.parentElement.parentElement.lastChild.innerHTML)
    })
  }
  
  }
}
</script>
