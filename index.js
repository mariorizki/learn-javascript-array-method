const names = [
  'Mr. Fahri',
  'Mr. Abdul',
  'Mrs. Josephhine',
  'Mr. Joseph',
  'Mr. Paul',
  'Mrs. Paula',
  'Mr. Hakim'
];

// Display All Names
console.log(names);

// Filter Names
const filterName = names.filter(name => name.includes('Mr.'));

console.log(filterName);

// Display Name with Gender
const namesAndGender = names.map(
  names.includes('Mr.') ? name => name + ' (Male)' : name => name + ' (Female)'
);

console.log(namesAndGender);

// Function to Search
var findAbdul = names.find(function(name) {
  return name.toLowerCase().includes('abdul');
});

console.log(findAbdul);

// Combine to Arrays
const names1 = ['Mr. Fahri', 'Mr. Abdul', 'Mrs. Josephhine'];
const names2 = ['Mr. Joseph', 'Mr. Paul', 'Mrs. Paula', 'Mr. Hakim'];

console.log(names1.concat(names2).join(' '));

// Filter Non-String Value
const names3 = [
  'Mr. Fahri',
  null,
  undefined,
  'Mr. Abdul',
  24,
  'Mrs. Josephhine',
  'Mr. Joseph',
  'Mr. Paul',
  32,
  'Mrs. Paula',
  7,
  22,
  'Mr. Hakim'
];

const stringOnly = names3.filter(name => typeof name === 'string');
console.log(stringOnly.join(' '));
