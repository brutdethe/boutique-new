<script>
	import '../app.css';
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

	.detail {
		flex: 1 1 auto;
		padding: 0.4rem;
	}

	.titles {
		padding: 0.8rem;
		font-weight: 600;
	}

	.title {
		font-size: 1.5rem;
		padding: 0.4rem 0rem;
	}

	.subtitle {
		font-size: 1rem;
		color: #aaa;
	}

	.description {
		padding: 0.8rem;
	}

	.fields {
		padding: 0.8rem;
	}

	.field-title {
		clear: both;
		float: left;
		font-weight: 600;
	}

	.field-value:before {
		content: '\00a0 ';
	}

	.field-value {
		float: left;
	}

	[itemprop='price'] {
		display: block;
		font-size: 2rem;
		font-weight: 600;
		padding: 0.8rem;
		text-align: right;
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
</svelte:head>

<section class="product">
	<aside class="photo">
		<img src="theiere_2-a.jpg" alt="西施-XīShī du 坭興-NíXìng" class="src" />
	</aside>
	<section class="product-card">
		<hgroup class="titles">
			<h1 class="title">西施-XīShī du 坭興-NíXìng</h1>
			<h2 class="subtitle">Théière</h2>
		</hgroup>
		<section class="detail">
			<p class="description">
				Les poteries de NíXìng sont uniques car elles obtiennent une coloration complexe et tachetée
				pendant la cuisson. Elles sont fabriquées en mélangeant l'argile des deux rives de la
				rivière 欽江-QīnJiāng. La couleur change dans le four en évoluant du brun bronze au
				gris-bleu, rendant chaque pièce unique. Elles conviennent particulièrement bien au
				普洱生茶-Pǔ’ěr ShēngChá, aux 烏龍-WūLóng et aux 紅茶-HóngChá (rouge)..
			</p>
			<dl class="fields">
				<dd class="field-title">Capacité :</dd>
				<dt class="field-value">180ml</dt>
				<dd class="field-title">Poids :</dd>
				<dt class="field-value">300g</dt>
				<dd class="field-title">Dimensions :</dd>
				<dt class="field-value">lg: 11.8cm x ht: 7.2cm</dt>
				<dd class="field-title">Stock :</dd>
				<dt class="field-value">il reste 1 article</dt>
			</dl>
		</section>
		<footer>
			<span itemprop="price">169.00 €</span>
		</footer>
	</section>
</section>
