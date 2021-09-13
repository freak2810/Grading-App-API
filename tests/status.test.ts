import { createServer } from '../src/server';
import Hapi from '@hapi/hapi';

describe('Status Plugin', () => {
	let server: Hapi.Server;

	beforeAll(async () => {
		server = await createServer();
	});

	afterAll(async () => {
		await server.stop();
	});

	test('should return 200', async () => {
		const res = await server.inject({
			method: 'GET',
			url: '/status',
		});

		expect(res.statusCode).toEqual(200);

		const response = JSON.parse(res.payload);
		expect(response.up).toEqual(true);
	});
});
