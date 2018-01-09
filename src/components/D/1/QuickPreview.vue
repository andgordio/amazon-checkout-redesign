<template>
<transition name="modal">
  <div class="modal-mask" style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.4)" @click="closePressed()">
    <div class="modal-container flexy align-stretch" style="max-width: 720px; max-height: 100vh; flex-direction: column; margin: 0 auto; padding: 24px 0;" @click.stop="doThis()">
      <div class="flexy padding-hor-xl fixed" style="background-color: white; border-radius: 10px 10px 0 0; padding-top: 24px; padding-bottom: 24px; z-index: 200; transition: all .4s;" :class="{shadowyBottom: didScroll}">
        <div style="font-size: 24px; font-weight: 900;">Quick Preview</div>
        <div class="fixed" style="width: 16px;" @click="closePressed()">
          <button>
            <img src="./../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon" style="opacity: 1; padding-top: 4px;">
          </button>
        </div>
      </div>
      <!--  -->
      <div class="padding-hor-xl padding-vert-m roundBottom" style="overflow: scroll; background-color: white; padding-top: ; padding-bottom: 12px;"  id="watchMeScroll" @scroll="checkScrollPosition">
        <div class="flexy align-top">
          <div class="fixed" style="width:200px">
            <img :src="item.img" width="200px">
          </div>
          <div class="" style="padding-left: 24px;">
            <div style="font-size: 19px; font-weight: 900;">{{item.name}}</div>
            <div>by {{item.by}}</div>
            <div class="padding-vert-s">
              <div style="color: #ff9900; font-size: 18px;">★★★★☆</div>
              <div class="" style="font-size: 13px;">249 customer reviews</div>
              <div class="" style="font-size: 13px;">#1 Bestseller in Industrial Product Design</div>
            </div>
            <div class="flexy" style="padding-top: 16px; width: 80%;">
              <div class="fixed padding-hor-m padding-vert-s bordered rounded unselected" style="width: 32%; cursor: pointer;" :class="{selected: selectedFormat === 'kindle'}" @click="selectedFormat = 'kindle'">
                <div class="bookType" style="font-size: 13px; ">Kindle book</div>
                <div class="bookPrice" style="font-size: 14px; padding-top: 2px;">$17.63</div>
              </div>
              <div class="fixed" style="width:2%;"></div>
              <div class="fixed padding-hor-m padding-vert-s bordered rounded unselected" style="width: 32%; cursor: pointer;" :class="{selected: selectedFormat === 'hardcover'}" @click="selectedFormat = 'hardcover'">
                <div class="bookType" style="font-size: 13px; ">Hardcover</div>
                <div class="bookPrice" style="font-size: 14px; padding-top: 2px;">$18.89</div>
              </div>
              <div class="fixed" style="width:2%;"></div>
              <div class="fixed padding-hor-m padding-vert-s bordered rounded unselected" style="width: 32%; cursor: pointer;"  :class="{selected: selectedFormat === 'paperback'}" @click="selectedFormat = 'paperback'">
                <div class="bookType" style="font-size: 13px; ">Paperback</div>
                <div class="bookPrice" style="font-size: 14px; padding-top: 2px;">$55.77</div>
              </div>
            </div>
            <div class="" style="padding-top: 12px; width: 80%;">
              <button class="boxed primary properBlue wide" @click="addPressed()" v-if="!isBeingAddedToCart">Add to cart</button>
              <button class="boxed subtle-primary wide" style="background-color: #b3ffb3; color: green; cursor: auto;" v-if="isBeingAddedToCart">Added!</button>
            </div>
            <!-- <div>{{item.section}}</div>
            <div>{{item.index}}</div> -->
          </div>
        </div>
        <div class="padding-vert-l">
          <div class="flexy rounded">
            <div class="fixed padding-vert-s" :class="{selectedTab: selectedTab === 'description'}" @click="selectedTab = 'description'" style="width: 140px; text-align: center; font-size: 14px; cursor: pointer; border: 1px solid #E6EBF5; border-right: none; border-top-left-radius: 6px; border-bottom-left-radius: 6px;">
              Description
            </div>
            <div class="fixed padding-vert-s" :class="{selectedTab: selectedTab === 'editors'}" @click="selectedTab = 'editors'" style="width: 140px; text-align: center; font-size: 14px; cursor: pointer; border: 1px solid #E6EBF5; border-right: none;">
              Editorial reviews
            </div>
            <div class="fixed padding-vert-s" :class="{selectedTab: selectedTab === 'user'}" @click="selectedTab = 'user'" style="width: 140px; text-align: center; font-size: 14px; cursor: pointer; border: 1px solid #E6EBF5; border-top-right-radius: 6px; border-bottom-right-radius: 6px;">
              User reviews
            </div>
          </div>
          <div class="padding-vert-m padding-hor-xs">
            <div v-if="selectedTab === 'description'">
              <div class="padding-vert-s">
                <p style="padding: 12px 0;">Why do some products capture widespread attention while others flop? What makes us engage with certain products out of sheer habit? Is there a pattern underlying how technologies hook us?</p>
                <p style="padding: 12px 0;" v-if="!showFullDescription">Nir Eyal answers these questions (and many more) by explaining the Hook Model—a four-step process embedded into the products of many successful companies to subtly encourage customer behavior. Through consecutive “hook cycles,” these products reach their ultimate goal of bringing users back again and again without depending on costly advertising or aggressive messaging.</p>
                <p style="padding: 12px 0;" v-if="!showFullDescription">Hooked is based on Eyal’s years of research, consulting, and practical experience. He wrote the book he wished had been available to him as a start-up founder—not abstract theory, but a how-to guide for building better products. Hooked is written for product managers, designers, marketers, start-up founders, and anyone who seeks to understand how products influence our behavior.</p>
                <!-- <div class="padding-vert-l">
                  <button @click="showFullDescription = true" v-if="!showFullDescription">read more</button>
                  <button @click="showFullDescription = false" v-if="showFullDescription">read less</button>
                </div> -->
              </div>
            </div>
            <div v-if="selectedTab === 'editors'">
              <div class="padding-vert-s">
                <div>"With concrete advice and tales from the product-development trenches, this is a thoughtful discussion of how to create something that users never knew they couldn’t live without."</div>
                <div class="padding-vert-xs"><i>—Publisher's Weekly</i></div>
              </div>
              <div class="padding-vert-s">
                <div>"With concrete advice and tales from the product-development trenches, this is a thoughtful discussion of how to create something that users never knew they couldn’t live without."</div>
                <div class="padding-vert-xs"><i>—Eric Ries, author of The Lean Startup</i></div>
              </div>
              <div class="padding-vert-s">
                <div>"With concrete advice and tales from the product-development trenches, this is a thoughtful discussion of how to create something that users never knew they couldn’t live without."</div>
                <div class="padding-vert-xs"><i>—Boris Veldhuijzen van Zanten, founder of The Next Web </i></div>
              </div>
            </div>
            <div v-if="selectedTab === 'user'">
              <div class="padding-vert-s">
                <div><strong>This is the absolute best book on product development I've ever read</strong></div>
                <div style="color: gold;">★★★★☆</div>
                <div>"With concrete advice and tales from the product-development trenches, this is a thoughtful discussion of how to create something that users never knew they couldn’t live without."</div>
                <div class=""><i>Paul W</i></div>
              </div>
              <div class="padding-vert-s">
                <div><strong>This is the absolute best book on product development I've ever read</strong></div>
                <div style="color: gold;">★★★★☆</div>
                <div>"With concrete advice and tales from the product-development trenches, this is a thoughtful discussion of how to create something that users never knew they couldn’t live without."</div>
                <div class=""><i>Paul W</i></div>
              </div>
              <div class="padding-vert-s">
                <div><strong>This is the absolute best book on product development I've ever read</strong></div>
                <div style="color: gold;">★★★★☆</div>
                <div>"With concrete advice and tales from the product-development trenches, this is a thoughtful discussion of how to create something that users never knew they couldn’t live without."</div>
                <div class=""><i>Paul W</i></div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      item: null,
      showFullDescription: false,
      selectedFormat: 'kindle',
      selectedTab: 'description',
      isBeingAddedToCart: false,
      //
      scrollable: null,
      didScroll: false
    }
  },
  props: [
    'selectedForPreview'
  ],
  methods: {
    checkScrollPosition () {
      if (this.scrollable.scrollTop > 10) {
        this.didScroll = true
      } else {
        this.didScroll = false
      }
    },
    closePressed () {
      this.$emit('close')
    },
    doThis () {
      console.log('hi')
    },
    addPressed () {
      this.isBeingAddedToCart = true
      setTimeout(() => {
        this.$emit('addToCart', this.item)
      }, 500)
    }
  },
  created () {
    this.item = this.selectedForPreview
    setTimeout(() => {
      this.scrollable = document.getElementById('watchMeScroll')
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
.shadowyBottom {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

//
button.boxed.properBlue {
  background-color: #3a84e8;
}

//

.roundBottom {
  border-radius: 0 0 10px 10px;
}

.unselected {
  // opacity: 0.6;
  & .bookPrice {
    color: grey;
  }
}

.selected {
  border: 1px solid #ffb647 !important;
  opacity: 1 !important;

  & .bookType {
    font-weight: 900;
  }

  & .bookPrice {
    color: black;
  }
  // background-color: gold;
  // background-color: #fff4bb;
}

.selectedTab {
  background-color: #eee;
}

.modal-enter-active, .modal-leave-active {
  transition: all .1s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container, .modal-leave-active .modal-container {
  transition: all .2s;
}
.modal-enter .modal-container, .modal-leave-to .modal-container/* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0, 20px);
  opacity: 0;
}
</style>
