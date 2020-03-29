<template>
  <div id="app">
    <h1>Vue Router</h1>
    <hr>
    <router-view name='header-top'></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name='header-bottom'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
