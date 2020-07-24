// Add your functions here
function map(arr, func){
  let r = []
  for (let i = 0; i < arr.length; i++){
    r.push(func(arr[i]))
  }
  return r 
}

function reduce(src, conditions, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = conditions(src[i], r)
  }

  return r;
}