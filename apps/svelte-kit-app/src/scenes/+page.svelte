<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	onMount(() => {
		if (browser) {
			goto('/manfred-json-input');
		}
	});
</script>
