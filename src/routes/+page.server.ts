import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user) throw redirect(302, '/login');

	const projects = await locals.prisma.project.findMany({
		where: {
			userId: locals.user.id
		}
	});

	return { projects };
};
