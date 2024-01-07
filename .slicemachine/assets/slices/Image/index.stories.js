import MyComponent from '../../../../slices/Image';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Image'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":4076,"height":2712},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"},"description":[{"type":"paragraph","text":"Nisi cupidatat laboris exercitation. Pariatur velit consequat magna adipisicing quis aliquip esse Lorem.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
