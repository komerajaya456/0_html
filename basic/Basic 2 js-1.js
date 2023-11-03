var array=[1,2,3,4]
console.log(array.length)  <!--prints len(array)-->

function greets(){
  console.log(1);
  console.log(2);
}
greets();    <!--prints 1,2 same as def in python-->

function match(){
  var name="rohit";
  console.log(name+"great");
}
match();    o!--prints,,  rohit great   -->

function player(name){
  console.log("hello "+name);
}
player("rohit") ;  <!--print,,,, hello rohit  -->


function age(number){
  var age= "user age"+number;<!--what ever in var gets in return;-->
  return age;
}
console.log(age(5))  <!--print ,,, user age 5-->

function goats(){
  return 10;
}
console.log(goats())    <!--prints ,,, 10   -->


function rank(name1,name2){
  console.log("1st "+name1);
  console.log("2nd "+name2);
}
rank("komera","krish");


var address={
  city:"banglore",
  phone:864235
};  
console.log(address);  <!--prints ,, city..,phone: 
console.log(address.phone);  !--prints ,,phone  ,-->
address.city="chennai";
console.log(address.city); <!--prints ,, chennai  -->

var dog={
  name:"rocky";
  bark:function(word){
    console.log("eats"+word);
  }
}
dog.bark("chicken");<!--prints,,,eats chicken-->

var dog={
  name:"rocky";
  bark:function(word){
    return "eats"+word;
  }
}
console.log(dog.bark("chicken"));<!--prints,,,eats chicken-->

var dog={
  name:"rocky";
  bark:function(){
    console.log(this);
  }
}
dog.bark();<!--prints,,,name:"rocky",bark:[function:bark]-->


var dog={
  name:"rocky";
  bark:function(){
    console.log(this.name);
  }
}
dog.bark();<!--prints,, rocky,,-->



var dog={
  name:"rocky";
  bark:function(){
    this.name="bhai"
    console.log(this.name);
  }
}
dog.bark();<!--prints,, bhai,,-->
 

function drink(age){
  if (age>=21){
    console.log("yes u can drink");
  }
  console.log("completed");
}
drink(23);  <--prints,,,yes u...,,,-->
drink(18);  <--prints,,,completed,,,-->


function multiplyByTen(number) {
 console.log("hi");
 return number * 10;
 console.log("This won't get executed");
}

var result = multiplyByTen(29);
console.log(result);
<!--here  return after ourput doesnot work-->

function getDiscount(age) {
 if (age >= 65) {
  return "50% OFF";
 }
 return "0% OFF";
}

var discount = getDiscount(67);
console.log(discount);
prints  <!--prints 50% off,,-->


function displayNumbers(message) {
 for (var i = 0; i <= 10; i++) {
  console.log(i + message);
 }
}

displayNumbers(" ginger beers on the wall");
displayNumbers(" root beers on the wall");
<!--prints,,10times 0,10 ginge  ,,,,,
11 times 0,11 root beers ,,,,-->


 
function displayInterval(start, end) {
 for (var i = start; i < end; i++) {
  console.log(i);
 }
}

displayInterval(26, 30);<--,,prints,,26-30,,-->



let one = [91, 66, 77, 84, 68];
let two = [81, 66, 78, 88, 98];

function compareArrays(one, two) {
 for (let i = 0; i < one.length; i++) {
  if (one[i] === two[i]) {
   console.log("Common element:", one[i]);
  }
 }
 return false; <!--breaks by printing one time,,but break doesn''t,,-->
}
compareArrays(one, two);
<!-- prints,,66,,,-->


const getVehicleCount = () => {
 count = 4003;
 return count;
}
console.log(getVehicleCount());
<!--prints,,,4003,,,,-->


const getPrice = (discount) => 500 - (discount * 500);

console.log(getPrice(0.25));
<!--prints,,,375,,,-->


const getPrice = (total) => {
 const discount = 0.10;
 return total - (discount * total);
}
console.log(getPrice(500));
<!--prints,,450,,,-->


const getPrice = (total = 200) => {
 const discount = 0.16;
 return total - (discount * total);
}
console.log(getPrice()); 
<!--prints,,,168,,,-->


 const getPrice = (total = 200, discount = 3) =>
 total - (discount / 100 * total);

console.log(getPrice());
<!--prints,,,194,,,,-->


const getSquare = (number,
 multiplier) => number * multiplier;
console.log(getSquare(4,2));
<!--prints,,8,,,-->


let category = `pie`;
let cake = `Apple ${category}`;
console.log(cake);
<!--prints,,,apple pie,,,-->


let quantity = 20
let price = 10
let cost = `Total cost : ${quantity * price}`;
console.log(cost);
<!--prints,,,Total cost:200,,,-->


const greetings = (name) => {
  return `hey ${name}!`;
}
console.log(greetings`ane`);
<!--,,,prints,,,hey ane,,,-->



let old = `Superman`;
let latest = `Startrek`;
let movies = `${old}, ${latest}`;
console.log(movies);
<!--prints,,,superman startrek,,,-->


let ticketPrice = 500;
let persons = 5;
let total = `Total cost: ${ticketPrice * persons}`;
console.log(total);
<!--prints,,,Total cost:2500,,,-->



const likedBy = person => {
 return `Movie liked by: ${person}`;
}
console.log(likedBy`Hellen`);
<!--prints,,,movie liked by:Hellen,,,-->

class Book{ <!--always upper case-->
  constructor(title,author){
    this.title=title;
    this.author=author;
  }
}
var book1=new Book("romea and juliet","shekspear");
var book2=new Book("koomer","krish");
console.log(book1);  <!--rome,,,sheak,,-->
console.log(book2);  <!--komom,,,krish,,-->


class virtualpet{
  constructor(name){
    this.name=name;
  }
  eat(food){
    console.log("bow bow")
    if (food==="tasty"){
      console.log("yes")
    }else{
      console.log("no")
    }
  }
}
var pet=new virtualpet("tommy");
pet.eat();   <!--prints,,,bow bow,,,-->
pet.eat("tasty");  <!--prints,,yes,,,-->



class Inventory {
 constructor(size) {
  this.size = size;
 }
 increase(unit) {
  this.size += unit;
  console.log(unit);
 }
}
var bag = new Inventory(10);
bag.increase(5);   <!--prints,,,5,,,-->
console.log(bag);  <!--prints,,,15,,,-->

<hr>
class user{
  constructor(name){   <!--use default constructor-->
    this.name=name;
    this.isonline=true;
  }
  sayhi(){
    console.log("hi"+this.name)
  }
}
var user1=new user("arya")
console.log(user1)  <!--prints,,,nam:arya,,iso:true,-->
var user2=new user("kiran")
user2.isonline=false;
mconsole.log(user2)  <!--prints,,,nam:kir,,isol:false,,-->
user2.sayhi()  <!--prints,,,hi kiran,,,-->

<hr>

class Sport {
 constructor(name) {
  this.name = name;
  this.scoreValue = 0;
  this.periods = 4;
  this.score = 10;
 }
 scored() {
  this.score += this.scoreValue;
  console.log(this.score);
 }
}
var sport1 = new Sport("Football");
var sport2 = new Sport("Soccer");
sport1.scoreValue = 6;
sport2.scoreValue = 1;
sport1.scored(); <!--prints 16-->
sport2.scored(); <!--prints 11-->

<hr>

class Car {
 showWarning() {
  console.log("Fasten seatbelts");
 }
}
var car = new Car();
car.showWarning();   <!--without constructor-->

<hr>

class Car {
 showWarning() {
  console.log("Fasten seatbelts");
 }
}
var car = new Car();
car.showWarning(); 

<hr>

class Animal {
 constructor(name) {
  this.name = name;
 }
}

class Dog extends Animal {}<!--Dog also extends here same as inheritence-->

var dog = new Dog("Pug");
var ani = new Animal("pig");
console.log(dog);
console.log(ani);

<hr>

class Employee {
 constructor(company) {
  this.company = company;
 }
 clockIn() {
  console.log("Starting work at " + this.company);
 }
}

class Dishwasher extends Employee {}
class LineCook extends Employee {}

var emp1 = new Dishwasher("Laundrys");
var emp2 = new LineCook("Laundrys");
emp1.clockIn();<!--same-->
emp2.clockIn(); 

<hr>

class Human {
 constructor(weapon) {
  this.weapon = weapon;
  this.health = 100;
 }
 receiveDamage() {
  this.health = this.health - 10;
 }
}
class Wizard extends Human {
 receiveDamage() {
  this.health = this.health - 5;
 }
}
var wizard = new Wizard("staff");
var lizard = new Human("staff1")
lizard.receiveDamage(); <!--go inside receivedamage()-->

wizard.receiveDamage();
console.log(wizard.health);<!--prints,,95-->
console.log(lizard.health); <!--prints,,90-->

<hr>


class Human {
 constructor(name) {
  this.name = name;
   console.log("thus alwaysrints")
 }
 receive() {
  console.log("hey" + this.name);
 }
}
class Animal extends Human {
 receive() {
  super.receive(); <!--it goes main super class-->
  console.log("stop" + this.name);
 }
}
var human = new Human(" koma");
human.receive();
var animal = new Animal(" subu");
animal.receive(); <
!--hey koma | hey subu | stop subu-- >

<hr>

class Human {
 constructor(weapon) {
  this.weapon = weapon;
  this.health = 100;
 }

 receiveDamage() {
  this.life = this.health - 10;
  console.log(this.life);
 }

 attack() {
  console.log("Swings " + this.weapon);
 }
}

class Warrior extends Human {
 constructor(weapon) {
  super(weapon);<!-- call superclass human constructor and create weapon-->
 }

 receiveDamage() {
  super.receiveDamage();
  this.health = this.health - 5;

  console.log(this.health);
 }

 attack() {
  super.attack();
  console.log("Barritus!");
 }
}

var warrior = new Warrior("sword");
var swor = new Human("knife")
console.log(warrior.weapon); < !--prints, , swords-- >
warrior.attack(); < !--prints, swing sword|Barritus, -- >
warrior.receiveDamage(); < !--prints,90|95 , -- >

<hr>

function getDistance(mph, h) {
 return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);<!--prints,,120,,->

<hr>

var dog = {
 hungry: true,
 eat: function() {
  dog.hungry = false;
 }
}

dog.eat(); < !--this will call
function -- >
console.log(dog.hungry + 'hi'); < --prints, ,
falsehi-- >

<hr>
<!--functional program-->
function addMoney(value, amount) {
 return value + amount;
}

var value = 0;

var value = addMoney(value, 100);
value = addMoney(value, 50);
value = addMoney(value, 22);
console.log(value);   <!--prints,,172,,-->

<hr>
<!--oop-->
var myPiggy = {
 value: 0,
 addMoney: function(amount) {
  myPiggy.value = myPiggy.value + amount;
 }
};

myPiggy.addMoney(100);
myPiggy.addMoney(200)
console.log(myPiggy.value);<!--prints,,300,,-->

<hr>

function getArea(b, h) {
 return b * h;
}
var base = 3;
var height = 4;
var rectangle = {
 base: 3,
 height: 4,
 getArea: function() {
  return rectangle.base * rectangle.height;
 }
};
var area = rectangle.getArea();
console.log(area);  <!--prints,,12,,-->
console.log(rectangle.getArea);
console.log(getArea(3, 4)); < !--prints, , 12-- >

<hr>

var template = {
 greet: function() {
  console.log('Hi!');
 }
};
var person = Object.create(template);
<!--templet changed to person-->
person.charge = function() {
 console.log('Using fuel to charge battery');
};
person.greet();  <!--prints,,hi,,-->

<hr>

var car = {
 fuel: function() {
  console.log('Fueling');
 }
};
var electricCar = {
 charge: function() {
  console.log('Charging!');
 }
}
var car1 = Object.create(electricCar);
var car2 = Object.create(car);
car1.charge(); <!--prints,,Fueling,,-->
car2.fuel();   <!--prints,,Charging,,-->

<hr>

var player = {
 fight: function() {
  console.log('Take that!');
 }
};
var wizard = Object.create(player);
wizard.castSpell = function() {
 console.log('Alohomora!');
}
wizard.fight();  <!--prints,,take that,,-->
wizard.castSpell(); <!--prints,,Alohomora!,,-->

<hr>

class User {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
 greet() {
  console.log('Hi, I study ' + this.major);
 }
}
class Student extends User {
 constructor(name, age, major) {
  super(name, age);
  this.major = major;
 }
}
var student1 = new Student('Sam', 25, 'chemistry');
var student2 = new Student('Anne', 22,
 'Architecture');
console.log(student1);
student1.greet();
student2.greet();
<!--prints,,namsam,ag25,ma,,chem,,
hi i stu,,,,chemistry
hi i stu,,,,archiecture,,-->

<hr>

class Car {
 constructor() {
  this.on = false;
 }

 injectFuel() {
  console.log('Spraying fuel');
 }

 igniteFuel() {
  console.log('Boom!');
 }

 startUp() {
  this.on = true;
  while (this.on) {
   this.injectFuel();
   this.igniteFuel();
  }
 }
}<!--continues
Sparayin...,
Boom
Spray..
Boom..,-->

<hr>

class IceCreamMaker {
 churn() {
  console.log('Churning cream');
 }
freeze() {
  console.log('Freezing cream');
 }
 makeIceCream() {
  this.churn();
  this.freeze();
 }
}
var iceCreamMaker = new IceCreamMaker();
iceCreamMaker.makeIceCream();
<!--prints,,churni,
Feeezi,,,-->

<hr>

class Slideshow {
 constructor(slides) {
  this.slides = slides;
  this.current = 1;
 }
 viewNextSlide() {
  this.current++;
 }
 play() {
  while (this.current <= this.slides) {
   console.log('Slide ' + this.current);
   this.viewNextSlide();
  }
 }
}
var slideshow = new Slideshow(5);
slideshow.play(); < !--prints, ,slide1,slide2,slide3,,,,,-->

<hr>

class User {
 playVideo() {
  console.log('Ad #1: Shaving cream for $9.99!');
 }
}

var premium = new User();
premium.playVideo = function() {
 console.log('Buffering 8K HD Video');
};

premium.playVideo();<!--prints,,Buff...,-->

