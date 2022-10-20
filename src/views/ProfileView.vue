<template>
  <div class="profile">
    <div class="profile-inner">
      <div class="avatar">
        <img src="@/assets/img/me.png" alt="me and my cat (but red one)" />
      </div>
      <div class="desc">
        <div class="desc-top">
          <div class="desc-top-circle">
            <img src="@/assets/img/face.png" alt="face" />
          </div>
          <p class="desc-top-text">wubba lubba dub dub!</p>
        </div>
        <p class="desc-text">
          Hi! I'm the rickiest Rickend Developer from the Universe C-132
        </p>
        <span class="desc-text">Hire me and let's get Schwifty!</span>
      </div>
      <div class="skills">
        <h2 class="skills-title">Skills</h2>
        <div class="skills-block">
          <ul class="skills-list">
            <li
              class="skills-item"
              v-for="(skill, index) in skills"
              :key="index"
            >
              <span class="skills-name">{{ skill.name }}</span>
              <div class="skills-img-wrapper">
                <img
                  v-for="(item, index) in skill.quantity"
                  :key="index"
                  class="skills-img"
                  src="@/assets/img/plumbus.png"
                  alt="plumbus"
                />
              </div>
              <p class="skills-text">{{ skill.quantity }}/10 of plumbus</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="social">
        <h2 class="social-title">Social</h2>
        <div class="social-block">
          <a
            class="social-link"
            :href="item.link"
            v-for="(item, index) in social"
            :key="index"
          >
            <img :src="require(`@/assets/img/${item.img}`)" alt="social" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data() {
    return {
      social: [
        { link: "https://t.me/Emil313", img: "telegram.svg" },
        { link: "https://wa.me/79083402092", img: "whatsapp.svg" },
        { link: "tel:89083402092", img: "phone.svg" },
      ],
      skills: [
        { name: "HTML", quantity: 9 },
        { name: "CSS", quantity: 9 },
        { name: "JavaScript", quantity: 9 },
        { name: "Vue.js (Nuxt.js)", quantity: 9 },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/components/_variables.scss";
@import "@/assets/styles/components/_mixins.scss";

.profile {
  width: 100%;
  min-height: 100vh;
  background-color: $blue;
  @include flex();
  padding: 50px 0;
}

.profile-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  padding: 0 16px;
  margin: 0 auto;
}

.avatar {
  border: 3px solid $black;
  overflow: hidden;
  @include block();
  @include flex();
  grid-row: span 2;
  padding-left: 0;
  padding-right: 0;
}

.avatar img {
  max-width: 50%;
  display: flex;
  flex-shrink: 0;
}

.desc {
  @include block();
  position: relative;
  border-top-left-radius: 0;
  width: 100%;
  padding-top: 50px;
  grid-column: span 3;
}

.desc-top {
  position: absolute;
  top: -30px;
  left: -3px;
  display: flex;
  z-index: 1;
}

.desc-top-circle {
  width: 60px;
  height: 60px;
  border: 3px solid #000;
  border-radius: 50%;
  @include flex($ai: flex-end);
  background-color: $red;
}

.desc-top-circle img {
  width: 100%;
  z-index: 2;
}

.desc-top-text {
  padding: 0 20px;
  background-color: $red;
  position: absolute;
  left: 30px;
  top: 0;
  height: 100%;
  padding-left: 50px;
  white-space: nowrap;
  z-index: -1;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 3px solid $black;
  @include flex();
  color: $white;
  font-size: 30px;
}

.skills {
  grid-column: span 2;
}

.skills-title {
  margin-bottom: 20px;
  color: $white;
  font-weight: 700;
}

.skills-block {
  @include block();
}

.skills-list {
  list-style-type: none;
}

.skills-item {
  @include flex($jc: space-between);
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.skills-text {
  display: inline-block;
  color: black;
  text-align: right;
}

.skills-name {
  display: inline-block;
  color: black;
  width: 25%;
}

.skills-img-wrapper {
  flex-shrink: 0;
}

.skills-img {
  max-width: 20px;
}

.social-block {
  padding: 20px;
  @include block();
  @include flex();
  gap: 15px;
}

.social-title {
  margin-bottom: 20px;
  font-weight: 700;
  color: $white;
}
.social-link {
  display: flex;
}

.social-link img {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

@media screen and (max-width: 1000px) {
  .avatar {
    max-width: 300px;
    grid-column: span 3;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .profile-inner {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .profile-inner {
    grid-template-columns: repeat(1, 1fr);
  }

  .skills {
    grid-column: span 1;
  }

  .avatar {
    grid-column: span 1;
  }

  .desc {
    grid-column: span 1;
  }
}

@media screen and (max-width: 500px) {
  .desc-top-text {
    font-size: 16px;
    padding-left: 40px;
    padding-right: 10px;
  }

  .skills-img {
    max-width: 8px;
  }

  .skills-name {
    width: 35%;
  }

  .skills-item {
    gap: 5px;
  }
}
</style>