/**
 * Function for Validation Alert
 */

const creatAlert = (msg, type='danger') => {
    return `
            <p class="alert alert-${type} d-flex justify-content-between mt-5">${msg}
                <button class="btn-close" data-bs-dismiss="alert"></button>
            </p>
    `;
}