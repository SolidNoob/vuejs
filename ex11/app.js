const app = Vue.createApp({

    data() {
        return { 
            enteredTask: '',
            tasks: [],
            tasksAreVisible: true,
        }
    },

    computed: {
        buttonCaption() {
            return this.tasksAreVisible ? 'Hide List' : 'Show List'
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredTask)
        },
        toggleVisibility() {
            this.tasksAreVisible = ! this.tasksAreVisible
        }
    }

})

app.mount('#assignment');