import { Loader } from "@googlemaps/js-api-loader";
import { mapContainer } from "./html_elements";

export const GOOGLE_API: string = process.env.GOOGLE_API_KEY!;

let map: google.maps.Map;

const loader = new Loader({
    apiKey: GOOGLE_API,
    version: "weekly",
});

export default loader.load().then(async () => {
    const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
    map = new Map(mapContainer, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    });
});

export function renderMap(latitude: number, longitude: number) {
    map.setCenter({ lat: latitude, lng: longitude });
    map.setZoom(17);
}
