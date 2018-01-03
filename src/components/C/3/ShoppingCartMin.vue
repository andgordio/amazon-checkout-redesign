<template>
<transition name="info-appear" appear>
  <div class="padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3 style="font-size: 19px;">Shopping cart</h3>
    <div class="padding-vert-xs"></div>
    <div class="padding-vert-m flexy align-top" v-for="(item, i) in cart" :key="i">
      <div class="fixed" style="width: 60px;">
        <img :src="item.img" width="40px">
      </div>
      <div>
        <div>{{item.name}}</div>
        <div class="text-grey" style="padding-top: 4px;">${{item.price}}</div>
        <div class="text-grey" style="padding-top: 4px;">Quantity: {{item.quantity}}</div>
      </div>
      <!-- <div class="fixed" style="width: 100px;">$ {{item.price}}</div>
      <div class="fixed" style="width: 100px;">{{item.quantity}}</div>
      <div class="fixed" style="width: 20px;">x</div> -->
    </div>
    <div class="">
      <button style="color:#409EFF; border-bottom: 1px dashed; border-radius: 0;" @click="editPressed()">Edit</button>
    </div>
  </div>
</transition>
</template>


<script>
export default {
  name: 'ShoppingCartMin',
  props: [
    'cart'
  ],
  data () {
    return {
    }
  },
  methods: {
    editPressed () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      this.$emit('edit')
    }
  }
}
</script>

<style lang="scss" scoped>
.info-appear-enter-active, .info-appear-leave-active {
  transition: all .3s .2s;
}
.info-appear-enter, .info-appear-leave-to {
  opacity: 0;
}
</style>

