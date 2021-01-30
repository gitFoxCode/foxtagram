<template>
  <aside class="nav">
    <div class="nav__logo">
      <img src="@/assets/images/instagram-logo.svg" alt="foxtagram logo" />
    </div>
    <div class="nav__profile">
      <div class="nav__profile__image">
        <img src="@/assets/images/users/test.jpg" alt="profile image" />
      </div>
      <span class="nav__profile__name">
        Michaelle Jong
      </span>
      <span class="nav__profile__link">
        @mi-jong
      </span>
    </div>
    <div class="nav__stats">
      <div class="nav__stat">
        <span class="nav__stat__value">46</span>
        <span class="nav_stat__title">Posts</span>
      </div>
      <div class="nav__stat">
        <span class="nav__stat__value">2.8k</span>
        <span class="nav_stat__title">Folowers</span>
      </div>
      <div class="nav__stat">
        <span class="nav__stat__value">526</span>
        <span class="nav_stat__title">Following</span>
      </div>
    </div>
    <section class="nav__content">
      <ul class="nav__btns">
        <router-link to="/">
          <li class="nav__btn "><svg-icon icon="feed" /> Feed</li>
        </router-link>

        <router-link to="explore">
          <li class="nav__btn"><svg-icon icon="compass" /> Explore</li>
        </router-link>

        <router-link to="notifications">
          <li class="nav__btn">
            <svg-icon icon="bell" /> Notifications
            <span class="nav__button-number">4</span>
          </li>
        </router-link>

        <router-link to="direct">
          <li class="nav__btn">
            <svg-icon icon="send" />Direct
            <span class="nav__button-number">1</span>
          </li>
        </router-link>

        <router-link to="igtv">
          <li class="nav__btn"><svg-icon icon="tv" /> IG TV</li>
        </router-link>

        <router-link to="stats">
          <li class="nav__btn"><svg-icon icon="stats" /> Stats</li>
        </router-link>

        <router-link to="settings">
          <li class="nav__btn"><svg-icon icon="settings" /> Settings</li>
        </router-link>

        <router-link to="logout">
          <li class="nav__btn nav__btn-last">
            <svg-icon icon="logout" /> Logout
          </li>
        </router-link>
      </ul>
    </section>
    <button class="aside__button" @click="changeAside"></button>
  </aside>
</template>

<script>
export default {
  setup() {
    const changeAside = () => {
      console.log("Schowaj :)");
    };
    return { changeAside };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #282a34;
  height: 100vh;
  position: absolute;
  width: 300px;
  top: 0;
  left: 0;
  padding-top: 30px;
}
.nav__logo img {
  width: 40%;
}
.nav__logo {
  display: flex;
  justify-content: center;
}
.nav__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav__profile__image img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
}
.nav__profile__image {
  width: 115px;
  height: 115px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__profile__image::after {
  content: "";
  position: absolute;
  width: 105px;
  height: 105px;
  background-color: #282a34;
  z-index: -1;
  border-radius: 50%;
}
.nav__profile__image::before {
  content: "";
  position: absolute;
  width: 110px;
  height: 110px;
  background: rgb(226, 51, 107);
  background: linear-gradient(
    45deg,
    rgba(226, 51, 107, 1) 0%,
    rgba(252, 172, 70, 1) 100%
  );
  z-index: -1;
  border-radius: 50%;
}
.nav__profile__name {
  font-weight: 500;
}
.nav__profile__link {
  margin-top: 10px;
  font-size: 0.8em;
  color: #7e7f85;
}
.nav__stats {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.nav__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav__stat:nth-of-type(2) {
  margin: 0 10px;
  border-left: 1px solid #393b44;
  border-right: 1px solid #393b44;
  padding: 0 10px;
}
.nav_stat__title {
  font-size: 0.8em;
  color: #7e7f85;
  margin-top: 10px;
}
.nav__stat__value {
  font-size: 0.9em;
}
.nav__btns {
  padding-left: 30px;
  margin-top: 20px;
}
.nav__btns a {
  color: #fff;
  text-decoration: none;
}
.nav__btn {
  padding: 15px;
  transition: background-color 0.4s;
  cursor: pointer;
  position: relative;
}
.nav__btn:hover {
  background-color: #252630;
  transition: background-color 0.4s;
}
.nav__btn .icon {
  margin-right: 20px;
}
.router-link-exact-active li {
  font-weight: 500;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 2px;
    height: 20px;
    border-radius: 5px;
    background: rgb(226, 51, 107);
    background: linear-gradient(
      45deg,
      rgba(226, 51, 107, 1) 0%,
      rgba(252, 172, 70, 1) 100%
    );
  }
}
/*.nav__btn--active::after{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 2px;
    height: 20px;
    border-radius: 5px;
    background: rgb(226,51,107);
    background: linear-gradient(45deg, rgba(226,51,107,1) 0%, rgba(252,172,70,1) 100%);
  }*/
.router-link-exact-active .icon {
  color: #ef725a;
}
.nav__content {
  font-size: 0.9em;
}
.nav__btn-last {
  margin-top: 20px;
  position: relative;
}
.nav__btn-last::before {
  content: "";
  position: absolute;
  width: 75%;
  height: 1px;
  background-color: #393b44;
  top: -10px;
  left: 0;
}
.aside__button {
  height: 55px;
  width: 30px;
  background: url(~@/assets/icons/aside-chevron.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  position: absolute;
  right: -1px;
  top: 636px;
  cursor: pointer;
}
.nav__button-number {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  color: #73757b;
}

@media (max-height: 800px) {
  .nav__btn-last {
    margin-top: 0;
  }
  .nav__btn-last::after {
    top: 0;
  }
  .aside__button {
    top: 627px;
  }
}
</style>
