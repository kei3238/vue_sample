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
  name: 'ButtonPage',
  data () {
    return {
      count: 0
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
