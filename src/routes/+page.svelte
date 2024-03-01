<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';

	let app1;
	let app2: Application;

	onMount(async () => {
		const canvas1 = document.getElementById('canvas3d1');
		// @ts-ignore
		app1 = new Application(canvas1);
		app1.load('https://draft.spline.design/dCnFQFZ8ZNGssyxw/scene.splinecode');

		
	});
</script>

<div class="w-full flex flex-col md:flex-row justify-evenly items-center mt-20">
	<div class="w-3/4 md:w-1/2 aspect-square">
		<canvas id="canvas3d1"></canvas>
	</div>
</div>
