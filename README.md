# Bandwidth WebRtc

## Installation

Use the following command to install the package.

```
npm install @bandwidth/webrtc
```

## SDK Setup

The following code will initialize the SDK client.

```
import {
  Client
} from '@bandwidth/webrtc';

const client = new Client({
  basicAuthUserName: 'user',
  basicAuthPassword: 'pass'
})
```

## Create Session

```
import { Client, Session, SessionsController } from '@bandwidth/webrtc';

const client = new Client({
  basicAuthUserName: 'user',
  basicAuthPassword: 'pass',
})
const sessionsController = new SessionsController(client);
const accountId = 'accountId0';
const body: Session = {};
body.id = '75c21163-e110-41bc-bd76-1bb428ec85d5';
body.tag = 'session1';

const response = await sessionsController.createSession(accountId, body);
console.log(response.result.id);
```

## Create Participant

```
import {
  Client,
  Participant,
  ParticipantsController,
  ParticipantSubscription,
  Subscriptions,
} from '@bandwidth/webrtc';

const client = new Client({
  basicAuthUserName: 'user',
  basicAuthPassword: 'pass',
})
const participantsController = new ParticipantsController(client);
const accountId = 'accountId0';

const body: Participant = {};
body.callbackUrl = 'https://example.com/callback';
body.tag = 'participant1';

const response = await participantsController.createParticipant(accountId, body);
console.log(response.result.participant.id);
```
