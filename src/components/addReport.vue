<template>
  <div class="report">

    <div class="row top">
      <div class="card col-md-8" id="lotinfo">
        <h6 class="card-header">批号信息</h6>
        <div class="card-block">
          <div class="form-inline">
            <div class="form-group">
              <label class="customer_label" for="name">批号:</label>
              <input type="text" class="form-control-sm left custmer_input" id="name" placeholder="请输入批号">
            </div>
          </div>
          <div class="form-inline top">
            <div class="form-group">
              <label class="customer_label" for="name">品名:</label>
              <input type="text" class="form-control-sm left " id="name" placeholder="请输入品名">
            </div>
            <div class="form-group">
              <label class="customer_label" for="name">品 号:</label>
              <input type="text" class="form-control-sm left " id="name" placeholder="请输入品号">
            </div>
            <div class="form-group">
              <label class="customer_label" for="name">送检数量:</label>
              <input type="text" class="form-control-sm left " id="name" placeholder="请输入送检数量">
            </div>

            <div class="form-group">
              <label class="customer_label" for="name">送检日期:</label>
              <kendo-datepicker class="form-control-sm" :format="'yyyy/MM/dd'" />

            </div>
            <div class="form-group">
              <label class="customer_label" for="name">检验标准:</label>
              <input type="text" class="form-control-sm left " id="name" placeholder="请输入检验标准">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row top">
      <div class="card col-md-8 " id="lotinfo">
        <h6 class="card-header">检验项目</h6>
        <div class="card-block">
          <div class="form-check form-check-inline">

            <input type="checkbox" class="form-check-input " id="chkYBDB">
            <label class="form-check-label" for="chkYBDB">看板样品对比</label>
          </div>
          <div class="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="chkXXSY">
            <label class="form-check-label " for="chkXXSY">先行试验</label>
          </div>
          <div class="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="chkXWJJC">

            <label class="form-check-label " for="chkXWJJC">目视/显微镜观察</label>
          </div>
          <div class="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="chkJC">
            <label class="form-check-label " for="chkJC">测量</label>
          </div>
          <div class="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="chkXLSSY">
            <label class="form-check-label " for="chkXLSSY">信赖性试验</label>

          </div>
        </div>
      </div>
    </div>

    <div class="row top">
      <div class="card col-md-8 " id="lotinfo">
        <h6 class="card-header">检验结果</h6>
        <div class="card-block">
          <div class="row " style=" margin-left: 1px;">

            <div class="form-check form-check-inline" style="width:300px">
              <label class="form-check-label " for="chkHGGF">是否合格供方:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
            <div class="form-check form-check-inline" style="width:300px">
              <label class="form-check-label " for="chkROHSBQ">是否有RoHS标贴:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
            <div class="form-check form-check-inline" style="width:300px">
              <label class="form-check-label " for="chkYXQ">是否在有效期内:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
            <div class="form-check form-check-inline" style="width:300px">
              <label class="form-check-label " for="chkCHBB">出货报告是否合格:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
            <div class="form-check form-check-inline" style="width:300px">
              <label class="form-check-label " for="rdoHPBB">环评报告是否在有效期:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
          </div>
          <hr>
          <div class="row " style="margin-left: 1px;">
            <label style="  min-width: 120px;  text-align: left;" for="chkHF">文件</label>
            <kendo-upload 
            :async-save-url="'https://demos.telerik.com/kendo-ui/upload/async/save'" 
            :async-remove-url="'https://demos.telerik.com/kendo-ui/upload/async/remove'" 
            :async-auto-upload="true" :async-with-credentials="false">
            </kendo-upload>
          </div>
          <hr>

          <div class="row " style="margin-left: 1px;">

            <div class="form-check form-check-inline">
              <label style="  min-width: 120px;  text-align: left;" for="chkHF">HF测试结果</label>
              <select class="form-control " style=" height: 30px;
                          font-size: 14px">
                <option>OK</option>
                <option>NG</option>
              </select>
              <label style="  min-width: 120px;  text-align: left;" for="chkHF">RoHS测试结果</label>
              <select class="form-control " style=" height: 30px;
                          font-size: 14px">
                <option>OK</option>
                <option>NG</option>
              </select>

            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="row top">
      <div class="card col-md-8 " id="lotinfo">
        <h6 class="card-header">测试</h6>
        <div class="card-block">
          <div class="form-inline">
            <div class="form-group">
              <label class="customer_label" for="name">抽样数:</label>
              <input type="text" class="form-control-sm left custmer_input" id="name" placeholder="请输入抽样数">
            </div>
            <div class="form-group">
              <label class="customer_label" for="name">判定标准:</label>
              <input type="text" class="form-control-sm left custmer_input" id="name" placeholder="请输入判定标准">
            </div>
            <div class="form-group">
              <label class="form-check-label " for="rdoHPBB">测试结果:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
          </div>
          <hr>

        </div>
      </div>
    </div>

    <div class="row top">
      <div class="card col-md-8 " id="lotinfo">
        <h6 class="card-header">外观</h6>
        <div class="card-block">
          <div class="form-inline">
            <div class="form-group">
              <label class="customer_label" for="name">抽样数:</label>
              <input type="text" class="form-control-sm left custmer_input" id="name" placeholder="请输入抽样数">
            </div>
            <div class="form-group">
              <label class="customer_label" for="name">判定标准:</label>
              <input type="text" class="form-control-sm left custmer_input" id="name" placeholder="请输入判定标准">
            </div>
            <div class="form-group">
              <label class="form-check-label " for="rdoHPBB">测试结果:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div class="row top">
      <div class="card col-md-8 " id="lotinfo">
        <h6 class="card-header">先行试验</h6>
        <div class="card-block">
          <div class="form-inline">
            <div class="form-group">
              <label class="form-check-label " for="rdoHPBB">测试结果:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
          </div>
          <hr>
          <div class="form-inline">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style="width:800px"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="row top">
      <div class="card col-md-8 " id="lotinfo">
        <h6 class="card-header">备注</h6>
        <div class="card-block">
          <div class="form-inline">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" style="width:800px"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="row top">
      <div class="card col-md-8 " id="lotinfo">
        <h6 class="card-header">判定结果</h6>
        <div class="card-block">
          <div class="form-inline">
            <div class="form-group">
              <label class="customer_label" for="name">抽样数:</label>
              <input type="text" class="form-control-sm left custmer_input" id="name" placeholder="请输入抽样数">
            </div>
            <div class="form-group">
              <label class="customer_label" for="name">判定标准:</label>
              <input type="text" class="form-control-sm left custmer_input" id="name" placeholder="请输入判定标准">
            </div>
            <div class="form-group">
              <label class="form-check-label " for="rdoHPBB">测试结果:</label>
              <input type="radio" id="rdoHPBB" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">OK</label>
              <input type="radio" id="rdoHPBB1" name="rdoHPBB" class="form-control-input">
              <label class="form-check-label " for="rdoHPBB">NG</label>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "addReport",
  data() {
    return {
      today: new Date(),
      selectedIndex: 2,
      response: [],
      checkResult: [
        { text: 'ACC', value: 'OK' },
        { text: 'REG', value: 'NG' }
      ]
    };
  }
};
</script>
<style>
.top {
  margin-top: 5px;
}

.left {
  margin-left: 1px;
}

.report {
  min-width: 1200px;
}

.customer_label {
  min-width: 120px;
  text-align: right;
}

.customer_label_chk {
  min-width: 150px;
  text-align: left;
}

.custmer_input {
  width: 150px;
}
</style>
