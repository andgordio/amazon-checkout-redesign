<template>
  <div class="main-hello-container hello padding-vert-s padding-hor-xl">
    <div class="padding-vert-l padding-hor-l" style="max-width: 400px; margin: 0 auto;">
      <div class="padding-vert-l">
        <h1 style="font-size: 32px; font-weight: 900;">Amazon Checkout Redesign Concept</h1>
      </div>
      <div class="padding-vert-m">
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 140px;">Platform</div>
          <div>Desktop</div>
        </div>
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 140px;">Latest iteration</div>
          <div>Shipping and payment design</div>
        </div>
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 140px;">Latest versions</div>
          <div><router-link tag="a" to="/C/3">C3: Login, animation, layout</router-link></div>
        </div>
      </div>
      <!-- <hr> -->
      <div class="padding-vert-xs">
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 140px;">Created by</div>
          <div><a href="http://twitter.com/andgordy" target="_blank">And Gordy</a></div>
        </div>
        <div class="padding-vert-xs flexy">
          <div class="fixed text-grey" style="width: 140px;">Latest update</div>
          <div>Nov 22</div>
        </div>
      </div>
    </div>
    <!-- <div style="position: fixed; bottom: 120px; right: 40px;">
      <div class="text-grey">Prototype Manager navigation is here</div> 
    </div>
    <div style="position: fixed; bottom: 65px; right: 80px;">
      <img src="../../../assets/pui-icons-v-0-1/img-arrow-pm.png" width="32px">
    </div> -->
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
a {
  text-decoration: none;
  color: #409EFF;
}
.main-hello-container {
  font-family: 'Roboto', -apple-system, 'Segoe UI', sans-serif;
}
</style>
