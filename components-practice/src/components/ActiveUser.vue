<template>
    <li>
        <h2>Username: {{ username }}</h2>
        <h3>Age: {{ age }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {

    },
}
</script>

<style>

</style>
