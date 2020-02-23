<template>
  <section class="error-screen"></section>
</template>

<script>
export default {
  name: "ErrorScreen"
};
</script>

<style scoped lang="scss">
.error-screen {
  @include displayFlex(column, center, center);
}
</style>
