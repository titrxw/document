import Vue from 'vue'
import './conf'
import error from './libs/error'
import api from './api'
import store from './store'
import storage from './libs/storage'
import router from './router'
import App from './App'
import Vconsole from 'vconsole'

import { Form, FormItem } from 'element-ui'
import { Tabs, TabPane } from 'element-ui'
import { Input, Autocomplete } from 'element-ui'
import { Checkbox } from 'element-ui'
import { Switch } from 'element-ui'
import { Select, Option, Cascader } from 'element-ui'
import { Button, Link } from 'element-ui'
import { Icon } from 'element-ui'
import { Message, MessageBox } from 'element-ui'
import { Container, Aside, Main, Header, Menu, MenuItem, MenuItemGroup, Submenu, Footer } from 'element-ui'
import { Table, TableColumn } from 'element-ui'
import { Tree } from 'element-ui'
import { Pagination } from 'element-ui'
import { Dialog } from 'element-ui'
import { Loading } from 'element-ui'
import { Card } from 'element-ui'
import { Row,Col } from 'element-ui'
import { RadioGroup } from 'element-ui'
import { Radio } from 'element-ui'
import { Tooltip } from 'element-ui'
import { Backtop } from 'element-ui'
import { Scrollbar } from 'element-ui'
import { Upload } from 'element-ui'
import mavonEditor from 'mavon-editor'
import VueClipboard from 'vue-clipboard2'
import 'mavon-editor/dist/css/index.css'
import './assets/style/element-variables.scss'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Input)
Vue.use(Autocomplete)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Link)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Footer)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tree)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Loading)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Tooltip)
Vue.use(Backtop)
Vue.use(Scrollbar)
Vue.use(Upload)
Vue.use(mavonEditor)
Vue.use(VueClipboard)
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.use(error);
Vue.use(api);
Vue.use(storage)

process.env.NODE_ENV === 'development' && new Vconsole()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')