const app = Vue.createApp({
    data() {
        return {
            name: 'Antho',
            age: 29,
            imgUrl: 'https://images.ctfassets.net/hrltx12pl8hq/VZW7M82mrxByGHjvze4wu/216d9ff35b6980d850d108a50ae387bf/Carousel_01_FreeTrial.jpg?fit=fill&w=800&h=450'
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random()
        }
    }
})

app.mount('#assignment')