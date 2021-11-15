const fibonacci2 = (function() {
    const memo =new Map();

    function f(n) {
        let value;
        if (memo.has(n)) {
            value = memo.get(n);
        } else {
            if (n <= 1) {
                value = n;
            } else {
                value = f(n - 1) + f(n - 2);
            }
            memo.set(n, value);
        }
        return value;
    }
    return f;
})();
// let fibonacci = fib()
// console.time('Memoized Version');
// console.log(fibonacci(50));
// console.timeEnd('Memoized Version');

console.time('Not Memoized Version');
console.log(fibonacci2(50));
console.timeEnd('Not Memoized Version');
