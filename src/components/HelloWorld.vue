<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
    <md-button class="md-raised" @click="addOne">Like</md-button>
    <h1> Other Vue Material samples! </h1>

    <div id="container">

      <md-field>
        <label>Type here!</label>
        <md-input></md-input>
      </md-field>

      <div>
        <md-field>
          <md-select v-model="country" name="country" id="country" placeholder="Country">
            <md-option value="australia">Australia</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>
      </div>

      <div>
        <md-field>
          <label for="movies">Movies</label>
          <md-select v-model="movies" name="movies" id="movies" md-dense multiple>
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-field>
      </div>

      <md-datepicker v-model="selectedDate" md-immediately />

      <div>
        <md-radio v-model="radio" :value="false">Boolean</md-radio>
        <md-radio v-model="radio" value="my-radio">String</md-radio>
      </div>

      <md-dialog-confirm
        :md-active.sync="active"
        md-title="Use Google's location service?"
        md-content="Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running."
        md-confirm-text="Agree"
        md-cancel-text="Disagree"
        @md-cancel="onCancel"
        @md-confirm="onConfirm" />
      <md-button class="md-primary md-raised" @click="active = true">Confirm</md-button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
      movies: [],
      selectedDate: null,
      radio: false,
      active: false,
      value: null
    }
  },
  methods: {
    addOne: function () {
      this.count += 1
    },
    onConfirm () {
      this.value = 'Agreed'
    },
    onCancel () {
      this.value = 'Disagreed'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

#container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
</style>
