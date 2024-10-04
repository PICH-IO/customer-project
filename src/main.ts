import './styles/style.css'

// Plugins
import { registerPlugins } from '@/plugins'
// import i18n from '@/i18n'
import { createPinia } from 'pinia'

// Fonts
// import '@fontsource/battambang/400.css';
// import '@fontsource/battambang/700.css';
// import '@fontsource/battambang/900.css';
// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/600.css';
// import '@fontsource/poppins/700.css';
// import '@fontsource/poppins/800.css';
// import '@fontsource/poppins/900.css';

// Components
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
// app.use(i18n)

registerPlugins(app)
app.mount('#app')
