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
      <v-card width="730">
          <h4></h4>
    <v-radio-group v-model="radioGroup" class="center">
      <v-radio
        v-for="n in 3"
        :key="n"
        :label="`IoT Node ${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group>

    <v-row justify="space-around">
    <v-checkbox v-model="LoT" class="mx-2" label="ค้นหาค่าของ Temperature"></v-checkbox>
      <v-checkbox v-model="LoH" class="mx-2" label="ค้นหาค่าของ Humidity"></v-checkbox>
    </v-row>
    <v-row>
        <v-col cols="12" sm="3" md="3" v-show="LoT">
        <v-text-field
            label="Min Temperature"
            dense
            v-model="temp.minT"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3" md="3" v-show="LoT">
        <v-text-field
            label="Max Temperature"
            dense
            v-model="temp.maxT"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3" md="3" v-show="LoH">
        <v-text-field
            label="Min Humidity"
            dense
            v-model="humit.minH"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3" md="3" v-show="LoH">
        <v-text-field
            label="Max Humidity"
            dense
            v-model="humit.maxH"
          ></v-text-field>
        </v-col>


    </v-row>
    <v-btn @click="sumSearch">ค้นหา</v-btn>
    <v-btn @click="sumSave">SAVE</v-btn>

        <template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Temperature</th>
          <th class="text-left">Humidity</th>
          <th class="text-left">DATE</th>
          <th class="text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in dataiot" >
          <td>{{ i.temp }}</td>
          <td>{{ i.humit }}</td>
          <td>{{ i.date.split(".")[0].split("T")[0] }}</td>
          <td>{{ i.date.split(".")[0].split("T")[1] }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
      </v-card>
      </v-col>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import XLSX from 'xlsx'

export default {
    methods: {
        async sumSearch(){
            if (this.LoT && this.LoH) {
                if (this.temp.minT <= this.temp.maxT) {
                    if (this.humit.minH <= this.humit.maxH) {
                        let res = await axios.post('http://54.169.13.157:8888/api/iot/secth', {
	                        node: "node"+this.radioGroup,
	                        minT: this.temp.minT,
	                        maxT: this.temp.maxT,
	                        minH: this.humit.minH,
	                        maxH: this.humit.maxH        
                        });
                        this.dataiot = res.data.student;
                    } else {
                        alert("ใส่ค่า Humidity ไม่ถูกต้อง")
                        this.clearH()
                    }
                } else {
                    alert("ใส่ค่า Temperature ไม่ถูกต้อง")
                    this.clearT();
                }
            } else if (this.LoT){
                if (this.temp.minT <= this.temp.maxT) {
                    let res = await axios.post('http://54.169.13.157:8888/api/iot/sect', {
	                    node: "node"+this.radioGroup,
	                    minT: this.temp.minT,
	                    maxT: this.temp.maxT       
                    });
                    this.dataiot = res.data.student;
                } else {
                    alert("ใส่ค่า Temperature ไม่ถูกต้อง")
                    this.clearT();
                }
            } else if (this.LoH){
                if (this.humit.minH <= this.humit.maxH) {
                    let res = await axios.post('http://54.169.13.157:8888/api/iot/sech', {
	                    node: "node"+this.radioGroup,
	                    minH: this.humit.minH,
	                    maxH: this.humit.maxH        
                    });
                    this.dataiot = res.data.student;
                } else {
                    alert("ใส่ค่า Humidity ไม่ถูกต้อง")
                    this.clearH()
                }

            } else {
                let res = await axios.get('http://54.169.13.157:8888/api/iot/node'+this.radioGroup);
                this.dataiot = res.data.student;
            }
        },
        sumSave(){
            const dataWS = XLSX.utils.json_to_sheet(this.dataiot)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, dataWS)
            XLSX.writeFile(wb, 'export.xlsx')
        },
        clearT(){
          this.temp.minT = 0;
          this.temp.maxT = 0;
        },
        clearH(){
          this.humit.minH = 0;
          this.humit.maxH = 0;
        }
    },
    data() {
        return {
            radioGroup: 1,
            LoT: false,
            LoH: false,
            temp:{
                minT: 0,
                maxT: 0
            },
            humit:{
                minH: 0,
                maxH: 0
            },
            dataiot:[]
        }
    },
}
</script>
