<template>
  <div>
    <div>
      <transition-group name="list-ani" tag="div">
        <div class="list-ani-item" v-for="(item, i) in items" :key="item">
          {{item.name}}
        </div>
      </transition-group>
      <!-- <transition-group name="list-ani">
        <div
          v-for="item in items"
          v-bind:key="item"
          class="list-ani-item"
          >
          {{ item.name }}
        </div>
      </transition-group> -->
    </div>
    <button @click="removeAtIndex(1)">remove</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {name: 'hi'},
        {name: 'bie'},
        {name: 'bye'},
        {name: 'by'},
        {name: 'lie'}
      ]
    }
  },
  methods: {
    removeAtIndex (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style>
.list-ani-item {
  transition: all 0.2s;
  margin-right: 10px;
}
.list-ani-enter, .list-ani-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.list-ani-leave-active {
  position: absolute;
}
</style>
