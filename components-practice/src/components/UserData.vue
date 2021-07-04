<template>
  <form @submit.prevent="addUser">
    <div>
      <label>Name:</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age:</label>
      <input type="number" v-model="enteredAge" />
    </div>
    <div>
      <button>Add Username</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: 0,
    };
  },
  methods: {
    addUser() {
      if (this.enteredName && this.enteredAge > 0) {
        this.$emit("add-user", this.enteredName, parseInt(this.enteredAge));
        this.enteredName = ''
        this.enteredAge = 0
      }
    },
  },
};
</script>

<style>
</style>
