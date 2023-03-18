<script lang="ts">
	import '../app.css';
	import { Input } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import { SearchStore } from 'src/data/search/Search';
	import {
		Sidebar,
		SidebarWrapper,
		SidebarBrand,
		SidebarItem,
		SidebarGroup
	} from 'flowbite-svelte';
	import { getImages } from 'src/data/images/ImageData';
	import { getStacks } from 'src/data/stacks/StackData';

	let search = '';

	function navigate() {
		goto('/search', { keepFocus: true, replaceState: false });
	}

	$: {
		$SearchStore = search;
	}

	let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	let site = {
		name: 'Docker Stack',
		href: '/',
		img: '/favicon.png'
	};
</script>

<div class="flex h-screen">
	<div class="h-screen bg-slate-800">
		<Sidebar>
			<SidebarWrapper>
				<SidebarGroup>
					<SidebarBrand {site} />
					<SidebarItem label="Images" {spanClass} href="/images">
						<svelte:fragment slot="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
								/></svg
							>
						</svelte:fragment>
						<svelte:fragment slot="subtext">
							<span
								class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
								>{getImages().length}</span
							>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Stacks" {spanClass} href="/stacks">
						<svelte:fragment slot="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
								/></svg
							>
						</svelte:fragment>
						<svelte:fragment slot="subtext">
							<span
								class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
								>{getStacks().length}</span
							>
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>
				<SidebarGroup border>
					<Input
						id="search-navbar"
						placeholder="Search..."
						bind:value={search}
						on:click={navigate}
					/>
				  </SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</div>

	<div class="w-full overflow-y-scroll">
		<div class="mx-auto container p-4 px-8">
			<slot />
		</div>
	</div>
</div>
