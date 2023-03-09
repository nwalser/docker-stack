<script lang="ts">
	export let image: string;
    export let tag: string;
</script>

<a
	class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div class="flex">
		<h5 class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
			docker pull {image}:{tag}
		</h5>
	</div>
</a>
