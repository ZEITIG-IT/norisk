<script>
	/**
	 * @type {string|null}
	 */
	export let classX = null;
	/**
	 * @type {string|null}
	 */
	export let icon = null;
	/**
	 * @type {string|null}
	 */
	export let title = null;
</script>

<div class="bg-gray-800 rounded-2xl p-4 min-w-64 flex-1 {classX}">
	{#if icon !== null || title !== null}
		<h3 class="block mb-4">
			{#if icon !== null}
				<span data-nosnippet class="icon !text-3xl translate-y-2 mr-1.5">
					{icon}
				</span>
			{/if}
			{#if title !== null}
				<span class="font-bold underline decoration-2">{title}</span>
			{/if}
		</h3>
	{/if}
	<slot />
</div>
