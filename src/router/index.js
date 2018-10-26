import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewBoardgame from '@/components/NewBoardgame'
import ViewBoardgame from '@/components/ViewBoardgame'
import EditBoardgame from '@/components/EditBoardgame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-boardgame',
      component: NewBoardgame
    },
    {
      path: '/edit/:boardgame_id',
      name: 'edit-boardgame',
      component: EditBoardgame
    },
    {
      path: '/:boardgame_id',
      name: 'view-boardgame',
      component: ViewBoardgame
    },
  ]
})
