import { createStore } from 'vuex';
import file from '@/store/modules/file.js';

const store = createStore({
  modules: {
    file,
  },
});

export default store;