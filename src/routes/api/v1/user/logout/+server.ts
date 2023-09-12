export const GET = async ({ locals, cookies }) => {
	const verification = await locals.prisma.verificationToken.findFirst({
		where: {
			token: cookies.get('verificationToken')
		}
	});

	if (!verification) {
		return new Response(JSON.stringify({ error: 'Invalid token.' }), {
			status: 400
		});
	}

	await locals.prisma.verificationToken.delete({
		where: {
			id: verification.id
		}
	});

	cookies.set('verfificationToken', '', {
		expires: new Date(0),
		path: '/'
	});

	locals.user = undefined;

	return new Response(JSON.stringify({ success: true }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
