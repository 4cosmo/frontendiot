
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
  onLogin: false
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  loadUser (state, res) {
    state.userALL = res
  },
  LoginUser (state, res) {
    state.onLogin = res; 
  }

}
