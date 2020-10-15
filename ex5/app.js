const app = Vue.createApp({

    data() {
        return {
            contentA: '',
            contentB: '',
            confirmedContentB: '',
        }
    },

    methods: {
        doStuff() {
            alert('The button was clicked')
        },
        setContentA(event) {
            this.contentA = event.target.value
        },
        setContentB(event) {
            this.contentB = event.target.value
        },
        setConfirmedContentB() {
            this.confirmedContentB = this.contentB
        }
    }

})

app.mount('#assignment')