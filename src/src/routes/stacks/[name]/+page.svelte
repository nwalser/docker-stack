<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { Card } from 'flowbite-svelte';
	import Editor from 'src/components/Editor.svelte';
	import { stringifyDockerCompose } from 'src/data/Serializer';
	import { templatesStore } from './TemplateStore';

	let templatePage = $templatesStore.find((t) => t.name == $page.params.name);
	if (!templatePage) throw error(404, 'Not found');
</script>

<Card href="/cards" padding="none">
    <Editor value={stringifyDockerCompose(templatePage.compose)} language="yaml" />
</Card>

