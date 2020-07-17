mark=prompt("Enter a mark scored ") ;
if( mark>0&&mark<50)
{
  console.log("Marks are"  +mark+ "and grade is C");
}
else if (mark<=50&&mark>=50)
{ 
console.log("Marks are" +mark+ "and grade is B");
}
else
{
console.log("Marks are" +mark+ "and grade is A");
}


console.log("using ternary operators" );


let result=(mark>0&&mark<50)?'Your grade is C':
(mark<=50&&mark>=50)?'Your grade is B':
'Your grade is A';


console.log(result);
