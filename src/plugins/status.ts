import Hapi from '@hapi/hapi';

const plugin: Hapi.Plugin<undefined> = {
	name: 'app/status',
	register: async function (server) {
		// Route GET /
		server.route({
			method: 'GET',
			path: '/status',
			handler: (_, res) => res.response({ up: true }).code(200),
		});
	},
};

export default plugin;
