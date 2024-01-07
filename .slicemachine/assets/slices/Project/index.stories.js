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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"heroimage":{"dimensions":{"width":5616,"height":3744},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"},"description":[{"type":"paragraph","text":"Dolor adipisicing magna pariatur ut do ex ex proident consectetur reprehenderit aliqua et.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Funny","spans":[]}],"date":"2013-09-29T21:35:06+0000","description":[{"type":"paragraph","text":"Labore adipisicing mollit enim. Do ut proident elit ea sit eu sint eiusmod Lorem do ad pariatur.","spans":[]}]},"id":"_Default","slice_type":"project"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
