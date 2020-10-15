const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    }
  },
  computed: {
    fullname() {
      if (this.name === '')
        return ''
      return this.name + ' ' + 'Doe'
    }
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Form is submitted !')
    },
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
