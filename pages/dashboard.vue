<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div v-show="this.$store.state.onLogin == false"> <h4>กรุณาเข้าสู่ระบบก่อนใช้งานหน้านี้</h4> </div>
      <div v-show="this.$store.state.onLogin == true">

      <v-col cols="12" sm="15" md="30">
      <v-card
      class="mx-auto"
      max-width="700"
      outlined
      >
        <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Node No.1</v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ><v-img src="https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png"></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="red">Temperature <br> {{n1r.temp}}</v-btn>
      <v-btn text class="blue">Humidity <br> {{n1r.humit}}</v-btn>
    </v-card-actions>
      </v-card>
      <br>
      <v-card
      class="mx-auto"
      max-width="700"
      outlined
      >
        <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Node No.2</v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ><v-img src="https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png"></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="red">Temperature <br> {{n2r.temp}}</v-btn>
      <v-btn text class="blue">Humidity <br> {{n2r.humit}}</v-btn>
    </v-card-actions>
      </v-card>
      <br>
      <v-card
      class="mx-auto"
      max-width="700"
      outlined
      >
        <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Node No.3</v-list-item-title>
        
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ><v-img src="https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png"></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="red">Temperature <br> {{n3r.temp}}</v-btn>
      <v-btn text class="blue">Humidity <br> {{n3r.humit}}</v-btn>
    </v-card-actions>
      </v-card>
      </v-col>
      </div>
    </v-flex>
  </v-layout>
  
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    setInterval(() => {
      this.intervalid1++;
      this.runTimedata();
    }, 2000);
          
  },
  methods: {
    async runTimedata(){
      let resnode1 = await axios.get('http://54.169.13.157:8888/api/iot/node1');
      //this.node1 = resnode1.data.student;
      this.n1r = resnode1.data.student[0];
      let resnode2 = await axios.get('http://54.169.13.157:8888/api/iot/node2');
      //this.node2 = resnode2.data.student;
      this.n2r = resnode2.data.student[0];
      let resnode3 = await axios.get('http://54.169.13.157:8888/api/iot/node3');
      //this.node3 = resnode3.data.student;
      this.n3r = resnode3.data.student[0];
    }
  },
  data() {
    return {
      intervalid1: 0,
      node1:[],
      node2:[],
      node3:[],
      n1r: [],
      n2r: [],
      n3r: [],
      iotdata:[]
    }
  },
}
</script>