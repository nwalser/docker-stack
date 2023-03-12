<script lang="ts">
	import type { PossiblePort } from '../../../../data/images/ImageModel';
	export let possiblePort: PossiblePort;
</script>

<a
	class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div class="flex">
		<p class="mb-0 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
			{possiblePort.name}
		</p>
		<p class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
			{possiblePort.port}
		</p>
	</div>
	<p class="font-normal text-gray-700 dark:text-gray-400">{possiblePort.description}</p>
</a>
