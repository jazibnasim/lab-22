var advice = ["Are you sure about that?",
              "That looks fabulous!",
              "Who dressed you, the great depression?",
              "Follow your heart.",
              "Girl you've got spunk!"
             ];


function giveAdvice() {
  var random = advice[Math.floor(Math.random()*advice.length)];
  return random;
}


exports.random = giveAdvice;
