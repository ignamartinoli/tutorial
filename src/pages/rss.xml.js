import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		customData: `<language>en-us</language>`,
		description: 'My journey learning Astro',
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		site: context.site,
		title: 'Astro Learner | Blog',
	});
}
