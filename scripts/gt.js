// create an object for storing global data if one does not already exist
if (window.GT === undefined) {
  window.GT = {};

  /**
   * The animation settings used in the gt app.
   */
  window.GT.animation = {
    /**
     * The duration of entry animations.
     */
    entryDuration: 800,

    /**
     * The duration of exit animations.
     */
    exitDuration: 650,

    /**
     * The duration of exit animations.
     */
    heroDuration: 800,

    /**
     * The duration of exit animations.
     */
    timingOffset: 150
  };

  /**
   * A look up table that can be used to get day information from a day index.
   */
  window.GT.dayLookUp = [
    { short: 'Sun', long: 'Sunday' },
    { short: 'Mon', long: 'Monday' },
    { short: 'Tue', long: 'Tuesday' },
    { short: 'Wed', long: 'Wednesday' },
    { short: 'Thu', long: 'Thursday' },
    { short: 'Fri', long: 'Friday' },
    { short: 'Sat', long: 'Saturday' }
  ];

  /**
   * A look up table that can be used to get month information from a month index.
   */
  window.GT.monthLookUp = [
    { short: 'Jan', long: 'January' },
    { short: 'Feb', long: 'Febuary' },
    { short: 'Mar', long: 'March' },
    { short: 'Apr', long: 'April' },
    { short: 'May', long: 'May' },
    { short: 'Jun', long: 'June' },
    { short: 'Jul', long: 'July' },
    { short: 'Aug', long: 'August' },
    { short: 'Sep', long: 'September' },
    { short: 'Oct', long: 'October' },
    { short: 'Nov', long: 'November' },
    { short: 'Dec', long: 'December' }
  ];

  /**
   * Compute the css font on the given element.
   *
   * @param {HTMLElement} el - The element to compute the font of
   * @param {CSSStyleDeclaration} [style] - the style of the element
   * @returns {String} - The css font
   */
  window.GT.computeFont = function(el, style) {
    if (!style) {
      style = getComputedStyle(el);   // compute the style
    }
    var font = style.font;            // get the font
    if (font === '') {
      font =
        style.fontStyle + ' ' +
        style.fontVariant + ' ' +
        style.fontWeight + ' ' +
        style.fontSize + ' / ' +
        style.lineHeight + ' ' +
        style.fontFamily;
    }
    return font;
  };

  /**
   * Compute the width of the given text of given font in pixels.
   *
   * @param {String} text The text to be rendered.
   * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
   * @returns {Number} - The size in pixels
   */
  window.GT.getTextWidth = function(text, font) {
      // re-use canvas object for better performance
      var canvas = window.GT._getTextWidthCanvas || (window.GT._getTextWidthCanvas = document.createElement('canvas'));
      var context = canvas.getContext('2d');
      context.font = font;
      var metrics = context.measureText(text);
      return metrics.width;
  };

  /**
   * When the field is blurred, set the invalid property to false if the field's value if empty.
   *
   * @param {Event} e
   */
  window.GT.onFieldBlur = function(e) {
    if (e.target.value === '' || e.target.value === undefined || e.target.value === null) {
      e.target.invalid = false;
    }
  };
}
