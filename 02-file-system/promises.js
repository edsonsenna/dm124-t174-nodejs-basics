function bakeACake() {
    return new Promise((resolve, reject) => {
        console.log('Starting baking the cake!');
        setTimeout(() => resolve('Cake is ready'), 500);
        //reject('No cake today!');
    });
}

function addFronsting(cake) {
    return new Promise((resolve, reject) => {
        resolve(cake + ' with a delicious vanilla frosting');
    });
}

bakeACake()
    .then(addFronsting)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
