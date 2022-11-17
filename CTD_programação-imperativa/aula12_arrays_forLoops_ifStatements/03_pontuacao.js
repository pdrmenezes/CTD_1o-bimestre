const rounds = 3
const alice = [23, 82, 46];
const bob = [45, 8, 32];

function findWinner(contestant1, contestant2) {
  let contestant1Points = 0
  let contestant2Points = 0
  let winner = ''
  for (let i = 0; i < rounds; i++) {
    if (contestant1[i] > contestant2[i]) {
      contestant1Points++
    }
    else if (contestant1[i] < contestant2[i]) {
      contestant2Points++
    }
  }
  console.log("Alice's points: " + contestant1Points + " / Bob's points: " + contestant2Points)
  if (contestant1Points > contestant2Points) {
    console.log("Alice is the winner!")
  } else {
    console.log("Bob is the winner")
  }
}

findWinner(alice, bob);