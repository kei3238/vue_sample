<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
    <button @click="addOne"> Like </button>
    <h1> Input field </h1>
    <input v-model="input">
    <p>{{ input }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
      input: ''
    }
  },
  methods: {
    addOne: function () {
      this.count += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
