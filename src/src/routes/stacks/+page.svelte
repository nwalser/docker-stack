<script>
	import { getStackPages } from 'src/data/stackPages/StackData';
	import StackPreview from './SmallStackPreview.svelte';
</script>

<h3 class="text-2xl font-bold dark:text-white mt-4">Stacks</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each getStackPages() as stackPage}
		<StackPreview {stackPage} />
	{/each}
</div>
