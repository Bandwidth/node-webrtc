/**
  * @module WebRtcLib
  *
  * Bandwidth WebRTC API
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const APIController = require('./Controllers/APIController');
const Session = require('./Models/Session');
const Participant = require('./Models/Participant');
const Subscriptions = require('./Models/Subscriptions');
const ParticipantSubscription = require('./Models/ParticipantSubscription');
const AccountsParticipantsResponse = require('./Models/AccountsParticipantsResponse');
const DeviceApiVersionEnum = require('./Models/DeviceApiVersionEnum');
const PublishPermissionEnum = require('./Models/PublishPermissionEnum');
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
    Subscriptions,
    ParticipantSubscription,
    AccountsParticipantsResponse,
    DeviceApiVersionEnum,
    PublishPermissionEnum,
    // exceptions of WebRtcLib
    ErrorException,
    APIException,
};

module.exports = initializer;
