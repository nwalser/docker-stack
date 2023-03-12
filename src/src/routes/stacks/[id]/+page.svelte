<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { Card } from 'flowbite-svelte';
	import Editor from 'src/components/Editor.svelte';
	import { stringifyDockerCompose } from 'src/data/stackPages/DockerComposeSerializer';
	import { getStackPage } from '../../../data/stackPages/StackData';

	let stackId = $page.params.id;

	let stack = getStackPage(stackId)!;
	if (!stack) throw error(404, 'Not found');
</script>

<Editor value={stringifyDockerCompose(stack.compose)} language="yaml" />
