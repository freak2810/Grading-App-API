import Hapi from '@hapi/hapi';
import status from './plugins/status';
import prisma from './plugins/prisma';

const server = Hapi.server({
	port: process.env.PORT || 3000,
	host: process.env.HOSt || 'localhost',
});

export async function createServer() {
	//Registering Routes
	await server.register([status, prisma]);
	await server.initialize();

	return server;
}

export async function startServer(server: Hapi.Server) {
	await server.start();
	console.log(`Server running on ${server.info.uri}`);
	return server;
}

process.on('unhandledRejection', err => {
	console.log(err);
	process.exit(1);
});
