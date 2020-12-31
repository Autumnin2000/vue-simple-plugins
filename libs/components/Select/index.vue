<template>
  <div class="my-select">
    <div 
    class="result"
    @click="openOptions"
    >{{data[curIdx].text}}</div>
    <div class="options" v-show="optionsShow">
      <div
      class="option"
      v-for="(item,index) of data"
      :key="item.id"
      @click="setOptions(index,item)"

      >
      {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name:'MySelect',
  props:{
    data:Array,
    currentIndex:{
      type:Number,
      default:0
    },
    callback:Function
  },
  setup(props){
    const state = reactive({
      curIdx:props.currentIndex,
      optionsShow:true
    })
    const setOptions = (index,item) =>{
      state.curIdx = index;
      state.optionsShow = false;
      props.callback(index,item);
    }
    const openOptions = () =>{
      state.optionsShow = true;
    }
    return {
      ...toRefs(state),
      setOptions,
      openOptions
    }
  }
}
</script>

<style>

</style>