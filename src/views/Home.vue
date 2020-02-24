<template>
  <section class="home">
    <div class="home__text">
      <h1 class="home__header">
        A blog by <span class="home__underline --aren">Aren Wells</span>.
        <br />
        <br />
        For <span class="home__underline --whomever">Whomever</span>.
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
  @include accentFont;

  .home__text {
    text-align: center;

    .home__header {
      .home__underline {
        cursor: context-menu;

        &.--aren {
          @include underline($blue);
        }

        &.--whomever {
          @include underline($orange);
        }
      }
    }
  }
}
</style>
