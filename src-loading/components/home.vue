<template>
  <div class="home">
    <loading bgcolor="#399">
      <div slot="s1">加载中</div>
    </loading>
    <h3>我是首页</h3>
    <a href="javascript:;" @click="gogo">跳转</a>
  </div>
</template>
<script>
export default {
  methods:{
    gogo(){
      this.$router.push({name:'detail',params:{aid:'004'},query:{a:111,b:222}})
    }
  }
}
</script>

