<template>
  <div class="hello padding-vert-xl padding-hor-xl">
    <div class="padding-vert-l padding-hor-l" style="max-width: 600px; margin: 40px auto;">
      <h1>Amazon Checkout Redesign Concept</h1>
      <div class="padding-vert-l">
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 120px;">Platform:</div>
          <div>Desktop</div>
        </div>
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 120px;">Latest iteration:</div>
          <div>Testing different navigation design</div>
        </div>
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 120px;">Latest versions:</div>
          <div><router-link tag="a" to="/A/1">Checkout-centric design</router-link> and <router-link tag="a" to="/A/2">Steps-based design</router-link></div>
        </div>
      </div>
      <hr>
      <div class="padding-vert-m">
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 120px;">Created by:</div>
          <div><a href="http://twitter.com/andgordy">And Gordy</a></div>
        </div>
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 120px;">Latest update:</div>
          <div>Nov 3</div>
        </div>
      </div>
    </div>
    <div style="position: fixed; bottom: 120px; right: 40px;">
      <div class="text-grey">Prototype Manager navigation is here</div> 
    </div>
    <div style="position: fixed; bottom: 65px; right: 80px;">
      <img src="../../../assets/pui-icons-v-0-1/img-arrow-pm.png" width="32px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
