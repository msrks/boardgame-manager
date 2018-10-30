<template>
  <div id="navbar">
    <nav >
      <div class="nav-wrapper blue darker-1">
        <div class="container">
          <router-link to="/" class="brand-logo">
          Boardgame Manager
          </router-link>
          <ul class="right hide-on-med-and-down">
            <li v-if="isLoggedIn" class="black-text">{{currentUser}}</li>
            <li><router-link to='/'>Dashboard</router-link></li>
            <li v-if="!isLoggedIn"><router-link to='/login'>Login</router-link></li>
            <li v-if="isLoggedIn"><router-link to='/register'>New Account</router-link></li>
            <li v-if="isLoggedIn"><button @click="logout" class="btn black">Logout</button></li>   
            <li><a href="https://github.com/msrks/boardgame-manager" class="white-text"><i class="fab fa-github"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  data(){
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.go({path: this.$router.path})
      })
    }
  }
}
</script>

<style scoped>
.email {
  padding-right: 10px;
}
</style>
