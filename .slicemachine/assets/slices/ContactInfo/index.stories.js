import MyComponent from '../../../../slices/ContactInfo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactInfo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Nisi anim eiusmod proident duis ipsum minim. Quis mollit id laboris adipisicing velit in magna sunt irure. Est sit est id aute aliqua sunt eiusmod minim mollit excepteur deserunt.","spans":[]}],"email":[{"type":"paragraph","text":"Labore culpa laborum culpa ut ut sit occaecat dolore reprehenderit aliquip labore tempor proident fugiat tempor. Aliqua sunt elit enim voluptate magna deserunt minim ad dolor reprehenderit ipsum. Dolor nisi amet incididunt aliqua.","spans":[]}],"base":[{"type":"paragraph","text":"Mollit aliquip dolor laboris occaecat et laboris culpa deserunt aliqua laborum ex sunt amet consectetur voluptate. Cillum occaecat ut veniam magna sunt qui exercitation cupidatat tempor ea sit aliquip nulla in. Quis exercitation adipisicing occaecat.","spans":[]}],"instagram":[{"type":"paragraph","text":"Enim minim nostrud anim veniam consequat fugiat aliqua eiusmod reprehenderit veniam in ex adipisicing. Cupidatat dolor non eu nulla Lorem non enim aliqua duis qui non duis est culpa. Et enim aliquip aute commodo occaecat fugiat adipisicing sint veniam tempor.","spans":[]}],"website":[{"type":"paragraph","text":"Mollit amet laboris amet deserunt commodo ullamco consequat voluptate qui amet. Sit veniam adipisicing ea exercitation ea.","spans":[]}],"personalinstagram":[{"type":"paragraph","text":"Adipisicing pariatur minim incididunt reprehenderit quis eiusmod qui sint ut do eu quis est nisi.","spans":[]}]},"id":"_Default","slice_type":"about_info"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
