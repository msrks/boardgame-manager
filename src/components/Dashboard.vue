<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>
          Collections
          <a class="btn-floating right" @click="isListView=false"><i class="material-icons right small blue darker-1">view_module</i></a>
          <a class="btn-floating right" @click="isListView=true"><i class="material-icons right small blue darker-1">view_headline</i></a>
        </h4>

      </li>
      <li v-if="isListView" v-for="boardgame in boardgames" v-bind:key="boardgame.id" class="collection-item">
        <div class="chip">{{boardgame.pub_year}}</div>
        {{boardgame.name}}
        <router-link class="secondary-content" v-bind:to="{name: 'view-boardgame', params: {boardgame_name: boardgame.name}}"><i class="fa fa-eye"></i></router-link>
      </li>
        <div class="card-grid">
          <div v-if="!isListView" v-for="boardgame in boardgames" v-bind:key="boardgame.id" class="card hoverable">
            <router-link v-bind:to="{name: 'view-boardgame', params: {boardgame_name: boardgame.name}}">
              <div class="card-image">
                <img :src="boardgame.url_image" class="dashboard-img">
              </div>
              <div class="card-content">
                <p class="black-text">{{boardgame.name}}<span class="chip l-margin">{{boardgame.pub_year}}</span></p>
              </div>
            </router-link>
          </div>
        </div>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'dashboard',
  data() {
    return {
      boardgames: [],
      isListView: false
    }
  },
  created() {
    db.collection('games').orderBy('name').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'pub_year': doc.data().pub_year,
            'url': doc.data().url,
            'url_image': doc.data().url_image,
          }
          this.boardgames.push(data)
        })
      }
    )
  }
}
</script>

<style scoped>
.collection-header a{
  margin-right: 7px;
}
.l-margin {
  margin-left: 3px;
}
.card-image {
  height: 210px;
}
.dashboard-img {
  height: 220px;
  object-fit: cover;
  object-position: 50% 0%;
  margin: 0px !important; 
}
.card-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 10px;
}
</style>



