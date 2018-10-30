import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewBoardgame from '@/components/NewBoardgame'
import ViewBoardgame from '@/components/ViewBoardgame'
import EditBoardgame from '@/components/EditBoardgame'
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new',
      name: 'new-boardgame',
      component: NewBoardgame,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:boardgame_name',
      name: 'edit-boardgame',
      component: EditBoardgame,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:boardgame_name',
      name: 'view-boardgame',
      component: ViewBoardgame
    },
  ]
})

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged in
    if (firebase.auth().currentUser) {
      // Go to Dashboard
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }    
  } else {
    // Proceed to route
    next()
  }   
})

export default router