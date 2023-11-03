var highSchool="srichitanya";<!--we shouldnot use space, we can use capital letter as second word-->

var cart1='shopping';

var city="hyderabad";{to assign and use double qoutes only}

console.log("hello world");<!--output like print-->

console.log(city);<!--prints hyderabad-->
<!--when it is with double qoutes it is string-->

city="banglore";

console.log(city);<!--prints banglore value assiging changed -->

city=highschool;

console.log(city);<!--prints srichitanya-->

console.log('komera'+'krishna');<!--prints komera krishna-->

var flowers='lotus';
'5' + flowers ;  <!--'5 flowers'-->

var num=5+4 ; <!--with no quote-->
console.log('num')   <!--prints 9 -->

var num=5/6*8+2-7;
console.log('hi'+num);  <!-- prints hi 7-->

console.log(true);<!-- it prints true no need of quoltes-->

var status=false;
console.log(status);<!--prints false-->

console.log(!status);  <!--prints true-->

console.log(!true);  <!--prints false,, ! negation operator-->

parseInt('10');
(parseFloat('7')+1);//8//

console.log(10===10);  <!--print true-->

console.log(10!==15);   <!--print true-->

car=12
var car==status==100
console.log(car)  <!--prints false-->

console.log(1<23)  <!--prints true-->

console.log(1<=3)   <!--print true-->

console.log("apple"==="apple")<!--print true-->

console.log("apple"!=="papaya")<!--print false-->

(all booleans ,numbers ,strings are types)

if(true){
  console.log(true);
}   <!--prints true-->


var get=true;
if (get){
  console.log('came');
}

var born="banglore";
if (born==='banglore'){
  console.log('yes');
}
else{
  console.log('no');
}

else if(condition){
  console.log();
}<!-- we can also use  else at last of else if statement-->


var num1=3
num1+=1  <!--add 1-->
num++    <!--add 1-->

while (condition===true){
  console.log();
  condition=false ; <!--prints only one time-->
}

for (var i=1;i<5;i++){    <!-- for(var value;condition;imcre)
  console.log();
}

var friends=["komera","priya","ku","di"]<!--indexes(0,1,2,3)-->
console.log(friends[2])  ; <!--print ku-->

friends.push("salamaa");   <!--add to list , append-->

var rem=friends.pop();  <!--remove the last item of array-->
c