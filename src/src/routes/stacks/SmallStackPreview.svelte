<script lang="ts">
	import { Img } from 'flowbite-svelte';
	import type { Stack } from 'src/data/stacks/StackPageModel';

	export let stack: Stack;
</script>

<a href="/stacks/{stack.id}/" class="block overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
	<Img src={stack.imageUrl} alt="sample 1" imgClass="bg-white h-20 w-full" />

	<div
		class="p-4"
	>
		<div class="flex">
			<h5 class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
				{stack.name}
			</h5>
			<h5 class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
				{stack.compose.services.length}
			</h5>
		</div>
		<p class="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{stack.description}</p>
	</div>
</a>
