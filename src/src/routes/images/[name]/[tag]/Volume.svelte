<script lang="ts">
	import type { PossibleVolume } from '../../../../data/images/ImageModel';
	export let possibleVolume: PossibleVolume;
</script>

<div class="block p-4 border rounded-lg shadow bg-gray-800 border-gray-700">
	<div class="flex">
		<p class="mb-0 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
			{possibleVolume.name}
		</p>
		<p class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
			{possibleVolume.containerPath}
		</p>
	</div>
	<p class="font-normal text-gray-700 dark:text-gray-400">{possibleVolume.description}</p>
</div>
