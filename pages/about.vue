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
                <a href="../assets/RE.pdf" download>Download PDF</a><p></p>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat width="980">
              <v-card-text >
                <h1 class="text-caption text-center">ผลงานที่ผ่านมา</h1>
                <h2>Web IoT</h2>
                <p>------------------------------------------------------------------------------------------------------</p>
                <p>เว็บปัจจุบันที่กำลังแสดงผลอยู่นี้ ทำส่งในวิชา IoT โดยใช้เทคโนโลยีดังนี้ ESP32 3 ตัว เขียนโปรแกรมควบคุมด้วย Arduino<br/>
                ทำหน้าที่รับค่าจาก Sersor Temp ทั้งอุณหภูมิและความชื่น ติดตั้งไว้ 3 จุด<br/>
                ตัว ESP32 จะส่งค่าเป็น JSON ไปที่ Node-Red (เป็นเงื่อนไขในการส่งงานต้องมี) Node-Red จะ Query Parameters ไป Record ที่ MariaDB<br/>
                Back-End เขียนด้วย NodeJS(javaScript)+Express ไป Query Data ล่าสุดจาก MariaDB<br/>
                Front-End เขียนด้วย NuxtJS+Axios แสดงล่าสุดจาก ESP32 ทั้ง 3 ตัว และสามารถดูค่าย้อนหลังได้เมื่อ Login เท่านั้นและมีระบบสมาชิก<br/>
                Front-End GetAPI ทุก ๆ 5 วินาทีเพื่ออัพเดทค่าล่าสุด<br/>
                ทำส่งเมื่อเดือน กุมภาพันธ์ 2563</p>
                <p>และแก้ไขหน้า About เพื่อนำ CV มาใส่ 26 สิงหาคม 2563<br/>
                Deploy on AWS EC2 Free<br/>
                ID: focus<br/>
                Password: 123456<br/>
                ID Login Web นี้</p>
                <a href="https://github.com/4cosmo/frontendiot">Github</a>
                <br/><br/><br/>


                <h2>OCR Text Comperer</h2>
                <p>------------------------------------------------------------------------------------------------------</p>
                <img src="../assets/OCR.PNG" width="900"/>
                <br/>
                <p>โปรเจคนี้ได้รับให้พัฒนาคนเดียวและเป็นโปรเจคแรกของการทำงาน โดยมีหัวหน้างานให้คำปรึกษาพวก Bug ต่างๆ<br/>
                    ใช้ Winform C# ในการพัฒนา (ไม่เคยเขียนมาก่อน) ใช้เวลาปิดงาน 3 อาทิตย์<br/>
                    Design UI และ Design การใช้งานเอง
                </p>
                <a href="../assets/คู่มือการใช้โปรแกรม OCR Text Compare Version 2.pdf" download>คู่มือการใช้โปรแกรมและรายละเอียดต่างๆ</a><p></p>
                <br/><br/>


                <h2>Project (MES+ERP)</h2>
                <p>------------------------------------------------------------------------------------------------------</p>
                <p>Project อยู่ในระหว่างพัฒนา </p>

                <h3>- Web Application</h3>
                <p>Project (MES+ERP) ถูกพัฒนาให้กับอุตสาหกรรมอาหารระดับโลกแห่งนึงที่ตั้งอยู่ที่หัวหิน โดยระบบนี้จะมี WebAPP อยู่ 4 ตัว (แต่สามารถโชว์ให้ดูแแค่ 3 ตัวเท่านั้น)</p>
                <img src="../assets/portal.gif" width="900"/>
                <p>1. Portal ( ตัวนี้ผมเป็นคนพัฒนา ) เป็นเว็บ Login แบบ Authentication ซึ่งจะกำหนดสิทธิ์ให้บาง GroupUser จะเข้า WebAPP ได้บางตัวเท่านั้น<br/>
                โดย GroupUser ไหนที่เข้า WebAPP นั้นได้ก็จะ ShowIcon แค่ WebAPP นั้นๆ เป็นตัว Gate ไปหาอีก 3 WebAPP </p>
                <br/>

                <div>
                  <v-carousel style="width:900px;height:auto;">
                    <v-carousel-item
                      v-for="(item1,i) in items1"
                      :key="i"
                    >
                    <img :src="item1.src" style="width:900px;height:auto;" />
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <p>2. Operation WebAPP ตัวนี้ทำหน้าที่ในการ Start Plan (โดย Plan นั้นถูกสร้างจาก Management)<br/>
                เมื่อกด Start Plan จะส่งข้อมูลไปให้ Back-End (Plan นั้นใช้ Machine อะไรบ้าง) เก็บไว้ใน Redis <br/>
                เสร็จแล้วตัว Hardware Interface ก็จะมา Get ค่าออกไปเพื่อไป Reset Counter ที่ PLC<br/>
                และเริ่มนับ Counter จาก Machine มีแสดงว่าผลิตได้กี่ตัวแล้ว หรือถ้า Machine หยุดทำงานจะคิดเป็น Loss ของเครื่องจักและแสดงผล <br/>
                หรือมีของเสียจากการผลิตก็มาใส่ที่ Operation จะคำนวนต้นทุ่นที่สูญเสีย และแสดงข้อมูลบน Dashboard ทั้งหมด (OEE, Machine performance, Loss, Waste)</p>
                <p>ภาพที่แสดงเป็นข้อมูลจริงจากหน้างาน</p>

                <img src="../assets/man.png" width="900"/>
                <p>3. Management WebAPP ตัวนี้ทำหน้าที่ในการ จัดการต่าง ๆ เช่น<br/>
                - จำนวนคนที่ใช้ต่อ Machine <br/>
                - สร้าง Plan ที่จะผลิตในวันเวลาไหน Product เป็นอะไร<br/>
                - กำหนดวันเวลา Maintenance Machine จะไปแสดงที่ WebApp Maintenance <br/>
                - เพิ่มรายการสินค้าที่จะผลิต <br/>
                - เพิ่มจัดการ Machine ถ้าเกิดมีการขยายไลน์การผลิต <br/>
                - Export Report จากการผลิตที่ผ่านมา <br/>
                - etc. </p>

                <h3>- Hardware Interface</h3>
                <img src="../assets/2020-08-26_LI.jpg" width="900"/>
                <p>( ตัวนี้ผมเป็นคนพัฒนา )โปรแกรมนี้พัฒนาด้วย WPF(Xaml) C# ทำหน้าที่ในการเชื่อมต่อ OPC DA เพื่อดึงค่าและเขียนค่าจาก PLC ที่ใช้ในโรงงานอุสาหกรรม<br/>
                และ Post ค่า Counter Machine, Status Machine ที่มีการเปลี่ยนแปลง ให้ Back-End Broadcast ที่หน้าเว็บไซต์<br/>
                Hardware Interface จะ get ตรวจสอบค่าที่ Back-End ว่ามีการสั่งเขียนค่าหรือไม่ ถ้ามีก็จะเขียนค่าลง OPC DA</p>
                <br/>

                <h3>- สิ่งที่ผิดชอบในโปรเจคนี้</h3>
                <p> - QA Test Manual and Fix Bug : ก่อนที่จะ Deploy โปรแกรมและระบบไปที่ Server ลูกค้า ผมจะเป็นคน Test และหาบัดของโปรแกรมทั้งหมด<br/>
                ถ้าเจอ Bug หรือ Error จะทำการ Debug ดูก่อนว่าสาเหตุเกิดจากอะไร ถ้าไม่เยอะมากและเสียเวลาเกินไปก็จะ Fix เอง ทั้ง Front-End และ Back-End และ Database<br/>
                ถ้าเกิด Bug หรือ Error นั้นมีการใช้ข้อมูลที่มีผลกระทบต่อโปรแกรมส่วนอื่น ก็จะส่งรายละเอียดไปให้ Dev ที่ดูแลในส่วนนั้นแก้ไขต่อไป </p>

                <p> - Deploy โปรแกรมที่ Server ลูกค้า : ทั้ง Front-End, Back-End, Database, Hardware Interface และจะทำการ Test อีกทีที่ Server ลูกค้า </p>

                <p> - Service Engineer : หลังจาก Deploy จะแจ้งลูกค้าและคอยฟัง Request จากการใช้งานของลูกค้าเช่น <br/>
                มีการเพิ่มฟังก์ชั่นการใช้งานมาใหม่ผมจะต้องอธิบายวิธีการใช้ให้ลูกค้า<br/>
                แก้ปัญหาที่เกิดขึ้นจากหน้างานทันทีเพราะโปรแกรมถูกไปใช้เก็บข้อมูลจริงจากหน้างาน</p>

                <p> - Developer : บางฟังก์ชั่นใน(.Net) Back-End เช่น API ที่ Support Hardware Interface<br/>
                เขียน SQL Stored procedure เพื่อนำค่ามาแสดงผลที่ กราฟฝั่ง Oper ตัวอย่าง</p>
                <img src="../assets/outputsum.PNG" width="900"/>
                <div>
                  <v-carousel style="width:900px;" height="auto">
                    <v-carousel-item
                      v-for="(item,i) in items2"
                      :key="i"
                    >
                    <img :src="item.src" style="width:900px;" height="auto"/>
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <p>เขียนเว็บด้วย Angular ทำการปรับเปลี่ยน Layout และจัดหน้าแก้ไขการแสดงข้อมูลที่ผิดพลาด จากความผิดพลาดของ Dev ที่รับผิดชอบในส่วนนั้น</p>

                <br/><br/>


                <h2>Project (PCS)</h2>
                <p>------------------------------------------------------------------------------------------------------</p>
                <p></p>
                <p>Project อยู่ในระหว่างพัฒนา </p>
                <p> Project นี้พัฒนาให้กับโรงงานที่อยู่ประเทศเยอรมัน<br/>
                PCS คือ Process Control System เราจะทำทั้งโรงงานให้เป็น Auto ทั้งหมดและ Manual ได้</p>

                <h3>- AGV Auto and Manual</h3>
                <img src="../assets/2020-08-26 (1).png" width="900"/>
                <p>โปรแกรมนี้พัฒนาด้วย WPF(Xaml) C# ทำการเชื่อมต่อกับ AGV Server ด้วย TCP/IP 2 Channel และ OPC DA<br/>
                เพื่อสั่งงาน AGV ทำงานตาม Process และเช็ด Status AGV และตำแหน่งที่อยู่</p>
                <br/><br/>


                <h2>อื่น ๆ</h2>
                <p>------------------------------------------------------------------------------------------------------</p>
                <p>สามารถแสดงการทำงานจริง ๆ ของโปรแกรมทุกอันได้ ยกเว้น Project (PCS) เนื่องจากตัวนี้จะต้องให้เค้าเปิด Remote Server และเค้าต้องประกบ<br/>
                Project MES รายละเอียดของโปรแกรมและงานที่รับผิดชอบค่อนข้างเยอะ หากต้องการรายละเอียดเพิ่มเติมสามารถพรีเซ้นให้ฟังแบบสด ๆ ได้ครับ<br/>
                สกิลที่ใส่ใน CV บางตัวพอมีพื้นฐานนำไปใช้งานได้ บางตัวไม่ได้ใช้นานเพราะตั้งแต่เริ่มทำงานมาใช้ C# > MSSQL Server > Typescript > Angular <br/>
                ส่วนสกิลต่างๆบางตัว ใน CV ต้องใช้เวลาในการรื้อ<br/>
                ถ้าเกิดว่าติดปัญหาใช้ Documents, Google, StackOverflow แก้ไขปัญหาได้ครับ<br/>
                พร้อมเรียนรู้และรับประสบการณ์ใหม่ๆ
                </p>
                <h4 style="color: red">**ข้อเสีย**</h4>
                <p>ผมยังเรียนไม่จบครับตอนนี้เรียนวิศวกรรมระบบเครื่องมือวัด ชั้นปีที่ 5 ลงเรียน 3 ตัว ตอนเย็นและ เสาร์ อาทิตย์แบบออนไลน์ได้  ไม่กระทบต่อเวลาทำงาน
                ถ้าเกิดงานเร่ง หรือมีปัญหา สามารถทํางานล่วงเวลาได้ครับ</p>
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
    data () {
      return {
        items1: [
          {
            src: require('../assets/oper1.PNG'),
          },
          {
            src: require('../assets/oper0.PNG'),
          },
          {
            src: require('../assets/oper2.PNG'),
          },
          {
            src: require('../assets/oper3.PNG'),
          },
          {
            src: require('../assets/oper4.PNG'),
          },
          {
            src: require('../assets/oper5.PNG'),
          },
          {
            src: require('../assets/oper6.PNG'),
          },
        ],
        items2: [
          {
            src: require('../assets/SQLDataoutsum_Page_1.png'),
          },
          {
            src: require('../assets/SQLDataoutsum_Page_2.png'),
          },
          {
            src: require('../assets/SQLDataoutsum_Page_3.png'),
          },
          {
            src: require('../assets/SQLDataoutsum_Page_4.png'),
          }
        ]
      }
    },
  }
</script>
