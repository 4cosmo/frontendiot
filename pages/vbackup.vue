<template>
  <div>
      <v-btn @click="clickShow">Show</v-btn>
      <br>
        <p v-for="i in val">{{i}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        this.val = this.$store.state.userALL
    },
    methods: {
        clickShow () {
        }
    },
    data() {
        return {
            val: []
        }
    },

}
</script>