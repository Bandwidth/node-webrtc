# Getting started

Bandwidth WebRTC API

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=WebRtc-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=WebRtc-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `WebRtcLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=WebRtc-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=WebRtc-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=WebRtc-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=WebRtc-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  WebRtcController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=WebRtcController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIController;
```

### <a name="create_participant"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createParticipant") createParticipant

> Create a new participant under this account
> 
> Participants are idempotent, so relevant parameters must be set in this function if desired
> 


```javascript
function createParticipant(accountId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| body |  ``` Optional ```  | Participant parameters |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new Participant({"key":"value"});

    controller.createParticipant(accountId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Access Denied |
| 0 | Unexpected Error |




### <a name="get_participant"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getParticipant") getParticipant

> Get participant by ID


```javascript
function getParticipant(accountId, participantId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| participantId |  ``` Required ```  | Participant ID |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var participantId = 'participantId';

    controller.getParticipant(accountId, participantId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="delete_participant"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.deleteParticipant") deleteParticipant

> Delete participant by ID


```javascript
function deleteParticipant(accountId, participantId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| participantId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var participantId = 'participantId';

    controller.deleteParticipant(accountId, participantId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="create_session"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createSession") createSession

> Create a new session
> 
> Sessions are idempotent, so relevant parameters must be set in this function if desired
> 


```javascript
function createSession(accountId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| body |  ``` Optional ```  | Session parameters |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new Session({"key":"value"});

    controller.createSession(accountId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Access Denied |
| 0 | Unexpected Error |




### <a name="get_session"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getSession") getSession

> Get session by ID


```javascript
function getSession(accountId, sessionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| sessionId |  ``` Required ```  | Session ID |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var sessionId = 'sessionId';

    controller.getSession(accountId, sessionId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="delete_session"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.deleteSession") deleteSession

> Delete session by ID


```javascript
function deleteSession(accountId, sessionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| sessionId |  ``` Required ```  | Session ID |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var sessionId = 'sessionId';

    controller.deleteSession(accountId, sessionId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="list_session_participants"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.listSessionParticipants") listSessionParticipants

> List participants in a session


```javascript
function listSessionParticipants(accountId, sessionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| sessionId |  ``` Required ```  | Session ID |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var sessionId = 'sessionId';

    controller.listSessionParticipants(accountId, sessionId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="add_participant_to_session"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.addParticipantToSession") addParticipantToSession

> Add a participant to a session
> 
> Subscriptions can optionally be provided as part of this call
> 


```javascript
function addParticipantToSession(accountId, sessionId, participantId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| sessionId |  ``` Required ```  | Session ID |
| participantId |  ``` Required ```  | Participant ID |
| body |  ``` Optional ```  | Subscriptions the participant should be created with |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var sessionId = 'sessionId';
    var participantId = 'participantId';
    var body = new Subscriptions({"key":"value"});

    controller.addParticipantToSession(accountId, sessionId, participantId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="remove_participant_from_session"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.removeParticipantFromSession") removeParticipantFromSession

> Remove a participant from a session
> 
> This will automatically remove any subscriptions the participant has associated with this session
> 


```javascript
function removeParticipantFromSession(accountId, participantId, sessionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| participantId |  ``` Required ```  | Participant ID |
| sessionId |  ``` Required ```  | Session ID |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var participantId = 'participantId';
    var sessionId = 'sessionId';

    controller.removeParticipantFromSession(accountId, participantId, sessionId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="get_participant_subscriptions"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getParticipantSubscriptions") getParticipantSubscriptions

> Get a participant's subscriptions


```javascript
function getParticipantSubscriptions(accountId, participantId, sessionId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| participantId |  ``` Required ```  | Participant ID |
| sessionId |  ``` Required ```  | Session ID |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var participantId = 'participantId';
    var sessionId = 'sessionId';

    controller.getParticipantSubscriptions(accountId, participantId, sessionId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="update_participant_subscriptions"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.updateParticipantSubscriptions") updateParticipantSubscriptions

> Update a participant's subscriptions
> 
> This is a full update that will replace the participant's subscriptions. First call `getParticipantSubscriptions` if you need the current subscriptions. Call this function with no `Subscriptions` object to remove all subscriptions
> 


```javascript
function updateParticipantSubscriptions(accountId, participantId, sessionId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Account ID |
| participantId |  ``` Required ```  | Participant ID |
| sessionId |  ``` Required ```  | Session ID |
| body |  ``` Optional ```  | Initial state |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var participantId = 'participantId';
    var sessionId = 'sessionId';
    var body = new Subscriptions({"key":"value"});

    controller.updateParticipantSubscriptions(accountId, participantId, sessionId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Access Denied |
| 404 | Not Found |
| 0 | Unexpected Error |




### <a name="generate_transfer_bxml"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.generateTransferBxml") generateTransferBxml

> Generates BXML to transfer a call into a WebRTC session as a complete response, including an XML declaration header.

```javascript
function generateTransferBxml(deviceToken, sipUri)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| deviceToken |  ``` Required ```  | deviceToken Token returned from createParticipant call |
| sipUri |  ``` Optional ```  | [sipUri=sip:sipx.webrtc.bandwidth.com:5060] SIP URL to transfer to |

#### Return

| Description |
|-----------|
| BXML string |

#### Example Usage

```javascript
    var deviceToken = 'deviceToken';
    var sipUri = 'sipUri';

    var bxml = controller.generateTransferBxml(deviceToken, sipUri);
```




[Back to List of Controllers](#list_of_controllers)



