<template>
  <div class="bordered rounded padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3>Shipping address</h3>
    <div class="padding-vert-m" v-if="!isShippingFilled">
      <button class="boxed primary" @click="$emit('edit')">+ Add shipping address</button>
    </div>
    <div class="padding-vert-m" v-else>
      <div>Sam Bell</div>
      <div>821 Washington St</div>
      <div>Ashland, Illinois, United States</div>
      <div>1 555 374 82 96</div>
      <div class="padding-vert-s"><button class="boxed subtle-primary" @click="$emit('edit')">Change</button></div>
    </div>
    <!-- <h3>Billing address</h3>
    <div class="padding-vert-s">
      <div class="flexy align-top">
        <input type="checkbox" id="billingChoice1" value="1" class="fixed" style="width: 24px;">
        <label for="billingChoice1"><div>Same as shipping address</div></label>
      </div>
    </div> -->
  </div>
</template>


<script>
export default {
  name: 'ShippingAddressMin',
  props: [
    'isShippingFilled'
  ],
  data () {
    return {
    }
  }
}
</script>
