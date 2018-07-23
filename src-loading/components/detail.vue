<template>
  <div class="detail">
    <h3>我是详情页</h3>
    <div>参数:{{$route.params.aid}}</div>
    <div>数据:{{$route.query}}</div>
    <div>路径:{{$route.path}}</div>
  </div>
</template>
