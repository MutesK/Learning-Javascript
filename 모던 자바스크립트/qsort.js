function quicksort(x, first, end)
{
    if(first <= end)
    {
        var pivot = partition(x, first, end);

        quicksort(x, first, pivot - 1);
        quicksort(x, pivot + 1, end);
    }
}

function partition(x, first, end)
{
   var pivot = x[first];
   var low = first + 1;
   var high = end;

   while(high >= low)
   {
       if(pivot > x[low])
            low++;
       if(pivot < x[high])
            high--;

       if(low <= high)
       {
            var temp = x[low];
            x[low] = x[high];
            x[high] = temp;
       } 
   }

   var temp = x[first];
   x[first] = x[high];
   x[high] = temp;

   return high;
}

var a = [7, 2, 5, 1, 8, 9, 3];
quicksort(a, 0, a.length - 1);
console.log(a);