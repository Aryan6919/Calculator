const op = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// accept the number from the user through prompt box  
const n1 = parseFloat(prompt ('Enter the first number: '));  
const n2 = parseFloat(prompt ('Enter the second number: '));  
let r;
if(op=='+')
{
    r=n1+n2;
}
else if(op=='-')
{
    r=n1-n2;
}
else if(op=='*')
{
    r=n1*n2;
}
else if(op=='/')
{
    r=n1/n2;
}
else if(op=='%')
{
    r=n1%n2;
}
window.alert("RESULT IS"+r);