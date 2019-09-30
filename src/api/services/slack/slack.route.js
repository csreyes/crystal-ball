const express = require('express');
const validate = require('express-validation');
const controller = require('./slack.controller');

const router = express.Router();

/**
 * @api {get} v1/slack/hello Test Route
 * @apiDescription Slack test route
 * @apiVersion 1.0.0
 * @apiName Hello
 * @apiGroup Slack
 * @apiPermission public
 *
 * @apiParam  {String}          text   Dummy text
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route('/hello', controller.hello);

module.exports = router;
