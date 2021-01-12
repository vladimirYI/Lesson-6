function calcSumFromFibonacci(from, to) {

    if (typeof from !== 'number' || Number.isNaN(from) || !Number.isFinite(from) || typeof to !== 'number' || Number.isNaN(to) || !Number.isFinite(to)) {
        throw new Error ('Not a number');
    }

    if (from < 0 || to < from) { 
        throw new Error('Incorrect data'); 
    }

    let sum = 0; 
    for (let left = 0, right = 1; right <= to;) { 
        if (right >= from && right <= to) { 
            sum += right; 
        }

        const temp = right; 
        right += left; 
        left = temp; 
    }

    return sum; 
}


