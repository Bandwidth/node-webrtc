# Bandwidth WebRTC

[![Test](https://github.com/Bandwidth/node-webrtc/actions/workflows/test.yml/badge.svg)](https://github.com/Bandwidth/node-webrtc/actions/workflows/test.yml)

| **OS** | **Node** |
|:---:|:---:|
| Windows 2016 | 12, 14, 16 |
| Windows 2019 | 12, 14, 16 |
| Ubuntu 20.04 | 12, 14, 16 |
| Ubuntu 22.04 | 12, 14, 16 |


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

## Add Participant to Session

```typescript
import {
  ApiController,
  Client
} from '@bandwidth/webrtc';

const client = new Client({
  basicAuthUserName: 'user',
  basicAuthPassword: 'pass',
})
const controller = new ApiController(client);

const accountId = '01234';
const sessionId = '56789';
const participantId = '012';

const participant1 = {
    participantId: '456'
};

const participant2 = {
  participantId: '789',
  streamAliases: ['alias1', 'alias2']
};

const sessionIdArg = '012345';

const subscriptions = {
  sessionId: sessionIdArg,
  participants: [participant1, participant2]
};

controller.addParticipantToSession(accountId, sessionId, participantId, subscriptions);

```

## Bandwidth's WebRTC References

Please visit our [WebRTC home page](https://dev.bandwidth.com/docs/webrtc) for more information on Bandwidth's WebRTC platform.
