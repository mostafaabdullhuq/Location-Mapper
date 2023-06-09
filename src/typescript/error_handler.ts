import { formSubmitBtn, errorContainer } from "./html_elements";

/* 
function to render an error message on the window
disables the submit button, show the error, then wait for 3 seconds and enable the submit button and hide the error
*/
export function renderError(message: string) {
    if (message) {
        formSubmitBtn.disabled = true;
        errorContainer.textContent = message;
        errorContainer.classList.add("active");

        setTimeout(() => {
            errorContainer.classList.remove("active");
            formSubmitBtn.disabled = false;
        }, 3000);
    }
}
