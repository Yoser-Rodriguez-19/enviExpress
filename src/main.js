// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
 
import DefaultLayout from '~/layouts/Default.vue'
import './tailwind.css'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  const notify = new Vue()
  Vue.prototype.notify = notify
  Vue.config.productionTip = false;
}
