<template>
  <div class="introduction">
    <p>
      你好，我是
      <b>王力国</b>，我是一名软件工程师，目前居住在上海。
    </p>
    <p>
      此前在云计算公司
      <a href="https://www.daocloud.io/" target="_blank">DaoCloud</a> 任职，现在在人工智能公司
      <a href="http://www.datagrand.com/" target="_blank">DataGrand(达观数据)</a> 任职。
    </p>
    <p>
      如果你对编程/滑板/摄影感兴趣的话，欢迎直接
      <a @click="contactMe">联系我</a>，或者通过
      <a href="https://github.com/olivewind/blog" target="_blank">GitHub</a> 和
      <a href="https://www.zhihu.com/people/san-huan-mei-you-shao" target="_blank">知乎</a>。
    </p>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  methods: {
    contactMe() {
      const daovoice = window.daovoice;
      if (!daovoice) return;
      daovoice("openNewMessage", "hi, ");
    }
  }
};
</script>

<style lang="scss" scoped>
$font-color: #999;

.introduction {
  padding-top: 0px;
  p {
    font-size: 14px;
    line-height: 2em;
    margin: 0;
    letter-spacing: 2px;
    text-decoration: none;
    transition: color 0.2s ease;
    padding-top: 12px;
    // cursor: pointer;
    a {
      color: $font-color;
      text-decoration: none;
      transition: color 0.2s ease;
      cursor: pointer;
      &:hover {
        color: #f33;
      }
    }
  }
}
</style>
