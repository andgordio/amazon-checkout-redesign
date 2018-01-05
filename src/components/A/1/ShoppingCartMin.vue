<template>
  <div class="bordered rounded padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3>Shopping cart</h3>
    <div class="padding-vert-m flexy align-top" v-for="(item, i) in cart" :key="i">
      <div class="fixed" style="width: 60px;">
        <img src="./../../../assets/pui-icons-v-0-1/img-placeholder-vert.png" width="40px">
      </div>
      <div>
        <div>{{item.name}}</div>
        <div>${{item.price}}</div>
        <div>Quantity: {{item.quantity}}</div>
      </div>
      <!-- <div class="fixed" style="width: 100px;">$ {{item.price}}</div>
      <div class="fixed" style="width: 100px;">{{item.quantity}}</div>
      <div class="fixed" style="width: 20px;">x</div> -->
    </div>
    <div class="">
      <button class="boxed subtle-primary" @click="$emit('edit')">Edit</button>
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
