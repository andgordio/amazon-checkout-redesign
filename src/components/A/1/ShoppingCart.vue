<template>
  <div class="padding-hor-l">
      <div class="padding-vert-l flexy">
        <h1>Shopping Cart</h1>
      </div>
      <div class="padding-vert-m padding-hor-l bordered rounded">
        <div class="padding-vert-m flexy" v-for="(item, i) in cart" :key="i">
          <div class="fixed" style="width: 100px;">
            <img src="../../../../../assets/pui-icons-v-0-1/img-placeholder-vert.png" width="75px">
          </div>
          <div>{{item.name}}</div>
          <div class="fixed" style="width: 100px;">$ {{item.price}}</div>
          <div class="fixed" style="width: 100px;">{{item.quantity}}</div>
          <div class="fixed" style="width: 20px;">x</div>
        </div>
      </div>
      <div class="padding-vert-l">
        <button class="boxed primary" @click="$emit('confirmed')">Checkout</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: [
    'cart'
  ],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
