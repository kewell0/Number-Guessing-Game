let username = prompt('Choose a user name: ');
console.log(`Hi ${username} Welcome..!!`);

let guess;
let answer = 2;
let points = 0;

console.log(`STAGE 1:`);
guess = prompt(`Guess a number between the range of 1 and 2`);

for (let i = 0; i < 2; i++) {
  if (guess == answer) {
    points = 1;
    console.log(`Correct..!!!,  SCORE: '${points} point'`);

    // ===STAGE 2====//
    console.log(`STAGE 2:`);
    for (let i = 0; i < 3; i++) {
      guess = prompt(`Guess a number between the range of 1 and 3`);
      if (guess == answer) {
        points++;
        console.log(`Correct..!!!,  SCORE: '${points} points'`);


        //===STAGE 3===//
        console.log(`STAGE 3:`);
        for (let i = 0; i < 4; i++) {
          guess = prompt(`Guess a number between the range of 1 and 4`);
          if (guess == answer) {
            points++;
            console.log(`Congratulations ${username}..!!!,  TOTAL SCORE: '${points} points'`);
            console.log(`You made our top score`);


          } else {
            console.log(`Sorry ${username} GAME OVER..!!`);
            console.log(`score: ${points} points.`);
          }
          break;

        }
      } else {
        console.log(`Sorry ${username} GAME OVER..!!`);
        console.log(`score: ${points} point.`);
      } break;

    }
    break;
  } else {
    console.log(`Sorry ${username} GAME OVER..!!`);
    console.log(`score: ${points} point.`);
    break;
  }
}