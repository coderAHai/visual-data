module.exports = {
  // 当前目录，即eslint规则限制目录范围
  root: true,
  // 表示eslint启用的环境
  env: {
    // 是否在node环境下启动eslint
    node: true,
  },
  // eslint需要继承的配置
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  // 解析器
  parserOptions: {
    parser: "babel-eslint",
  },
  // 规则启用错误级别
  /**
   * "off" || 0 —— 关闭规则
   * "warn" || 1 —— 规则以警告级别检测
   * "error" || 2 —— 规则以错误级别检测
   */
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
