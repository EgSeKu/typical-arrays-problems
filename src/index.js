exports.min = function min(arr) {
    let res = 0;
    if (typeof arr == 'undefined'||arr.length == 0)
        return 0;
    for (i = 0; i < arr.length; i++)
        if (arr[i] < res)
            res = arr[i];
    return res;
};

exports.max = function max(arr) {
    let res = 0;
    if (typeof arr =='undefined'||arr.length == 0)
        return 0;
    for (i = 0; i < arr.length; i++)
        if (arr[i] > res)
            res = arr[i];
    return res;
};

exports.avg = function avg(arr) {
    let res = 0;
    if (typeof arr =='undefined'||arr.length == 0)
        return 0;
    for (i = 0; i < arr.length; i++)
            res += arr[i];
    return res/(arr.length);
}
