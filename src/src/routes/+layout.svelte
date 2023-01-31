<script>
	import Header from 'src/components/Header.svelte';
import Prose from 'src/components/Prose.svelte';
	import '../app.css';
</script>


<Header />

<Prose>
	<slot />
</Prose>
