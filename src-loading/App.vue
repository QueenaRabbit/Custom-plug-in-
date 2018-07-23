<template>
  <div id="app">
    <router-link to="/home" active-class="app-active">首页</router-link>
    <router-link to="/product" active-class="app-active">product</router-link>
    <router-link to="/user" active-class="app-active">user</router-link>
    <router-link to="/login" active-class="app-active">login</router-link>
    <router-link to="/reg" active-class="app-active">reg</router-link>
    <transition
      enter-active-class="animated zoomInLeft"
      leave-active-class="animated zoomOutRight"
    >
    <router-view class="routerview"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
.routerview{
  position: absolute
}
.app-active {
  background: #399;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
