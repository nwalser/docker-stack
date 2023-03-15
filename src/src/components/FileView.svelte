<script lang="ts">
	import Editor from 'src/components/Editor.svelte';
	import { copy } from 'svelte-copy';
	import { Tooltip } from 'flowbite-svelte';
	import CopyIcon from 'src/components/icons/CopyIcon.svelte';
	import DownloadIcon from 'src/components/icons/DownloadIcon.svelte';

	export let fileName: string;
	export let language: string;
	export let stringFileContent: string;
	export let fileDownloadUrl: string = '';

	let copyCount = 0;
	let tooltipContent = 'Copy';

	function copied() {
		copyCount++;
		tooltipContent = copyCount > 1 ? 'Copied! ' + copyCount + ' times' : 'Copied!';
	}
</script>

<div
	class="block overflow-hidden bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
>
	<div class="block">
		<div class="flex">
			<p class="font-normal p-3 text-gray-100 line-clamp-1">{fileName}</p>

			<div class="ml-auto flex">
				{#if fileDownloadUrl !== ''}
					<a
						download
						href={fileDownloadUrl}
						type="button"
						class="text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2.5 text-center inline-flex items-center"
					>
						<DownloadIcon />
					</a>
					<Tooltip>Download</Tooltip>
				{/if}

				<button
					on:click={copied}
					use:copy={stringFileContent}
					data-tooltip-target="tooltip-default"
					type="button"
					class="text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2.5 text-center inline-flex items-center"
				>
					<CopyIcon />
				</button>
				<Tooltip>{tooltipContent}</Tooltip>
			</div>
		</div>
	</div>

	<Editor value={stringFileContent} {language} />
</div>
