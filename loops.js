function forLoop(array)
{
  for(let i = 0; i < 25; i++)
  {
    if(i === 0)
    {
      array[i] = `I am 1 strange loop.`
    }
    else
    {
      array[i] = `I am ${i+1} strange loops.`
    }
    console.log(array [i])
  }
  console.log(array);
  return array;
}

