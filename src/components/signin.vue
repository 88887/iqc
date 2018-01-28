<template>
    <div id="signin" class="signin">
        <div class="signin-form p-5">
            <h1 id="app-title">IQC</h1>
            <p id="app-subtitle">进料检验系统</p>

            <div class="form-group mt-4">
                <input type="text" class="form-control" placeholder="用户名" />
            </div>
            <div class="form-group mb-4">
                <input type="password" class="form-control" placeholder="密码" @keyup.13="onLoginClick" />
                <p class="text-xs-right small">
                    <a href="#">忘记密码?</a>
                </p>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block" @click="onLoginClick">进入</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: "signin",
  methods: {
    onLoginClick() {
      this.$router.push("Dashboard");
    }
  }
};
</script>
