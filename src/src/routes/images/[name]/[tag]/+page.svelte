<script lang="ts">
	import Tag from './Tag.svelte';
	import { page } from '$app/stores';
	import Empty from './Empty.svelte';
	import Port from './Port.svelte';
	import Variable from './Variable.svelte';
	import Volume from './Volume.svelte';
	import { error } from '@sveltejs/kit';
	import { imagesStore } from '../../ImageStore';
	import StackPreview from 'src/routes/stacks/StackPreview.svelte';
	import { stackStore } from 'src/routes/stacks/StackStore';
	import Pull from './Pull.svelte';

	let imageName = $page.params.name;
	let tag = $page.params.tag;

	let image = $imagesStore.find((t) => t.name == imageName && t.tag == tag)!;
	let tags = $imagesStore.filter((t) => t.name == imageName)!.map((i) => i.tag);
	if (!image) throw error(404, 'Not found');
	let stacks = $stackStore.filter((t) => t.compose.services.some((s) => s.image == imageName));
</script>

<h1 class="text-4xl font-bold dark:text-white mt-4">{imageName}:{tag} image reference</h1>

<div class="grid grid-cols-4 gap-8 pt-4">
	<div class="col-span-3">
		<p class="text-lg font-normal dark:text-gray-300 text-justify">{image?.description}</p>

		<div class="col-span-1 grid grid-cols-4 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4 col-span-4">Templates</h3>
			{#each stacks as stack}
				<StackPreview {stack} />
			{:else}
				<Empty />
			{/each}
		</div>
	</div>

	<div class="col-span-1">
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<Pull image={image.name} {tag} />
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
			{#each image?.possiblePorts as port}
				<Port possiblePort={port} />
			{:else}
				<Empty />
			{/each}
		</div>
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Volumes</h3>
			{#each image?.possibleVolumes as volume}
				<Volume possibleVolume={volume} />
			{:else}
				<Empty />
			{/each}
		</div>
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Variables</h3>
			{#each image?.possibleVariables as variable}
				<Variable possibleVariable={variable} />
			{:else}
				<Empty />
			{/each}
		</div>
	</div>
</div>
