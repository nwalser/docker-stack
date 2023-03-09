<script>
	import StackPreview from './StackPreview.svelte';
	import { stackStore } from './StackStore';
</script>

<h3 class="text-2xl font-bold dark:text-white mt-4">Stacks</h3>
<div class="grid grid-cols-4 gap-4 pt-4">
	{#each $stackStore as stack}
		<StackPreview {stack} />
	{/each}
</div>
