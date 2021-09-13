import Hapi from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';

declare module '@hapi/hapi' {
	interface ServerApplicationState {
		prisma: PrismaClient;
	}
}

// Plugin to instantiate the Prisma client
const prismaPlugin: Hapi.Plugin<null> = {
	name: 'prisma',
	register: async function (server: Hapi.Server) {
		const prisma = new PrismaClient();

		server.app.prisma = prisma;

		// Unplug Prisma when server is closed
		server.ext({
			type: 'onPostStop',
			method: async (server: Hapi.Server) => {
				server.app.prisma.$disconnect();
			},
		});
	},
};

export default prismaPlugin;
