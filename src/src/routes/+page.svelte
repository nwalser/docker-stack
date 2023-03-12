<script lang="ts">
	import { getImagePages } from 'src/data/imagePages/ImagePageData';
	import { getStackPages } from 'src/data/stackPages/StackData';
	import ImagePreview from './images/ImagePreview.svelte';
	import StackPreview from './stacks/SmallStackPreview.svelte';
</script>

<h3 class="text-2xl font-bold dark:text-white mt-4">Stacks</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each getStackPages().slice(0, 7) as stackPage}
		<StackPreview {stackPage} />
	{/each}
	{#if getStackPages().length > 7}
		<a
			href="/stacks/"
			class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex align-middle justify-center"
		>
			<h5 class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white">
				View all Stacks
			</h5>
		</a>
	{/if}
</div>

<h3 class="text-2xl font-bold dark:text-white mt-4">Images</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each getImagePages().slice(0, 7) as page}
		<ImagePreview image={page} />
	{/each}

	{#if getImagePages().length > 7}
		<a
			href="/images/"
			class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex align-middle justify-center"
		>
			<h5 class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white">
				View all Images
			</h5>
		</a>
	{/if}
</div>
