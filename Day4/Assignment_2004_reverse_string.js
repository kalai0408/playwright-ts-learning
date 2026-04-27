function checkpalindrome(madam)
{

//Split the string into characters 
let Pal_split = madam.split("")
console.log(Pal_split)

let reverse=""
for( let i=Pal_split.length-1;i>=0;i--)
{
reverse=reverse+Pal_split[i]
}
if(reverse===madam)
{
    console.log("This is palindrome")
}
else
    console.log("This is not palindrome")
}
checkpalindrome('madam')

