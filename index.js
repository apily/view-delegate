/**
 * Component dependencies
 */

var delegate = require('element-delegate');

/**
 * Expose plugin
 */

module.exports = function (view) {
  
  var element = view.element;
  
  element
    .use(delegate);

  /**
   * delegate
   *
   * @param {String} event event
   * @param {String} method method
   * @return {view} this for chaining
   * @api public
   */

  view.prototype.delegate = function (event, method) {
    var bindings = this.delegate.bindings;
    var handler = this.el.delegate(event, this[method]);
    bindings[event] = bindings[event] || {};
    bindings[event][method] = handler;
    return this;
  };

  /**
   * bindings
   */

  view.prototype.delegate.bindings = {};

  /**
   * delegate
   *
   * @param {String} event event
   * @param {String} method method
   * @return {view} this for chaining
   * @api public
   */

  view.prototype.undelegate = function (event, method) {
    var bindings = this.delegate.bindings;
    var handler = bindings[event][method];
    this.el.undelegate(event, handler);
    return this;
  };

  return view;
};