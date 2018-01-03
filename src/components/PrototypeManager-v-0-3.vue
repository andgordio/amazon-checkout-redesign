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
        <div class="flexy padding-vert-m padding-hor-m prototype-header" style="">
          <h3 style="font-size: 22px; padding-left: 8px;">Prototype manager</h3>
          <div class="fixed" style="width: 24px; height: 24px;" @click="toggleManager = !toggleManager">
            <button>
              <img src="../../../assets/pui-icons-v-0-1/icn-close.png" class="button-icon dark">
            </button>
          </div>
        </div>
        <div>
          <!-- <div class="padding-hor-l padding-vert-m"> -->
            <!-- <h1>{{managerProps.name}}</h1> -->
            <!-- <p>{{managerProps.description}}</p> -->
            <!-- <p class="grey">Created by <a :href="managerProps.website" target="_blank">{{managerProps.author}}</a> on {{managerProps.date}}</p> -->
          <!-- </div> -->
          <ul class="list borderless" style="margin-top: 12px;">
            <li @click="goHome()" :class="{selected: $route.name === 'HelloWorld'}">
              <div class="content">
                <div class="title">Home</div>
                <div class="subtitle">Project Meta</div>
              </div>
            </li>
          </ul>

          <div v-for="(iteration, i) in managerProps.iterations" :key="i">
            <div class="">
              <h4>{{iteration.description}}</h4> <!--{{iteration.name}}. -->
              <!-- <p>Iteration {{iteration.name}}</p> -->
            </div>
            <ul class="list borderless">
              <li v-for="(version, j) in iteration.versions" :key="j" @click="openPrototype(iteration.name,version.name)" :class="{selected: isSelected(iteration.name,version.name)}">
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
    },
    isSelected (iteration, version) {
      return this.$route.name === iteration + '' + version
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
  z-index: 600;
  position: fixed;
  bottom: 24px;
  right: 24px;
}

.content-container {
  font-family: 'Roboto', -apple-system, 'Segoe UI', sans-serif;
  z-index: 700;
  position: fixed;
  width: 360px;
  height: 100vh;
  right: 0px;
  bottom: 0px;
  // background-color: #F5F8FF;
  background-color: white;
  overflow: scroll;
  // border-left: 1px solid #D8DCE5;
}

.shade {
  z-index: 601;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0c1725;
  opacity: 0.95;
}

.button-icon {
  &.dark {
    opacity: 1;
  }
}

h4 {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: #2D2F33;
  opacity: 0.3;
  padding: 24px 16px 8px 24px;
}

.list.borderless {
  border: none;
  & li {
    border: none;
    & .content {
      border: none;
    }
  }
  //
  margin-top: 0;
  & li {
    margin: 0px 12px;
    padding: 8px 12px;
    border-radius: 8px;

    &.selected {
      background-color: #409EFF !important;
      color: white;
    }

    &:hover {
      background-color: rgb(241, 241, 241);
    }

    & .content {
      margin: 0;
      padding: 0;
    }
  }
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

