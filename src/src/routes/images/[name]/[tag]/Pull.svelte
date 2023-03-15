<script lang="ts">
	export let image: string;
	export let tag: string;
</script>

<div class="block p-4 border rounded-lg shadow bg-gray-800 border-gray-700">
	<div class="flex">
		<h5 class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
			docker pull {image}:{tag}
		</h5>
	</div>
</div>
