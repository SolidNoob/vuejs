const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn Vue',
            courseGoalB: 'Learn how to cook',
            //hrefLink: 'https://google.be'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5)
                return this.courseGoalA
            else
                return this.courseGoalB
        },
        ouputHrefLink() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5)
                return 'https://google.be'
            else
                return 'https://www.wikipedia.com'
        }
    }
})

app.mount('#user-goal')