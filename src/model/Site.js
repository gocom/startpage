/**
 * Site.
 */
class Site
{
    static idCounter = 0;

    /**
     * Constructor.
     *
     * @param {object} options
     * @param {string} options.url Link URL
     * @param {string} [options.name] Name
     * @param {string} [options.fa] Font icon class names
     * @param {string} [options.backgroundColor] Background color
     * @param {string} [options.textColor] Foreground color
     * @param {string} [options.thumbnail] Thumbnail image URL
     * @param {string} [options.icon Logo] icon image URL
     */
    constructor(
        options
    ) {
        Site.idCounter++;
        this.url = new URL(options.url);
        this.name = options.name || null;
        this.fa = options.fa || null;
        this.backgroundColor = options.backgroundColor || null;
        this.textColor = options.textColor || null;
        this.thumbnail = options.thumbnail || null;
        this.icon = options.icon || null;
        this.position = null;
        this.id = Site.idCounter;
    }
}

export default Site;
