<template>
  <header class="titlebar" :class="'--' + currentRouteClass">
    <nav class="titlebar__nav">
      <div
        v-for="(link, key) in navLinks"
        :key="key + '_titlebar_link'"
        class="titlebar__link-container"
        @mouseenter="toggleRouteHoverClass(link.class)"
        @mouseleave="toggleRouteHoverClass('')"
        :class="{ '--active': $route.path === link.route }"
      >
        <a
          v-if="link.type === 'external-link'"
          :key="key + '_titlebar_link_external'"
          :href="link.href"
          target="_blank"
          class="titlebar__router-link --subtle"
          v-html="link.content"
        />
        <component
          v-if="link.type === 'component'"
          :key="key + '_titlebar_link_component'"
          :is="link.content"
        />
        <router-link
          v-if="link.type === 'router-link'"
          :key="key + '_titlebar_link_route'"
          :to="link.route"
          class="titlebar__router-link --subtle"
          v-html="link.content"
        />
        <component
          v-if="link.hoverScribble !== null"
          :key="key + '_titlebar_link_scribble'"
          :is="link.hoverScribble"
          class="titlebar__link-scribble"
          :class="{
            '--shown':
              $route.path === link.route || link.class === currentRouteClass
          }"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import AppLogo from "./AppLogo";
import ScribbleTitlebarRed from "./Graphics/ScribbleTitlebarRed";
import ScribbleTitlebarBlue from "./Graphics/ScribbleTitlebarBlue";
import ScribbleTitlebarOrange from "./Graphics/ScribbleTitlebarOrange";
import ScribbleTitlebarGreen from "./Graphics/ScribbleTitlebarGreen";

export default {
  name: "TheTitlebar",
  components: {
    AppLogo
  },
  data: function() {
    return {
      routeHoverClass: "",
      navLinks: {
        website: {
          type: "external-link",
          content: '<i class="far fa-head-side"></i>',
          href: "http://arenwells.com",
          route: "",
          class: "red",
          hoverScribble: ScribbleTitlebarRed
        },
        archive: {
          type: "router-link",
          content: "archive",
          route: "/archive",
          class: "blue",
          hoverScribble: ScribbleTitlebarBlue
        },
        logo: {
          type: "component",
          content: AppLogo,
          class: "gray",
          route: "/",
          hoverScribble: null
        },
        contact: {
          type: "router-link",
          content: "contact",
          route: "/contact",
          class: "orange",
          hoverScribble: ScribbleTitlebarOrange
        },
        search: {
          type: "router-link",
          content: '<i class="far fa-search"></i>',
          route: "/search",
          class: "green",
          hoverScribble: ScribbleTitlebarGreen
        }
      }
    };
  },
  methods: {
    toggleRouteHoverClass(routeClass) {
      this.routeHoverClass = routeClass;
    }
  },
  computed: {
    currentRouteClass() {
      let routeClass = "gray";

      //if link currently hovered, set to hover class
      if (this.routeHoverClass !== "") {
        routeClass = this.routeHoverClass;
      } else {
        //set class to current route view
        for (const linkKey in this.navLinks) {
          let thisLink = this.navLinks[linkKey];

          if (thisLink.route === this.$route.path) {
            routeClass = thisLink.class;
          }
        }
      }

      return routeClass;
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
  height: $headerSize;
  z-index: 20;
  font-family: $fontAccent;
  background: $base;
  border-top: 6px solid $gray;
  @include transition(border-top);

  &.--gray {
    border-top: 6px solid $base;
  }

  &.--red {
    border-top: 6px solid $red;
  }

  &.--blue {
    border-top: 6px solid $blue;
  }

  &.--orange {
    border-top: 6px solid $orange;
  }

  &.--green {
    border-top: 6px solid $green;
  }

  .titlebar__nav {
    @include displayFlex(row);

    .titlebar__link-container {
      position: relative;
      margin: 0 $gapLarge;
      color: $primaryAlt;
      font-size: 1em;

      &.--active {
        .titlebar__router-link {
          color: $primary;
        }
      }

      .titlebar__router-link {
        @include transition(color);
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;

        &:hover {
          color: $primary;
        }
      }

      .titlebar__link-scribble {
        opacity: 0;
        @include transition(opacity);
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        &.--shown {
          opacity: 1;
        }

        &.--red {
          left: -16px;
          top: -11px;
          width: 51px;
          height: 45px;
        }

        &.--blue {
          width: 70px;
          top: -10px;
          left: 6px;
        }

        &.--orange {
          width: 84px;
          height: 45px;
          top: -3px;
          left: 3px;
        }

        &.--green {
          left: -11px;
          top: -9px;
          width: 45px;
          height: 45px;
        }
      }
    }
  }
}
</style>
