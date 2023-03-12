<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import Editor from 'src/components/Editor.svelte';
	import { getImagePage } from 'src/data/imagePages/ImagePageData';
	import { stringifyDockerCompose } from 'src/data/stackPages/DockerComposeSerializer';
	import ImagePreview from 'src/routes/images/ImagePreview.svelte';
	import { getStackPage } from '../../../data/stackPages/StackData';

	let stackId = $page.params.id;

	let stack = getStackPage(stackId)!;
	if (!stack) throw error(404, 'Not found');

	let images = stack.compose.services
		.map((s) => getImagePage(s.image, s.tag)!)
		.flatMap((f) => (f ? [f] : []));
</script>

{stack.name}
{stack.description}

<Editor value={stringifyDockerCompose(stack.compose)} language="yaml" />

<h3 class="text-2xl font-bold dark:text-white mt-4 col-span-4">Images used in this stack</h3>

{#each images as image}
	<ImagePreview {image} />
{/each}
