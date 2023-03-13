<script>
	import { getImagePages } from 'src/data/imagePages/ImagePageData';
	import ImagePreview from './ImagePreview.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Images - Docker Stack"
	description=""
	openGraph={{
		site_name: 'Docker Stack',
		title: "Images - Docker Stack",
		description: ""
	}}
/>

<h3 class="text-2xl font-bold dark:text-white mt-4">Images</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each getImagePages() as imagePage}
		<ImagePreview image={imagePage} />
	{/each}
</div>
