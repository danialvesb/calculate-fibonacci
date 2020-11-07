const format = {
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
    },
};
