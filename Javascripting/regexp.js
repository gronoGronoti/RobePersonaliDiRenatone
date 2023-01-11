let string = "Breakfast at 09:00 in the room 123:456";
let REGEXP = new RegExp (/\d{2}:\d{2}/, "g");

console.log(string.match(REGEXP));