import axios from "axios";
import { GOOGLE_API } from "./map";
import { renderError } from "./error_handler";

type GeoLocationStatus = "OK" | "ZERO_RESULTS" | "OVER_DAILY_LIMIT" | "OVER_QUERY_LIMIT" | "REQUEST_DENIED" | "INVALID_REQUEST" | "UNKNOWN_ERROR";

// structure of geolocation api response
type GeoLocationResponse = {
    results: {
        address_components: {
            long_name: string;
            short_name: string;
            types: string[];
        }[];
        formatted_address: string;
        geometry: {
            location: {
                lat: number;
                lng: number;
            };
            location_type: string;
            viewport: {};
        };
        place_id: string;
        plus_code: {};
        types: string[];
    }[];
    status: GeoLocationStatus;
};

// function that takes a string address, search for it in the google api, then return the coordinates if found, or false if error happened
export async function getAddressInfo(address: string): Promise<{ lat: number; lng: number } | boolean> {
    try {
        const getAddressReq = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API}`);
        if (getAddressReq.status === 200) {
            const searchResult: GeoLocationResponse = getAddressReq.data;
            if (searchResult.status === "OK") {
                return searchResult.results[0].geometry.location;
            } else {
                switch (searchResult.status) {
                    case "ZERO_RESULTS":
                        throw Error("Cannot find a location with this address.");
                    default:
                        throw Error("An error occurred while getting address.");
                }
            }
        }
        throw Error(getAddressReq.statusText);
    } catch (err: unknown) {
        if (err && err instanceof Error) {
            renderError(err.message);
        }
        return false;
    }
}
