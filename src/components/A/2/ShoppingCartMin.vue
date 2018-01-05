<template>
  <div class="padding-vert-s padding-hor-xl">
    <div class="padding-vert-xs">
      <h3>Shopping cart</h3>
    </div>
    <div v-if="didAcceptShoppingCart" class="text-grey">
      <div v-for="(item, i) in cart" :key="i" class="padding-vert-xs flexy">
        <div class="fixed" style="width:40px;"><img src="./../../../assets/pui-icons-v-0-1/img-placeholder-vert.png" width="24px"></div>
        <div>{{item.name}}</div>
        <div class="fixed" style="width:20px;">{{item.quantity}}</div>
        <div class="fixed text-right" style="width:50px;">${{item.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartMin',
  props: [
    'cart',
    'didAcceptShoppingCart'
  ]
}
</script>

<style lang="scss" scoped>

</style>
