function bakeACake() {
    return new Promise((resolve, reject) => {
        console.log('Starting baking the cake!');
        setTimeout(() => resolve('Cake is ready!'), 2000);
        reject('No cake today!');
    });
}

bakeACake()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
