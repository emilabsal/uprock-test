<template>
  <div class="not-found">
    <div class="not-found-inner">
      <div class="not-found-desc">
        <h1 class="not-found-number">404</h1>
        <p class="not-found-text">go to the portal -></p>
      </div>
      <router-link to="/">
        <img src="@/assets/img/portal.gif" alt="portal" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss">
@import "@/assets/styles/components/_variables.scss";
@import "@/assets/styles/components/_mixins.scss";

.not-found {
  width: 100%;
  min-height: 100vh;
  @include flex();
}

.not-found-inner {
  margin: 0 20px;
  @include flex();
}

.not-found-desc {
  @include flex();
  flex-direction: column;
}

.not-found-number {
  font-size: 150px;
  font-family: "Schwifty", sans-serif;
  line-height: 0.9;
}

@media screen and (max-width: 700px) {
  .not-found-inner {
    flex-direction: column;
    margin: 20px;
  }
}
</style>