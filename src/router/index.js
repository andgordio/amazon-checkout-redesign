import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A1 from '@/components/A/1/A1.vue'
import A2 from '@/components/A/2/A2.vue'
import B1 from '@/components/B/1/B1.vue'
import B2 from '@/components/B/2/B2.vue'
import B3 from '@/components/B/3/B3.vue'
import C1 from '@/components/C/1/C1.vue'
import C2a from '@/components/C/2a/C2a.vue'
import C2b from '@/components/C/2b/C2b.vue'
import C3 from '@/components/C/3/C3.vue'
import D1 from '@/components/D/1/D1.vue'

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
    },
    {
      path: '/C/1',
      name: 'C1',
      component: C1
    },
    {
      path: '/C/2a',
      name: 'C2a',
      component: C2a
    },
    {
      path: '/C/2b',
      name: 'C2b',
      component: C2b
    },
    {
      path: '/C/3',
      name: 'C3',
      component: C3
    },
    {
      path: '/D/1',
      name: 'D1',
      component: D1
    }
  ]
})
