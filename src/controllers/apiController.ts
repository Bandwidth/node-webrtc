/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { BaseController } from './baseController';
import { ApiResponse, RequestOptions} from '../core';
import {
  AccountsParticipantsResponse,
  accountsParticipantsResponseSchema,
} from '../models/accountsParticipantsResponse';
import { Participant, participantSchema } from '../models/participant';
import { Session, sessionSchema } from '../models/session';
import { Subscriptions, subscriptionsSchema } from '../models/subscriptions';
import { array, optional, string } from '../schema';

export class ApiController extends BaseController {
  /**
   * Create a new participant under this account
   *
   * Participants are idempotent, so relevant parameters must be set in this function if desired
   *
   *
   * @param accountId Account ID
   * @param body      Participant parameters
   * @return Response from the API call
   */
  async createParticipant(
    accountId: string,
    body?: Participant,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AccountsParticipantsResponse>> {
    const req = this.createRequest('POST');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, optional(participantSchema)],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/accounts/${mapped.accountId}/participants`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    return req.callAsJson(accountsParticipantsResponseSchema, requestOptions);
  }

  /**
   * Get participant by ID
   *
   * @param accountId     Account ID
   * @param participantId Participant ID
   * @return Response from the API call
   */
  async getParticipant(
    accountId: string,
    participantId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Participant>> {
    const req = this.createRequest('GET');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      participantId: [participantId, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountId}/participants/${mapped.participantId}`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(participantSchema, requestOptions);
  }

  /**
   * Delete participant by ID
   *
   * @param accountId     Account ID
   * @param participantId
   * @return Response from the API call
   */
  async deleteParticipant(
    accountId: string,
    participantId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      participantId: [participantId, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountId}/participants/${mapped.participantId}`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.call(requestOptions);
  }

  /**
   * Create a new session
   *
   * Sessions are idempotent, so relevant parameters must be set in this function if desired
   *
   *
   * @param accountId Account ID
   * @param body      Session parameters
   * @return Response from the API call
   */
  async createSession(
    accountId: string,
    body?: Session,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Session>> {
    const req = this.createRequest('POST');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, optional(sessionSchema)],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    return req.callAsJson(sessionSchema, requestOptions);
  }

  /**
   * Get session by ID
   *
   * @param accountId Account ID
   * @param sessionId Session ID
   * @return Response from the API call
   */
  async getSession(
    accountId: string,
    sessionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Session>> {
    const req = this.createRequest('GET');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      sessionId: [sessionId, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions/${mapped.sessionId}`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(sessionSchema, requestOptions);
  }

  /**
   * Delete session by ID
   *
   * @param accountId Account ID
   * @param sessionId Session ID
   * @return Response from the API call
   */
  async deleteSession(
    accountId: string,
    sessionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      sessionId: [sessionId, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions/${mapped.sessionId}`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.call(requestOptions);
  }

  /**
   * List participants in a session
   *
   * @param accountId Account ID
   * @param sessionId Session ID
   * @return Response from the API call
   */
  async listSessionParticipants(
    accountId: string,
    sessionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Participant[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      sessionId: [sessionId, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions/${mapped.sessionId}/participants`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(array(participantSchema), requestOptions);
  }

  /**
   * Add a participant to a session
   *
   * Subscriptions can optionally be provided as part of this call
   *
   *
   * @param accountId     Account ID
   * @param sessionId     Session ID
   * @param participantId Participant ID
   * @param body          Subscriptions the participant should be created with
   * @return Response from the API call
   */
  async addParticipantToSession(
    accountId: string,
    sessionId: string,
    participantId: string,
    body?: Subscriptions,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      sessionId: [sessionId, string()],
      participantId: [participantId, string()],
      body: [body, optional(subscriptionsSchema)],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions/${mapped.sessionId}/participants/${mapped.participantId}`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.call(requestOptions);
  }

  /**
   * Remove a participant from a session
   *
   * This will automatically remove any subscriptions the participant has associated with this session
   *
   *
   * @param accountId     Account ID
   * @param participantId Participant ID
   * @param sessionId     Session ID
   * @return Response from the API call
   */
  async removeParticipantFromSession(
    accountId: string,
    sessionId: string,
    participantId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      participantId: [participantId, string()],
      sessionId: [sessionId, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions/${mapped.sessionId}/participants/${mapped.participantId}`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.call(requestOptions);
  }

  /**
   * Get a participant's subscriptions
   *
   * @param accountId     Account ID
   * @param participantId Participant ID
   * @param sessionId     Session ID
   * @return Response from the API call
   */
  async getParticipantSubscriptions(
    accountId: string,
    sessionId: string,
    participantId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Subscriptions>> {
    const req = this.createRequest('GET');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      participantId: [participantId, string()],
      sessionId: [sessionId, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions/${mapped.sessionId}/participants/${mapped.participantId}/subscriptions`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(subscriptionsSchema, requestOptions);
  }

  /**
   * Update a participant's subscriptions
   *
   * This is a full update that will replace the participant's subscriptions. First call
   * `getParticipantSubscriptions` if you need the current subscriptions. Call this function with no
   * `Subscriptions` object to remove all subscriptions
   *
   *
   * @param accountId     Account ID
   * @param participantId Participant ID
   * @param sessionId     Session ID
   * @param body          Initial state
   * @return Response from the API call
   */
  async updateParticipantSubscriptions(
    accountId: string,
    sessionId: string,
    participantId: string,
    body?: Subscriptions,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    req.baseUrl('WebRtcDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      participantId: [participantId, string()],
      sessionId: [sessionId, string()],
      body: [body, optional(subscriptionsSchema)],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/accounts/${mapped.accountId}/sessions/${mapped.sessionId}/participants/${mapped.participantId}/subscriptions`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Access Denied');
    req.throwOn(404, ApiError, 'Not Found');
    return req.call(requestOptions);
  }

  /**
   * Generates BXML to transfer a call into a WebRTC session as a complete response, including an XML declaration
   * header.
   *
   * @param {string} deviceToken Token returned from createParticipant call
   * @param {string} voiceCallId The callId returned by the Voice platform 
   * @param {string} [sipUri=sip:sipx.webrtc.bandwidth.com:5060] SIP URL to transfer to
   *
   * @returns BXML string
   */
  static generateTransferBxml(deviceToken: string, voiceCallId: string, sipUri='sip:sipx.webrtc.bandwidth.com:5060'): string {
      return '<?xml version="1.0" encoding="UTF-8" ?>\n'
          + '<Response>'
          + this.generateTransferBxmlVerb(deviceToken, voiceCallId, sipUri)
          + '</Response>';
  }

  /**
   * Generates the BXML verb to transfer a call into a WebRTC session (not wrapped in a Response element).
   *
   * @param {string} deviceToken Token returned from createParticipant call
   * @param {string} voiceCallId The callId returned by the Voice platform 
   * @param {string} [sipUri=sip:sipx.webrtc.bandwidth.com:5060] SIP URL to transfer to
   *
   * @returns BXML string
   */
  static generateTransferBxmlVerb(deviceToken: string, voiceCallId: string, sipUri = 'sip:sipx.webrtc.bandwidth.com:5060'): string {
      if (voiceCallId != undefined) {
          voiceCallId = voiceCallId.substring(1).replace(/-/g,'');
          return '<Transfer>\n'
              + `\t<SipUri uui="${voiceCallId};encoding=base64,${deviceToken};encoding=jwt">${sipUri}</SipUri>\n`
              + '</Transfer>';
      } else {
          return '<Transfer>\n'
          + `\t<SipUri uui="${deviceToken};encoding=jwt">${sipUri}</SipUri>\n`
          + '</Transfer>';
      }
  }
}
