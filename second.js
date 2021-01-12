function calcSum(number) {
  let hasNoError = typeof number === "number" && Number.isFinite(number) && !Number.isNaN(number); 
  let counter = hasNoError ? number : 0;
  
  func = function (number) { 
    hasNoError = hasNoError && typeof number === "number" && Number.isFinite(number) && !Number.isNaN(number); 
    if (hasNoError) counter += number; 
  
    const copyFunc = func; 
    copyFunc.toString = () => counter;
  
    return copyFunc; 
  }
   
  func.toString = () => counter;
  
  return func; 
}
