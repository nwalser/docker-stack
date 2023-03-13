<script>
	export let text = 'none';
	export let link = '';
</script>

<a
	href={link}
	class="p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex align-middle justify-center"
>
	<h5 class="text-xl font-light tracking-tight text-gray-900 dark:text-white text-center flex justify-center items-center">{text}</h5>
</a>
