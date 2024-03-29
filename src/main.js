// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Calendar ,DateinputsInstaller} from '@progress/kendo-dateinputs-vue-wrapper'
import { TextBox ,MaskedTextBox,InputsInstaller} from '@progress/kendo-inputs-vue-wrapper'
import { ButtonGroup, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { Upload, UploadInstaller } from '@progress/kendo-upload-vue-wrapper'



Vue.use(DateinputsInstaller)
Vue.use(InputsInstaller)
Vue.use(ButtonsInstaller)
Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)
Vue.use(UploadInstaller)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {     
    App ,
    Calendar,
    ButtonGroup,
    DataSource,
    Grid, 
    MaskedTextBox,
    TextBox,
    Upload
    
  },
  template: '<App/>'
})
