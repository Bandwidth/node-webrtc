/**
  * @module WebRtcLib
  *
  * Base REST API for WebRTC
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const APIController = require('./Controllers/APIController');
const Session = require('./Models/Session');
const Participant = require('./Models/Participant');
const Permissions = require('./Models/Permissions');
const Subscriptions = require('./Models/Subscriptions');
const ParticipantSubscription = require('./Models/ParticipantSubscription');
const AccountsParticipantsResponse = require('./Models/AccountsParticipantsResponse');
const MediaTypeEnum = require('./Models/MediaTypeEnum');
const ErrorException = require('./Exceptions/ErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of WebRtcLib
    Configuration,
    Environments,
    // controllers of WebRtcLib
    APIController,
    // models of WebRtcLib
    Session,
    Participant,
    Permissions,
    Subscriptions,
    ParticipantSubscription,
    AccountsParticipantsResponse,
    MediaTypeEnum,
    // exceptions of WebRtcLib
    ErrorException,
    APIException,
};

module.exports = initializer;
