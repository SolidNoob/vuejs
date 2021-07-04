<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact
        name="Manuel Lorenz"
        phone-number="0123 45678 90"
        email-address="manuel@localhost.com"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phone-number="0987 6543 21"
        email-address="julie@localhost.com"
        is-favorite="0"
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
