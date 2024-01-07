import MyComponent from '../../../../slices/Main';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Main'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"heroimage":{"dimensions":{"width":4160,"height":3120},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118"},"title":[{"type":"paragraph","text":"Laboris dolor id laborum ut consectetur et quis ad dolore incididunt sint aliqua officia Lorem. Mollit reprehenderit ea eiusmod dolore enim ipsum reprehenderit exercitation esse sit irure. Dolor sit aute qui magna culpa quis.","spans":[]}],"description":[{"type":"paragraph","text":"Deserunt sunt dolore commodo. Nostrud aute magna elit enim cillum dolore.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"a100"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
