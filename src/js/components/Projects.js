export default function (datas) {
  return {
    projects: [],
    img: '',
    open: false,
    fetchData: async function () {
      const response = await fetch(datas);
      this.projects = await response.json();
    },
    openImg: function(src) {
      this.img = src;
      this.open = true;
    },
    closeImg: function() {
      this.open = false;
    },
    init: function () {
      this.fetchData();
    },
  };
}