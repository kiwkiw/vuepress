<template>
  <!-- 需求: 
    1、必须为数字
    2、只能有一个小数点
    3、小数点后保留两位小数
    4、当第一位输入小数点的时候自动补全，补为 0.
    5、除非是小数，否则数字不能以0开头
  -->
  <div>
    <el-form>
      <el-form-item>
        <el-input
          v-model.trim="obj.value"
          placeholder="请输入价格"
          @input="handleInput($event,'value')"
          style="width:200px"
        ></el-input>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "inputLimt",
  data() {
    return {
      obj: {
        value: null
      }
    };
  },
  methods: {
    handleInput(value, prop) {
      this.obj[prop] =
        ("" + value) // 第一步：转成字符串
          .replace(/[^\d^\.]+/g, "") // 第二步：把不是数字，不是小数点的过滤掉
          .replace(/^0+(\d)/, "$1") // 第三步：第一位0开头，0后面为数字，则过滤掉，取后面的数字
          .replace(/^\./, "0.") // 第四步：如果输入的第一位为小数点，则替换成 0. 实现自动补全
          .match(/^\d*(\.?\d{0,2})/g)[0] || ""; // 第五步：最终匹配得到结果 以数字开头，只有一个小数点，而且小数点后面只能有0到2位小数
    }
  }
};
</script>
