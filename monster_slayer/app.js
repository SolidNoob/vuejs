
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    computed: {
        monsterBarStyle() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyle() {
            return { width: this.playerHealth + '%' }
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomNumberBetween(5, 12)
            this.monsterHealth -= attackValue
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomNumberBetween(8, 15)
            this.playerHealth -= attackValue
        }
    }
})

app.mount('#game')
