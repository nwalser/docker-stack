<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
	import type { ExposedPort } from 'src/data/stacks/StackPageModel';

	export let exposedPort: ExposedPort;
</script>

{#if exposedPort.webInterface}
	<a
		href="http://host.docker.internal:{exposedPort.port}/"
		target="_blank"
		rel="noreferrer"
        data-tooltip-target="tooltip-default"
		class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
	>
		<div class="flex">
			<p class="mb-0 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
				{exposedPort.name}
			</p>
			<p class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
				{exposedPort.port}
			</p>
		</div>
		<p class="font-normal text-gray-700 dark:text-gray-400">{exposedPort.description}</p>
	</a>
    <Tooltip>Visit http://host.docker.internal:{exposedPort.port}/</Tooltip>
{:else}
	<div
		class="block p-4 border rounded-lg shadow bg-gray-800 border-gray-700"
	>
		<div class="flex">
			<p class="mb-0 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
				{exposedPort.name}
			</p>
			<p class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
				{exposedPort.port}
			</p>
		</div>
		<p class="font-normal text-gray-700 dark:text-gray-400">{exposedPort.description}</p>
	</div>
{/if}
