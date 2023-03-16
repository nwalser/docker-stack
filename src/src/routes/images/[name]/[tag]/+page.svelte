<script lang="ts">
	import { page } from '$app/stores';
	import Empty from './Empty.svelte';
	import Port from './Port.svelte';
	import Variable from './Variable.svelte';
	import Volume from './Volume.svelte';
	import { error } from '@sveltejs/kit';
	import { getStack, getStackPagesUsingImage } from 'src/data/stackPages/StackData';
	import LargeStackPreview from 'src/routes/stacks/LargeStackPreview.svelte';
	import SmallStackPreview from 'src/routes/stacks/SmallStackPreview.svelte';
	import H1 from 'src/components/typo/H1.svelte';
	import P from 'src/components/typo/P.svelte';
	import Grid from 'src/components/typo/Grid.svelte';
	import H2 from 'src/components/typo/H2.svelte';
	import H3 from 'src/components/typo/H3.svelte';
	import ImageHeader from 'src/components/typo/ImageHeader.svelte';
	import SvelteSeo from 'svelte-seo';
	import { getImage } from 'src/data/images/ImageData';

	let name = $page.params.name;
	let tag = $page.params.tag;

	let image = getImage(name, tag)!;
	let stackSpotlight = getStack(image.page.stackSpotlight)!;

	if (!image || !stackSpotlight) throw error(404, 'Not found');

	let stacks = getStackPagesUsingImage(name);
</script>

<SvelteSeo
	title="{image.page.readableName} {image.tag} Docker Image Specifications - Docker Stack"
	description={image.page.description}
	openGraph={{
		site_name: 'Docker Stack',
		title:
			image.page.readableName + ' ' + image.tag + ' Docker Image Specifications - Docker Stack',
		description: image.page.description,
		images: [
			{
				url: image.page.imageUrl
			}
		]
	}}
/>

<ImageHeader src={image.page.imageUrl} alt="{image.page.readableName} logo" />

<div class="grid grid-cols-3 gap-8 pt-4">
	<div class="col-span-2 -mt-6">
		<H1>{image.page.readableName} {image.page.tag} Docker Image Specifications</H1>
		<P>{image.page?.description}</P>

		<LargeStackPreview stackPage={stackSpotlight} />

		<H2>Stacks using this Image</H2>
		<Grid cols={2}>
			{#each stacks as stackPage}
				<SmallStackPreview {stackPage} />
			{:else}
				<Empty />
			{/each}
		</Grid>
	</div>

	<div class="col-span-1 -mt-4">
		<H3>Ports</H3>
		<Grid cols={1}>
			{#each image.possiblePorts as port}
				<Port possiblePort={port} />
			{:else}
				<Empty />
			{/each}
		</Grid>

		<H3>Volumes</H3>
		<Grid cols={1}>
			{#each image.possibleVolumes as volume}
				<Volume possibleVolume={volume} />
			{:else}
				<Empty />
			{/each}
		</Grid>

		<H3>Variables</H3>
		<Grid cols={1}>
			{#each image.possibleVariables as variable}
				<Variable possibleVariable={variable} />
			{:else}
				<Empty />
			{/each}
		</Grid>
	</div>
</div>
