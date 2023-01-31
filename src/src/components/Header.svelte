<script lang="ts">
	import Button from './Button.svelte';
	import Logo from './Logo.svelte';
	import Search from './Search.svelte';
	import TopLevelNavItem from './TopLevelNavItem.svelte';
</script>

<div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
	<div class="absolute inset-x-0 top-full h-px transition"/>
	<Search />
	<div class="flex items-center gap-5 lg:hidden">
		<a href="/" aria-label="Home">
			<Logo class="h-6" />
        </a>
	</div>
	<div class="flex items-center gap-5">
		<nav class="hidden md:block">
			<ul class="flex items-center gap-8">
				<TopLevelNavItem href="/">API</TopLevelNavItem>
				<TopLevelNavItem href="#">Documentation</TopLevelNavItem>
				<TopLevelNavItem href="#">Support</TopLevelNavItem>
			</ul>
		</nav>
		<div class="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
		<div class="flex gap-4">
			
		</div>
		<div class="hidden min-[416px]:contents">
			<Button href="#">Sign in</Button>
		</div>
	</div>
</div>