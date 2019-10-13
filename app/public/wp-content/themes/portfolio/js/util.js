export const throttle = (fnc, limit) => {
  let isThrottled;
  return function() {
    const args = arguments;
    const context = this;
    if (!isThrottled) {
      fnc.apply(context, args);
      isThrottled = true;
      setTimeout(() => (isThrottled = false), limit);
    }
  };
};

export const debounce = (fnc, delay) => {
  let isDebounced;
  return function() {
    const args = arguments;
    const context = this;
    clearTimeout(isDebounced);
    isDebounced = setTimeout(() => fnc.apply(context, args), delay);
  };
};
