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
      <v-col cols="12" sm="15" md="30">
      <v-card>
        <v-card-title class="headline">
          ยินดีต้อนรับ
        </v-card-title>
        <v-card-text>
          <p> IoT วัดอุณหภูมิและความชื่น</p>
          <p>
            กรุณาเข้าสู่ระบบเพื่อเข้าใช้งาน Dashboard และ View backup
          </p>
          <p>
            เข้าสู่ระบบที่ขวามือบน หากยังไม่ได้เป็นสมาชิกกด <nuxt-link to="/register">Register</nuxt-link>.
          </p>
          <v-img src="https://europe.hughes.com/sites/europe.hughes.com/files/IOT.png"></v-img>
          <p>image source: <a href="https://europe.hughes.com/sites/europe.hughes.com/files/IOT.png">https://europe.hughes.com/sites/europe.hughes.com/files/IOT.png</a></p>
          <div class="text-xs-right">
            <em><small>&mdash; 4Cusmo</small></em>
          </div>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-spacer />
        </v-card-actions>
      </v-card>
      </v-col>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  /*mounted() {
    if (true) {
      this.$router.push("/about");
    }
  },*/
}
</script>
