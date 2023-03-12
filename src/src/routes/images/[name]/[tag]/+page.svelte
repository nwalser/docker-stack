<script lang="ts">
	import Tag from './Tag.svelte';
	import { page } from '$app/stores';
	import Empty from './Empty.svelte';
	import Port from './Port.svelte';
	import Variable from './Variable.svelte';
	import Volume from './Volume.svelte';
	import { error } from '@sveltejs/kit';
	import { getAllTags, getImage } from '../../../../data/images/ImageData';
	import StackPreview from 'src/routes/stacks/SmallStackPreview.svelte';
	import { getStackPage, getStackPagesUsingImage } from 'src/data/stackPages/StackData';
	import Pull from './Pull.svelte';
	import { getImagePage } from 'src/data/imagePages/ImagePageData';
	import LargeStackPreview from 'src/routes/stacks/LargeStackPreview.svelte';
	import SmallStackPreview from 'src/routes/stacks/SmallStackPreview.svelte';

	let name = $page.params.name;
	let tag = $page.params.tag;

	let imagePage = getImagePage(name, tag)!;
	let image = getImage(name, tag)!;
	let stackSpotlight = getStackPage(imagePage.stackSpotlight)!;

	if (!imagePage || !image || !stackSpotlight) throw error(404, 'Not found');

	let tags = getAllTags(name);
	let stacks = getStackPagesUsingImage(name);
</script>

<h1 class="text-4xl font-bold dark:text-white mt-4">{name}:{tag} image reference</h1>

<div class="grid grid-cols-3 gap-8 pt-4">
	<div class="col-span-2">
		<p class="text-lg font-normal dark:text-gray-300 text-justify">{imagePage?.description}</p>

		<div class="col-span-1 grid grid-cols-1 gap-2 pt-4">
			<LargeStackPreview stackPage={stackSpotlight} />
		</div>

		<div class="col-span-1 grid grid-cols-4 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4 col-span-4">Stacks using this Image</h3>
			{#each stacks as stackPage}
				<SmallStackPreview {stackPage} />
			{:else}
				<Empty />
			{/each}
		</div>
	</div>

	<div class="col-span-1">
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<Pull image={imagePage.name} {tag} />
		</div>

		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Versions</h3>
			<div class="flex flex-wrap">
				{#each tags as tag}
					<Tag {tag} />
				{:else}
					<Empty />
				{/each}
			</div>
		</div>

		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Ports</h3>
			{#each image.possiblePorts as port}
				<Port possiblePort={port} />
			{:else}
				<Empty />
			{/each}
		</div>
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Volumes</h3>
			{#each image.possibleVolumes as volume}
				<Volume possibleVolume={volume} />
			{:else}
				<Empty />
			{/each}
		</div>
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Variables</h3>
			{#each image.possibleVariables as variable}
				<Variable possibleVariable={variable} />
			{:else}
				<Empty />
			{/each}
		</div>
	</div>
</div>
