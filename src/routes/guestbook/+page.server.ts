import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
  const comments = cookies.get('comments');
  return {
    comments
  };
}) satisfies PageServerLoad;


export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const comment = data.get('comment');
    if (comment) {
      cookies.set('comments', comment.toString());
      return { success: true };
    }
    return { error: false }
  }
} satisfies Actions;