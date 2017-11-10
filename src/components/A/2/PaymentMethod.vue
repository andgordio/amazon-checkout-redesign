<template>
  <div class="padding-hor-l padding-vert-l">
    <h1>Payment Method</h1>
    <div class="padding-vert-m">
      <div class="padding-vert-s">
        <label for="cardName" class="text">Name on card</label>
        <input type="text" name="" id="cardName">
      </div>
      <div class="padding-vert-s">
        <label for="cardNumber" class="text">Card number</label>
        <input type="text" name="" id="cardNumber">
      </div>
      <div class="padding-vert-s">
        <label for="month" class="text">Expiration Month</label>
        <input type="text" name="" id="fullName">
      </div>
      <div class="padding-vert-s">
        <label for="year" class="text">Expiration Year</label>
        <input type="text" name="" id="year">
      </div>
    </div>
    <button class="boxed primary"@click="$emit('confirmed')">Save</button>
    <button class="boxed silver" @click="$emit('cancelled')">Cancel</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
