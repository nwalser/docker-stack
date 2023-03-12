<script lang="ts">
	import Editor from 'src/components/Editor.svelte';
	import { stringifyDockerCompose } from 'src/data/stackPages/DockerComposeSerializer';
	import type { StackPage } from '../../data/stackPages/StackPageModel';
	import { copy } from 'svelte-copy';

	export let stackPage: StackPage;
</script>

<div
	class="block overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div class="block p-4">
		<div class="flex">
			<a
				href="/stacks/{stackPage.id}/"
				class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
			>
				{stackPage.name}
			</a>
			<button
				use:copy={stringifyDockerCompose(stackPage.compose)}
				type="button"
				class="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>Copy</button
			>
		</div>
		<p class="font-normal text-gray-700 dark:text-gray-400">{stackPage.description}</p>
	</div>

	<Editor value={stringifyDockerCompose(stackPage.compose)} language="yaml" />
</div>
