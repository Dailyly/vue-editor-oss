import VueEditorOss from './src/components/VueEditorOss.vue'
import _Vue from 'vue'

VueEditorOss.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component('VueEditorOss', VueEditorOss)
}

export default VueEditorOss