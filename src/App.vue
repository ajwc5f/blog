<template>
  <div id="app">
    <TheTitlebar />
    <transition appear name="fade-slow" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TheTitlebar from "./components/The/TheTitlebar";

export default {
  components: {
    TheTitlebar
  }
};
</script>

<style lang="scss"></style>
