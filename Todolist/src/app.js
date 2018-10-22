import './sass/style.sass'

new Vue({
  el: '#app',
  data: {
    tabPosition: 'bottom',
    value1: '',
    textarea: '',
    nowDate: new Date(),
    formShow: true,
    formShow2: true,
    btnShow: false,
    addLists: {
      title: '',
      date: ''
    },
    filterLists: [],
    todoLists: [{
      title: 'Mission 1',
      date: '2018-10-08',
      status: false,
      isStar: false
    }],
  },
  filters: {
    formDate() {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1 //預設是0
      var day = date.getHours()
      var newDate = year + '-' + month + '-' + day
      return newDate
    }
  },
  mounted() {
    this.filterLists = this.todoLists
  },
  methods: {
    openFrom() {
      this.formShow = !this.formShow
    },
    btnCancel() {
      this.formShow = !this.formShow
    },
    btnSure() {
      this.todoLists.push({
        title: this.addLists.title,
        date: this.addLists.date,
        status: false,
        isStar: false
      })
      console.log(this.todoLists)
    },
    todoModify() {
      this.formShow2 = !this.formShow2
    },
    todoCancel() {
      this.formShow2 = !this.formShow2
    },
    isDate(date) {
      return (new Date(date).getMonth() + 1) + '/' + new Date(date).getDate()
    }
    // taskSure() {

    // }
  }
})