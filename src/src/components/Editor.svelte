<script lang="ts">
	import type monaco from 'monaco-editor';
	import { onMount } from 'svelte';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
	import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
	import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

	export let value: string;
	export let language: string;
	export let minHeight: number = 200;
	export let maxHeight: number = 1000;

	let container: HTMLDivElement;
	let editor: monaco.editor.IStandaloneCodeEditor;

	onMount(async () => {
		self.MonacoEnvironment = {
			getWorker: function (_moduleId: any, label: string) {
				if (label === 'json') {
					return new jsonWorker();
				}
				if (label === 'css' || label === 'scss' || label === 'less') {
					return new cssWorker();
				}
				if (label === 'html' || label === 'handlebars' || label === 'razor') {
					return new htmlWorker();
				}
				if (label === 'typescript' || label === 'javascript') {
					return new tsWorker();
				}
				return new editorWorker();
			}
		};

		let monaco = await import('monaco-editor');

		editor = monaco.editor.create(container, {
			value: value,
			language: language,
			scrollBeyondLastLine: false,
			wordWrap: 'on',
			wrappingStrategy: 'advanced',
			minimap: {
				enabled: false
			},
			overviewRulerLanes: 0,
			readOnly: false,
			domReadOnly: false
		});

		let ignoreEvent = false;

		const updateHeight = () => {
			let editorContentHeight = editor.getContentHeight();
			const contentHeight = Math.max(Math.min(maxHeight, editorContentHeight), minHeight);
			container.style.height = `${contentHeight}px`;
			try {
				ignoreEvent = true;
				editor.layout();
			} finally {
				ignoreEvent = false;
			}
		};

		editor.onDidContentSizeChange(updateHeight);
		updateHeight();

		return () => {
			editor.dispose();
		};
	});
</script>

<div bind:this={container} class="h-full w-full" />
