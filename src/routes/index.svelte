<script>
	import '../app.css';
	import { STRIPE_PUBLIC_KEY } from '$lib/env.js';

	async function buy() {
		const stripe = Stripe(STRIPE_PUBLIC_KEY);
		const url = `/checkout`;
		const res = await fetch(url);

		if (res.ok) {
			res.text().then(function(checkout_id) {
				stripe
					.redirectToCheckout({
						sessionId: checkout_id
					})
					.then(function(result) {
						console.log(result.error.message);
					});
			});
		} else {
			console.log('Fetch failed!', res.status);
		}
	}
</script>

<style>
	.product {
		display: flex;
		flex-direction: row;
		border: 0.05rem solid #dadee4;
		border-radius: 0.1rem;
	}

	.product-card {
		display: flex;
		flex-direction: column;
	}

	.card-detail {
		flex: 1 1 auto;
		padding: 0.4rem;
	}

	.card-titles {
		padding: 0.8rem;
		font-weight: 600;
	}

	.card-title {
		font-size: 1.5rem;
		padding: 0.4rem 0rem;
	}

	.card-subtitle {
		font-size: 1rem;
		color: #aaa;
	}

	.card-description {
		padding: 0.8rem;
	}

	.card-fields {
		padding: 0.8rem;
	}

	.card-field-title {
		clear: both;
		float: left;
		font-weight: 600;
	}

	.card-field-value:before {
		content: '\00a0 ';
	}

	.card-field-value {
		float: left;
	}

	.card-footer {
		padding: 0.8rem;
	}

	[itemprop='price'] {
		display: block;
		font-size: 2rem;
		font-weight: 600;
		text-align: right;
		margin: 1.5rem 0;
	}

	.buy {
		font-size: inherit;
		line-height: inherit;
		cursor: pointer;
		padding: 0.25rem 0.4rem;
		color: #fff;
		border: 0.05rem solid #897853;
		background: #897853;
		border-radius: 0.1re;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
		float: right;
		appearance: none;
	}

	@media (max-width: 600px) {
		.product {
			flex-direction: column;
		}

		.photo > img {
			width: 100%;
		}
	}
</style>

<svelte:head>
	<title>Théière 西施-XīShī du 坭興-NíXìng</title>
	<meta name="description" content="Fiche de la théière 西施-XīShī du 坭興-NíXìng." />
	<script src="https://js.stripe.com/v3/">

	</script>
</svelte:head>

<section class="product">
	<aside class="photo">
		<img src="theiere_2-a.jpg" alt="西施-XīShī du 坭興-NíXìng" class="src" />
	</aside>
	<section class="product-card">
		<hgroup class="card-titles">
			<h1 class="card-title">西施-XīShī du 坭興-NíXìng</h1>
			<h2 class="card-subtitle">Théière</h2>
		</hgroup>
		<section class="card-detail">
			<p class="card-description">
				Les poteries de NíXìng sont uniques car elles obtiennent une coloration complexe et tachetée
				pendant la cuisson. Elles sont fabriquées en mélangeant l'argile des deux rives de la
				rivière 欽江-QīnJiāng. La couleur change dans le four en évoluant du brun bronze au
				gris-bleu, rendant chaque pièce unique. Elles conviennent particulièrement bien au
				普洱生茶-Pǔ’ěr ShēngChá, aux 烏龍-WūLóng et aux 紅茶-HóngChá (rouge)..
			</p>
			<dl class="card-fields">
				<dd class="card-field-title">Capacité :</dd>
				<dt class="card-field-value">180ml</dt>
				<dd class="card-field-title">Poids :</dd>
				<dt class="card-field-value">300g</dt>
				<dd class="card-field-title">Dimensions :</dd>
				<dt class="card-field-value">lg: 11.8cm x ht: 7.2cm</dt>
				<dd class="card-field-title">Stock :</dd>
				<dt class="card-field-value">il reste 1 article</dt>
			</dl>
		</section>
		<footer class="card-footer">
			<span itemprop="price">169.00 €</span>
			<button on:click={buy} class="buy">Acheter</button>
		</footer>
	</section>
</section>
