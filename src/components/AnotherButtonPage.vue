<template>
  <div>
    <div>
      <h1>{{ count }}</h1>
      <button @click="addOne"> Like </button>
    </div>
    <div>
      <router-link to="/">Back</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnotherButtonPage',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    addOne: function () {
      this.$store.dispatch('addOne')
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
