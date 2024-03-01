<script>
	import '$lib/assets/app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { page } from '$app/stores';

	function title() {
		switch ($page.url.pathname) {
			case '/download':
				return ' - Download';
			case '/shop':
				return ' - Shop';
			case '/support':
				return ' - Support';
			case '/rechtliches':
				return ' - Rechtliches';
			case '/login':
				return ' - Login';
			default:
				return '';
		}
	}
</script>

<div class="scroll-smooth bg-gray-900 text-gray-50 text-base sm:text-lg">
	<main class="mx-auto lg:px-8 max-w-7xl px-4 sm:px-6">
		<slot />
	</main>
</div>

<style>
	:root {
		background-color: rgb(17 24 39);
	}
</style>
