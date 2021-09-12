import { PrismaClient } from '@prisma/client';
import { add } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
	await prisma.testResult.deleteMany({});
	await prisma.courseEnrollment.deleteMany({});
	await prisma.test.deleteMany({});
	await prisma.user.deleteMany({});
	await prisma.course.deleteMany({});
}

main()
	.catch((e: Error) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		// Disconnect Prisma Client
		prisma.$disconnect();
	});
