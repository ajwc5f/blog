<template>
  <header class="titlebar" :class="'--' + currentRouteClass">
    <nav class="titlebar__nav">
      <router-link
        v-for="link in navLinks.left"
        :key="link.text + '_titlebar_nav_link'"
        :to="link.route"
        class="titlebar__link"
      >
        {{ link.text }}
      </router-link>
    </nav>
    <AppLogo />
    <nav class="titlebar__nav">
      <router-link
        v-for="link in navLinks.right"
        :key="link.text + '_titlebar_nav_link'"
        :to="link.route"
        class="titlebar__link"
      >
        {{ link.text }}
      </router-link>
    </nav>
  </header>
</template>

<script>
import AppLogo from "../App/AppLogo";

export default {
  name: "TheTitlebar",
  components: {
    AppLogo
  },
  data: function() {
    return {
      currentRouteClass: "main",
      navLinks: {
        left: [
          {
            text: "recent",
            route: "aren",
            class: "red"
          },
          {
            text: "featured",
            route: "aren",
            class: "blue"
          }
        ],
        right: [
          {
            text: "contact",
            route: "aren",
            class: "orange"
          }
        ]
      }
    };
  },
  methods: {
    toggleRouteClass(routeClass) {
      this.currentRouteClass = routeClass;
    }
  }
};
</script>

<style scoped lang="scss">
.titlebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  @include displayFlex(row, center, center);
  z-index: 20;
  font-family: $fontAccent;
  border-top: 6px solid $gray;
  @include transition(border-top);

  .titlebar__nav {
    .titlebar__link {
      display: inline-block;
      margin: 0 $gapLarge;
      color: $primaryAlt;
      text-decoration: none;
      font-size: 1em;
      @include transition(color);

      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
