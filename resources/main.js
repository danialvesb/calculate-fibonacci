const vm = new Vue({
    el: '#app',
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
        quickSort(items, left, right) {
            console.log(items);
            let index;
            if (items.length > 1) {
                index = this.partition(items, left, right);
                if (left < index - 1) {
                    this.quickSort(items, left, index - 1);
                }
                if (index < right) {
                    this.quickSort(items, index, right);
                }
            }
            return items;
        },
        partition(items, left, right) {
            let pivot = items[Math.floor((right + left) / 2)];
            let i = left;
            let j = right;
            while (i <= j) {
                while (items[i] < pivot) {
                    i++;
                }
                while (items[j] > pivot) {
                    j--;
                }
                if (i <= j) {
                    this.swap(items, i, j);
                    i++;
                    j--;
                }
            }
            return i;
        },
        swap(items, leftIndex, rightIndex) {
            let temp = items[leftIndex];
            items[leftIndex] = items[rightIndex];
            items[rightIndex] = temp;
        },
    },
});
