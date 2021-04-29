# Bandwidth WebRTC

## Installation

Use the following command to install the package.

```
npm install @bandwidth/webrtc
```

## SDK Setup

The following code will initialize the SDK client.

```typescript
import { Client } from '@bandwidth/webrtc';

const client = new Client({
  basicAuthUserName: 'user',
  basicAuthPassword: 'pass'
})
```

## Create Session

```typescript
import { Client, Session, ApiController } from '@bandwidth/webrtc';

const client = new Client({
  basicAuthUserName: 'user',
  basicAuthPassword: 'pass',
})
const controller = new ApiController(client);
const accountId = 'accountId0';
const body: Session = {
  tag: 'session1'
};

const response = await controller.createSession(accountId, body);
console.log(response.result.id);
```

## Create Participant

```typescript
import {
  Client,
  Participant,
  ApiController,
  ParticipantSubscription,
  Subscriptions,
} from '@bandwidth/webrtc';

const client = new Client({
  basicAuthUserName: 'user',
  basicAuthPassword: 'pass',
})
const controller = new ApiController(client);
const accountId = 'accountId0';

const body: Participant = {
  callbackUrl: 'https://example.com/callback',
  tag: 'participant1',
  deviceApiVersion: 'v3'
};

const response = await controller.createParticipant(accountId, body);
console.log(response.result.participant.id);
```

## Bandwidth's WebRTC References

Please visit our [WebRTC home page](https://dev.bandwidth.com/webrtc/about.html) for more information on Bandwidth's WebRTC platform.
