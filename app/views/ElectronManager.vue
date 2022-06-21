<template>
  <section class="manager section" />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ElectronManager',
  computed: {
    ...mapGetters('file', [
      'json',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.manager {}
</style>