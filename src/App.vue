<!-- Features:
 - Article read time.
 - Progress bar.
 - Share Links.
 - Ads.
 - Related/more articles.
 -
-->

<template>
  <div id="app">
    <TheTitlebar />
    <div class="app__content">
      <transition appear name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import TheTitlebar from "./components/TheTitlebar";

export default {
  components: {
    TheTitlebar
  }
};
</script>

<style lang="scss">
#app {
  .app__content {
    margin-top: $headerSize;
  }
}
</style>
