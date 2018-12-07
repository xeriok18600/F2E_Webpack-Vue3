import './sass/style.sass';
new Vue({
    el: '#app',
    data: {
        count: 0,
        displayStatus: true,
        btnStatus: true,
        menu: [],
        error: false,
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
        getRandom(x) {
            var productmenu = []
            for (var i = 0; i < x; i++) {
                var random = (Math.floor(Math.random() * this.menu.length))
                productmenu.push(this.menu[random])
            }
            console.log(productmenu)
            return productmenu
        }
    }
})