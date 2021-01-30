<template>
  <section class="feed__wrapper">
    <nav class="nav">
      <div class="nav__search">
        <svg-icon icon="search" />
        <input type="text" name="" placeholder="Search" />
      </div>
      <div class="nav__buttons">
        <button class="nav__btn"><svg-icon icon="bell" /></button>
        <button class="nav__btn"><svg-icon icon="send" /></button>
        <button class="nav__btn-special">Add photo</button>
      </div>
    </nav>
    <div class="stories">
      <div class="section__header">
        <span class="section__title">Stories</span>
        <div class="section__header__buttons">
          <button class="section__btn-stories">Watch all</button>
        </div>
      </div>
      <section class="stories__inner">
        <div class="stories__card stories__card--mine">
          <div class="stories_card__author">
            <img src="@/assets/images/users/test.jpg" alt="avatar" />
          </div>
        </div>
        <div class="stories__card" v-for="n in 13" :key="n">
          <div class="stories_card__author">
            <img src="http://placeimg.com/80/80/people" alt="avatar" />
          </div>
        </div>
      </section>
    </div>
    <section class="feed">
      <div class="section__header">
        <span class="section__title">Feed</span>
        <div class="section__header__buttons">
          <button class="section__btn section__btn--active">Latest</button>
          <button class="section__btn">Popular</button>
        </div>
      </div>
      <section class="feed__content" ref="feed">
        <div
          class="card__overlay"
          @dblclick="like($event)"
          v-for="n in 10"
          :key="n"
        >
          <article class="card">
            <img
              class="card__image"
              src="http://placeimg.com/440/580/people"
              alt="image"
            />
            <div class="card__info">
              <div class="card__author__info">
                <div class="card__author__avatar">
                  <img src="@/assets/images/users/test.jpg" alt="avatar" />
                </div>
                <div class="card__author">{{ fakeUser() }}</div>
              </div>
              <div class="card__actions">
                <button class="action__btn btn-like">
                  <svg-icon icon="heart" /> {{ fakeNumber(3000) }}
                </button>
                <button class="action__btn">
                  <svg-icon icon="comment" /> {{ fakeNumber(300) }}
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import faker from "faker";
import Macy from "macy";
export default {
  mounted() {
    this.macy = Macy({
      container: this.$refs.feed,
      trueOrder: false,
      waitForImages: true,
      margin: 5,
      columns: 3,
      breakAt: {
        1200: 4,
        940: 2,
        520: 2,
        400: 1
      }
    });
  },

  setup() {
    const like = event => {
      let target = event.target;
      let parentClass = target.parentNode.parentNode.classList.value;
      let card = event.target.closest(".card");
      let btns = card.childNodes[1].childNodes[1];
      let likeBtn = btns.childNodes[0];

      if (
        (parentClass == "card__info" || parentClass == "card__author__info") &&
        target.classList != "btn-like"
      ) {
        // Like or comment.
        console.log("dupa");
      } else {
        let likes = parseInt(likeBtn.innerText);

        if (card.classList.contains("liked")) {
          /* Unlike */
          card.classList.remove("liked");
          let likedTemplate = `<svg class="icon fill-current" data-v-d7d0cc50=""><use xlink:href="#heart"></use></svg> ${likes -
            1}`;
          likeBtn.innerHTML = likedTemplate;
        } else {
          /* Like */
          card.classList.add("liked");

          let likedTemplate = `<svg class="icon fill-current" data-v-d7d0cc50=""><use xlink:href="#heart-filled"></use></svg> ${likes +
            1}`;
          likeBtn.innerHTML = likedTemplate;
        }
      }
    };
    const fakeName = () => {
      return faker.name.findName();
    };
    const fakeUser = () => {
      return faker.internet.userName();
    };
    const fakeNumber = range => {
      return faker.random.number(range);
    };
    return { fakeName, fakeUser, fakeNumber, like };
  }
};
</script>

<style scoped lang="scss">
.stories__inner {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  margin-top: 20px;
}
.feed__wrapper {
  padding-left: 20px;
  padding-right: 30px;
}
.stories_card__author img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}
.stories_card__author {
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}
.stories__card--mine .stories_card__author {
  border: 3.5px solid #4b6bfd;
  border-radius: 50%;
}
.stories__card--mine .stories_card__author::after {
  z-index: 1;
  background-color: rgba(75, 107, 253, 0.5);
  width: 61px;
  height: 61px;
  background-image: url(~@/assets/icons/plus-thin.svg);
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
}
.stories__card--mine .stories_card__author::before {
  display: none;
}
.stories_card__author::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 74px;
  height: 74px;
  background-color: #3c3f51;
  z-index: -1;
  border-radius: 50%;
}
.stories_card__author::before {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgb(226, 51, 107);
  background: linear-gradient(
    45deg,
    rgba(226, 51, 107, 1) 0%,
    rgba(252, 172, 70, 1) 100%
  );
  z-index: -1;
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.section__title {
  font-size: 1.5em;
  font-weight: 500;
  margin-left: 10px;
}
.section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.section__header:first-of-type {
  margin-top: 50px;
}
.section__btn-stories {
  padding: 10px 20px;
  padding-right: 0;
  padding-left: 50px;
  font-family: "Poppins", sans-serif;
  border: none;
  color: #fff;
  background: transparent;
  font-size: 1em;
  position: relative;
  cursor: pointer;
}
.section__btn-stories::after {
  content: "";
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #7b7d8a;
  background-image: url(~@/assets/icons/play.svg);
  background-size: 30%;
  background-position: 55% center;
  background-repeat: no-repeat;
}
.section__btn-stories:hover {
  color: #eee;
}
.section__btn {
  margin: 10px 20px;
  padding: 0;
  margin-right: 0;
  margin-left: 40px;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: #9d9fa8;
  position: relative;
}
.section__btn--active {
  color: #fff;
}
.section__btn--active::after {
  content: "•";
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translateX(-50%);
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__search {
  padding: 10px 13px;
  background-color: #484b5b;
  border-radius: 7px;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0;
}
.nav__search .icon {
  margin-right: 15px;
  font-size: 0.9em;
}
.nav__search input {
  background: transparent;
  border: none;
  font-size: 1em;
  outline: none;
  padding: 10px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  color: #fff;
  width: 250px;
  font-family: "Poppins", sans-serif;
}
.nav__search input:focus {
  background-color: #424553;
}
.nav__btn-special {
  padding: 11px 20px;
  border: none;
  font-size: 0.9em;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-left: 50px;
  border-radius: 10px;
  cursor: pointer;
  background: rgb(226, 51, 107);
  background: linear-gradient(
    45deg,
    rgba(226, 51, 107, 1) 0%,
    rgba(252, 172, 70, 1) 100%
  );
  color: #fff;
  position: relative;
  transition: transform 0.4s;
  margin-left: 10px;
}
.nav__btn-special:focus,
.nav__btn-special:hover {
  transform: scale(1.02);
  transition: transform 0.4s;
}
.nav__btn-special::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  background-image: url(~@/assets/icons/plus.svg);
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
}
.nav__btn {
  height: 40px;
  padding: 0 15px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.4s;
}
.nav__btn:focus,
.nav__btn:hover {
  background-color: #424553;
  transition: background-color 0.4s;
}
.nav__btn .icon {
  font-size: 1.5em;
}
.feed__content {
  margin-top: 20px;
  margin-right: 20px;
  margin: 20px 0;
}
.card__overlay {
  width: 350px;
}
.card {
  display: inline-block;
  padding: 10px;
  border-radius: 20px;
  transition: background-color 0.4s;
  cursor: pointer;
  margin: 0 10px;
  position: relative;
  z-index: 1;
}
.card:hover {
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.4s;
}
.liked {
  z-index: 2;
  &::after {
    content: "";
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: url(~@/assets/icons/heart-filled.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;
    animation: liked 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
  }
}
@keyframes liked {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.7);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}
.card__image {
  display: block;
  margin: 0 auto;
  max-width: 350px;
  object-fit: contain;
  border-radius: 20px;
}
.card__info {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__author__avatar img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
}
.card__author__avatar {
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__author__avatar::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 37px;
  height: 37px;
  background-color: #3c3f51;
  z-index: -1;
  border-radius: 50%;
}
.card__author__avatar::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgb(226, 51, 107);
  background: linear-gradient(
    45deg,
    rgba(226, 51, 107, 1) 0%,
    rgba(252, 172, 70, 1) 100%
  );
  z-index: -1;
  border-radius: 50%;
}
.card__actions__box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__author__info {
  display: flex;
  align-items: center;
}
.card__author {
  margin-left: 10px;
}
.action__btn {
  font-size: 0.9em;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
}
.action__btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.action__btn .icon {
  font-size: 1.2em;
  margin-right: 5px;
}
</style>
