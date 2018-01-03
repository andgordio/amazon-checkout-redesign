<template>
  <div>
    <h3>Shopping cart</h3>
    <div class="padding-vert-m flexy align-top" v-for="(item, i) in cart" :key="i">
      <div class="fixed" style="width: 60px;">
        <img :src="item.img" width="40px">
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
      <button class="boxed subtle-primary" @click="editPressed()">Edit</button>
    </div>
  </div>
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
