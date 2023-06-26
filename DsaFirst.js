function moveZeroes(num) {
    let left = 0;
    for (let right = 0; right < num.length; right++) {
      if (num[right] !== 0) {
        [num[left], num[right]] = [num[right], num[left]];
        left++;
      }
    }
    for (let i = left; i < num.length; i++) {
      num[i] = 0;
    }
  }
  const num = [0, 1, 0, 3, 12];
  moveZeroes(num);
  console.log(num);
  