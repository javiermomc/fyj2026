import './style.css'
import './components/MovingWaves'
import './components/LandingSection'
import './components/ChurchSection'
import './components/PlaceSection'
import './components/GiftRegistrySection'
import { RecommendationSection } from './components/HotelRecommendationSection'
import './components/DressCodeSection'
import './components/ItinerarySection'

const hotelRecommendations = [
	{
		name: 'Plaza Camelinas',
		description: 'A 10min de la Iglesia, A 15min del salón',
		backgroundUrl: '/assets/hotels/plaza-camelinas.jpg',
		googleMapsUrl: 'https://maps.app.goo.gl/tRqRwR5J9wesazdx8',
		appleMapsUrl: 'https://maps.apple/p/t0qufBIrsNC0eb',
	},
	{
		name: 'Flamingo Inn',
		description: 'Excelente opción para quienes buscan comodidad, seguridad y buen servicio.',
		backgroundUrl: '/assets/hotels/flamingo-inn.jpg',
		googleMapsUrl: 'https://maps.app.goo.gl/6MAaGhGkxyjNfAqF8',
		appleMapsUrl: 'https://maps.apple/p/F9HChcPP0xf4Dp',
	},
	{
		name: 'Real de Minas',
		description: 'A 10 minutos del salón, ideal para una estancia tranquila y cómoda.',
		backgroundUrl: '/assets/hotels/real-de-minas.jpg',
		googleMapsUrl: 'https://maps.app.goo.gl/ABeQxaRFEQwgJL9x5',
		appleMapsUrl: 'https://maps.apple/p/~owo3.NWDrAz3r',
	},
];

document.querySelector<RecommendationSection>('#hotels')?.setConfig({
	recommendations: hotelRecommendations,
	title: 'Recomendación hotelera',
	subtitle: 'Hospedaje',
	background: 'bg-white',
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
	background: 'bg-neutral-50',
});

