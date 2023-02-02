import './bootstrap';

import { createApp } from 'vue'
import App from './vue/app.vue'
import './../../src/input.css'

// fontawesome 必要引用
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 根據 icon 引用 
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusSquare, faTrash)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');