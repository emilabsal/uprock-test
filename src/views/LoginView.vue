<template>
  <div class="wrapper">
    <modal-custom
      v-for="(modal, index) in modals"
      :key="index"
      :show="modal.show"
      :close="modal.close"
      :text="modal.text"
      :gif="modal.gif"
      @click-event="modal.show = false"
    />
    <form class="login" @submit.prevent="submit">
      <h1 class="login-title">Sign in</h1>
      <input-custom
        class="login-field"
        v-for="(field, index) in fields"
        :key="index"
        :id="field.id"
        :label="field.label"
        :type="field.type"
        v-model.lazy="field.vl"
      />
      <button class="login-submit" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import InputCustom from "@/components/InputCustom.vue";
import ModalCustom from "@/components/ModalCustom.vue";

export default {
  name: "LoginView",
  components: {
    InputCustom,
    ModalCustom,
  },
  data() {
    return {
      search: "",
      emailValue: "",
      passwordValue: "",
      fields: [
        { label: "Email", id: "email", type: "email", vl: "" },
        {
          label: "Password",
          id: "password",
          type: "password",
          vl: "",
        },
      ],
      modals: [
        {
          show: false,
          close: true,
          text: "Access denied",
          gif: "denied.gif",
        },
        {
          show: false,
          close: false,
          text: "You have logged in successfully \n You will be redirected to the main page in a few seconds",
          gif: "success.gif",
        },
      ],
    };
  },
  methods: {
    submit() {
      this.emailValue = this.fields[0].vl;
      this.passwordValue = this.fields[1].vl;
      const login = {
        email: this.emailValue,
        password: this.passwordValue,
      };
      this.$store
        .dispatch("getAuth", {
          login,
        })
        .then(() => {
          this.modals[1].show = true;
          this.$cookie.setCookie("token", this.auth.token);

          setTimeout(() => {
            this.modals[1].show = false;
            this.$router.push("/");
          }, 3000);
        })
        .catch(() => {
          this.modals[0].show = true;
          this.fields[0].vl = "";
          this.fields[1].vl = "";
        });
    },
  },
  computed: {
    auth() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/components/_variables.scss";
@import "@/assets/styles/components/_mixins.scss";

.wrapper {
  width: 100%;
  min-height: 100vh;
  @include flex();
}

.login {
  padding: 30px 20px;
  @include flex($ai: flex-start);
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

.login-title {
  width: 100%;
  text-align: center;
  color: $black;
  margin-bottom: 20px;
  font-size: 60px;
  letter-spacing: -4px;
  text-transform: uppercase;
}

.login-field {
  margin-bottom: 25px;
}

.login-submit {
  outline: none;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  @include block();
  transition: 0.15s;
  background-color: $blue;
}

.login-submit:active {
  transform: translateY(2px);
  box-shadow: 2px 2px 0px 2px black;
}
</style>