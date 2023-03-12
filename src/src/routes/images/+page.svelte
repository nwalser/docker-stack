<script>
	import { getImagePages } from 'src/data/imagePages/ImagePageData';
	import ImagePreview from './ImagePreview.svelte';
</script>

<h3 class="text-2xl font-bold dark:text-white mt-4">Images</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each getImagePages() as imagePage}
		<ImagePreview image={imagePage} />
	{/each}
</div>
