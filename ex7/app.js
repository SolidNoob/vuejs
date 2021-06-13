const app = Vue.createApp({

    data() {
        return {
            counter: 0,
        }
    },

    watch: {
        result(value) {
            let that = this
            setTimeout(function () {
                that.counter = 0
            }, 5000)
        }
    },

    computed: {
        result() {
            if (this.counter == 37)
                return this.counter
            else if (this.counter < 37)
                return 'Not there yet'
            else return 'Too much!'
        }
    },

    methods: {
        add(number) {
            this.counter = this.counter + number
        }
    }

})

app.mount('#assignment')