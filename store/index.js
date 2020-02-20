
export const state = () => ({
  counter: 0,
  rightDrawerS: false,
  userALL:[
    {
      id: 0,
      username: "",
      password: "",
      yname: ""
    }
  ],
  onLogin: false,
  iduserLogin: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  rightD (state) {
    state.rightDrawerS = !state.rightDrawerS
    //this.rightDrawer = state.rightDrawerS
    return state.rightDrawerS
  },
  loadUser (state, res) {
    state.userALL = res
  },
  LoginUser (state, res) {
    state.onLogin = res.bool;
    state.iduserLogin = res.iduser    
  }

}
