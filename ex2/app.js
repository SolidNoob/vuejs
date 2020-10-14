const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn Vue',
            courseGoalB: 'Learn how to cook',
            hrefLink: 'https://google.be'
        }
    },
    methods: {
        ouputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5)
                return this.courseGoalA
            else
                return this.courseGoalB
        }
    }
})

app.mount('#user-goal')