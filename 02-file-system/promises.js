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

async function main() {
    try {
        const cake = await bakeACake();
        const cakeWithFrosting = await addFronsting(cake);
        console.log(cakeWithFrosting);
    }
    catch(err) {
        console.log(err);
    }
}

main();