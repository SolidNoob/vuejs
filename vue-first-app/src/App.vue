<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact 
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="true"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";

export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "gregory",
          name: "Gregory Robs",
          phone: "0123 4567 89",
          email: "gregory@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 6543 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>
