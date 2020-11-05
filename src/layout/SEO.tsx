import { NextSeo, NextSeoProps } from 'next-seo';

export const SEODefaultConfig = {
	url: 'https://todoappdanestves.vercel.app',
	title: 'Emmanuel Villegas Gonzalez',
	description: 'Portfolio',
	image: 'images/logo.jpg'
};

type SEOProps = NextSeoProps & {
	slug?: string;
	image?: string;
};

const SEO: React.FC<SEOProps> = ({
	title,
	description,
	slug,
	image,
	openGraph,
	...props
}) => {
	const metaTitle = title ? title : SEODefaultConfig.title;
	const metaDescription = description ?? SEODefaultConfig.description;
	const metaUrl = [SEODefaultConfig.url, slug].filter(Boolean).join('/');
	const metaImage = `${SEODefaultConfig.url}/${
		image ?? SEODefaultConfig.image
	}`;

	return (
		<NextSeo
			title={metaTitle}
			titleTemplate={`%s | ${metaTitle}`}
			description={metaDescription}
			openGraph={{
				type: 'website',
				url: metaUrl,
				site_name: SEODefaultConfig.title,
				title: title ?? SEODefaultConfig.title,
				images: [{ url: metaImage }],
				...openGraph
			}}
			twitter={{
				cardType: 'summary_large_image'
			}}
			{...props}
		/>
	);
};

export default SEO;
