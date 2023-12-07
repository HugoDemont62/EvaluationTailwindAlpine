export default function Projects(datas) {
  return {
    datas: '',
    projects: [],
    currentCategory: 'all',
    setCategory(category) {
      this.currentCategory = category;
    },
    fetchData() {
      fetch(this.datas)
      .then(response => response.json())
      .then(data => this.projects = data)
      .catch(error => console.error('Erreur de chargement :', error));
    },
    filteredProjects() {
      if (this.currentCategory === 'all') {
        return this.projects;
      }

      return this.projects.filter(
        project => project.category.includes(this.currentCategory));
    },
    init() {
      this.fetchData();
    }
  };
}