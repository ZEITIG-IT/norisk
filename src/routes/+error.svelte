<script>
	// @ts-nocheck

	import { page } from '$app/stores';
</script>

<div class="h-[calc(100vh-549px)] flex flex-col justify-center items-center">
	<h1 class="text-4xl font-bold">{$page.status} | {$page.error.message}</h1>
	<br />
	<a href="/" class="flex justify-center items-center font-semibold">
		<span class="underline">Go back Home</span>
		<span data-nosnippet class="icon !text-2xl ml-2">undo</span>
	</a>
</div>
