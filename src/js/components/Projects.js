export default function() {
  return {
    projects: [
      { id: 1, name: 'Project 1', category: 'cat1' },
      { id: 2, name: 'Project 2', category: 'cat2' },
      // autres projets ici ...
    ],
    currentCategory: 'all',
    setCategory(category) {
      this.currentCategory = category;
    },
    filteredProjects() {
      if (this.currentCategory === 'all') {
        return this.projects;
      }

      return this.projects.filter(project => project.category === this.currentCategory);
    },
  };
}