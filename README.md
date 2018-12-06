
[![GitHub license](https://img.shields.io/github/license/Gcuencam/ns-vuex-persistent.svg)](https://github.com/Gcuencam/ns-vuex-persistent/blob/master/LICENSE)

## Install

```
npm install --save ns-vuex-persistent
```

## Use

```javascript
import NSVuexPersistent from 'ns-vuex-persistent';

const store = new Vuex.Store({
  state: {
    // Your state.
  },
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: [NSVuexPersistent([
    // Here you will define the states that you want to be persistent.
  ])]
});
```