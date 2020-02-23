<template>
  <h1 class="logo">
    <router-link to="/">
      <span
        v-for="letter in logoLetters"
        :key="letter + '_logo_letter'"
        :class="'--' + letter"
        class="logo__letter"
        >{{ letter.toUpperCase() }}</span
      >
    </router-link>
  </h1>
</template>

<script>
export default {
  name: "AppLogo",
  data: function() {
    return {
      logoLetters: ["b", "l", "o", "g"]
    };
  }
};
</script>

<style scoped lang="scss">
.logo {
  @include accentFont;
  margin: 0;

  .logo__letter {
    display: inline-block;
    @include transition(transform);

    &.--b {
      color: $red;
    }

    &.--l {
      color: $blue;
    }

    &.--o {
      color: $orange;
    }

    &.--g {
      color: $green;
    }

    &:hover {
      &.--b {
        transform: rotate(15deg);
      }

      &.--l {
        transform: rotate(-10deg);
      }

      &.--o {
        transform: rotate(70deg);
      }

      &.--g {
        transform: rotate(25deg);
      }
    }
  }
}
</style>
