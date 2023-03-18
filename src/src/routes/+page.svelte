<script lang="ts">
	import Grid from 'src/components/typo/Grid.svelte';
	import H1 from 'src/components/typo/H1.svelte';
	import H2 from 'src/components/typo/H2.svelte';
	import P from 'src/components/typo/P.svelte';
	import ImagePreview from './images/ImagePreview.svelte';
	import Empty from './images/[name]/[tag]/Empty.svelte';
	import StackPreview from './stacks/SmallStackPreview.svelte';
	import SvelteSeo from 'svelte-seo';
	import { getImages } from 'src/data/images/ImageData';
	import { getStacks } from 'src/data/stacks/StackData';
</script>

<SvelteSeo
	title="Tired of writing your own Docker Compose files? - Docker Stack"
	description="docker-stack.com has many premade Docker Compose files, ready to download and use in your projects."
	openGraph={{
		site_name: 'Docker Stack',
		title: "Tired of writing your own Docker Compose files? - Docker Stack",
		description:
			'docker-stack.com has many premade Docker Compose files, ready to download and use in your projects.'
	}}
/>

<div class="text-6xl font-bold text-white mb-4">
	Tired of writing your own Docker Compose files?
</div>
<div class="text-4xl font-light text-white">
	docker-stack.com has many premade Docker Compose files, ready to download and use in your
	projects.
</div>

<div class="w-full h-[1px] rounded-sm bg-slate-500 my-10" />

<H2>Stacks</H2>
<Grid cols={3}>
	{#each getStacks().slice(0, 5) as stackPage}
		<StackPreview stack={stackPage} />
	{:else}
		<Empty />
	{/each}
	{#if getStacks().length > 5}
		<Empty text="View more Stacks" link="/stacks" />
	{/if}
</Grid>

<H2>Images</H2>
<Grid cols={3}>
	{#each getImages().slice(0, 5) as page}
		<ImagePreview image={page} />
	{:else}
		<Empty />
	{/each}
	{#if getImages().length > 5}
		<Empty text="View more Images" link="/images" />
	{/if}
</Grid>
