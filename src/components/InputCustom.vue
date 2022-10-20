<template>
  <div class="field-wrapper">
    <label class="field-label" :for="id">{{ label }}</label>
    <input
      class="field-input"
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
      minlength="4"
    />
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     val: this.value,
  //   };
  // },
  props: {
    modelValue: String,
    label: String,
    id: String,
    type: String,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/components/_variables.scss";
@import "@/assets/styles/components/_mixins.scss";

.field-wrapper {
  @include flex($ai: flex-start);
  flex-direction: column;
  width: 100%;
}

.field-label {
  color: $black;
  margin-bottom: 10px;
}

.field-input {
  @include block();
  width: 100%;
  color: $black;
  outline: none;
  font-family: $mainFont;
  transition: 0.3s ease;

  &:focus {
    transform: translate(5px, -5px);
  }
}
</style>