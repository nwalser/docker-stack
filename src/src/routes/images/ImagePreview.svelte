<script lang="ts">
	import { Img } from 'flowbite-svelte';
	import type { Image } from 'src/data/images/ImageModel';

	export let image: Image;
</script>

<a
	href="/images/{image.name}/{image.tag}"
	class="block overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<Img src={image.page.imageUrl} alt="sample 1" imgClass="bg-white h-20 w-full" />

	<div class="p-4">
		<div class="flex">
			<h5 class="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
				{image.name}
			</h5>
			<h5 class="mb-0 text-xl font-light tracking-tight text-gray-900 dark:text-white ml-auto">
				{image.tag}
			</h5>
		</div>
		<p class="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{image.page.description}</p>
	</div>
</a>
