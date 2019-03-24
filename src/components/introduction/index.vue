<template>
  <div class="introduction">
    <h1>Olive.wang</h1>
    <h2>Skateboard，Coding，Music</h2>
    <p v-for="link in links" :key="link.name">
      <a :href="link.href" :target="link.self ? '_self': '_blank'">{{link.name}}</a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Introduction',
  data() {
    return {
      links: [{
        href: 'https://github.com/olivewind',
        name: 'Github',
      }, {
        href: 'mailto:olivewind.wang@gmail.com',
        name: 'Email',
        self: true,
      }, {
        href: 'https://www.zhihu.com/people/san-huan-mei-you-shao',
        name: '知乎',
      }, {
        href: 'https://juejin.im/user/57fa18ddd203090068b6c0e8',
        name: '掘金',
      }],
    };
  },
  methods: {
    contact() {
      const daovoice = window.daovoice;
      if (!daovoice) return;
      daovoice.openNewMessage('hi,');
    },
  },
};

</script>

<style lang="scss" scoped>
$font-color: #999;

.introduction{
  padding-top: 60px;
  h1{
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 9px;
    text-transform: uppercase;
    margin: 12px 0;
    margin-top: 0;
  }
  h2{
    color: $font-color;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: .12em;
    margin-bottom: 30px;
  }
  p{
    font-size: 14px;
    line-height: 2em;
    margin: 0;
    letter-spacing: 2px;
    text-decoration: none;
    transition: color .2s ease;
    cursor: pointer;
    a{
      color: $font-color;
      text-decoration: none;
      transition: color .2s ease;
      cursor: pointer;
      &:hover{
        color: #f33
      }
    }
  }
}
</style>
