<template>
  <div class="bordered rounded padding-vert-m padding-hor-l fixed" style="width: 49%">
    <h3>Shipping address</h3>
    <div class="padding-vert-m" v-if="selectedAddress === null">
      <button class="boxed primary" @click="$emit('edit')">+ Add shipping address</button>
    </div>
    <div class="padding-vert-m" v-else>
      <div>{{selectedAddress.name}}</div>
      <div>{{selectedAddress.address1}} <!--{{selectedAddress.address2}} --></div>
      <div>{{selectedAddress.city}}, {{selectedAddress.state}}, {{selectedAddress.country}}</div>
      <div>{{selectedAddress.phone}}</div>
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
    'selectedAddress'
  ],
  data () {
    return {
    }
  }
}
</script>
