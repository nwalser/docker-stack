<script lang="ts">
	import Editor from "src/components/Editor.svelte";
	import { stringifyDockerCompose } from "src/data/Serializer";
	import type { Template } from "./TemplateModel";

    export let template: Template;
</script>

<Editor value={stringifyDockerCompose(template.compose)} language="yaml" />
