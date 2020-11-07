const vm = new Vue({
    el: '#app',
    mixins: [sort, format],
    data() {
        return {
            valueInput: '',
            items: [],
            rangeForarray: 0,
        };
    },
    computed: {
        getFibonacci() {
            return this.getArrayNumbersAsc.filter((item) => {
                return this.isFibonacci(item);
            });
        },
        getArrayNumbers() {
            return this.formatForNumbersArray(this.valueInput);
        },
        getArrayNumbersAsc() {
            this.items = this.getArrayNumbers;
            return this.quickSort(this.items, 0, this.items.length - 1);
        },
    },
    methods: {
        isFibonacci(param) {
            let a = 0;
            let b = 1;
            if (param === a || param === b) {
                return true;
            };

            let c = a + b;

            while (c <= param) {
                if (c === param) {
                    return true;
                };
                a = b;
                b = c;
                c = a + b;
            }
            return false;
        },
    },
});
