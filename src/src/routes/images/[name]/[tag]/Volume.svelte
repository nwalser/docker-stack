<script lang="ts">
	import type { PossibleVolume } from '../../../../data/images/ImageModel';
	export let possibleVolume: PossibleVolume;
</script>

<a
	class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div class="flex">
		<h5 class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
			{possibleVolume.name}
		</h5>
		<h5 class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
			{possibleVolume.containerPath}
		</h5>
	</div>
	<p class="font-normal text-gray-700 dark:text-gray-400">{possibleVolume.description}</p>
</a>
