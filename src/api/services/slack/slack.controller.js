const { WebClient } = require('@slack/web-api');
const httpStatus = require('http-status');
const service = require('./slack.service');

const web = new WebClient(process.env.SLACK_TOKEN);

/**
 * Returns a "Hello World" smoke-test response
 * @public
 */
exports.hello = async (req, res, next) => {
  res.send(200);
  // try {
  // const response = await service.register(req.body);
  // return res.status(httpStatus.CREATED).json(response);
  // } catch (error) {
  // return next(error);
  // }
};

// Create a new instance of the WebClient class with the token read from your environment variable
// The current date
// const currentTime = new Date().toTimeString();
//
// (async () => {
//   // Use the `auth.test` method to find information about the installing user
//   const res = await web.auth.test();
//
//   // Find your user id to know where to send messages to
//   const userId = res.user_id;
//
//   // Use the `chat.postMessage` method to send a message from this app
//   await web.chat.postMessage({
//     channel: userId,
//     text: `The current time is ${currentTime}`,
//   });
//
//   console.log('Message posted!');
// })();
