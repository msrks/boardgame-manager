<template>
  <div id="new-boardgame">
    <h3>New Boardgame</h3>
    <div class="row">
      <form @submit.prevent="saveBoardgame" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>Title</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="pub_year" required>
            <label>Published Year</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="url" required>
            <label>BGG URL</label>
          </div>
          <button type="submit" class="btn">Submit</button>
          <router-link to="/" class="btn grey">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'new-boardgame',
  data() {
    return {
      name: null,
      pub_year: null,
      url: null
    }
  },
  methods: {
    saveBoardgame () {
      db.collection('games').add({
        name: this.name,
        pub_year: this.pub_year,
        url: this.url
      })
      .then(docRef => this.$router.push('/'))
      .catch(err => console.log(err))
    }
  }
}
</script>
