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
  data() {
    return {
      val: this.value,
    };
  },
  props: {
    modelValue: String,
    label: String,
    id: String,
    type: String,
  },
  // emits: ["update:modelValue"],
  // methods: {
  //   changeInputValue(title) {
  //     this.$emit("update:modelValue", title);
  //   },
  // },
  computed: {
    // inputValue: {
    //   get() {
    //     return this.value;
    //   },
    //   set(val) {
    //     this.$emit("input", val);
    //   },
    // },
  },
};
</script>

<style>
.field-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.field-label {
  color: black;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
}

.field-input {
  width: 100%;
  color: black;
  background: transparent;
  outline: none;
  font-size: 20px;
  padding: 20px;
  font-family: "Fuzzy Bubbles", sans-serif;
  border-radius: 20px;
  box-shadow: 3px 3px 0px 2px black;
  border: 3px solid #000;
  font-weight: 400;
  transition: 0.3s ease;
}

.field-input:focus {
  transform: translate(5px, -5px);
}
</style>