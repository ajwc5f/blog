<template>
  <section class="home">
    <div class="home__text">
      <h1 class="home__header">
        A blog by
        <span class="home__underline --aren">
          Aren Wells.
          <img
            class="home__image"
            src="https://www.nebusis.com/wp-content/uploads/2018/02/executive.png"
            alt="Picture of Aren Wells."
          />
        </span>
        <br />
        For
        <span class="home__underline --whomever">
          Whomever.
          <img
            class="home__image"
            src="https://media.giphy.com/media/S5bOOOuypWPOo/giphy.gif"
            alt="Whomever."
          />
        </span>
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
        position: relative;

        .home__image {
          position: absolute;
          height: 0;
          opacity: 0;
          @include transition(opacity);
        }

        &:hover {
          .home__image {
            opacity: 1;
            height: auto;
          }
        }

        &.--aren {
          @include underline($blue);

          .home__image {
            left: 40px;
            bottom: 0;
            width: 200px;
          }
        }

        &.--whomever {
          @include underline($orange);

          .home__image {
            left: 33px;
            bottom: 0;
            width: 225px;
          }
        }
      }
    }
  }
}
</style>
