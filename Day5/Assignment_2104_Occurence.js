
const nums = [2,4,5,2,1,2]
let a = 0
function occurence(k)
{
for (i=0;i<=nums.length-1;i++)
{
    if(nums[i]==k)
        {
       a++
    }
}
console.log(a)
}
occurence(2)
