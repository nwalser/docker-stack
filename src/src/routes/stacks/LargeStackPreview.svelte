<script lang="ts">
	import Editor from 'src/components/Editor.svelte';
	import { copy } from 'svelte-copy';
	import { Button, Tooltip } from 'flowbite-svelte';
	import type { Stack } from 'src/data/stacks/StackPageModel';
	import { stringifyDockerCompose } from 'src/data/stacks/DockerComposeSerializer';

	export let stackPage: Stack;

	let copyCount = 0;
	let tooltipContent = 'Copy';

	function copied() {
		copyCount++;
		tooltipContent = copyCount > 1 ? 'Copied! ' + copyCount + " times" : 'Copied!';
	}
</script>

<div
	class="block overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div class="block p-4">
		<div class="flex">
			<a href="/stacks/{stackPage.id}/">
				<p class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
					{stackPage.name}
				</p>
				<p class="font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{stackPage.description}</p>
			</a>

			<button
				on:click={copied}
				use:copy={stringifyDockerCompose(stackPage.compose)}
				data-tooltip-target="tooltip-default"
				type="button"
				class="ml-auto text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
			>
				<svg
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					class="h-6 w-6 [color]-$fill-color"
					style="stroke-width: var(--grid-item-icon-stroke-width); transform: scale(var(--grid-item-icon-scale));"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
					/></svg
				>
			</button>
			<Tooltip>{tooltipContent}</Tooltip>
		</div>
	</div>

	<Editor value={stringifyDockerCompose(stackPage.compose)} language="yaml" />
</div>
