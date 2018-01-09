<template>
<transition name="info-appear" appear>
  <div class="padding-vert-m fixed flexy align-top" style="width: 50%; padding-right: 40px;">
    <div class="fixed" style="width: 48px; margin-right: 12px;">
      <img src="./../../../assets/icn-check-delivery.png" style="width:48px;" alt="">
    </div>
    <div style="padding-top: 12px;">
      <div style="font-size: 19px; font-weight: 900;">Delivery</div>
      <div style="padding-top: 12px;">
        <div class="flexy align-top"  style="padding-bottom: 14px;">
          <input type="radio" id="deliveryChoice1" value="0" v-model="delivery" class="fixed" style="width: 24px;">
          <label for="deliveryChoice1"><div>Thursday, Nov 2</div><div class="text-grey" style="padding-top: 3px; font-size: 14px;">Free Two-Day shipping with a free trial of Amazon Prime</div></label>
        </div>
        <div class="flexy align-top" style="padding-bottom: 14px;">
          <input type="radio" id="deliveryChoice2" value="1" v-model="delivery" class="fixed" style="width: 24px;">
          <label for="deliveryChoice2"><div>Nov 6—10</div><div class="text-grey" style="padding-top: 3px; font-size: 14px;">FREE shipping</div></label>
        </div>
        <div class="flexy align-top" style="padding-bottom: 14px;">
          <input type="radio" id="deliveryChoice3" value="2" v-model="delivery" class="fixed" style="width: 24px;">
          <label for="deliveryChoice3"><div>Monday, Nov 6</div><div class="text-grey" style="padding-top: 3px; font-size: 14px;">$6.98 - Standart shipping</div></label>
        </div>
        <div class="flexy align-top" style="padding-bottom: 14px;">
          <input type="radio" id="deliveryChoice4" value="3" v-model="delivery" class="fixed" style="width: 24px;">
          <label for="deliveryChoice4"><div>Thursday, Nov 2</div><div class="text-grey" style="padding-top: 3px; font-size: 14px;">$13.98 - Two-Day Shipping</div></label>
        </div>
        <div class="flexy align-top" style="padding-bottom: 14px;">
          <input type="radio" id="deliveryChoice5" value="4" v-model="delivery" class="fixed" style="width: 24px;">
          <label for="deliveryChoice5"><div>Wednesday, Nov 1</div><div class="text-grey" style="padding-top: 3px; font-size: 14px;">$20.98 - One-Day Shipping</div></label>
        </div>
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
  },
  computed: {
    delivery: {
      // getter
      get: function () {
        return this.chosenDelivery
      },
      // setter
      set: function (newValue) {
        this.$emit('deliveryChosen', newValue)
      }
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
