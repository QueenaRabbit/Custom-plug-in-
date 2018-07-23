<template>
  <div class="product">
    
    <h3>我是商品页</h3>
    <router-link to="/product/detail/001" active-class="product-active">001</router-link>
    <router-link to="/product/detail/002?a=1&b=2" active-class="product-active">002</router-link>
    <router-link active-class="product-active" :to="{name:'detail',params:{aid:'003'},query:{a:11,b:22}}">003</router-link>
    <router-view></router-view>
    <loading :bgcolor="'yellow'">
      <div slot="s1">刷新中</div>
    </loading>
  </div>
</template>
<style>
.product-active{
  background: red;
}
</style>

