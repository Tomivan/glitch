import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faSnapchatSquare, faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelopeSquare, faSnapchatSquare, faInstagramSquare, faTwitterSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
