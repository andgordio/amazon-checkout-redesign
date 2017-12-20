import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A1 from '@/components/A/1/A1.vue'
import A2 from '@/components/A/2/A2.vue'
import B1 from '@/components/B/1/B1.vue'
import B2 from '@/components/B/2/B2.vue'
import B3 from '@/components/B/3/B3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/A/1',
      name: 'A1',
      component: A1
    },
    {
      path: '/A/2',
      name: 'A2',
      component: A2
    },
    {
      path: '/B/1',
      name: 'B1',
      component: B1
    },
    {
      path: '/B/2',
      name: 'B2',
      component: B2
    },
    {
      path: '/B/3',
      name: 'B3',
      component: B3
    }
  ]
})
