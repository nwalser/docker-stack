<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import Editor from 'src/components/Editor.svelte';
	import Grid from 'src/components/typo/Grid.svelte';
	import H1 from 'src/components/typo/H1.svelte';
	import H3 from 'src/components/typo/H3.svelte';
	import ImageHeader from 'src/components/typo/ImageHeader.svelte';
	import P from 'src/components/typo/P.svelte';
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

<ImageHeader src={stack.imageUrl} alt="{stack.name} logo" />

<div class="grid grid-cols-3 gap-8 pt-4">
	<div class="col-span-2 -mt-6">
		<H1>{stack.name}</H1>
		<P>{stack.description}</P>

		<div
			class="block overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
		>
			<Editor value={stringifyDockerCompose(stack.compose)} language="yaml" />
		</div>
	</div>

	<div class="col-span-1 -mt-4">
		<H3>Images used</H3>
		<Grid cols={1}>
			{#each images as image}
				<ImagePreview {image} />
			{:else}
				<Empty />
			{/each}
		</Grid>
	</div>
</div>
