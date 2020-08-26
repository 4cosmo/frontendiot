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
      <div class="text-center">
      </div>
      <v-card>
        <v-card-title class="headline">
          Register
        </v-card-title>
        <v-card-text>
          <p> IoT วัดอุณหภูมิและความชื่น</p>
          <v-col cols="12" sm="20" md="20">
          <v-text-field
            label="Username"
            v-model.trim="userR.Username"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="userR.Password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
            v-model="CPassword"
          ></v-text-field>
          <v-text-field
            label="Your Name"
            v-model="userR.Yname"
          ></v-text-field>
            </v-col>
            <v-btn
            color="primary"
            nuxt
            @click="Bregister"
            >
                สมัครสมาชิก
            </v-btn>
          <div class="text-xs-right">
            <em><small>&mdash; 4Cusmo</small></em>
          </div>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            userR:{
                Username: '',
                Password: '',
                Yname: ''
            },
            CPassword: '',
            TCPassword: 'ไม่ตรงกับ Password'
        }
    },
    methods: {
        async  Bregister() {
            if (this.userR.Username.length > 5 && this.userR.Username.length <= 10) {
                if (this.userR.Password.length > 5 && this.userR.Password.length <= 20) {
                    if (this.userR.Yname.length > 5 && this.userR.Yname.length <= 20  ) {
                        if (this.userR.Password == this.CPassword) {
                            let res = await axios.post('http://52.77.89.195:8888/api/register', {
                                	username: this.userR.Username,
	                                password: this.userR.Password,
	                                yname: this.userR.Yname
                            })
                            if (res.data.ok === true){
                                alert("OK!!!")
                                this.$router.push("/")
                            }
                            else {
                                alert("ERROR")
                            }
                        }else{
                            alert('Confirm Password ไม่ถูกต้อง')
                        }
                    }else{
                        alert('กรุณาใส่ Your Name ให้เกิน 5 ตัวอักษร และต้องน้อยกว่า 20 ตัวอักษร')
                    }
                }else{
                    alert('กรุณาใส่ Password ให้เกิน 5 ตัวอักษร และต้องน้อยกว่า 20 ตัวอักษร')
                }
            }else{
                alert('กรุณาใส่ Username ให้เกิน 5 ตัวอักษร และต้องน้อยกว่า 20 ตัวอักษร')
            }
        }
    },

}
</script>
