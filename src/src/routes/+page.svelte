<script lang="ts">
	import ImagePreview from './images/ImagePreview.svelte';
	import { imagesStore } from './images/ImageStore';
	import StackPreview from './stacks/StackPreview.svelte';
	import { stackStore } from './stacks/StackStore';
</script>

<h3 class="text-2xl font-bold dark:text-white mt-4">Stacks</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each $stackStore.slice(0, 7) as stack}
		<StackPreview {stack} />
	{/each}
	{#if $stackStore.length > 7}
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
	{#each $imagesStore.slice(0, 7) as image}
		<ImagePreview {image} />
	{/each}

	{#if $imagesStore.length > 7}
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
