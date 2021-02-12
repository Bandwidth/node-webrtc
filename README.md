# Getting Started with WebRtc

## Getting Started

### Introduction

Bandwidth WebRTC API

### Installation

The following section explains how to use the bandwidthLib library in a new project.

### Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

#### Fields

| Name | Description |
|  --- | --- |
| production | **Default** |
| custom | - |

### Initialize the API Client

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `baseUrl` | `string` | *Default*: `'https://www.example.com'` |
| `baseUrl` | `string` | *Default*: `'https://www.example.com'` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `basicAuthUserName` | `string` | The username to use with basic authentication |
| `basicAuthPassword` | `string` | The password to use with basic authentication |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production
  basicAuthUserName: 'BasicAuthUserName',
  basicAuthPassword: 'BasicAuthPassword',
})
```

### Authorization

This API uses `Basic Authentication`.

## Client Class Documentation

### WebRtcClient

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

### Controllers

| Name | Description |
|  --- | --- |
| aPI | Provides access to ApiController |

## API Reference

### List of APIs

* [API](#api)

### API

#### Create Participant

Create a new participant under this account

Participants are idempotent, so relevant parameters must be set in this function if desired

```ts
async createParticipant(
  accountId: string,
  body?: Participant,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountsParticipantsResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `body` | [`Participant`](#participant) | Body, Optional | Participant parameters |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`AccountsParticipantsResponse`](#accounts-participants-response)

##### Example Usage

```ts
const accountId = 'accountId0';
try {
  const { result, ...httpResponse } = await apiController.createParticipant(accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Get Participant

Get participant by ID

```ts
async getParticipant(
  accountId: string,
  participantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Participant>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `participantId` | `string` | Template, Required | Participant ID |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`Participant`](#participant)

##### Example Usage

```ts
const accountId = 'accountId0';
const participantId = 'participantId0';
try {
  const { result, ...httpResponse } = await apiController.getParticipant(accountId, participantId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Delete Participant

Delete participant by ID

```ts
async deleteParticipant(
  accountId: string,
  participantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `participantId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const participantId = 'participantId0';
try {
  const { result, ...httpResponse } = await apiController.deleteParticipant(accountId, participantId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Create Session

Create a new session

Sessions are idempotent, so relevant parameters must be set in this function if desired

```ts
async createSession(
  accountId: string,
  body?: Session,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Session>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `body` | [`Session`](#session) | Body, Optional | Session parameters |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`Session`](#session)

##### Example Usage

```ts
const accountId = 'accountId0';
try {
  const { result, ...httpResponse } = await apiController.createSession(accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Get Session

Get session by ID

```ts
async getSession(
  accountId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Session>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `sessionId` | `string` | Template, Required | Session ID |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`Session`](#session)

##### Example Usage

```ts
const accountId = 'accountId0';
const sessionId = 'sessionId8';
try {
  const { result, ...httpResponse } = await apiController.getSession(accountId, sessionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Delete Session

Delete session by ID

```ts
async deleteSession(
  accountId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `sessionId` | `string` | Template, Required | Session ID |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const sessionId = 'sessionId8';
try {
  const { result, ...httpResponse } = await apiController.deleteSession(accountId, sessionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### List Session Participants

List participants in a session

```ts
async listSessionParticipants(
  accountId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Participant[]>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `sessionId` | `string` | Template, Required | Session ID |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`Participant[]`](#participant)

##### Example Usage

```ts
const accountId = 'accountId0';
const sessionId = 'sessionId8';
try {
  const { result, ...httpResponse } = await apiController.listSessionParticipants(accountId, sessionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Add Participant to Session

Add a participant to a session

Subscriptions can optionally be provided as part of this call

```ts
async addParticipantToSession(
  accountId: string,
  sessionId: string,
  participantId: string,
  body?: Subscriptions,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `sessionId` | `string` | Template, Required | Session ID |
| `participantId` | `string` | Template, Required | Participant ID |
| `body` | [`Subscriptions`](#subscriptions) | Body, Optional | Subscriptions the participant should be created with |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const sessionId = 'sessionId8';
const participantId = 'participantId0';
const body: Subscriptions = {
  sessionId: 'd8886aad-b956-4e1b-b2f4-d7c9f8162772',
};

try {
  const { result, ...httpResponse } = await apiController.addParticipantToSession(accountId, sessionId, participantId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Remove Participant From Session

Remove a participant from a session

This will automatically remove any subscriptions the participant has associated with this session

```ts
async removeParticipantFromSession(
  accountId: string,
  participantId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `participantId` | `string` | Template, Required | Participant ID |
| `sessionId` | `string` | Template, Required | Session ID |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const participantId = 'participantId0';
const sessionId = 'sessionId8';
try {
  const { result, ...httpResponse } = await apiController.removeParticipantFromSession(accountId, participantId, sessionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Get Participant Subscriptions

Get a participant's subscriptions

```ts
async getParticipantSubscriptions(
  accountId: string,
  participantId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Subscriptions>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `participantId` | `string` | Template, Required | Participant ID |
| `sessionId` | `string` | Template, Required | Session ID |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`Subscriptions`](#subscriptions)

##### Example Usage

```ts
const accountId = 'accountId0';
const participantId = 'participantId0';
const sessionId = 'sessionId8';
try {
  const { result, ...httpResponse } = await apiController.getParticipantSubscriptions(accountId, participantId, sessionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

#### Update Participant Subscriptions

Update a participant's subscriptions

This is a full update that will replace the participant's subscriptions. First call `getParticipantSubscriptions` if you need the current subscriptions. Call this function with no `Subscriptions` object to remove all subscriptions

```ts
async updateParticipantSubscriptions(
  accountId: string,
  participantId: string,
  sessionId: string,
  body?: Subscriptions,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account ID |
| `participantId` | `string` | Template, Required | Participant ID |
| `sessionId` | `string` | Template, Required | Session ID |
| `body` | [`Subscriptions`](#subscriptions) | Body, Optional | Initial state |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const participantId = 'participantId0';
const sessionId = 'sessionId8';
const body: Subscriptions = {
  sessionId: 'd8886aad-b956-4e1b-b2f4-d7c9f8162772',
};

try {
  const { result, ...httpResponse } = await apiController.updateParticipantSubscriptions(accountId, participantId, sessionId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 403 | Access Denied | `ApiError` |
| 404 | Not Found | `ApiError` |
| Default | Unexpected Error | [`Error`](#error) |

## Model Reference

### Structures

* [Session](#session)
* [Participant](#participant)
* [Subscriptions](#subscriptions)
* [Participant Subscription](#participant-subscription)
* [Accounts Participants Response](#accounts-participants-response)

#### Session

A session object

##### Class Name

`Session`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | Unique id of the session |
| `tag` | `string` | Optional | User defined tag to associate with the session |

##### Example (as JSON)

```json
{
  "id": null,
  "tag": null
}
```

#### Participant

A participant object

##### Class Name

`Participant`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | Unique id of the participant |
| `callbackUrl` | `string` | Optional | Full callback url to use for notifications about this participant |
| `publishPermissions` | [`PublishPermissionEnum[]`](#publish-permission) | Optional | Defines if this participant can publish audio or video<br>**Constraints**: *Unique Items Required* |
| `sessions` | `string[]` | Optional | List of session ids this participant is associated with<br><br>Capped to one |
| `subscriptions` | [`Subscriptions`](#subscriptions) | Optional | - |
| `tag` | `string` | Optional | User defined tag to associate with the participant |

##### Example (as JSON)

```json
{
  "id": null,
  "callbackUrl": null,
  "publishPermissions": null,
  "sessions": null,
  "subscriptions": null,
  "tag": null
}
```

#### Subscriptions

##### Class Name

`Subscriptions`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sessionId` | `string` |  | Session the subscriptions are associated with<br><br>If this is the only field, the subscriber will be subscribed to all participants in the session (including any participants that are later added to the session) |
| `participants` | [`ParticipantSubscription[]`](#participant-subscription) | Optional | Subset of participants to subscribe to in the session. Optional. |

##### Example (as JSON)

```json
{
  "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772"
}
```

#### Participant Subscription

##### Class Name

`ParticipantSubscription`

##### Fields

| Name | Type | Description |
|  --- | --- | --- |
| `participantId` | `string` | Participant the subscriber should be subscribed to |

##### Example (as JSON)

```json
{
  "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521"
}
```

#### Accounts Participants Response

##### Class Name

`AccountsParticipantsResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `participant` | [`Participant`](#participant) | Optional | A participant object |
| `token` | `string` | Optional | Auth token for the returned participant<br><br>This should be passed to the participant so that they can connect to the platform |

##### Example (as JSON)

```json
{
  "participant": null,
  "token": null
}
```

### Enumerations

* [Publish Permission](#publish-permission)

#### Publish Permission

##### Class Name

`PublishPermissionEnum`

##### Fields

| Name |
|  --- |
| `aUDIO` |
| `vIDEO` |

### Exceptions

* [Error](#error)

#### Error

##### Class Name

`Error`

##### Fields

| Name | Type | Description |
|  --- | --- | --- |
| `code` | `number` | - |
| `message` | `string` | - |

##### Example (as JSON)

```json
{
  "code": null,
  "message": "There was an unexpected error"
}
```

