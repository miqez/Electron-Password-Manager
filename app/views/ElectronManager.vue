<template>
  <section 
    class="manager section"
    :class="{ 'manager--initial': isJsonEmpty }"
  >
    <header
      v-if="isJsonEmpty"
      class="manager__header"
    >
      <h2 class="manager__heading heading heading--h2">
        No entries at the moment...
      </h2>
      <button class="manager__button">
        Add Entry
      </button>
    </header>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ElectronManager',
  computed: {
    ...mapGetters('file', [
      'isJsonEmpty',
      'json',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.manager {
  &--initial {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__button {
    @extend %button;

    background-color: $ocean-green;
    color: $white;

    &:focus,
    &:hover {
      background-color: $sea-green;
    }
  }
}
</style>