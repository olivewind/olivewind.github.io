
import IssueOverview from './issue-overview.vue';

const COMPONENTS = {
  IssueOverview,
};

export default function install(Vue) {
  Object.keys(COMPONENTS).forEach((name) => {
    Vue.component(name, COMPONENTS[name]);
  });
}
