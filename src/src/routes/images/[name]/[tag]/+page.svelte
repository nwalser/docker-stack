<script lang="ts">
	import Tag from './Tag.svelte';
	import { page } from '$app/stores';
	import Editor from 'src/components/Editor.svelte';
	import { stringifyDockerCompose } from 'src/data/Serializer';
	import { templatesStore } from 'src/routes/templates/[name]/TemplateStore';
	import Empty from './Empty.svelte';
	import { Image, PossiblePort, PossibleVariable, PossibleVolume } from './ImageModel';
	import { imagesStore } from './ImageStore';
	import Port from './Port.svelte';
	import Variable from './Variable.svelte';
	import Volume from './Volume.svelte';
	import { error } from '@sveltejs/kit';
	import TemplatePreview from 'src/routes/templates/[name]/TemplatePreview.svelte';

	let name = $page.params.name;
	let tag = $page.params.tag;

	let image = $imagesStore.find((t) => t.name == name && t.tags.some((t) => t == tag))!;
	if (!image) throw error(404, 'Not found');

	let templates = $templatesStore.filter((t) => t.name == $page.params.name);
</script>


<div class="grid grid-cols-4 gap-8 pt-4">
	<div class="col-span-3">
        <h1 class="text-4xl font-bold dark:text-white mt-4">{name}:{tag} image reference</h1>
        <p class="text-lg font-normal dark:text-gray-300 text-justify">{image?.description}</p>

        <h3 class="text-2xl font-bold dark:text-white mt-4">Templates</h3>
        <div class="col-span-1 grid grid-cols-2 gap-2">
            {#each templates as templates}
                <TemplatePreview template={templates} />
            {:else}
                <Empty />
            {/each}
        </div>
	</div>

	<div class="col-span-1">
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Other Versions</h3>
			<div class="flex flex-wrap">
				{#each image.tags as tag}
					<Tag tag={tag} />
				{:else}
					<Empty />
				{/each}
			</div>
		</div>

		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Ports</h3>
			{#each image?.possiblePorts as port}
				<Port possiblePort={port} />
			{:else}
				<Empty />
			{/each}
		</div>
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Volumes</h3>
			{#each image?.possibleVolumes as volume}
				<Volume possibleVolume={volume} />
			{:else}
				<Empty />
			{/each}
		</div>
		<div class="col-span-1 grid grid-cols-1 gap-2">
			<h3 class="text-2xl font-bold dark:text-white mt-4">Variables</h3>
			{#each image?.possibleVariables as variable}
				<Variable possibleVariable={variable} />
			{:else}
				<Empty />
			{/each}
		</div>
	</div>
</div>
