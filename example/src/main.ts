import { createApp } from 'vue'
import App from './app'
import lazyPlugin from '../../src/index'
import loading from './default.png'

import './reset.styl'

const app = createApp(App)
app.use(lazyPlugin, {
  loading
})
app.mount('#app')


