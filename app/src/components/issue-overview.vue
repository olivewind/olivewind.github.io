<template>
  <div>
    <router-link :to="{ name: 'issue', params: { id: issue.number }}">{{issue.title}}</router-link>
  </div>
</template>

<script>
export default {
  name: "issue-overview",
  props: ["issue"]
};
</script>

<style lang="less">
</style>
