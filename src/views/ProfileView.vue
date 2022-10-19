<template>
  <div class="profile">
    <div class="profile-card">
      <div class="profile-img-block">
        <img src="@/assets/img/itsme.png" alt="me and my cat" />
      </div>
      <div class="profile-desc">
        <div class="profile-top">
          <div class="profile-top-circle">
            <img src="@/assets/img/face.png" alt="face" />
          </div>
          <p class="profile-top-text">Curriculum Vitae</p>
        </div>
        <p class="profile-text">Hi, I'm a Frontend Developer</p>
        <span class="profile-text">Hire me</span>
        <div class="profile-social"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profile {
  width: 100%;
  height: 200vh;
  background-color: #12b0c9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-card {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
}

.profile-img-block {
  border: 3px solid #000;
  overflow: hidden;
  border-radius: 20px;
  padding: 20px;
  /* background-color: white; */
  box-shadow: 3px 3px 0px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
}

.profile-img-block img {
  max-width: 50%;
  display: flex;
}

.profile-desc {
  background-color: #fff;
  border: 3px solid #000;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  border-top-left-radius: 0;
  max-width: 500px;
  width: 100%;
}

.profile-top {
  position: absolute;
  top: -30px;
  left: -3px;
  display: flex;
  border: 3px solid #000;
  border-radius: 20px;
}

.profile-top-circle {
  width: 60px;
  height: 60px;
  border: 3px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: red;
}

.profile-top-circle img {
  width: 100%;
}

.profile-top-text {
  padding: 0 20px;
  background-color: red;
}
</style>