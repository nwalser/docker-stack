<script>
	import ImagePreview from './ImagePreview.svelte';
	import SvelteSeo from 'svelte-seo';
	import { getImages } from 'src/data/images/ImageData';
</script>

<SvelteSeo
	title="Images - Docker Stack"
	description=""
	openGraph={{
		site_name: 'Docker Stack',
		title: 'Images - Docker Stack',
		description: ''
	}}
/>

<h3 class="text-2xl font-bold dark:text-white mt-4">Images</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each getImages() as image}
		<ImagePreview {image} />
	{/each}
</div>
