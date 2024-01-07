import MyComponent from '../../../../slices/Project';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Project'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":12288,"height":16384},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab"},"fig":[{"type":"paragraph","text":"Voluptate duis sit id magna sunt duis minim ea eiusmod deserunt. Mollit consequat aliquip qui in nostrud et fugiat amet eu ad tempor sint duis minim.","spans":[]}]}],"primary":{"namedateyear":[{"type":"paragraph","text":"Dolore exercitation sit sunt minim amet Lorem amet aliqua amet. Anim exercitation enim velit nostrud fugiat adipisicing sunt. Non deserunt est ullamco quis nisi dolore commodo reprehenderit excepteur proident nostrud consequat.","spans":[]}],"title":[{"type":"paragraph","text":"Consectetur nostrud laboris aliqua eiusmod.","spans":[]}],"description":[{"type":"paragraph","text":"Adipisicing cillum pariatur nulla sit dolore reprehenderit consequat duis deserunt aute. Tempor ullamco excepteur consequat sint quis commodo exercitation pariatur dolore dolore nostrud fugiat quis. Quis dolore aute culpa nulla sit et eu ea velit.","spans":[]}],"color":"#0461b5","open":false},"id":"_Default","slice_type":"project"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
