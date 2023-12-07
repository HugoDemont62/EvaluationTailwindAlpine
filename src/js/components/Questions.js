export default function Questions(datas) {
  return {
    questions: [],
    openPanel: null,
    fetchData: async function () {
      const response = await fetch(datas);
      const data = await response.json();
      this.questions = data;
    },

    togglePanel: function(id) {
      this.openPanel = this.openPanel === id ? null : id;
    },

    init: function () {
      this.fetchData().then(r => {
        const hash = window.location.hash;
        if (hash) {
          this.openPanel = hash.replace('#', '');
        }
      });
    },
  };
}