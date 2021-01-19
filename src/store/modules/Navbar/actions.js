const actions = {
  openMenu(context) {
    context.commit("changeMenuState", true);
  },
  closeMenu(context) {
    context.commit("changeMenuState", false);
  }
};

export default actions;