<template>
<transition name="info-appear" appear>
  <div class="padding-vert-m padding-hor-l fixed flexy align-top" style="width: 50%">
    <div class="fixed" style="width: 48px; margin-right: 12px;">
      <img src="./../../../assets/icn-check-cart.png" style="width:48px;" alt="">
    </div>
    <div style="padding-top: 12px;">
      <div style="font-size: 19px; font-weight: 900; padding-bottom: 8px;">Shopping cart</div>
      <div class="flexy align-top" style="padding-top: 10px;" v-for="(item, i) in cart" :key="i">
        <div class="fixed" style="width: 64px; margin-right: 16px;">
          <img :src="item.img" width="64px">
        </div>
        <div>
          <div>{{item.name}}</div>
          <div class="text-grey" style="font-size: 14px; padding-top: 6px;">${{item.price}}</div>
          <div class="text-grey" style="font-size: 14px; padding-top: 2px;">x{{item.quantity}}</div>
        </div>
        <!-- <div class="fixed" style="width: 100px;">$ {{item.price}}</div>
        <div class="fixed" style="width: 100px;">{{item.quantity}}</div>
        <div class="fixed" style="width: 20px;">x</div> -->
      </div>
      <div style="padding-top: 12px;">
        <button style="font-size: 13px; min-width: 88px; padding: 3px 0; color:#3a84e8; border: 1px solid; border-radius: 4px;" @click="editPressed()">Edit</button>
      </div>
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

