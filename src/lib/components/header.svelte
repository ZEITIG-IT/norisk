<script>
	import { page } from '$app/stores';
	import { quintOut } from 'svelte/easing';
	import { slide, blur } from 'svelte/transition';
	import favicon from '$lib/assets/favicon.ico';
	import { onMount } from 'svelte';

	let menuOpened = false;

	/**
	 * @type {Element}
	 */
	let header;
	onMount(() => {
		const observer = new IntersectionObserver(
			([e]) => e.target.classList.toggle('shadow-lg', e.intersectionRatio < 1),
			{ threshold: [1] }
		);
		observer.observe(header);
	});

	// @ts-ignore
</script>

<header class="mb-8 mt-6 sticky -top-px z-40 bg-gray-900 shadow-gray-950" bind:this={header}>
	<div class="py-4 pt-[17px] mx-auto lg:px-8 max-w-7xl px-4 sm:px-6">
		<div class="flex flex-col lg:flex-row justify-between items-center">
			<div class="w-full flex justify-between items-center">
				<a href="/" class="font-bold text-2xl">
					<img src={favicon} alt="" height="40" width="40" class="inline-block mr-2" />
					<span>NoRisk Client</span>
				</a>
				<button on:click={() => (menuOpened = !menuOpened)} class="relative lg:hidden">
					<span data-nosnippet class="icon !text-3xl opacity-0"> menu </span>
					{#key menuOpened}
						<span
							data-nosnippet
							class="icon !text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							transition:blur={{ delay: 0, duration: 300, easing: quintOut }}
						>
							{menuOpened ? 'close' : 'menu'}
						</span>
					{/key}
				</button>
			</div>
			{#key menuOpened}
				<div
					class="py-6 lg:py-0 gap-6 lg:gap-12 items-center {menuOpened
						? 'flex'
						: 'hidden'} flex-col lg:flex lg:flex-row"
					transition:slide={{ delay: 0, duration: 600, easing: quintOut, axis: 'y' }}
				>
					<div class="flex flex-col lg:flex-row gap-6 items-center">
						<a href="/" class={$page.url.pathname === '/' ? 'text-norisk-light font-semibold' : ''}
							>Start</a
						>
						<a
							href="/download"
							class={$page.url.pathname === '/download' ? 'text-norisk-light font-semibold' : ''}
							>Download</a
						>
						<a
							href="/shop"
							class={$page.url.pathname === '/shop' ? 'text-norisk-light font-semibold' : ''}
							>Shop</a
						>
						<a
							href="/support"
							class={$page.url.pathname === '/support' ? 'text-norisk-light font-semibold' : ''}
							>Support</a
						>
					</div>
					<a
						href="/login"
						class="bg-gray-800 rounded-xl pl-1.5 pb-1 pt-0.5 pr-2.5 whitespace-nowrap"
					>
						<p>
							<span data-nosnippet class="icon mr-0.5 translate-y-1.5">login</span>
							Login
						</p>
					</a>
				</div>
			{/key}
		</div>
	</div>
</header>
