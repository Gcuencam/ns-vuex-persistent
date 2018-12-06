const NSVuexPersistent = function (states) {
  return store => {
    // Init hook.
    let storageStr = localStorage.getItem('ns-vuex-persistant');
    if (storageStr) {
      let _state = Object.assign({}, store.state);
      _state = Object.assign(_state, JSON.parse(storageStr));
      store.replaceState(_state)
    }
    store.subscribe((mutation, state) => {
      // Suscribe hook.
      let _state = {};
      for (let i = 0, len = states.length; i < len; i++) {
        _state[states[i]] = state[states[i]];
      }
      localStorage.setItem('ns-vuex-persistant', JSON.stringify(_state));
    });
  }
}

export default NSVuexPersistent;