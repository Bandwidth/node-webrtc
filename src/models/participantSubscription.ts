/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ParticipantSubscription {
  /** Participant the subscriber should be subscribed to */
  participantId: string;
}

export const participantSubscriptionSchema: Schema<ParticipantSubscription> = object(
  { participantId: ['participantId', string()] }
);
