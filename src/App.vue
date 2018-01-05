<template>
  <div id="app">
    <router-view/>
    <PrototypeManager :managerProps="managerProps"/>
  </div>
</template>

<script>
import PrototypeManager from './components/PrototypeManager-v-0-3'

export default {
  name: 'app',
  data () {
    return {
      toggleManager: false,
      managerProps: {
        name: 'Amazon Checkout Redesign',
        description: 'An attempt to improve the perfect',
        author: 'And Gordy',
        website: 'http://twitter.com/andgordy',
        date: 'Jan 3 2017',
        iterations: [
          {
            name: 'C',
            description: 'Shipping and payment design',
            versions: [
              {
                name: '1',
                description: 'Basic layout, functionality and validation'
              },
              {
                name: '2a',
                description: 'Instance manager: quick selection + manager'
              },
              {
                name: '2b',
                description: 'Instance manager: quick menu only'
              },
              {
                name: '3',
                description: 'Animation, composition, details'
              }
            ]
          },
          {
            name: 'B',
            description: 'Cart design',
            versions: [
              {
                name: '1',
                description: 'Basic layout and items management'
              },
              {
                name: '2',
                description: 'Feature: quick preview'
              },
              {
                name: '3',
                description: 'Animation, composition, details'
              }
            ]
          },
          {
            name: 'A',
            description: 'Navigation design',
            versions: [
              {
                name: '1',
                description: 'Checkout-centric approach'
              },
              {
                name: '2',
                description: 'Steps-based design'
              }
            ]
          }
          // {
          //   name: 'B',
          //   description: 'Steps-based design',
          //   versions: [
          //     {
          //       name: '1',
          //       description: 'Navigation design'
          //     }
          //   ]
          // }
        ]
      }
    }
  },
  components: {
    PrototypeManager
  }
}
</script>

<style lang="scss">
@import 'pui-v-0-2.scss';
</style>