// Creating an array with the array name 'cats'
const cats = ["Milo", "Otis", "Garfield"];

// Destructively append cat name 'Ralph' in the cats array
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

//Destructively prepend cat name 'Bob' in the cats array
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

//Destructively remove last element 'Garfield' from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

//Destructively remove first element from array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

//Non-destructively append element
function appendCat() {
  const appended = [...cats, "Broom"];
  return appended;
}

//Non-destructiely prepend element
function prependCat(name) {
  const prepended = ["Arnold", ...cats];
  return prepended;
}

//Non-destructively remove last element with regards to the returned array
function removeLastCat() {
  const lastElementRemoved = cats.slice(0, 2);
  return lastElementRemoved;
}

//Non-destructively remove first element paying attention to the returned array
function removeFirstCat() {
  const FirstElementRemoved = cats.slice(1);
  return FirstElementRemoved;
}
