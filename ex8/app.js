const app = Vue.createApp({
    
    data() {
        return {
            counter: 0,
        }
    },

    computed: {
      message() { 
          if (this.counter < 37) 
            return 'Not there yet !'
          else if (this.counter > 37)
            return 'Too much !'
          else
            return this.counter
      }  
    },

    methods: {
        increaseCounter(number) {
            this.counter += number
        }
    },

    watch: {
        counter() {
            if(this.counter >= 37) {
                const that = this
                setTimeout(function() {
                    that.counter = 0               
                }, 5000)
            }
        }
    }
})

app.mount('#assignment')