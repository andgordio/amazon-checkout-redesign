<template>
  <div>
    <div class="menu-button-container">
      <button class="round text-grey" style="background-color:white; box-shadow: 0px 4px 16px rgba(0,0,0,0.1)" @click="toggleManager = !toggleManager">
        <img src="../../../assets/pui-icons-v-0-1/icn-hamburger.png" class="button-icon" v-if="isHome">
        <span v-else>{{selectedVersion}}</span>
      </button>
    </div>
    <transition name="toggleShade">
      <div class="shade" v-if="toggleManager" @click="toggleManager = !toggleManager">
      </div>
    </transition>
    <transition name="toggleManager">
      <div v-if="toggleManager" class="content-container" style="">
        <div class="flexy silver padding-vert-m padding-hor-l">
          <h3>Prototype manager</h3>
          <div class="fixed" style="width: 24px;" @click="toggleManager = !toggleManager">
            <button>
              <img src="../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon">
            </button>
          </div>
        </div>
        <div>
          <div class="padding-hor-l padding-vert-m">
            <h1>{{managerProps.name}}</h1>
            <!-- <p>{{managerProps.description}}</p> -->
            <!-- <p class="grey">Created by <a :href="managerProps.website" target="_blank">{{managerProps.author}}</a> on {{managerProps.date}}</p> -->
          </div>
          <ul class="list">
            <li @click="goHome()">
              <div class="content">
                <div class="title">Home / Instructions</div>
              </div>
            </li>
          </ul>

          <div v-for="(iteration, i) in managerProps.iterations" :key="i">
            <div class=" padding-hor-l padding-top-m">
              <h3>{{iteration.description}}</h3>
              <p>Iteration {{iteration.name}}</p>
            </div>
            <ul class="list">
              <li v-for="(version, j) in iteration.versions" :key="j" @click="openPrototype(iteration.name,version.name)">
                <div class="content">
                  <div class="title">{{iteration.name}}{{version.name}}</div>
                  <div class="subtitle">{{version.description}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PrototypeManager',
  props: [
    'managerProps'
  ],
  data () {
    return {
      toggleManager: false
    }
  },
  computed: {
    selectedVersion () {
      return this.$route.name
    },
    isHome () {
      return this.$route.name === 'HelloWorld'
    }
  },
  methods: {
    openPrototype (iteration, version) {
      this.toggleManager = false
      this.$router.push('/' + iteration + '/' + version)
    },
    goHome () {
      this.toggleManager = false
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  background-color: white;

  &:hover {
    background-color: white;
  }
}

.menu-button-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
}

.content-container {
  position: fixed;
  width: 360px;
  height: 100vh;
  right: 0px;
  bottom: 0px;
  background-color: #F5F8FF;
  // border-left: 1px solid #D8DCE5;
}

.shade {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #B4BCCC;
  opacity: 0.8;
}

.toggleManager-enter-active, .toggleManager-leave-active {
  transition: all .4s;
}
.toggleManager-enter, .toggleManager-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(360px, 0);
  opacity: 0;
}

.toggleShade-enter-active, .toggleShade-leave-active {
  transition: all .2s;
}
.toggleShade-enter, .toggleShade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

