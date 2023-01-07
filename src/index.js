module.exports = function reverse (n) {
        n = n + "";
        return  n.split("").reverse().join("");
    }

    console.log(reverse(123));
    console.log(reverse(233));
    console.log(reverse(535));
    console.log(reverse(95034));
