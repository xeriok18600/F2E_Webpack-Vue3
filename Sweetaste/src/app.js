import './sass/style.sass';
new Vue({
    el: '#app',
    data: {
        count: 0,
        displayStatus: true,
        btnStatus: true,
        menu: [],
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            axios
                .get('https://jsonsweeteaste.herokuapp.com/menu')
                .then((res) => {
                    this.menu = res.data
                    console.log(this.menu)
                })
                .catch((res) => {
                    console.log(res)
                })
        },
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