<template>
  <transition name="modal">
    <div class="modal-mask" style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.4)">
      <div class="modal-container" style="max-width: 400px; margin: 5vh auto; border-radius: 2px; box-shadow: 0px 12px 36px rgba(0,0,0,0.1);">
        <div class="flexy padding-hor-xl" style="background-color: white; border-radius: 10px 10px 0 0; padding-top: 24px; padding-bottom: 16px;">
          <div style="font-size: 24px; font-weight: 900;">Sign in</div>
          <!-- <div class="fixed" style="width: 16px;" @click="closePressed()">
            <button>
              <img src="./../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon" style="opacity: 1; padding-top: 4px;">
            </button>
          </div> -->
        </div>
        <div class="padding-hor-xl" style="max-height: 80vh; overflow: auto; background-color: white;">
          <div class="padding-vert-s">
            <label for="fullName" class="text">Email</label>
            <input type="text" name="" id="fullName" v-model="email">
            <!-- <div v-if="!name.isValid" class="errorMessage" :class="{errorMessageHighlight: !name.wasFocused}">
              Shouldn't be empty
            </div> -->
          </div>
          <div class="padding-vert-s">
            <label for="password" class="text">Password</label>
            <input type="password" name="" id="password" v-model="password">
            <!-- <div v-if="!name.isValid" class="errorMessage" :class="{errorMessageHighlight: !name.wasFocused}">
              Shouldn't be empty
            </div> -->
          </div>
        </div>  
        <div class="padding-hor-xl padding-vert-l" style="background-color: white; flex: 0 0 auto; text-align: right; border-radius: 0 0 10px 10px; padding-top: 24px;">
          <button class="boxed primary properGrey" style="margin-right: 4px;" @click="closePressed()">Cancel</button>
          <button class="boxed primary properBlue" style="min-width: 120px;" @click="loginPressed()">Login</button>
        </div>  
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    closePressed () {
      this.$emit('close')
    },
    loginPressed () {
      this.$emit('login')
    }
  }
}
</script>

<style lang="scss" scoped>
button.boxed.properBlue {
  background-color: #3a84e8;
}

button.boxed.properGrey {
  background-color: #e5eaf0;
  color: #5f6d7c;
}


.modal-enter-active, .modal-leave-active {
  transition: all .2s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container, .modal-leave-active .modal-container {
  transition: all .3s;
}
.modal-enter .modal-container, .modal-leave-to .modal-container/* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0.96);
  opacity: 0;
}
</style>
