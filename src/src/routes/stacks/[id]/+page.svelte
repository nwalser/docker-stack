<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import Editor from 'src/components/Editor.svelte';
	import { getImagePage } from 'src/data/imagePages/ImagePageData';
	import { stringifyDockerCompose } from 'src/data/stackPages/DockerComposeSerializer';
	import ImagePreview from 'src/routes/images/ImagePreview.svelte';
	import Empty from 'src/routes/images/[name]/[tag]/Empty.svelte';
	import { getStackPage } from '../../../data/stackPages/StackData';

	let stackId = $page.params.id;

	let stack = getStackPage(stackId)!;
	if (!stack) throw error(404, 'Not found');

	let images = stack.compose.services
		.map((s) => getImagePage(s.image, s.tag)!)
		.flatMap((f) => (f ? [f] : []));
</script>

<h1 class="text-4xl font-bold dark:text-white mt-4">{stack.name}</h1>

<div class="grid grid-cols-3 gap-8 pt-4">
	<div class="col-span-2">
		<p class="text-lg font-normal dark:text-gray-300 text-justify">{stack.description}</p>

		<div
			class="block overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
		>
			<Editor value={stringifyDockerCompose(stack.compose)} language="yaml" />
		</div>
	</div>

	<div class="col-span-1">
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-0">Images used</h3>
			{#each images as image}
				<ImagePreview {image} />
			{:else}
				<Empty />
			{/each}
		</div>
	</div>
</div>
