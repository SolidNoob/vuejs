const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    }
  },
  methods: {
    addCounter(number) {
      this.counter = this.counter + number
    },
    reduceCounter(number) {
      this.counter = this.counter - number
    },
    setName(event) {
      this.name = event.target.value 
    }
  }
})

app.mount('#events')
