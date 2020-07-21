/**
 * Page number.
 */
class Page
{
    /**
     * Constructor.
     *
     * @param {number} number
     * @param {boolean} [isActive=false]
     */
    constructor(
        number,
        isActive
    ) {
        this.number = number;
        this.isActive = isActive || false;
    }
}

export default Page;
