<template>
  <div id="edit-boardgame">
    <h3>Edit Boardgame</h3>
    <div class="row">
      <form @submit.prevent="updateBoardgame" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="name" required>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="pub_year" required>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="url" required>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="url_image" required>
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
  name: 'edit-boardgame',
  data() {
    return {
      name: null,
      pub_year: null,
      url: null,
      url_image: null,
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('games').where('name', '==', to.params.boardgame_name)
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.name = doc.data().name
          vm.pub_year = doc.data().pub_year
          vm.url = doc.data().url
          vm.url_image = doc.data().url_image
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('games').where('name', '==', this.$route.params.boardgame_name)
      .get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.name = doc.data().name
          this.pub_year = doc.data().pub_year
          this.url = doc.data().url
          this.url_image = doc.data().url_image
        })
      })
    },
    updateBoardgame(){
      db.collection('games').where('name', '==', this.$route.params.boardgame_name)
      .get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({
            name: this.name,
            pub_year: this.pub_year,
            url: this.url,
            url_image: this.url_image
          })
          .then(() => {
            this.$router.push({name: 'view-boardgame',
            params: {boardgame_name: this.name}})
          })
        })
      })      
    }
  }
}
</script>
