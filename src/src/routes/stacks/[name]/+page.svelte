<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { Card } from 'flowbite-svelte';
	import Editor from 'src/components/Editor.svelte';
	import { stringifyDockerCompose } from '../Serializer';
	import { stackStore } from '../StackStore';

	let stack = $stackStore.find((t) => t.name == $page.params.name);
	if (!stack) throw error(404, 'Not found');
</script>

<Card href="/cards" padding="none">
    <Editor value={stringifyDockerCompose(stack.compose)} language="yaml" />
</Card>

