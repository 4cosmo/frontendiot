<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped = true"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
      <img src="/Logo_ENG_small.png" height="70px">
      </nuxt-link>
      <v-toolbar-title v-text="title" class="BLACK"/>
      <h3 class="BLACK orange--text">:InSE</h3>
      <v-spacer />
      <!-- ปุ่ม Login ขวามือบน -->
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon size="45">mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content >
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <div>
        <h3 class="text-center">
          <v-icon>mdi-account-box</v-icon>
          Profile
          <br>
        </h3>
      </div>
      <div v-show="this.$store.state.onLogin == false">
        <br>
        <h2 class="text-center" style="font: 30px TH Sarabun New;">
          <v-icon>mdi-lock</v-icon>
          กรุณาเข้าสู่ระบบ
        </h2>
        <v-col cols="12" sm="15" md="12">
          <v-text-field
            label="Username"
            outlined
            :dense="true"
            v-model.trim="userLogin.username"
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            :dense="true"
            v-model="userLogin.password"
            type="password"
          ></v-text-field>
        </v-col>
        <div class="text-center">
        <v-btn class="ma-2" depressed small color="indigo" dark @click="clickLogin">
          <v-icon small> mdi-lock-open-outline</v-icon>
          เข้าสู่ระบบ
        </v-btn>
        <v-btn depressed small color="error" @click="clickFpassword">ลืมรหัสผ่าน</v-btn>
        <v-btn class="ma-2" tile outlined color ="success" to="/register">
          <v-icon left>mdi-pencil</v-icon> ลงทะเบียน
        </v-btn>
        </div>
      </div>
      <div v-show="this.$store.state.onLogin == true" class="text-center">
        <br>
        <img src="/10.jpg" width="150px">
        <p>สวัสดีคุณ {{this.$store.state.userALL.yname}}</p>
        <v-btn depressed small color="error" @click="clickLogout">Logout</v-btn>
      </div>
      <v-list>
      <!--  <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <!-- แถบด้านล่างสุด -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    clickFpassword() {
      alert('กรุณาแจ้งผู้พัฒนาเว็บ โฟกัส InSE ปี4')
    },
    async clickLogin() {
      let res = await axios.post('http://52.77.89.195:8888/api/login', {
                                	login: this.userLogin.username,
	                                pass: this.userLogin.password,
                            })
      if (res.data.ok === true) {
        this.$store.commit('loadUser', res.data.user);
        this.$store.commit('LoginUser', true);
        this.clearUser()
      } else {
        alert(res.data.message);
      }

    },
    clickLogout () {
      this.$store.commit('LoginUser', false);
    },
    clearUser () {
      this.userLogin.username = "";
      this.userLogin.password = "";
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-calendar-clock',
          title: 'View backup',
          to: '/vbackup'
        },
        {
          icon: 'mdi-alert-circle',
          title: 'About',
          to: '/about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'IoT',
      userLogin: {
        username: '',
        password: ''
      },
      eventLogin: {
        Cuser: false,
        Cpass: false,

      }
    }
  }
}
</script>
