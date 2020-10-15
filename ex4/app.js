const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(param) {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    }
  }
});

app.mount('#events');
