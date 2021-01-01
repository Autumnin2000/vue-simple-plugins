<template>
  <my-select
    :data="data"
    :currentIndex = "curIdx"
    :callback="setOptions"
   />
   <my-link
   class="primary"
    href="https://www.bilibili.com/"
    target="_blank"
    >
    bilibili
   </my-link>
     <my-link
     class="danger"
    href="https://www.baidu.com/">
    百度
     </my-link>
</template>

<script>
import { ref } from 'vue'
// import MyLink from '../libs/components/Link/index.vue'
// import MySelect from '../libs/components/Select/index.vue'
export default {
  name: 'App',
  setup(){
    const curIdx = ref(1);
    const data = [
      {
        id:1,
        value:'orange',
        text:'橙子'
      },
      {
        id:2,
        value:'apple',
        text:'苹果'
      },
      {
        id:3,
        value:'pear',
        text:'梨'
      }
    ];
    const setOptions = (index,item) => {
      console.log(item,index);
    }
    return {
      setOptions,data,curIdx
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
