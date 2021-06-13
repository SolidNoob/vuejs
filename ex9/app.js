const app = Vue.createApp({

    data() {
        return {
            userInput: '',
            visibility: true,
            color: ''
        }
    },

    methods: {
        toggleVisibility(){
            this.visibility = ! this.visibility
        }
    }

})

app.mount('#assignment')