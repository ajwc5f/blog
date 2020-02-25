<template>
  <section class="article">
    <router-link to="/archive">Back to archive.</router-link>
    <header class="article__header">
      <div class="article__title">
        <h1 class="--font-accent">Lorem ipsum dolor sit amet.</h1>
      </div>
      <div class="article__labeling">
        <div class="article__descriptors">
          <h4 class="article__author">Aren Wells</h4>
          <small class="article__ttr"> 3 min read</small>
        </div>
        <div class="article__sharing">
          <i class="fab fa-linkedin-in" />
          <i class="fab fa-twitter" />
          <i class="fab fa-facebook-f"></i>
          <i class="fas fa-share" />
        </div>
      </div>
      <div class="article__header-image-content">
        <img
          class="article__header-image"
          src="https://picsum.photos/600/400"
          alt=""
        />
      </div>
    </header>
    <div class="article__content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu est
        ante. In lacinia, nulla sed euismod vehicula, est leo tristique nisl, at
        fringilla purus nisi et risus. Sed vulputate sem a pulvinar eleifend.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec ultricies commodo eros, vel convallis erat semper
        id. Aliquam erat volutpat. Phasellus mattis, sem elementum lobortis
        interdum, lorem arcu euismod lectus, non malesuada mi eros vitae enim.
        Aenean a scelerisque magna, congue sodales odio. Fusce feugiat pretium
        metus et mattis. Curabitur diam dui, egestas varius pellentesque vel,
        pellentesque vitae eros. Mauris finibus tortor felis, sit amet rutrum
        augue laoreet nec. Vestibulum tincidunt nulla metus, sit amet varius
        risus placerat eu. In hac habitasse platea dictumst. Nunc eu velit
        varius, lacinia augue ut, consequat ex. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer in vulputate leo. Suspendisse non
        dolor et sem eleifend pharetra vitae a elit. Etiam a dolor finibus,
        tempor dui quis, eleifend leo. Morbi metus risus, vestibulum et dapibus
        et, lobortis eget arcu.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Article"
};
</script>

<style scoped lang="scss">
.article {
  max-width: 760px;
  margin: 0 auto;
  padding: $gapLarge;

  .article__header {
    margin: $gapVeryLarge 0 $gapStandard;

    .article__labeling {
      @include displayFlex(row, space-between, center);
      margin-bottom: $gapStandard;

      .article__descriptors {
        @include displayFlex(row, flex-start, flex-end);

        .article__author {
          margin: 0;
        }

        .article__ttr {
          color: $primaryAlt;
          margin-left: $gapSmall;
        }
      }

      .article__sharing {
        i {
          margin: 0 $gapSmall;
        }
      }
    }

    .article__header-image-content {
      width: 100%;
      .article__header-image {
        width: 100%;
      }
    }
  }

  .article__image-content {
    width: 100%;
  }
}
</style>
