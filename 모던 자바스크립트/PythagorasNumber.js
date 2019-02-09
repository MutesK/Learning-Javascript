// O(N^3) Not Effectiable Algorithm
function PythagorasNumber(max)
{
    for(var a = 1; a <=max; a++)
    {
        for(var b=1; b<=max; b++)
        {
            for(var c=1; c<=max; c++)
            {
                if(a*b + b*b == c*c)
                {
                    console.log(a + "^2 + " + b + "^2 = " + c + "^2");
                }
            }
        }
    }
}

PythagorasNumber(20);