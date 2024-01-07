<template>
  <div><SliceZone :slices="page.data.slices" :components="components" /><button id="topitop" class="fixed duration-1000 bottom-28 md:bottom-1/3 right-0 transition-all opacity-0" @click="toTop()">&#8593;</button></div>
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, params, store }) {
    const page = await $prismic.api.getByUID('page', params.uid)
    await store.dispatch('prismic/load')
    return {
      page
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `${this.$prismic.asText(this.page.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.siteTitle)}`
    }
  },
  methods: { 
  toTop() {
    window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
  }
},
mounted(){
  
  var lastScrollTop = 0;


document.addEventListener("scroll", function(){ 
var st = window.pageYOffset || document.documentElement.scrollTop; 
if (st > lastScrollTop) {
document.getElementById("topitop").style.opacity = 0
} else if (st < lastScrollTop) {
document.getElementById("topitop").style.opacity = 1
}
lastScrollTop = st <= 0 ? 0 : st;


}, false);

}
}
</script>
