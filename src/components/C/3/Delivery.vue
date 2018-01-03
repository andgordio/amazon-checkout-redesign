<template>
<transition name="info-appear" appear>
  <div class="padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3 style="font-size: 19px;">Delivery</h3>
    <div class="padding-vert-l">
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice1" value="1" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice1"><div>Thursday, Nov 2</div><div class="text-grey" style="padding-top: 4px;">Free Two-Day shipping with a free trial of Amazon Prime</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice2" value="2" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice2"><div>Nov 6—10</div><div class="text-grey" style="padding-top: 4px;">FREE shipping</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice3" value="3" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice3"><div>Monday, Nov 6</div><div class="text-grey" style="padding-top: 4px;">$6.98 - Standart shipping</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice4" value="4" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice4"><div>Thursday, Nov 2</div><div class="text-grey" style="padding-top: 4px;">$13.98 - Two-Day Shipping</div></label>
      </div>
      <div class="flexy align-top padding-vert-xs">
        <input type="radio" id="deliveryChoice5" value="5" v-model="chosenDelivery" class="fixed" style="width: 24px;">
        <label for="deliveryChoice5"><div>Wednesday, Nov 1</div><div class="text-grey" style="padding-top: 4px;">$20.98 - One-Day Shipping</div></label>
      </div>
    </div>
  </div>
</transition>
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

<style lang="scss" scoped>
.info-appear-enter-active, .info-appear-leave-active {
  transition: all .3s .2s;
}
.info-appear-enter, .info-appear-leave-to {
  opacity: 0;
}
</style>
