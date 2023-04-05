saturdayFun = (activity = "roller-skate") =>
  `This Saturday, I want to ${activity}!`;

saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(param = "*") {
  const part1 = "You are";
  return function innerFunction(param2 = "special") {
    return `${part1} ${param}${param2}${param}!`;
  };
}
