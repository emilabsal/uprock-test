<template>
  <div class="modal" v-show="show">
    <button class="modal-close" @click="$emit('click-event')" v-if="close">
      <img src="@/assets/img/close.svg" alt="close" />
    </button>
    <img class="modal-gif" :src="require(`@/assets/img/${gif}`)" alt="gif" />
    <p class="modal-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ModalCustom",
  props: {
    show: Boolean,
    close: Boolean,
    text: String,
    gif: String,
  },
  data() {
    return {
      openData: this.open,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/components/_variables.scss";
@import "@/assets/styles/components/_mixins.scss";

.modal-gif {
  width: 130px;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  padding: 20px;
  @include flex();
  z-index: 1;
  border-radius: 20px;
  background-color: $white;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
}

.modal-close img {
  width: 20px;
  height: 20px;
}
</style>