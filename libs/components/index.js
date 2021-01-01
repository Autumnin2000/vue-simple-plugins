import Link from '../components/Link/index.vue'
import Select from '../components/Select/index.vue'

const MySelect = {};
const MyLink = {};

MyLink.install = Vue => Vue.component(Link.name,Link);
MySelect.install = Vue => Vue.component(Select.name,Select);


const COMPONENTS = [
  Select,Link
];
const MyUI = {};
MyUI.install = function(Vue){
  COMPONENTS.forEach(component =>{
    Vue.component(component.name,component);
  })
}
export default MyUI;