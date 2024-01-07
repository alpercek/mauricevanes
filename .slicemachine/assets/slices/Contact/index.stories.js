import MyComponent from '../../../../slices/Contact';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Contact'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"name":[{"type":"paragraph","text":"Deserunt adipisicing ullamco officia nisi excepteur reprehenderit officia magna. Sint nulla id sit esse tempor ex enim sit ipsum anim reprehenderit. Id minim aliquip occaecat est adipisicing anim occaecat Lorem nisi deserunt.","spans":[]}],"email":[{"type":"paragraph","text":"Aliquip proident ut ad. Consectetur proident veniam aute labore Lorem veniam ad duis reprehenderit reprehenderit. Elit et do mollit tempor irure.","spans":[]}],"basedin":[{"type":"paragraph","text":"Incididunt nostrud officia adipisicing eiusmod fugiat. Dolor dolore cupidatat ut.","spans":[]}],"link":[{"type":"paragraph","text":"Proident laborum voluptate amet sit cupidatat enim labore. Pariatur do consequat commodo amet nostrud. Cupidatat sit ex adipisicing minim quis nostrud ad.","spans":[]}]},"id":"_Default","slice_type":"contact"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
