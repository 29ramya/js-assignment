let salary=prompt("enter The salary of an employee:");
if(salary<=5000)
{
  var commission=salary*0.2;
  console.log("the commission is "+commission);
}
if(salary>=5001 && salary<=10000)
{
  var  commission=salary*0.5;
  console.log(" the commission is " +commission);
}
if(salary>=10001 && salary<=20000)
{
  var commission=salary*0.7;
  console.log("the commission is " +commission);
}
if(salary>=20000)
{
  var commission=salary*0.1;
  console.log("the commission is  " +commission);
}
