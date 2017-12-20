<template>
  <div class="padding-hor-l padding-vert-l">
    <h1>Shipping Address</h1>
    <div class="padding-vert-m">
      <div class="padding-vert-s">
        <label for="fullName" class="text">Full name</label>
        <input type="text" name="" id="fullName">
      </div>
      <div class="padding-vert-s">
        <label for="addressLine1" class="text">Address Line 1</label>
        <input type="text" name="" id="addressLine1">
      </div>
      <div class="padding-vert-s">
        <label for="addressLine2" class="text">Address Line 2</label>
        <input type="text" name="" id="addressLine2">
      </div>
      <div class="padding-vert-s">
        <label for="city" class="text">City</label>
        <input type="text" name="" id="city">
      </div>
      <div class="padding-vert-s">
        <label for="state" class="text">State/Region/Province</label>
        <input type="text" name="" id="state">
      </div>
      <div class="padding-vert-s">
        <label for="zip" class="text">ZIP</label>
        <input type="text" name="" id="zip">
      </div>
      <div class="padding-vert-s">
        <label for="zip" class="text">Country</label>
        <select>
          <option value="volvo">United States</option>
          <option value="saab">Mexico</option>
          <option value="mercedes">Canada</option>
          <option value="audi">Brazil</option>
        </select>
      </div>
      <div class="padding-vert-xs">
        <label for="phone" class="text">Phone</label>
        <input type="text" name="" id="phone">
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