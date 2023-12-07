export default function() {
  return {
    openPanel: null,
    open(index) {
      this.openPanel === index ? this.openPanel = null : this.openPanel = index;
    }
  };
}