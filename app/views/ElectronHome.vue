<template>
  <section class="home section">
    <div class="home__wrapper wrapper">
      <header class="home__header">
        <img
          class="home__logo"
          src="@/assets/vue.png"
          alt=""
        >
        <h2 class="home__heading heading heading--h2">
          Electron Password Manager
        </h2>
        <p class="home__paragraph paragraph">
          Electron application created for learning purposes
        </p>
      </header>
      <button
        class="home__button home__button--upload"
        @click="upload"
      >
        Upload a file
      </button>
      <p class="home__paragraph paragraph">
        Or
      </p>
      <router-link
        class="home__button home__button--create"
        :to="{ name: 'Manager' }"
      >
        Create new
      </router-link>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ElectronHome',
  mounted() {
    window.electron.receive('file-upload-success', (data) => {
      let json;

      try {
        json = JSON.parse(data);

        this.setJson(json);

        this.$router.push({ name: 'Manager' });
      } catch (error) { return; }
    });
  },
  methods: {
    ...mapMutations('file', [
      'setJson',
    ]),
    upload() {
      window.electron.send('file-upload');
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &__button {
    border: none;
    color: $white;
    cursor: pointer;
    display: block;
    font-size: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 150px;
    outline: none;
    padding: .25em .75em;
    text-align: center;
    text-decoration: none;

    &--upload {
      background-color: $ocean-green;

      &:focus,
      &:hover {
        background-color: $sea-green;
      }
    }

    &--create {
      background-color: $pickled-bluewood;

      &:focus,
      &:hover {
        background-color: $pickled-bluewood-2;
      }
    }
  }
}
</style>