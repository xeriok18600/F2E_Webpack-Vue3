import './sass/style.sass';
new Vue({
    el: '#app',
    data: {
        count: 0,
        displayStatus: true,
        btnStatus: true,
        menu: null
    },
    mounted () {
        axios
            .get('https://jsonsweeteaste.herokuapp.com/menu')
            .then(response => (this.menu) = response.data)
    },
    methods: {
        nextPage() {
            this.count += 1
            if (this.count === 2) {
                this.btnStatus = false
            }
        }
    }
})