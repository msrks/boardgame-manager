<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Your Collections</h4></li>
      <li v-for="boardgame in boardgames" v-bind:key="boardgame.id" class="collection-item">
        <div class="chip">{{boardgame.pub_year}}</div>
        {{boardgame.name}}
        <router-link class="secondary-content" v-bind:to="{name: 'view-boardgame', params: {boardgame_name: boardgame.name}}"><i class="fa fa-eye"></i></router-link>
      </li>
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
      boardgames: []
    }
  },
  created() {
    db.collection('games').get().then(
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
.nomargin{
  padding: 0px;
}
</style>

