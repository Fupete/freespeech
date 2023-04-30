// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { User, PrismaClient } from '@prisma/client';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | undefined;
			prisma: PrismaClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
