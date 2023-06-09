import { renderMap } from "./map";
import { renderError } from "./error_handler";
import { formSubmitBtn, searchInput, searchForm } from "./html_elements";
import { getAddressInfo } from "./geolocation";

// get the user current location, then render the map with the user location
window.navigator.geolocation.getCurrentPosition((success) => {
    const { latitude, longitude } = success.coords;
    renderMap(latitude, longitude);
});

// handle the search process, getting the coordinates of the address then renders it on the map
async function handleSearchPlace(event: Event) {
    event.preventDefault(); // don't submit the form

    formSubmitBtn.disabled = true; // make button disabled until the process of getting the coordinates ends

    const placeName: string = encodeURI(searchInput?.value); // convert input text to url encoded format (for google api requirements)

    // if user entered a value in the input
    if (placeName) {
        // get the coordinates of the address
        const addressCoordinates = await getAddressInfo(placeName);

        // if address found and has a coordinates {longitube, latitude}

        if (addressCoordinates && typeof addressCoordinates === "object") {
            // extract the coordinates, then render them on the map
            const { lat, lng } = addressCoordinates;
            renderMap(lat, lng);

            formSubmitBtn.disabled = false; // enable the search button again
        }
    } else {
        renderError("Please enter a valid address!");
    }
}

// when search form submitted
searchForm?.addEventListener("submit", handleSearchPlace);
