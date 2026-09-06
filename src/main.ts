import './style.css'
import './components/MovingWaves/MovingWaves'
import './components/LandingSection/LandingSection'
import './components/TicketsSection/TicketsSection'
import './components/ChurchSection/ChurchSection'
import './components/PlaceSection/PlaceSection'
import './components/GiftRegistrySection/GiftRegistrySection'
import { RecommendationSection } from './components/RecommendationSection/RecommendationSection'
import './components/DressCodeSection/DressCodeSection'
import './components/ItinerarySection/ItinerarySection'
import './components/ConfirmationSection/ConfirmationSection'
import './common/SectionPolaroids/SectionPolaroids'
import './common/SectionDividers/SectionDividers'

const hotelRecommendations = [
	{
		name: 'Flamingo Inn',
		description: 'Excelente opción para quienes buscan un lugar céntrico, cómodo y de fácil acceso a los lugares de la boda.',
		backgroundUrl: '/assets/hotels/flamingo-inn.jpg',
		googleMapsUrl: 'https://maps.app.goo.gl/6MAaGhGkxyjNfAqF8',
		appleMapsUrl: 'https://maps.apple/p/F9HChcPP0xf4Dp',
	},
];

document.querySelector<RecommendationSection>('#hotels')?.setConfig({
	recommendations: hotelRecommendations,
	title: 'Recomendación hotelera',
	subtitle: 'Hospedaje',
	footer: [
		'Recuerda que el check-in en los lugares de hospedaje es a partir de las 3:00 p.m.',
	]
});

const makeupRecommendations = [
	{
		name: 'Tolentino Glam Room & Spa',
		description: 'Alternativas para coordinar peinado y maquillaje en un mismo servicio.',
		backgroundUrl: '/assets/makeup/tolentino.jpg',
		googleMapsUrl: 'https://maps.app.goo.gl/CMCQgUhRkovH8NoW9',
		appleMapsUrl: 'https://maps.apple/p/BcctahI6UUCeg2',
	},
	{
		name: 'Alejandro Tavera Makeup',
		description: 'Servicios de maquillaje profesional para el día de la boda.',
		backgroundUrl: '/assets/makeup/alejandro-tavera.jpg',
		googleMapsUrl: 'https://maps.app.goo.gl/E59PFLpZB4vHrsjf7',
		appleMapsUrl: 'https://maps.apple/p/~s-HW1PT8qv7IG',
	},
	{
		name: 'Miriam Salón',
		description: 'Opciones de maquillaje para invitadas y eventos especiales.',
		backgroundUrl: '/assets/makeup/miriam.jpg',
		googleMapsUrl: 'https://maps.app.goo.gl/BqdmFEzpxahvtxBE9',
		appleMapsUrl: 'https://maps.apple/p/KtTyF0_dgb2w1r',
	},
];

document.querySelector<RecommendationSection>('#makeup')?.setConfig({
	recommendations: makeupRecommendations,
	title: 'Recomendaciones de maquillaje',
	subtitle: 'Belleza',
});

