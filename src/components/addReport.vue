<template>
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">邮箱</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="请输入您的邮箱地址">
        </div>
    </div>

</form>
</template>

<script>
export default {
  name: "addReport",
  data() {
    return {
      today: new Date(),
      selectedIndex: 2,
      response: []
    };
  }
};
</script>
<style>

</style>
