let FizzBuzz = (num1, num2, palavra1, palavra2) => {
  for (let i = 1; i <= 100; i++) {
    if ((i % num1 == 0) && (i % num2 == 0)) {
      console.log(`${palavra1} ${palavra2}`);
    }
    else if (i % num1 == 0) {
      console.log(palavra1);
    }
    else if (i % num2 == 0) {
      console.log(palavra2);
    } else {
      console.log(i);
    }
  }
}

FizzBuzz(3, 10, "Lélia", "Gonzalez")