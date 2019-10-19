const names = [
    'Ichigo Kurosaki',
    'Didi Mocó',
    'Bruce Wayne'
];

const print = name => console.log(name);
const lastNameFirst = name => `${name.split(' ')[1]}, ${name.split(' ')[0]}`;

names
    .map(lastNameFirst)
    .sort()
    .forEach(print);

