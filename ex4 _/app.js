const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      offset: 0,
      name: '',
      confirmedName: '',
    }
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },
    addCounter(){
      this.counter += parseInt(this.offset)
    },
    removeCounter(){
      this.counter -= parseInt(this.offset)
    },
    setName(event){
      this.name = event.target.value
    }
  }
})

app.mount("#events")