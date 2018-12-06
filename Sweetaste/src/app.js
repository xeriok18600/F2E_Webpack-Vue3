import './sass/style.sass';
new Vue({
    el: '#app',
    data: {
        count: 0,
        displayStatus: true,
        btnStatus: true,
        menu: [],
        error: false
    },
    mounted() {
        axios
            .get('https://jsonsweeteaste.herokuapp.com/menu')
            .then((response) => {
                this.menu = response.data
                console.log(this.menu)
            })
            .catch((response) => {
                console.log(response)
                this.error = true
            })
    },
    methods: {
        nextPage() {
            this.count += 1
            if (this.count === 2) {
                this.btnStatus = false
            }
        },
        getRandom() {
            var productmenu = []
            for (var i = 0; i <= 6; i++) {
                productmenu.push(Math.floor(Math.random() * this.menu.length))
            }
            console.log(productmenu)
        }
    }
})