import MyComponent from '../../../../slices/Award';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Award'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"date":"2019-11-25T22:18:28+0000","text":[{"type":"paragraph","text":"Ullamco dolore ullamco quis culpa consequat Lorem esse.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"award"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
