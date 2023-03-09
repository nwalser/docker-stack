<script>
	import ImagePreview from './ImagePreview.svelte';
	import { imagesStore } from './ImageStore';
</script>

<h3 class="text-2xl font-bold dark:text-white mt-4">Images</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each $imagesStore as image}
		<ImagePreview {image} />
	{/each}
</div>
