const vm = new Vue({
    el: '#app',
    mixins: [sort],
    data() {
        return {
            valueInput: '',
            items: [],
        };
    },
    computed: {
        getFibonacci() {
            return '';
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
        formatForNumbersArray(array) {
            let arrayFull = array.split(',');
            let arrayNumbersString = arrayFull.filter((item) => {

                return !isNaN(item) && !(item === '');
            });
            let arrayNumbersInterger = arrayNumbersString.map((item) => {
                return parseInt(item);
            })
            return arrayNumbersInterger;
        },
        fibonacci(num, memo) {
            memo = memo || {};

            if (memo[num]) return memo[num];
            if (num <= 1) return 1;

            return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
        }
    },
});
