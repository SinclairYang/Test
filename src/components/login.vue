<template>
  <div class="login_container">
    <div class="left">
      <div class="title-content">
        <div>提升教育价值</div>
        <div class="content2">成就美好未来</div>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <img class="header-img" src="../assets/image/login/right_top_img.png" />
      </div>
      <div class="bottom">
        <div class="logo">
          <img src="../assets/image/login/blue_logo_new.png" />
        </div>
        <div class="login-content">
          <el-form
            label-width="0px"
            :model="loginForm"
            :rules="loginFormRules"
            ref="loginFormRef"
          >
            <el-form-item prop="acount">
              <el-input
                placeholder="手机号"
                prefix-icon="el-icon-mobile-phone"
                clearable
                v-model="loginForm.acount"
                class="telInput"
              ></el-input>
            </el-form-item>
            <el-form-item class="pwdForm" prop="pwd">
              <el-input
                class="pwdInput"
                placeholder="密码"
                prefix-icon="el-icon-lock"
                type="password"
                clearable
                v-model="loginForm.pwd"
              ></el-input>
            </el-form-item>
            <el-form-item class="xieyi">
              <el-checkbox v-model="loginForm.checkboxStatus" />
              <span class="xieyi-content">已阅读并同意</span>
              <el-link
                class="link"
                type="primary"
                :underline="false"
                href="https://testsaas.imeduplus.com/#/agreement/xjj"
                target="_blank"
                >《学加家平台服务协议》</el-link
              >
              <span>与</span>
              <el-link
                class="link"
                type="primary"
                :underline="false"
                href="https://testsaas.imeduplus.com/#/agreement/privacy"
                target="_blank"
                >《隐私政策》</el-link
              >
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="sassLogin">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";

export default {
  data() {
    return {
      loginForm: {
        acount: "17200003000",
        pwd: "000000",
        checkboxStatus: false,
        sessionId: ""
      },
      loginFormRules: {
        acount: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            min: 11,
            max: 11,
            trigger: "blur"
          }
        ],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    sassLogin() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        let res = await this.$axios.post("/zl_api/uc/user/saasLogin", {
          style: "",
          clientInfo: {},
          data: {
            account: this.loginForm.acount,
            code: "",
            pwd: md5(this.loginForm.pwd),
            requestSource: "imeduplus",
            sessionId: ""
          }
        });

        if (res && res.data.rtnCode !== "0000000") {
          this.loginForm.sessionId = res.bizData ? res.bizData.sessionId : "";
        }
        if (res.data.rtnCode === "0000000") {
          window.sessionStorage.setItem("token", res.data.bizData.token);
          this.$router.push("/viewcontent");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login_container {
  display: flex;
  height: 100%;
}
.left {
  position: relative;
  flex: 2;
  height: 100%;
  background-image: url("../assets/image/login/login_main.jpg");
  background-size: 100% 100%;
}
.title-content {
  position: absolute;
  left: 12%;
  top: 12%;
  font-size: 62px;
  color: #fff;
  z-index: 999;
}

.content2 {
  padding-left: 124px;
  font-weight: 700;
}
.right {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
}

.header {
  flex: 1;
}

.header img {
  width: 100%;
}
.bottom {
  flex: 2;
  .logo {
    text-align: center;
    margin-bottom: 28px;
    img {
      height: 47px;
    }
  }

  .login-content {
    width: 319px;
    height: 319px;
    margin: auto;
  }
}

/deep/.pwdForm,
.telForm {
  margin-bottom: 32px !important;
}
/deep/.xieyi {
  .xieyi-content {
    margin-left: 5px;
  }
}
/deep/ .el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 12px !important;
}
.el-divider__text,
.el-link {
  /* font-weight: 500; */
  font-size: 12px;
}
/deep/ .link {
  vertical-align: center;
}
/deep/.el-button {
  width: 100%;
  padding: 9px 15px;
}</style
>>
