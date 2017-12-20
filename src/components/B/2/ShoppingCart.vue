<template>
  <div class="padding-hor-l">
      <div class="padding-vert-l flexy align-top">
        

        <!-- LEFT COLUMN -->
        

        <div>
          <div class="padding-vert-l">
            <h1>Shopping Cart</h1>
          </div>
          <div class="padding-vert-m padding-hor-l bordered rounded silver">
            <div class="padding-vert-xs flexy align-top" v-for="(item, i) in items" :key="i" :id="'cart-item-' + i">
              <div class="fixed overlay-wrapper">
                <div class="overlay-image"><img :src="item.img" width="75px"></div>
                <div class="overlay-content" @click="openPreview('items', i)" style="cursor: pointer;">
                  <button style="padding: 40px 12px; color: white;">preview</button>
                </div>
              </div>
              <div class="fixed" style="width: 16px;"></div>
              <div style="padding-right: 24px;">
                <div style="font-size: 17px;"><strong>{{item.name}}</strong></div>
                <div class="padding-vert-xs">by {{item.by}}</div>
                <div class="text-grey padding-vert-xs">{{item.availability}}, {{item.seller}}</div>
              </div>
              <div class="fixed" style="width: 100px;">$ {{item.price}}</div>
              <div class="fixed" style="width: 100px;">
                <select v-model="item.quantity" style="min-width: auto; width: 60px; background-color: rgba(255,255,255,0.6)" name="quantity" id="item-quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div class="fixed" style="width: 20px;" @click="removeItemPressed(i)"><button>x</button></div>
            </div>
            <div class="padding-vert-m flexy" style="border-top: 1px solid #eee;">
              <div class="fixed" style="width: 100px;">
              </div>
              <div><strong>Subtotal</strong></div>
              <div class="fixed" style="width: 100px;"><strong>$ {{subtotal}}</strong></div>
              <div class="fixed" style="width: 120px;"><button class="boxed primary" @click="checkoutPressed()">Checkout</button></div>
            </div>
          </div>
          <div class="padding-vert-xs"></div>
          <div class="padding-vert-m padding-hor-l bordered rounded silver" style="height: 110px; text-align: center;">
            <img src="./../../../assets/prime-logo.png" width="125px">
          </div>


          <!-- RECENT -->


          <div class="padding-vert-l">
            <h1>You recently viewed</h1>
          </div>
          <div class="padding-vert-m padding-hor-l bordered rounded flexy" style="flex-wrap: wrap;">
            <div class="padding-vert-m flexy align-top"  style="width: 40%; padding-right: 24px;" v-for="(item, i) in recent" :key="i">
              <div class="fixed overlay-wrapper">
                <div class="overlay-image"><img :src="item.img" width="75px"></div>
                <div class="overlay-content" @click="openPreview('recent', i)" style="cursor: pointer;">
                  <button style="padding: 40px 12px; color: white;">preview</button>
                </div>
              </div>
              <div class="fixed" style="width: 16px;"></div>
              <!-- <div>
                <div>{{item.name}}</div>
                <div>$ {{item.price}}</div>
                <div><button class="boxed subtle-primary mid" @click="addFromRecentPressed(i)">Add to cart</button></div>
              </div> -->
              <div style="height: 110px;">
                <div style="max-height: 34px; overflow: hidden;">{{item.name}}</div>
                <div class="text-grey">by {{item.by}}</div>
                <div class="padding-vert-xs text-grey">$ {{item.price}}</div>
                <div class="">
                  <!-- <button class="boxed silver mid" @click="addFromAlsoPressed(i)">Preview</button> -->
                  <button class="boxed subtle-primary mid" @click="addFromRecentPressed(i)">Add to cart</button></div>
              </div>
            </div>
          </div>
        </div>


        <!-- RIGHT COLUMN -->
        

        <div class="fixed" style="width: 320px; margin-left: 48px;">
          <div class="padding-vert-l">
            <h1>Customers also bought</h1>
          </div>
          <div class="padding-vert-m padding-hor-l bordered rounded">
            <div class="padding-vert-m flexy align-top" v-for="(item, i) in also" :key="i">
              <div class="fixed overlay-wrapper">
                <div class="overlay-image"><img :src="item.img" width="75px"></div>
                <div class="overlay-content" @click="openPreview('also', i)" style="cursor: pointer;">
                  <button style="padding: 40px 12px; color: white;">preview</button>
                </div>
              </div>
              <div class="fixed" style="width: 16px;"></div>
              <div style="height: 110px;">
                <div style="max-height: 34px; overflow: hidden;">{{item.name}}</div>
                <div class="text-grey">by {{item.by}}</div>
                <div class="padding-vert-xs text-grey">$ {{item.price}}</div>
                <div class="">
                  <!-- <button class="boxed silver mid" @click="addFromAlsoPressed(i)">Preview</button> -->
                  <button class="boxed subtle-primary mid" @click="addFromAlsoPressed(i)">Add to cart</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickPreview v-if="doShowPreview" :selectedForPreview="selectedForPreview" @close="doShowPreview = false" @addToCart="addedToCartFromPreview($event)"/>
      
    </div>
</template>

<script>
import QuickPreview from './QuickPreview.vue'

export default {
  name: 'ShoppingCart',
  components: {
    QuickPreview
  },
  props: [
    'cart',
    'alsoItems',
    'recentItems',
    'extraItems'
  ],
  data () {
    return {
      items: [],
      also: [],
      recent: [],
      extra: [],
      doShowPreview: false,
      selectedForPreview: null
    }
  },
  computed: {
    subtotal () {
      let result = 0
      for (let i in this.items) {
        result += this.items[i].price * this.items[i].quantity
      }
      return result.toFixed(2)
    }
  },
  methods: {
    checkoutPressed () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      this.$emit('confirmed', this.items)
    },
    removeItemPressed (index) {
      this.items.splice(index, 1)
    },
    addFromAlsoPressed (index) {
      this.items.push(this.also[index])
      this.also.splice(index, 1)
      if (this.extra.length > 0) {
        this.also.push(this.extra[0])
        this.extra.splice(0, 1)
      }
    },
    addFromRecentPressed (index) {
      this.items.push(this.recent[index])
      this.recent.splice(index, 1)
      if (this.extra.length > 0) {
        this.recent.push(this.extra[0])
        this.extra.splice(0, 1)
      }
      // var rect = element.getBoundingClientRect();
      // console.log(rect.top, rect.right, rect.bottom, rect.left);
      // let lastIndex = this.items.length - 1
      // let lastItem = document.getElementById('cart-item-' + lastIndex)
      // console.log(lastItem)
      // console.log('cart-item-' + lastIndex)
      // let rect = lastItem.getBoundingClientRect()
      // console.log(rect)
      // let position = 0 + (this.items.length * 136)
      // window.scroll({
      //   top: position,
      //   left: 0,
      //   behavior: 'smooth'
      // })
    },
    addedToCartFromPreview (item) {
      if (item.section === 'items') {
        this.items[item.index].quantity = this.items[item.index].quantity + 1
      } else if (item.section === 'recent') {
        this.addFromRecentPressed(item.index)
      } else if (item.section === 'also') {
        this.addFromAlsoPressed(item.index)
      }
      this.doShowPreview = false
    },
    openPreview (section, index) {
      if (section === 'items') {
        this.doShowPreview = true
        this.selectedForPreview = this.items[index]
      } else if (section === 'recent') {
        this.doShowPreview = true
        this.selectedForPreview = this.recent[index]
      } else if (section === 'also') {
        this.doShowPreview = true
        this.selectedForPreview = this.also[index]
      }
      this.selectedForPreview['section'] = section
      this.selectedForPreview['index'] = index
    }
  },
  created () {
    for (let i in this.cart) {
      this.items.push(this.cart[i])
    }
    for (let i in this.alsoItems) {
      this.also.push(this.alsoItems[i])
    }
    for (let i in this.recentItems) {
      this.recent.push(this.recentItems[i])
    }
    for (let i in this.extraItems) {
      this.extra.push(this.extraItems[i])
    }
  }
}
</script>

<style lang="scss" scoped>

.overlay-wrapper {
  overflow: hidden;
  position: relative;

  & .overlay-content {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    opacity: 0;
  }

  &:hover {
    & .overlay-content {
      opacity: 1;
    }
  }
}

</style>
