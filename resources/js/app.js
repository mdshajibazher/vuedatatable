/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'

import { Form, HasError, AlertError} from 'vform'

import Snotify, { SnotifyPosition } from 'vue-snotify'


window.Form = Form

const snotifyOptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, snotifyOptions)






import VueProgressBar from 'vue-progressbar'

const VueProgressBaroptions = {
    color: '#A3CB38',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
      speed: '0.9s',
      opacity: '0.9s',
      termination: 700
    },
    autoRevert: true,
    location: 'top',
    inverse: false
  }

  Vue.use(VueProgressBar, VueProgressBaroptions);



Vue.component('customer-component', require('./components/CustomerComponent.vue').default);
Vue.component('pagination', require('./components/partial/PaginationComponent.vue').default);
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
