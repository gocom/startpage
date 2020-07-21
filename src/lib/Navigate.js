/**
 * Navigate.
 */
class Navigate
{
    /**
     * Gets query parameter.
     *
     * @param {string} name
     *
     * @returns {string}
     */
    getParam(name) {
        return this.getParams().get(name);
    }

    /**
     * Sets query parameter.
     *
     * @param {string}      name
     * @param {string|null|number} value
     *
     * @return {this}
     */
    setParam(name, value) {
        const params = this.getParams();

        if (value === null) {
            params.delete(name);
        } else {
            params.set(name, value);
        }

        window.location.hash = params.toString();

        return this;
    }

    /**
     * Gets parameters.
     *
     * @returns {URLSearchParams}
     */
    getParams() {
        return new URLSearchParams(window.location.hash.substring(1));
    }
}

export default new Navigate();
