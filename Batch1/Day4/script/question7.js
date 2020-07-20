let high=console.log("enter an value of n");
let low=2;
    while (low < high)
    {
        flag = 0;

        for(i = 2; i <= low/2; ++i)
        {
            if(low % i === 0)
            {
                flag = 1;
                break;
            }
        }

        if (flag === 0)
            console.log(low);
        ++low;
  }
