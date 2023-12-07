export default function() {
  return {
    menuOpen: false,
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}