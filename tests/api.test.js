import { Client, ApiController } from '../src';
import { HttpClient } from '../src/http/httpClient';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BW_USERNAME,
        basicAuthPassword: process.env.BW_PASSWORD
    });

    controller = new ApiController(client);
});

describe('http client', () => {
    const httpClient = new HttpClient();
    it('should throw error on unknown body type', async () => {
        const httpRequest = {
            body: {
                type: "somethingmadeup"
            }
        };
        expect(() => httpClient.convertHttpRequest(httpRequest)).toThrow("HTTP client encountered unknown body type 'somethingmadeup'. Could not execute HTTP request.");
    });

    it('should not throw error on known body type', async () => {
        const httpRequest = {
            body: {
                type: "text"
            }
        };
        expect(httpClient.convertHttpRequest(httpRequest)).toBeDefined();
    });
});

describe('api', () => {
    it('should handle webrtc participant and session management', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;

        const createSessionBody = {
            tag: "new-session"
        };

        const createSessionResponse = await controller.createSession(accountId, createSessionBody);
        const sessionId = createSessionResponse.result.id;

        const createParticipantBody = {
            callbackUrl: "https://sample.com",
            publishPermissions: ["AUDIO", "VIDEO"],
            deviceApiVersion: "V3"
        };

        const createParticipantResponse = await controller.createParticipant(accountId, createParticipantBody);
        const participantId = createParticipantResponse.result.participant.id;

        controller.addParticipantToSession(accountId, sessionId, participantId);
    });

    it('should generate transfer bxml', () => {
        var bxmlString = ApiController.generateTransferBxml("test-string", "c-93d6f3c0-be584596-0b74-4fa2-8015-d8ede84bd1a4");
        bxmlString = bxmlString.replace(/\s/g, "");

        var expectedString = '<?xmlversion="1.0"encoding="UTF-8"?><Response><Transfer><SipUriuui="93d6f3c0be5845960b744fa28015d8ede84bd1a4;encoding=base64,test-string;encoding=jwt">sip:sipx.webrtc.bandwidth.com:5060</SipUri></Transfer></Response>';
        expect(bxmlString).toEqual(expectedString);
    });
});

describe('api', () => {
    it('should handle webrtc participant and session management', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;

        const createSessionBody = {
            tag: "new-session"
        };

        const createSessionResponse = await controller.createSession(accountId, createSessionBody);
        const sessionId = createSessionResponse.result.id;

        const createParticipantBody = {
            callbackUrl: "https://sample.com",
            publishPermissions: ["AUDIO", "VIDEO"],
            deviceApiVersion: "V3"
        };

        const createParticipantResponse = await controller.createParticipant(accountId, createParticipantBody);
        const participantId = createParticipantResponse.result.participant.id;

        controller.addParticipantToSession(accountId, sessionId, participantId);
    });

    it('should generate transfer bxml', () => {
        var bxmlString = ApiController.generateTransferBxml("test-string", "c-93d6f3c0-be584596-0b74-4fa2-8015-d8ede84bd1a4", "sip:sipx-rtc.edge.bandwidth.com:5060");
        bxmlString = bxmlString.replace(/\s/g, "");

        var expectedString = '<?xmlversion="1.0"encoding="UTF-8"?><Response><Transfer><SipUriuui="93d6f3c0be5845960b744fa28015d8ede84bd1a4;encoding=base64,test-string;encoding=jwt">sip:sipx-rtc.edge.bandwidth.com:5060</SipUri></Transfer></Response>';
        expect(bxmlString).toEqual(expectedString);
    });
});

