<script lang="ts">
	export let cols = 1;
</script>

<div class="col-span-1 grid grid-cols-{cols} gap-2">
	<slot />
</div>
