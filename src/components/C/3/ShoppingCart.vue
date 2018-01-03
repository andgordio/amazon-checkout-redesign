<template>
  <div class="padding-hor-l" style="background-color: #f1f3f7;">
      <div class="padding-vert-l flexy align-top">
        <!-- LEFT TOP -->
        <div>
          <transition name="cart-appear" appear disappear>
            <div class="padding-vert-m padding-hor-l rounded silver" style="padding: 12px 48px; background-color: white; box-shadow: 0px 7px 24px rgba(0,0,0,0.1); border-radius: 12px;">
              <div style="">
                <h1 style="padding: 24px 0 12px; font-size: 28px; font-weight: 600;">Shopping Cart</h1> <!---->
              </div>
              <transition-group name="list-ani" tag="div" style="padding: 12px 0">
                <div class="list-ani-item large" v-for="(item, i) in items" :key="item.name">
                  <div class="padding-vert-m flexy align-top">
                    <div class="fixed overlay-wrapper">
                      <div class="overlay-image"><img :src="item.img" width="100px" style="border-radius: 2px;"></div>
                      <div class="overlay-content" @click="openPreview('items', i)" style="cursor: pointer; text-align:center;">
                        <!-- <button style="padding: 40px 12px; color: white;">preview</button> -->
                        <img src="./../../../assets/icn-preview.png" style="width: 48px; padding: 40px 0; border-radius: 6px;">
                      </div>
                    </div>
                    <div class="fixed" style="width: 24px;"></div>
                    <div style="padding-right: 24px; padding-top: 0px;">
                      <div style="font-size: 17px; font-weight: 500;">{{item.name}}</div>
                      <div class="text-grey" style="padding-top: 6px;">by {{item.by}}</div>
                      <!-- <div class="padding-vert-xs">$ {{item.price}}</div> -->
                      <div class="text-grey" style="padding-top: 6px;">{{item.availability}}, {{item.seller}}</div>
                    </div>
                    <div class="fixed" style="width: 100px; padding-top: 8px;">${{item.price}}</div>
                    <div class="fixed" style="width: 100px;">
                      <select v-model="item.quantity" style="min-width: auto; width: 60px; background-color: rgba(255,255,255,0.6)" name="quantity" id="item-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="fixed" style="width: 20px; margin-right: 12px; padding-top: 6px;">
                      <button @click="xPressed(i)" v-if="!item.isXPressed">
                        <img src="../../../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon" style="opacity:1;">
                      </button>
                      <div v-if="item.isXPressed">
                        <div @click="xPressed(i)" style="position: absolute; z-index: 90; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.2)"></div>
                        <div class="padding-vert-xs padding-hor-xs rounded" style="position: relative; width: 160px; transform: translate(-130px, -12px); z-index: 120; background-color: white; box-shadow: 0px 4px 12px rgba(0,0,0,0.0.5);">
                          <button class="overlay-button" style="display: block; width: 100%; text-align: left; padding: 8px 12px; color: #409EFF; margin: 0;" @click="saveForLaterPressed(i)">Save for later</button>
                          <button class="overlay-button" style="display: block; width: 100%; text-align: left; padding: 8px 12px; color: #fd3737; margin: 0;" @click="removeItemPressed(i)">Remove from cart</button>
                          <button class="overlay-button" style="display: block; width: 100%; text-align: left; padding: 8px 12px; color: silver; margin: 0;" @click="xPressed(i)">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
              <!-- <div class="flexy" style="border-top: 1px solid rgba(0, 0, 0, 0.08); padding-top: 32px;">
                <div class="fixed overlay-wrapper" style="width: 75px"></div>
                <div class="fixed" style="width: 32px;"></div>
                <div style="padding-right: 24px; padding-top: 4px;">Subtotal: </div>
                <div class="fixed" style="width: 100px; padding-top: 8px;"></div>
                <div class="fixed" style="width: 100px;"></div>
                <div class="fixed" style="width: 20px; margin-right: 12px; padding-top: 6px;">${{subtotal}}</div>
                <div style="font-size: 16px; font-weight: 500;"></div>
              </div> -->
              <div class="padding-vert-m flexy" style="padding-top: 24px; padding-bottom: 32px;"> <!---->
                <div class="fixed" style="width: 124px;"></div>
                <div style="font-size: 16px; font-weight: 500;">Subtotal</div>
                <div class="fixed" style="width: 100px;"></div>
                <div class="fixed" style="width: 100px;">${{subtotal}}</div>
                <div class="fixed" style="width: 132px;"><button class="boxed primary" style="padding: 12px 29px;" @click="checkoutPressed()">Checkout</button></div>
              </div>
            </div>
            <!-- <div class="padding-vert-s"></div>
            <div class="padding-vert-m padding-hor-xl bordered rounded silver" style="height: 110px; text-align: center;">
              <img src="./../../../assets/prime-logo.png" width="125px">
            </div> -->
          </transition>
        </div>
        <!-- RIGHT TOP -->
        <transition name="right-column-appear" appear>
          <div class="fixed" style="width: 30%; margin-left: 48px;">
            <div class="padding-vert-m padding-hor-xl bordered rounded silver" style="height: 400px; text-align: center;">
              <img src="./../../../assets/prime-logo.png" width="125px" style="padding-top: 146px">
            </div>
          </div>
        </transition>
      </div>

      <!-- BOTTOM  -->
      <div class="padding-vert-l flexy align-top">
        <!-- LEFT -->
        <div>
          <transition name="left-column-appear" appear>
            <div>
              <!-- LATER -->
              <transition name="later-fade">
                <div style="padding: 12px 32px;" v-if="later.length > 0">
                  <h2 style="padding: 32px 0px 24px; font-size: 24px;">You saved for later</h2> <!-- color: #CACED9;-->
                  <transition-group name="list-ani" tag="div" class="padding-vert-m flexy" style="flex-wrap: wrap;">
                    <div class="list-ani-item" style="width: 40%; padding-right: 24px;" v-for="(item, i) in later" :key="item.name">
                      <div class="padding-vert-m flexy align-top">
                        <div class="fixed overlay-wrapper">
                          <div class="overlay-image"><img :src="item.img" width="100px" style="border-radius: 2px;"></div>
                            <div class="overlay-content" @click="openPreview('later', i)" style="cursor: pointer; text-align: center;">
                              <img src="./../../../assets/icn-preview.png" style="width: 48px; padding: 24px 0">
                            </div>
                        </div>
                        <div class="fixed" style="width: 16px;"></div>
                        <div style="height: 110px;">
                          <div style="max-height: 34px; overflow: hidden;">{{item.name}}</div>
                          <div class="text-grey">by {{item.by}}</div>
                          <div class="padding-vert-xs text-grey">${{item.price}}</div>
                          <div class="">
                            <button class="" style="color: #409EFF; padding: 4px 0;" @click="addFromLaterPressed(i)" v-if="!item.isBeingAddedToCart">Add to cart</button>
                            <button class="" style="color: #28B87B; padding: 4px 0; cursor: auto;" v-if="item.isBeingAddedToCart">Added!</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition-group>
                </div>
              </transition>


              <!-- RECENT -->

              <div style="padding: 12px 32px;">
                <h2 style="padding: 54px 0px 24px; font-size: 24px;">{{youRecentlyViewed}}</h2> <!-- color: #CACED9;-->
                <transition-group name="list-ani" tag="div" class="padding-vert-m flexy" style="flex-wrap: wrap;">
                  <div class="list-ani-item" style="width: 40%; padding-right: 24px;" v-for="(item, i) in recent" :key="item.name">
                    <div class="padding-vert-m flexy align-top">
                      <div class="fixed overlay-wrapper">
                        <div class="overlay-image"><img :src="item.img" width="100px" style="border-radius: 2px;"></div>
                        <!-- <transition name="image-overlay" > -->
                          <div class="overlay-content" @click="openPreview('recent', i)" style="cursor: pointer; text-align: center;">
                          <!-- <button style="padding: 40px 12px; color: white;">preview</button> -->
                            <img src="./../../../assets/icn-preview.png" style="width: 48px; padding: 24px 0">
                          </div>
                        <!-- </transition> -->
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
                        <div class="padding-vert-xs text-grey">${{item.price}}</div>
                        <div class="">
                          <!-- <button class="boxed silver mid" @click="addFromAlsoPressed(i)">Preview</button> -->
                          <button class="" style="color: #409EFF; padding: 4px 0;" @click="addFromRecentPressed(i)" v-if="!item.isBeingAddedToCart">Add to cart</button>
                          <button class="" style="color: #28B87B; padding: 4px 0; cursor: auto;" v-if="item.isBeingAddedToCart">Added!</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition-group>
              </div>
            </div>
          </transition>
        </div>
        <!-- RIGHT -->
          <transition name="right-column-appear" appear>
            <div class="fixed" style="width: 30%; margin-left: 48px; padding: 12px 32px;">
              <div>
                <h2 style="padding: 32px 0px 24px; font-size: 24px;">Customers also bought</h2> <!--color: #CACED9;-->
              </div>
              <div class="padding-vert-m">
                <transition-group name="list-ani">
                  <div class="list-ani-item" v-for="(item, i) in also" :key="item.name">
                    <div class="padding-vert-m flexy align-top">
                      <div class="fixed overlay-wrapper">
                        <div class="overlay-image"><img :src="item.img" width="100px" style="border-radius: 2px"></div>
                        <div class="overlay-content" @click="openPreview('also', i)" style="cursor: pointer; text-align: center;">
                          <!-- <button style="padding: 40px 12px; color: white;">preview</button> -->
                          <img src="./../../../assets/icn-preview.png" style="width: 48px; padding: 32px 0">
                        </div>
                      </div>
                      <div class="fixed" style="width: 16px;"></div>
                      <div style="height: 110px;">
                        <div style="max-height: 34px; overflow: hidden;">{{item.name}}</div>
                        <div class="text-grey">by {{item.by}}</div>
                        <div class="padding-vert-xs text-grey">${{item.price}}</div>
                        <div class="">
                          <!-- <button class="boxed silver mid" @click="addFromAlsoPressed(i)">Preview</button> -->
                          <button class="" style="color: #409EFF; padding: 4px 0;" @click="addFromAlsoPressed(i)" v-if="!item.isBeingAddedToCart">Add to cart</button>
                          <button class="" style="color: #28B87B; padding: 4px 0; cursor: auto;" v-if="item.isBeingAddedToCart">Added!</button>
                          </div>
                      </div>
                    </div>
                  </div>
                </transition-group>
              </div>
            </div>
            </transition>
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
    'extraItems',
    'laterItems'
  ],
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
    },
    addFromLaterPressed (index) {
      this.later[index].isBeingAddedToCart = true
      this.items.push(this.later[index])
      setTimeout(() => {
        this.later.splice(index, 1)
      }, 500)
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
        }
      }, 1000)
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
        }
      }, 1000)
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
    background-color: rgba(2,38,74,0.7);
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
  height: 160px;
  overflow: hidden;
  transition: all .2s;

  // &.large {
  //   // height: 130px;
  // }
}
.list-ani-enter, .list-ani-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: rotateX(90deg);
  // transform: perspective(500px) translate3d(10px, 0, 100px);
  height: 0px;
  // overflow: hidden;
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
  transform: translateY(20px);
}

.left-column-appear-enter-active, .left-column-appear-leave-active {
  transition: all .5s .3s;
}
.left-column-appear-enter, .left-column-appear-leave-to {
  opacity: 0;
  // transform: translateY(20px);
}

.right-column-appear-enter-active, .right-column-appear-leave-active {
  transition: all .5s .3s;
}
.right-column-appear-enter, .right-column-appear-leave-to {
  opacity: 0;
  // transform: translateY(20px);
}

</style>
