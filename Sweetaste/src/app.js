import './sass/style.sass';
new Vue({
    el: '#app',
    data: {
        count: 0,
        displayStatus: true,
        btnStatus: true
    },
    methods: {
        nextPage() {
            this.count += 1
            if (this.count === 2) {
                this.btnStatus = false
            }

        }
    }
});