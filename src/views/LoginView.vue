<template>
  <div class="wrapper">
    <div class="denied" v-if="denied">
      <button class="denied-close" @click="denied = false">
        <img src="@/assets/img/close.svg" alt="close" />
      </button>
      <img class="denied-gif" src="@/assets/img/denied.gif" alt="denied" />
      <p class="denied-text">Access denied</p>
    </div>
    <div class="denied" v-if="success">
      <img class="denied-gif" src="@/assets/img/success.gif" alt="denied" />
      <div class="denied-desc">
        <p class="denied-text">You have logged in successfully</p>
        <p class="denied-text">
          you will be redirected to the main page in a few seconds
        </p>
      </div>
    </div>
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
// import { mapState } from "vuex";

export default {
  components: {
    InputCustom,
  },
  data() {
    return {
      search: "",
      emailValue: "",
      passwordValue: "",
      denied: false,
      success: false,
      fields: [
        { label: "Email", id: "email", type: "email", vl: "" },
        {
          label: "Password",
          id: "password",
          type: "password",
          vl: "",
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
          this.success = true;

          this.$cookies.setCookie("token", "hello");

          setTimeout(() => {
            this.success = false;
            this.$router.push("/");
          }, 3000);
        })
        .catch(() => {
          this.denied = true;
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

<style>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  padding: 30px 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  font-family: "Schwifty", "Fuzzy Bubbles", sans-serif;
}

.login-title {
  width: 100%;
  text-align: center;
  color: black;
  font-weight: 400;
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
  background: #12b0c9;
  color: black;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 20px;
  box-shadow: 3px 3px 0px 2px black;
  padding: 20px;
  border: 3px solid #000;
  transition: 0.15s;
  font-weight: 400;
}

.login-submit:active {
  transform: translateY(2px);
  box-shadow: 2px 2px 0px 2px black;
}

.denied-gif {
  width: 130px;
}

.denied {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 20px;
  background-color: #fff;
}

.denied-text {
  font-size: 20px;
}

.denied-close {
  position: absolute;
  top: 20px;
  right: 20px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
}

.denied-close img {
  width: 20px;
  height: 20px;
}
</style>