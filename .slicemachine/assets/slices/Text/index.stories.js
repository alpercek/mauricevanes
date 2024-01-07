import MyComponent from '../../../../slices/Text';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Text'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"paragraph","text":"Ea est reprehenderit ipsum aute nulla dolor excepteur commodo irure qui consequat id. Lorem magna labore laboris esse qui velit labore voluptate culpa. Incididunt Lorem cupidatat nisi voluptate ipsum dolore qui cupidatat esse cillum cillum nisi incididunt.","spans":[]}],"text":[{"type":"paragraph","text":"Do sunt consequat officia adipisicing occaecat anim ullamco cillum exercitation et eiusmod id do in qui.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"contact"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
