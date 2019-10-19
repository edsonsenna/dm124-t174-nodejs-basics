function operation1() {
    console.log('Operation 1 Started');
    setTimeout(() => console.log('Operation 1 Completed'), 3000)
}
function operation2() {
    console.log('Operation 2 Started');
    setTimeout(() => console.log('Operation 2 Completed'), 1000)
}
function operation3() {
    console.log('Operation 3 Started');
    setTimeout(() => console.log('Operation 3 Completed'), 0)
}

operation1();
operation2();
operation3();
