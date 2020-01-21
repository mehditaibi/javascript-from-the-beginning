let val;

const today = new Date();
const birthday = new Date("7-28-1991 14:00:00");
birthday = new Date("July 28 1991");
birthday = new Date("7/28/1991");

val = today;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);
