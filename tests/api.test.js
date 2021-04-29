import { Client, ApiController } from '../src';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BW_USERNAME,
        basicAuthPassword: process.env.BW_PASSWORD
    });

    controller = new ApiController(client);
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
            deviceApiVersion: "v3"
        };

        const createParticipantResponse = await controller.createParticipant(accountId, createParticipantBody);
        const participantId = createParticipantResponse.result.participant.id;

        controller.addParticipantToSession(accountId, sessionId, participantId);
    });
});
