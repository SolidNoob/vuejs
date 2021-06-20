const app = Vue.createApp({
  data() {
    return {
        userGoal: '',
        goals: []  
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.userGoal)
    },
    removeGoal(index){
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
