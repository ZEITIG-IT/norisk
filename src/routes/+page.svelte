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

		const canvas2 = document.getElementById('canvas3d2');
		// @ts-ignore
		app2 = new Application(canvas2);
		app2.load('https://prod.spline.design/Eh-ozo-gyz6NOoty/scene.splinecode');
		//app2.setVariable("hovered", true)
		console.log(app2.getVariables());
	});
</script>

<div class="w-full flex flex-col md:flex-row justify-evenly items-center mt-20">
	<div>
		<h1 class="text-4xl sm:text-4xl lg:text-6xl font-bold mt-12 mb-6">
			Der neue NoRisk <br /> Client ist da!
		</h1>
		<h3 class="font-semibold text-xl sm:text-xl lg:text-2xl">
			Entdecke Minecraft neu mit dem <br /> coolsten Client jemals
		</h3>
		<a
			href="/download"
			class="w-max mt-4 bg-norisk-dark rounded-full p-3 shadow-lg shadow-gray-950 flex justify-center items-center text-gray-50 font-semibold hover-btn"
		>
			Download
			<span data-nosnippet class="icon !text-xl ml-2">east</span>
		</a>
	</div>
	<div class="w-3/4 md:w-1/2 aspect-square">
		<canvas id="canvas3d1"></canvas>
	</div>
</div>

<section class="mt-24 flex flex-col items-center">
	<h2 class="text-xl sm:text-2xl lg:text-4xl font-semibold mb-6">Features</h2>
	<div class="w-full flex flex-col justify-evenly gap-4">
		<div class="flex justify-evenly gap-4 flex-col lg:flex-row">
			<Card classX="flex justify-center items-center lg:!flex-none">
				<div
					class="w-52 aspect-square cursor-default relative"
					role="button"
					tabindex="0"
					on:mouseover={() => app2.emitEvent('keyDown', 'Glass')}
					on:focus={() => app2.emitEvent('keyDown', 'Glass')}
					on:mouseleave={() => app2.emitEvent('keyUp', 'Glass')}
				>
					<canvas class="absolute bottom-4" id="canvas3d2"></canvas>
				</div>
			</Card>
			<Card icon="widgets" title="Mods und Widgets">
				<span class="font-semibold underline">Verbessere das Gameplay:</span> Optimiere deine
				Spielmechanik mit Mods für Performance, Steuerung und QoL-Verbesserungen. <br />
				<span class="font-semibold underline">Passe deine Optik an:</span> Verändere die Optik
				deiner Welt mit Shadern, Texturenpaketen und anderen visuellen Mods. <br />
				<span class="font-semibold underline">Widgets:</span> Nutze Widgets um dein Spielerlebnis auf
				ein anderes Level zu bringen!
			</Card>
		</div>
		<div class="flex justify-evenly gap-4 flex-col lg:flex-row">
			<div class="lg:w-2/3 flex justify-evenly flex-col gap-4">
				<Card icon="brush" title="Zeige deinen Stil!">
					<span class="font-semibold block mb-1">Entdecke eine große Auswahl an:</span>
					<span class="font-semibold underline">Animationen:</span> Erlebe Waffenanimationen wie in
					Shootern und erstelle sogar eigene.<br />
					<span class="font-semibold underline">Cosmetics:</span> Nutze z.B. Flügel oder Schuhe um
					deinen einzigartigen Look zu kreieren. <br />
					<span class="font-semibold underline">Capes:</span> Zeige deine Zugehörigkeit zu einer
					Gruppe oder trage ein Cape mit einem coolen Design. <br />
					<span class="font-semibold underline">Pets:</span> Lasse dich von einem treuen Begleiter auf
					deinen Abenteuern begleiten.
				</Card>
				<Card icon="camera_alt" title="Erlebe McReal.">
					<span class="font-semibold block mb-4"
						>Teile deine Minecraft-Momente authentisch mit Freunden!</span
					>
					<span class="font-semibold block mb-1">So funktioniert's:</span>
					<span class="font-semibold underline">1. Begebe dich auf Abenteuer:</span> Baue Monumente,
					finde seltene Items oder stelle dich anderen Herausforderungen.<br />
					<span class="font-semibold underline">2. Doppelbild-Screenshot:</span> Mit einem
					speziellen Screenshot-Tool erstellst du ein Doppelbild, das deine Minecraft-Welt und dich
					selbst zeigt.<br />
					<span class="font-semibold underline">3. Teile & entdecke:</span> Teile dein MCReal mit deinen
					Freunden und sieh dir ihre Abenteuer an.
				</Card>
			</div>
			<Card icon="games" title="Minigames">
				<span class="font-semibold block mb-1"> Nie wieder langeweile in der Lobby!</span>
				<span class="font-semibold underline">Tic Tac Toe:</span> Fordere deine Freunde zu einem
				klassischen Duell heraus und bringe drei Kreuze oder Kreise in eine Reihe. <br />
				<span class="font-semibold underline">Stack:</span> Baue einen immer höheren Turm aus
				Blöcken, aber sei vorsichtig, dass er nicht umfällt! <br />
				<span class="font-semibold underline">Pong:</span> Spiele das legendäre Tischtennis-Spiel in
				einer minimalistischen Minecraft-Version. <br />
				<span class="font-semibold underline">Flappy Bird:</span> Steuere einen Vogel durch ein
				Labyrinth aus Rohren und versuche, so viele Punkte wie möglich zu erreichen. <br />
			</Card>
		</div>
		<Card icon="edit" title="Und vieles mehr...">
			Wir arbeiten stetig an Updates um das Spielerlebnis zu Verbessern und neue Features zu
			ermöglichen.
		</Card>
	</div>
</section>
