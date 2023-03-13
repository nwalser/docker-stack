<script lang="ts">
	import type { PossibleVariable } from "../../../../data/images/ImageModel";

    export let possibleVariable: PossibleVariable;
</script>

<a
	class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div class="flex">
		<p class="mb-0 text-lg font-medium tracking-tight text-gray-900 dark:text-white truncate mr-3">
			{possibleVariable.name}
		</p>
		<p class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
			{possibleVariable.defaultValue}
		</p>
	</div>
	<p class="font-normal text-gray-700 dark:text-gray-400">{possibleVariable.description}</p>
</a>
