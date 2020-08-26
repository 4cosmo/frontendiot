<template>
  <v-container>
    <v-card-actions class="justify-center CardProfile">
      <v-card max-width="1200">
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>Profile</v-toolbar-title>
        </v-toolbar>

        <v-tabs vertical>
          <v-tab>
            <v-icon left>mdi-account</v-icon>CV
          </v-tab>
          <v-tab>
            <v-icon left>mdi-lock</v-icon>ผลงานที่ผ่านมา
          </v-tab>

          <v-tab-item>
            <v-card flat width="980">
              <v-card-text>
                <img src="../assets/RE.png" width="950"/>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat width="980">
              <v-card-text >
                <h1 class="text-caption text-center">ผลงานที่ผ่านมา</h1>
                <h2>Web IoT</h2>
                <p>----------------</p>
                <p>เว็บปัจจุบันที่กำลังแสดงผลอยู่นี้ ทำส่งในวิชา IoT โดยใช้เทคโนโลยีดังนี้ ESP32 3 ตัว เขียนโปรแกรมควบคุมด้วย Arduino</p>
                <p>ทำหน้าที่รับค่าจาก Sersor Temp ทั้งอุณหภูมิและความชื่น ติดตั้งไว้ 3 จุด</p>
                <p>ตัว ESP32 จะส่งค่าเป็น JSON ไปที่ Node-Red (เป็นเงื่อนไขในการส่งงานต้องมี) Node-Red จะ Query Parameters ไป Record ที่ MariaDB</p>
                <p>Back-End เขียนด้วย NodeJS(javaScript)+Express ไป Query Data ล่าสุดจาก MariaDB</p>
                <p>Front-End เขียนด้วย NuxtJS+Axios แสดงล่าสุดจาก ESP32 ทั้ง 3 ตัว และสามารถดูค่าย้อนหลังได้เมื่อ Login เท่านั้นและมีระบบสมาชิก</p>
                <p>Front-End GetAPI ทุก ๆ 5 วินาทีเพื่ออัพเดทค่าล่าสุด</p>
                <p>ทำส่งเมื่อเดือน กุมภาพันธ์ 2563</p>
                <br/>
                <p>และแก้ไขหน้า About เพื่อนำ CV มาใส่ 26 สิงหาคม 2563</p>
                <p>Deploy on AWS EC2 Free</p>
                <p>ID: focus</p>
                <p>Password: 123456</p>
                <p>ID Login Web นี้</p>
                <a href="https://github.com/4cosmo/frontendiot">Github</a>
                <br/><br/>
                <h2>OCR Text Comperer</h2>
                <p>----------------</p>
                <img src="../assets/OCR.PNG" width="700"/>
                <br/>
                <p>โปรเจคนี้ได้รับให้พัฒนาคนเดียวและเป็นโปรเจคแรกของการทำงาน โดยมีหัวหน้างานให้คำปรึกษาพวก Bug ต่างๆ </p>
                <p>ใช้ Winform C# ในการพัฒนา (ไม่เคยเขียนมาก่อน) ใช้เวลาปิดงาน 3 อาทิตย์</p>
                <p>Design UI และ Design การใช้งานเอง</p>
                <a href="../assets/คู่มือการใช้โปรแกรม OCR Text Compare Version 2.pdf" download>คู่มือการใช้โปรแกรมและรายละเอียดต่างๆ</a><p></p>
                <br/><br/>
                <h2>Project (MES+ERP)</h2>
                <p>----------------</p>
                <p>Project อยู่ในระหว่างพัฒนา </p>
                <h3>- Hardware Interface</h3>
                <img src="../assets/2020-08-26_LI.jpg" width="700"/>
                <p>โปรแกรมนี้พัฒนาด้วย WPF(Xaml) C# ทำหน้าที่ในการเชื่อมต่อ OPC DA เพื่อดึงค่าและเขียนค่าจาก PLC ที่ใช้ในโรงงานอุสาหกรรม</p>
                <p>และ Post ค่า Counter Machine, Status Machine ที่มีการเปลี่ยนแปลง ให้ Back-End Broadcast ที่หน้าเว็บไซต์</p>
                <p>Hardware Interface จะ get ตรวจสอบค่าที่ Back-End ว่ามีการสั่งเขียนค่าหรือไม่ ถ้ามีก็จะเขียนค่าลง OPC DA</p>
                <br/>
                <h3>- Development C# .Net, MSSQL, Angular</h3>
                <p> **กำลังใส่ข้อมูล... </p>
                <h3>- QA Test Manual and Fix Bug</h3>
                <p> **กำลังใส่ข้อมูล... </p>
                <br/><br/>
                <h2>Project (PCS)</h2>
                <p>----------------</p>
                <p></p>
                <p>Project อยู่ในระหว่างพัฒนา </p>
                <p> Project นี้พัฒนาให้กับโรงงานที่อยู่ประเทศเยอรมัน </p>
                <p>PCS คือ Process Control System เราจะทำทั้งโรงงานให้เป็น Auto ทั้งหมดและ Manual ได้</p>
                <h3>- AGV Auto and Manual</h3>
                <img src="../assets/2020-08-26 (1).png" width="700"/>
                <p>โปรแกรมนี้พัฒนาด้วย WPF(Xaml) C# ทำการเชื่อมต่อกับ AGV Server ด้วย TCP/IP 2 Channel และ OPC DA</p>
                <p>เพื่อสั่งงาน AGV ทำงานตาม Process และเช็ด Status AGV และตำแหน่งที่อยู่</p>
                <br/><br/>
                <h2>อื่น ๆ</h2>
                <p>----------------</p>
                <p>สามารถแสดงการทำงานจริง ๆ ของโปรแกรมทุกอันได้ ยกเว้น Project (PCS) เนื่องจากตัวนี้จะต้องให้เค้าเปิด Remote Server และเค้าต้องประกบ</p>
                <p>Project MES รายละเอียดของโปรแกรมและงานที่รับผิดชอบค่อนข้างเยอะ ต้องใช้เวลาในการรวบรวมข้อมูลพอสมควร แต่สามารถพรีเซ้นให้ฟังแบบสด ๆ ได้ครับ</p>
                <p>สกิลที่ใส่ใน CV บางตัวพอมีพื้นฐานนำไปใช้งานได้ บางตัวไม่ได้ใช้นานเพราะตั้งแต่เริ่มทำงานมาใช้ C# > MSSQL Server > Typescript > Angular ต้องใช้เวลาในการรื้อ</p>
                <p>ถ้าเกิดว่าติดปัญหาใช้ Documents, Google, StackOverflow แก้ได้ครับ</p>
                <h4>**ข้อเสีย**</h4>
                <p>ผมยังเรียนไม่จบครับตอนนี้เรียนวิศวกรรมระบบเครื่องมือวัด ชั้นปีที่ 5 ลงเรียน 3 ตัว ตอนเย็นและ เสาร์ อาทิตย์แบบออนไลน์ได้  ไม่กระทบต่อเวลาทำงาน</p>
                <p>ถ้าเกิดงานเร่ง หรือมีปัญหา สามารถทํางานล่วงเวลาได้ครับ</p>
              </v-card-text>
            </v-card>
          </v-tab-item>

        </v-tabs>
      </v-card>
    </v-card-actions>
  </v-container>
</template>

<style>
.CardProfile {
  padding: 50px;
}
.wCardin {
  width: 980;
}
</style>

<script>
export default {
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
        },
      ],
    };
  },
};
</script>
