num="java:${10+20}"
console.log(num);
num='javascript ${10+20}'
console.log(num)
a=50;
b=50;
num=`addition of a and b:${a+b}`
console.log(num);
num=`addition of 10 and 20:${10+20}`
console.log(num);
num=true
console.log(num);
/*class names eg*/
class SampleExample{
    display(){
        console.log("this is non static display method in sampleeample");
    }
    test(){
    console.log("test method");
}
}
/*new SampleExample().display() --> this is also used for displaying the output*/

s1=new SampleExample()
s1.display()
s1.test()

/*function names identifier example*/
function addition(){
    console.log(10+20);
}
addition()

/*ternary example*/
num=331;
result=num%2==0?"even number":"odd number"
console.log(result)

/*comparision operator*/
a=10;
b='10';
c=null;
d=Symbol(10);
e=12243243353455n
let f;
console.log("type of variable a is:",typeof a);
console.log("type of variable b is:",typeof b);
console.log("type of variable c is:",typeof c);
console.log("type of variable d is:",typeof d);
console.log("type of variable e is:",typeof e);
console.log("type of variable f is:",typeof f);
console.log(c==d);
console.log(c===d);