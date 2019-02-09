/**
 * 
 *   클로저를 이용하여, 클로저를 생성할때, 에라토스테네스의 체를 한번만 실행시켜서, 두번째 이후로는 그 결과만 이용해서 처리하게 만들수있음.
 */

function Primes(n) 
{
    var p = [];

    for(var i=2; i<=n; i++)
        p[i] = true;
    
    var max = Math.floor(Math.sqrt(n));
    var x = 2;
    while(x <= max)
    {
        for(var i = 2 * x; i<=n; i+=x)
            p[i] = false;
        
        while(!p[++x]);
    }



// 소수만 꺼내 배열 primes에 저장한다.
    var primes = [], nprimes = 0;
    for(var i=2; i<=n; i++)
    {
        if(p[i])
            primes[nprimes++] = i;
    }

    p = null;

    return function(m)
    {
        for(var i=0, product = 1; i<m; i++)
        {
            product *= primes[Math.floor(Math.random() * nprimes)];
        }
        return product;
    }

}

var primeProduct = Primes(100000);
console.log(primeProduct(2))
console.log(primeProduct(2))