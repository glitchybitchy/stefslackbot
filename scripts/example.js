welcomeMessage = "Welcome to the WikiHouse Community Slack, here are some helpful resources to help you get started!"


module.exports = function(robot) {
  return robot.hear(/^get started?$/i, function(msg) {
    return msg.send(welcomeMessage);
  });
};
