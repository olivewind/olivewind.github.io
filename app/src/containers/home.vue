<template>
  <div>
    <div v-for="issue in issues" :key="issue.id">
      <issue-overview :issue="issue"></issue-overview>
    </div>
  </div>
</template>s

<script>
import GithubService from "../services/github";

export default {
  name: "Home",
  data() {
    return {
      issues: [],
      loading: false
    };
  },
  created() {
    this.getIssues();
  },
  methods: {
    getIssues() {
      GithubService.getIssues()
        .then(issues => {
          this.issues = issues;
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="less">
</style>
