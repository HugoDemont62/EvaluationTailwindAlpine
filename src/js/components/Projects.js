export default function (datas) {
  return {
    projects: [],
    uniqueCategories: [],
    filteredProjects: [],
    filter: '',
    img: '',
    open: false,
    fetchData: async function () {
      const response = await fetch(datas);
      const data = await response.json();
      this.projects = data;

      const categories = this.projects.flatMap(project => project.category);
      this.uniqueCategories = [...new Set(categories)];

      this.filteredProjects = this.projects;
    },

    applyFilter: function() {
      if (this.filter) {
        this.filteredProjects = this.projects.filter(project => project.category.includes(this.filter));
      } else {
        this.filteredProjects = this.projects;
      }
    },

    openImg: function(src) {
      this.img = src;
      this.open = true;
    },

    closeImg: function() {
      this.open = false;
    },

    init: async function () {
      await this.fetchData();
    },
  };
}