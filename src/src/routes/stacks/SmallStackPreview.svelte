<script lang="ts">
	import Editor from 'src/components/Editor.svelte';
	import { stringifyDockerCompose } from 'src/data/stackPages/DockerComposeSerializer';
	import type { StackPage } from '../../data/stackPages/StackPageModel';

	export let stackPage: StackPage;
</script>

<a
	href="/stacks/{stackPage.id}/"
	class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div class="flex">
		<h5 class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
			{stackPage.name}
		</h5>
		<h5 class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
			{stackPage.compose.services.length}
		</h5>
	</div>
	<p class="font-normal text-gray-700 dark:text-gray-400">{stackPage.description}</p>
</a>
