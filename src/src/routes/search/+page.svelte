<script>
	import { page } from '$app/stores';
	import { derived, writable } from 'svelte/store';
	import ImagePreview from '../images/ImagePreview.svelte';
	import Empty from '../images/[name]/[tag]/Empty.svelte';
	import SmallStackPreview from '../stacks/SmallStackPreview.svelte';
	import SvelteSeo from 'svelte-seo';
	import { SearchStore } from 'src/data/search/Search';
	import { searchImages } from 'src/data/images/ImageData';
	import { searchStacks } from 'src/data/stacks/StackData';

	let foundStacks = derived(SearchStore, (searchStore) => {
		return searchStacks(searchStore);
	});

	let foundImages = derived(SearchStore, (searchStore) => {
		return searchImages(searchStore);
	});
</script>

<SvelteSeo
	title="Search - Docker Stack"
	description="Search for premade Docker Compose templates on docker-stack."
	openGraph={{
		site_name: 'Docker Stack',
		title: 'Search - Docker Stack',
		description: 'Search for premade Docker Compose templates on docker-stack.'
	}}
/>

<h3 class="text-2xl font-bold dark:text-white mt-4">Stacks</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each $foundStacks.slice(0, 7) as stackPage}
		<SmallStackPreview stack={stackPage} />
	{:else}
		<Empty />
	{/each}
	{#if $foundStacks.length > 7}
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
	{#each $foundImages.slice(0, 7) as page}
		<ImagePreview image={page} />
	{:else}
		<Empty />
	{/each}

	{#if $foundImages.length > 7}
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
