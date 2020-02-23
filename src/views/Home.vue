<template>
  <section class="home">
    <div class="home__text">
      <h1>
        A blog by Aren Wells.
        <br />
        For Whomever.
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {
  @include displayFlex(column, center, center);
  height: $fullScreenHeight;
  font-family: $fontAccent;

  .home__text {
    text-align: center;
  }
}
</style>
