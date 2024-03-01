<script>
	import Zeitig from './zeitig.svelte';
</script>

<div class="bg-gray-800 text-primary mt-20 pb-4">
	<div class="mx-auto lg:px-8 max-w-7xl px-4 sm:px-6">
		<div
			class="flex flex-col md:flex-row justify-evenly items-center md:items-start text-center md:text-start"
		>
			<div class="m-8">
				<h3 class="text-xl font-semibold">Socials</h3>
				<br />
				<a class="" href={'https://whatsapp.com/channel/0029VaEHVubEgGfRBa5pzW29'}>
					<span data-nosnippet class="icon mr-1 !text-2xl translate-y-1.5">mail</span>Whatsapp
				</a>
				<br />
				<a class="" href={'https://discord.com/invite/WPQCB4mRmK'}>
					<span data-nosnippet class="icon mr-1 !text-2xl translate-y-1.5">mail</span>Discord
				</a>
				<br />
				<a class="" href={'https://www.youtube.com/noriskk'}>
					<span data-nosnippet class="icon mr-1 !text-2xl translate-y-1.5">mail</span>YouTube
				</a>
				<br />
				<a class="" href={'https://www.twitch.tv/norisk'}>
					<span data-nosnippet class="icon mr-1 !text-2xl translate-y-1.5">mail</span>Twitch
				</a>
				<br />
				<a class="" href={'/support'}>
					<span data-nosnippet class="icon mr-1 !text-2xl translate-y-1.5">mail</span>Support
				</a>
			</div>
			<div class="m-8">
				<h3 class="text-xl font-semibold">Navigation</h3>
				<br />
				<a class="underline underline-offset-2" href={'/'}>Startseite</a>
				<br />
				<a class="underline underline-offset-2" href={'/download'}>Download</a>
				<br />
				<a class="underline underline-offset-2" href={'/shop'}>Shop</a>
				<br />
				<a class="underline underline-offset-2" href={'/support'}>Support</a>
				<br />
				<a class="underline underline-offset-2" href={'/login'}>Login</a>
				<br />
				<a class="underline underline-offset-2" href={'/rechtliches'}>Rechtliches</a>
			</div>
		</div>
		<hr />
		<div class="flex flex-col items-center md:flex-row justify-between mt-4 mx-8 text-center">
			<p>
				<a target="_blank" class="cursor-default" href={'mailto:zeitig-it@gmail.com'}>&copy;</a
				>{new Date().getUTCFullYear()} NoRisk Client. All rights reserved.
			</p>
			<div class="flex flex-row">
				<p>Made in Germany</p>
				<p class="mx-4">|</p>
				<a
					class="hover-shrink font-bold flex justify-center items-center"
					href={'mailto:zeitig-it@gmail.com'}
					target="_blank"
				>
					<Zeitig classX="h-4 w-4 mr-1.5 inline-block" fill="#f9fafb" heightAndWidth={16} />
					ZEITIG
				</a>
			</div>
		</div>
	</div>
</div>
