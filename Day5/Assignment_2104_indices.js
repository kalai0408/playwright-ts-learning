const nums = [2, 4, 7, 8, 11, 14]
// one bucket
//loop
//num[i]+num[k] = k
//yes - pprint(num[i],num[k])

function ind(k){
    for(let i=0;i<=nums.length-1;i++)
    {
      for(let j=i+1;j<=nums.length-1;j++)
      {
        if(nums[i]+nums[j]==k)
        {
            console.log(i,j)
        }
      }
    }
}
ind(18)
