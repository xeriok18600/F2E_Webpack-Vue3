import './sass/style.sass'
// import './pug/index.pug'
// new Vue({
//   el: '#app',
//   data: function () {
//     return {
//       visible: false
//     }
//   }
// })

new Vue({
  el: '#app',
  data: {
    tabPosition: 'bottom',
    input: '',
    value1: '',
    textarea: ''
  },
  methods: {
    openFrom: function () {
      document.getElementById('addTask').classList.add('dis-no')
      document.getElementById('addForm').classList.remove('dis-no')
    },
    btnCancel: function () {
      document.getElementById('addForm').classList.add('dis-no')
      document.getElementById('addTask').classList.remove('dis-no')
    }
  }
})