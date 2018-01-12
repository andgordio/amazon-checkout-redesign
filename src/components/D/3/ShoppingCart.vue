<template>
  <div class="" style="">
    <!-- NEW LAYOUT -->
    <div class="flexy align-top">
      <!--
        LEFT COLUMN
      -->
      
        <div>
          <!-- CART -->
          <transition name="cart-appear" appear>
            <div class="padding-vert-l padding-hor-xl" style="">
              <div style="">
                <div style="font-size: 19px; font-weight: 900;">Shopping Cart</div>
              </div>
              <transition-group name="cart-list-ani" tag="div" style="">
                <div class="list-ani-item large" style="padding-top: 16px;" v-for="(item, i) in items" :key="item.name">
                  <div class="flexy align-top">
                    <div class="fixed overlay-wrapper">
                      <div class="overlay-image"><img :src="item.img" width="64px"></div>
                      <div class="overlay-content" @click="openPreview('items', i)" style="cursor: pointer; text-align:center;">
                        <!-- <button style="padding: 40px 12px; color: white;">preview</button> -->
                        <img src="./../../../assets/icn-preview.png" style="width: 40px; padding: 28px 0 0; border-radius: 6px;">
                      </div>
                    </div>
                    <div style="padding: 0 24px 0 12px;">
                      <div style="padding-top: 6px;">{{item.name}}</div>
                      <div class="text-grey" style="padding-top: 4px; font-size: 14px;">by {{item.by}}</div>
                      <!-- <div class="padding-vert-xs">$ {{item.price}}</div> -->
                      <div class="text-grey" style="padding-top: 2px; font-size: 14px;">{{item.availability}}, {{item.seller}}</div>
                    </div>
                    <div class="fixed" style="width: 91px; padding-top: 6px;">${{item.price}}</div>
                    <div class="fixed" style="width: 72px;">
                      <select v-model="item.quantity" style="min-width: auto; width: 56px; background-color: rgba(255,255,255,0.6); padding: 4px 8px;" name="quantity" id="item-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="fixed" style="width: 24px; padding-top: 2px;">
                      <button @click="xPressed(i)" v-if="!item.isXPressed">
                        <img src="./../../../assets/pui-icons-v-0-1/icn-close-thin.png" class="button-icon" style="opacity:1;">
                      </button>
                      <div v-if="item.isXPressed">
                        <div @click="xPressed(i)" style="position: absolute; z-index: 90; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.2)"></div>
                        <div class="padding-vert-xs padding-hor-xs rounded" style="position: relative; width: 160px; transform: translate(-136px, -16px); z-index: 120; background-color: white; box-shadow: 0px 4px 12px rgba(0,0,0,0.0.5);">
                          <button class="overlay-button" style="display: block; width: 100%; text-align: left; padding: 7px 12px; color: #409EFF; margin: 0;" @click="saveForLaterPressed(i)">Save for later</button>
                          <button class="overlay-button" style="display: block; width: 100%; text-align: left; padding: 7px 12px; color: #fd3737; margin: 0;" @click="removeItemPressed(i)">Remove from cart</button>
                          <button class="overlay-button" style="display: block; width: 100%; text-align: left; padding: 7px 12px; color: silver; margin: 0;" @click="xPressed(i)">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
              <div class="padding-vert-m" style="font-size: 12px; color: #878D98;">
                <div style="padding-top: 12px;">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping Cart <span style="color: #878D98; border-bottom: 1px dashed; cursor: pointer;">Learn more</span></div>
                <div style="padding-top: 12px;">Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</div>
              </div>
            </div>
          </transition>
          <!-- SAVED FOR LATER -->
          <transition name="left-column-appear" appear>
            <div v-if="later.length > 0">
              <div class="padding-hor-xl" style="padding-top: 12px;">
                <div style="">
                  <div style="font-size: 19px; font-weight: 900;">You saved for later</div>
                </div>
                <div style="padding-top: 24px;">
                  <transition-group name="list-ani" tag="div" class="flexy" style="flex-wrap: wrap;">
                    <div class="list-ani-item higher fixed" style="width: 50%; padding-right: 32px;" v-for="(item, i) in later" :key="item.name">
                      <div class="flexy align-top">
                        <div class="fixed overlay-wrapper">
                          <div class="overlay-image"><img :src="item.img" width="64"></div>
                            <div class="overlay-content" @click="openPreview('later', i)" style="cursor: pointer; text-align: center;">
                              <img src="./../../../assets/icn-preview.png" style="width: 40px; padding: 28px 0 0; border-radius: 6px;">
                            </div>
                        </div>
                        <div style="padding: 0 0 0 12px;">
                          <div style="max-height: 34px; overflow: hidden;">{{item.name}}</div>
                          <!-- <div class="text-grey" style="padding-top: 4px; font-size: 14px;">by {{item.by}}</div> -->
                          <div class="text-grey" style="padding-top: 4px; font-size: 14px;">${{item.price}}</div>
                          <div style="padding-top: 6px;">
                            <button style="font-size: 13px; min-width: 88px; padding: 3px 0; color:#3a84e8; border: 1px solid; border-radius: 4px;" @click="addFromLaterPressed(i)" v-if="!item.isBeingAddedToCart">Add to cart</button>
                            <button class="" style="color: #28B87B; font-size: 13px; min-width: 88px; padding: 3px 0; border: 1px solid; border-radius: 4px; cursor: auto;" v-if="item.isBeingAddedToCart">Added!</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>
          </transition>
          <!-- RECENT -->
          <transition name="left-column-appear" appear>
          <div class="padding-hor-xl" style="padding-top: 12px;">
            <div style="">
              <div style="font-size: 19px; font-weight: 900;">{{youRecentlyViewed}}</div>
            </div>
            <div style="padding-top: 24px;">
              <transition-group name="list-ani" tag="div" class="flexy" style="flex-wrap: wrap;">
                <div class="list-ani-item higher fixed" style="width: 50%; padding-right: 32px;" v-for="(item, i) in recent" :key="item.name">
                  <div class="flexy align-top">
                    <div class="fixed overlay-wrapper">
                      <div class="overlay-image"><img :src="item.img" width="64"></div>
                        <div class="overlay-content" @click="openPreview('recent', i)" style="cursor: pointer; text-align: center;">
                          <img src="./../../../assets/icn-preview.png" style="width: 40px; padding: 28px 0 0; border-radius: 6px;">
                        </div>
                    </div>
                    <div style="padding: 0 0 0 12px;">
                      <div style="max-height: 34px; overflow: hidden;">{{item.name}}</div>
                      <!-- <div class="text-grey" style="padding-top: 4px; font-size: 14px;">by {{item.by}}</div> -->
                      <div class="text-grey" style="padding-top: 4px; font-size: 14px;">${{item.price}}</div>
                      <div style="padding-top: 6px;">
                        <button style="font-size: 13px; min-width: 88px; padding: 3px 0; color:#3a84e8; border: 1px solid; border-radius: 4px;" @click="addFromRecentPressed(i)" v-if="!item.isBeingAddedToCart">Add to cart</button>
                        <button class="" style="color: #28B87B; font-size: 13px; min-width: 88px; padding: 3px 0; border: 1px solid; border-radius: 4px; cursor: auto;" v-if="item.isBeingAddedToCart">Added!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
          </transition>
          <!-- ALSO -->
          <transition name="left-column-appear" appear>
          <div class="padding-hor-xl" style="padding-top: 12px;">
            <div style="">
              <div style="font-size: 19px; font-weight: 900;">Customers also bought</div>
            </div>
            <div style="padding-top: 24px;">
              <transition-group name="list-ani" tag="div" class="flexy" style="flex-wrap: wrap;">
                <div class="list-ani-item higher fixed" style="width: 50%; padding-right: 32px;" v-for="(item, i) in also" :key="item.name">
                  <div class="flexy align-top">
                    <div class="fixed overlay-wrapper">
                      <div class="overlay-image"><img :src="item.img" width="64"></div>
                        <div class="overlay-content" @click="openPreview('also', i)" style="cursor: pointer; text-align: center;">
                          <!-- <img src="./../../../assets/icn-preview.png" style="width: 40px; padding: 28px 0 0; border-radius: 6px;"> -->
                        </div>
                    </div>
                    <div style="padding: 0 0 0 12px;">
                      <div style="max-height: 34px; overflow: hidden;">{{item.name}}</div>
                      <!-- <div class="text-grey" style="padding-top: 4px; font-size: 14px;">by {{item.by}}</div> -->
                      <div class="text-grey" style="padding-top: 4px; font-size: 14px;">${{item.price}}</div>
                      <div style="padding-top: 6px;">
                        <button style="font-size: 13px; min-width: 88px; padding: 3px 0; color:#3a84e8; border: 1px solid; border-radius: 4px;" @click="addFromAlsoPressed(i)" v-if="!item.isBeingAddedToCart">Add to cart</button>
                        <button class="" style="color: #28B87B; font-size: 13px; min-width: 88px; padding: 3px 0; border: 1px solid; border-radius: 4px; cursor: auto;" v-if="item.isBeingAddedToCart">Added!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
          </transition>
        </div>
      <!-- 
        RIGHT COLUMN
      -->
      <div class="fixed padding-hor-xl padding-vert-m" style="width: 32%; background-color: #F5F5F5; min-height: 100vh; position: sticky; top: 0;">
        <div class="padding-hor-m">
          <!-- SUMMARY -->
          <transition name="cart-appear" appear>
            <div>
              <div style="font-size: 19px; font-weight: 900; padding-top: 8px;">Subtotal</div>
              <div style="padding-top: 16px; font-weight: 900;">{{cart.length}} item<span v-if="cart.length > 1">s</span>, {{subtotal}} </div>
              <div class="flexy align-top" style="padding-top: 8px;">
                <input type="checkbox" id="gift" class="fixed" style="width: 16px; text-align: left;">
                <label for="gift"><div>This order contains a gift</div></label>
              </div>
              <div style="padding-top: 24px;"><button class="boxed primary wide properBlue" style="background-color: #3a84e8;" @click="checkoutPressed()">Proceed to Checkout</button></div>
          </div>
          </transition>
          <!-- PRIME AD -->
          <transition name="right-column-appear" appear>
            <div class="" style="padding-top: 40px;">
              <div class="padding-vert-m padding-hor-xl bordered rounded silver" style="height: 400px; text-align: center;">
                <img src="./../../../assets/prime-logo.png" width="125px" style="padding-top: 146px">
              </div>
            </div>
          </transition>
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
  // props: [
    // 'cart',
    // 'alsoItems',
    // 'recentItems',
    // 'extraItems',
    // 'laterItems'
  // ],
  data () {
    return {
      items: [],
      also: [],
      recent: [],
      extra: [],
      later: [],
      doShowPreview: false,
      selectedForPreview: null,
      youRecentlyViewed: 'You recently viewed'
    }
  },
  computed: {
    cart () {
      return this.$store.getters.getCart
    },
    alsoItems () {
      return this.$store.getters.getAlso
    },
    recentItems () {
      return this.$store.getters.getRecent
    },
    extraItems () {
      return this.$store.getters.getExtra
    },
    laterItems () {
      return this.$store.getters.getLater
    },
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
      // this.$emit('confirmed', this.items)
      this.$router.push({name: 'Checkout2'})
    },
    removeItemPressed (index) {
      this.items.splice(index, 1)
      //
      this.$store.dispatch('setCart', this.items)
    },
    xPressed (index) {
      this.items[index].isXPressed = !this.items[index].isXPressed
      this.youRecentlyViewed = this.youRecentlyViewed + ' '
      // this.also.splice(index, 1)
      // for (let i in this.items) {
      //   let currentItem = this.items[i]
      //   currentItem['updated'] = Math.random() * (100 - 5) + 5
      //   console.log(currentItem['updated'])
      // }
    },
    saveForLaterPressed (index) {
      let tempItem = this.items[index]
      tempItem['isXPressed'] = false
      tempItem['isBeingAddedToCart'] = false
      this.later.push(this.items[index])
      this.items.splice(index, 1)
      //
      this.$store.dispatch('setCart', this.items)
      this.$store.dispatch('setLater', this.later)
    },
    addFromLaterPressed (index) {
      this.later[index].isBeingAddedToCart = true
      this.items.push(this.later[index])
      setTimeout(() => {
        this.later.splice(index, 1)
        this.$store.dispatch('setLater', this.later)
      }, 500)
      //
      this.$store.dispatch('setCart', this.items)
      // this.$emit('updated', this.items)
    },
    addFromAlsoPressed (index) {
      this.also[index].isBeingAddedToCart = true
      this.items.push(this.also[index])
      setTimeout(() => {
        this.also.splice(index, 1)
      }, 500)
      setTimeout(() => {
        if (this.extra.length > 0) {
          this.also.push(this.extra[0])
          this.extra.splice(0, 1)
          this.$store.dispatch('setAlso', this.also)
          this.$store.dispatch('setExtra', this.extra)
        }
      }, 1000)
      // this.$emit('updated', this.items)
      this.$store.dispatch('setCart', this.items)
    },
    addFromRecentPressed (index) {
      this.recent[index].isBeingAddedToCart = true
      this.items.push(this.recent[index])
      setTimeout(() => {
        this.recent.splice(index, 1)
      }, 500)
      setTimeout(() => {
        if (this.extra.length > 0) {
          this.recent.push(this.extra[0])
          this.extra.splice(0, 1)
          this.$store.dispatch('setRecent', this.recent)
          this.$store.dispatch('setExtra', this.extra)
        }
      }, 1000)
      // this.$emit('updated', this.items)
      this.$store.dispatch('setCart', this.items)
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
      } else if (item.section === 'later') {
        this.addFromLaterPressed(item.index)
      }
      this.doShowPreview = false
      // this.$emit('updated', this.items)
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
      } else if (section === 'later') {
        this.doShowPreview = true
        this.selectedForPreview = this.later[index]
      }
      this.selectedForPreview['section'] = section
      this.selectedForPreview['index'] = index
    }
  },
  created () {
    for (let i in this.cart) {
      let tempItem = this.cart[i]
      tempItem['isXPressed'] = false
      tempItem['isBeingAddedToCart'] = false
      this.items.push(tempItem)
    }
    for (let i in this.alsoItems) {
      let tempItem = this.alsoItems[i]
      tempItem['isBeingAddedToCart'] = false
      this.also.push(tempItem)
    }
    for (let i in this.recentItems) {
      let tempItem = this.recentItems[i]
      tempItem['isBeingAddedToCart'] = false
      this.recent.push(tempItem)
    }
    for (let i in this.extraItems) {
      let tempItem = this.extraItems[i]
      tempItem['isBeingAddedToCart'] = false
      this.extra.push(tempItem)
    }
    for (let i in this.laterItems) {
      let tempItem = this.laterItems[i]
      tempItem['isBeingAddedToCart'] = false
      this.later.push(tempItem)
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
    transition: all .4s;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(5, 49, 94, 0.829);
    opacity: 0;
  }

  &:hover {
    & .overlay-content {
      opacity: 1;
    }
  }
}

.overlay-button:hover {
  background-color: #F2F5FA;
}

// .list-ani-enter-active, .list-ani-leave-active {
//   transition: all 0.3s;
// }
// .list-ani-enter, .list-ani-leave-to /* .list-leave-active below version 2.1.8 */ {
//   opacity: 0;
//   transform: translateX(20px);
// }

.list-ani-item {
  height: 108px;
  overflow: hidden;
  transition: all .2s;

  &.higher {
    height: 132px;
  }

  // &.large {
  //   // height: 130px;
  // }
}
.list-ani-enter, .list-ani-leave-to {
  opacity: 0;
}

.cart-list-ani-enter, .cart-list-ani-leave-to {
  opacity: 0;
  height: 0px;
}

//

.image-overlay-enter-active, .image-overlay-leave-active {
  transition: all .4s;
}
.image-overlay-enter, .image-overlay-leave-to {
  opacity: 0;
}

//

.later-fade-enter-active, .later-fade-leave-active {
  transition: all .4s;
}
.later-fade-enter, .later-fade-leave-to {
  opacity: 0;
}

//

.cart-appear-enter-active, .cart-appear-leave-active {
  transition: all .3s;
}
.cart-appear-enter, .cart-appear-leave-to {
  opacity: 0;
  // transform: translateY(10px);
}

.left-column-appear-enter-active, .left-column-appear-leave-active {
  transition: all .5s .3s;
}
.left-column-appear-enter, .left-column-appear-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.right-column-appear-enter-active, .right-column-appear-leave-active {
  transition: all .5s .3s;
}
.right-column-appear-enter, .right-column-appear-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

</style>
