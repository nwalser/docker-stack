<script lang="ts">
	import { Img } from "flowbite-svelte";

    export let src: string;
    export let alt: string;
</script>


<div class="bg-white border border-gray-200 rounded-lg shadow flex justify-center">
	<Img
		imgClass="h-40"
		src={src}
		alt={alt}
	/>
</div>