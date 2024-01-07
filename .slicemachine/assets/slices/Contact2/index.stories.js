import MyComponent from '../../../../slices/Contact2';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Contact2'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"name":[{"type":"paragraph","text":"Do quis non ex veniam cillum culpa cillum amet deserunt eiusmod excepteur magna sunt dolore. Pariatur consequat anim aliqua est laborum officia quis proident.","spans":[]}],"email":[{"type":"paragraph","text":"Dolor pariatur ut cupidatat laborum sunt ut labore non qui do ullamco aute culpa pariatur. Irure excepteur anim est labore exercitation culpa veniam magna.","spans":[]}],"basedin":[{"type":"paragraph","text":"Esse adipisicing pariatur reprehenderit deserunt dolore voluptate labore magna incididunt. Exercitation non cupidatat amet aute. Do laborum irure irure non pariatur ut fugiat excepteur sunt nulla deserunt.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_Default","slice_type":"contact2"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
