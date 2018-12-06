
[![npm version](https://badge.fury.io/js/nativescript-vuex-persistent.svg)](https://badge.fury.io/js/nativescript-vuex-persistent)

[![GitHub license](https://img.shields.io/github/license/Gcuencam/ns-vuex-persistent.svg)](https://github.com/Gcuencam/ns-vuex-persistent/blob/master/LICENSE)

## Install

```
npm install --save nativescript-vuex-persistent
```

## Use

```javascript
import NSVuexPersistent from 'nativescript-vuex-persistent';

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