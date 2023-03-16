<script>
	import StackPreview from './SmallStackPreview.svelte';
	import SvelteSeo from 'svelte-seo';
	import { getStacks } from 'src/data/stacks/StackData';
</script>

<SvelteSeo
	title="Stacks - Docker Stack"
	description=""
	openGraph={{
		site_name: 'Docker Stack',
		title: 'Stacks - Docker Stack',
		description: ''
	}}
/>

<h3 class="text-2xl font-bold dark:text-white mt-4">Stacks</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each getStacks() as stack}
		<StackPreview {stack} />
	{/each}
</div>
