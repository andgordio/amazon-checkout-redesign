<template>
  <div>
    <h3>Delivery</h3>
    <div class="padding-vert-l">
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice1" value="1" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice1"><div>Thursday, Nov 2</div><div>Free Two-Day shipping with a free trial of Amazon Prime</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice2" value="2" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice2"><div>Nov 6—10</div><div>FREE shipping</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice3" value="3" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice3"><div>Monday, Nov 6</div><div>$6.98 - Standart shipping</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice4" value="4" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice4"><div>Thursday, Nov 2</div><div>$13.98 - Two-Day Shipping</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice5" value="5" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice5"><div>Wednesday, Nov 1</div><div>$20.98 - One-Day Shipping</div></label>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Delivery',
  props: [
    'chosenDelivery'
  ],
  data () {
    return {
    }
  }
}
</script>
