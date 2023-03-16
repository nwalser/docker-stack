<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import Grid from 'src/components/typo/Grid.svelte';
	import H1 from 'src/components/typo/H1.svelte';
	import H3 from 'src/components/typo/H3.svelte';
	import ImageHeader from 'src/components/typo/ImageHeader.svelte';
	import P from 'src/components/typo/P.svelte';
	import ImagePreview from 'src/routes/images/ImagePreview.svelte';
	import Empty from 'src/routes/images/[name]/[tag]/Empty.svelte';
	import SvelteSeo from 'svelte-seo';
	import FileView from '../../../components/FileView.svelte';
	import StackSetup from '../StackSetup.svelte';
	import H2 from 'src/components/typo/H2.svelte';
	import ExposedPort from './ExposedPort.svelte';
	import { getImage } from 'src/data/images/ImageData';
	import { getStack } from 'src/data/stacks/StackData';
	import { stringifyDockerCompose } from 'src/data/stacks/DockerComposeSerializer';

	let stackId = $page.params.id;

	let stack = getStack(stackId)!;
	if (!stack) throw error(404, 'Not found');

	let images = stack.compose.services
		.map((s) => getImage(s.image, s.tag)!)
		.flatMap((f) => (f ? [f] : []));
</script>

<SvelteSeo
	title="{stack.name} - Docker Stack"
	description={stack.description}
	openGraph={{
		site_name: 'Docker Stack',
		title: stack.name + ' - Docker Stack',
		description: stack.description,
		images: [
			{
				url: stack.imageUrl
			}
		]
	}}
/>

<ImageHeader src={stack.imageUrl} alt="{stack.name} logo" />

<div class="grid grid-cols-3 gap-8 pt-4">
	<div class="col-span-2 -mt-6">
		<H1>{stack.name}</H1>
		<P>{stack.description}</P>

		<FileView
			fileName="docker-compose.yml"
			language="yaml"
			stringFileContent={stringifyDockerCompose(stack.compose)}
			fileDownloadUrl="/stacks/{stack.id}/docker-compose"
		/>

		<H2>Run this Stack</H2>
		<StackSetup stackId={stack.id} />
	</div>

	<div class="col-span-1 -mt-4">
		<H3>Exposed Ports</H3>
		<Grid cols={1}>
			{#each stack.exposedPorts as exposedPort}
				<ExposedPort {exposedPort} />
			{:else}
				<Empty />
			{/each}
		</Grid>

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
