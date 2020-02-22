<template>
  <div id="app">
    <transition appear name="fade-slow" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
