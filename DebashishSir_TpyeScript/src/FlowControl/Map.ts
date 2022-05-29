let map = new Map();

map.set('1', 'abhishek');
map.set(1, 'www.Google.com');
map.set(true, 'bool1');
map.set('2', 'ajay');

console.log('Value1= ' + map.get(1));
console.log('Value2= ' + map.get('1'));
console.log('Key is Present= ' + map.has(3));
console.log('Size= ' + map.size);
console.log('Delete value= ' + map.delete(1));
console.log('New Size= ' + map.size);

let ageMapping = new Map();

ageMapping.set('Abdul', 23);
ageMapping.set('Reshmi', 25);
ageMapping.set('Anjani', 23);
ageMapping.set('Dinda', 21);

//Iterate over map keys
for (let key of ageMapping.keys()) {
  console.log('Map Keys= ' + key);
}
//Iterate over map values
for (let value of ageMapping.values()) {
  console.log('Map Values= ' + value);
}
console.log('The Map Enteries are: ');
//Iterate over map entries
for (let entry of ageMapping.entries()) {
  console.log(entry[1], entry[0]);
}

//Clear()
ageMapping.clear();
console.log(ageMapping);

//Methods =>
// 1.map.set(key, value) is for push the keys and values in map.
// 2.map.get(key), Get the values using keys.
// 3.map.has(key), For checking given key and values is present or not in map.
// 4.map.delete(key), For delete any information using key.
// 5.map.size(), We can find size of map using this.
// 6.map.clear(), use to clear all data but structure of map  exist.