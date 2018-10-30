<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel blue darker-1 white-text center">
            <h3>Login</h3>
            <form>
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="email">
                <label class="white-text" for="email">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label class="white-text" for="password">Password</label>
              </div>              
              <button @click="login" class="btn btn-large grey lighten-4 black-text">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(e){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`You are logged in as ${this.email}`)
          this.$router.go({path: this.$router.path})
        }, err => alert(err.message))
      e.preventDefault()
    }
  }
}
</script>
