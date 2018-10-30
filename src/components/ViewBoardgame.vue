<template>
  <div id="view-boardgame">
    <div class="row">
      <div class="col s9">
        <ul class="collection with-header">
          <li class="collection-header"><h4>{{name}}</h4></li>
          <li class="collection-item">Published Year: {{pub_year}}</li>
          <li class="collection-item">URL: <a :href="url">Board Game Geek</a></li>
        </ul>
      </div>
      <div class="col s3 center">
        <img :src="image" height=150>
      </div>
    </div>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteBoardgame" class="btn red">Delete</button>
    <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'edit-boardgame', params: {boardgame_name: name}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-boardgame',
  data() {
    return {
      name: null,
      pub_year: null,
      url: null,
      image: null
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
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData',
    name: 'fetchImage'
  },
  methods: {
    fetchData() {
      db.collection('games').where('name', '==', this.$route.params.boardgame_name)
      .get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.name = doc.data().name
          this.pub_year = doc.data().pub_year
          this.url = doc.data().url
        })
      })
    },
    fetchImage() {
      fetch("https://bgg-json.azurewebsites.net/thing/31260")
      .then(res => res.json())
      .then(json => this.image=json.image)
    },
    deleteBoardgame(){
      if (confirm("Are you sure?")) {
        db.collection('games').where('name', '==', this.$route.params.boardgame_name)
        .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
            this.$router.push('/')
          })
        })
      }
    }
  }
}
</script>

<style>
  img {
    margin: 20px;
  }
</style>
