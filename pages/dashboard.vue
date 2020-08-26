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
        <div class="overline mb-2">DATE {{n1r.date.split(".")[0].split("T")[0]}}</div>
        <div class="overline mb-2">TIME {{n1r.date.split(".")[0].split("T")[1]}}</div>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ><v-img src="https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png"></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="red"><v-icon > mdi-thermometer-lines </v-icon>Temperature <br> {{n1r.temp}} <v-icon small> mdi-temperature-celsius </v-icon></v-btn>
      <v-btn text class="blue"><v-icon > mdi-water </v-icon>Humidity <br> {{n1r.humit}} <v-icon small> mdi-percent </v-icon></v-btn>
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
        <div class="overline mb-2">DATE {{n2r.date.split(".")[0].split("T")[0]}}</div>
        <div class="overline mb-2">TIME {{n2r.date.split(".")[0].split("T")[1]}}</div>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ><v-img src="https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png"></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="red"><v-icon > mdi-thermometer-lines </v-icon>Temperature <br> {{n2r.temp}} <v-icon small> mdi-temperature-celsius </v-icon></v-btn>
      <v-btn text class="blue"><v-icon > mdi-water </v-icon>Humidity <br> {{n2r.humit}} <v-icon small> mdi-percent </v-icon></v-btn>
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
        <div class="overline mb-2">DATE {{n3r.date.split(".")[0].split("T")[0]}}</div>
        <div class="overline mb-2">TIME {{n3r.date.split(".")[0].split("T")[1]}}</div>

      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ><v-img src="https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png"></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="red"><v-icon > mdi-thermometer-lines </v-icon>Temperature <br> {{n3r.temp}} <v-icon small> mdi-temperature-celsius </v-icon></v-btn>
      <v-btn text class="blue"><v-icon > mdi-water </v-icon> Humidity <br> {{n3r.humit}} <v-icon small> mdi-percent </v-icon></v-btn>
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
  created() {
    this.runTimedata();
  },
  mounted() {
    setInterval(() => {
      this.runTimedata();
    }, 2000);

  },
  methods: {
    async runTimedata(){
      let resnode1 = await axios.get('http://52.77.89.195:8888/api/iot/node1');
      //this.node1 = resnode1.data.student;
      this.n1r = resnode1.data.student[0];
      let resnode2 = await axios.get('http://52.77.89.195:8888/api/iot/node2');
      //this.node2 = resnode2.data.student;
      this.n2r = resnode2.data.student[0];
      let resnode3 = await axios.get('http://52.77.89.195:8888/api/iot/node3');
      //this.node3 = resnode3.data.student;
      this.n3r = resnode3.data.student[0];
    }
  },
  data() {
    return {
      n1r: {
        date: "0T0.00"
      },
      n2r: {
        date: "0T0.00"
      },
      n3r: {
        date: "0T0.00"
      },
    }
  },
}
</script>
