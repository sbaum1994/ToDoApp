/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /home/originate/TO-DO/to_do_app/subcomponents/table_list/frontend/table_list.coffee */1);


/***/ },
/* 1 */
/*!*************************************************************!*\
  !*** ./subcomponents/table_list/frontend/table_list.coffee ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	defineComponent({
	  propTypes: {
	    items: React.PropTypes.instanceOf(Immutable.List)
	  },
	  render: function(arg) {
	    var div, h2, input, label, li, ul;
	    div = arg.div, input = arg.input, label = arg.label, h2 = arg.h2, li = arg.li, ul = arg.ul;
	    return div({
	      className: 'items-list'
	    }, h2({}, 'To Do:'), ul({
	      className: 'items'
	    }, this.props.items.map((function(_this) {
	      return function(item, index) {
	        var key;
	        key = index;
	        return li({
	          key: index,
	          className: 'checkbox'
	        }, input(_this._checkboxProps(key, index, item[1])), label({
	          htmlFor: key
	        }, item[0]));
	      };
	    })(this))));
	  },
	  _checkboxProps: function(key, index, toggled) {
	    return {
	      key: key,
	      className: key,
	      checked: toggled,
	      id: key,
	      name: key,
	      type: 'checkbox',
	      value: index,
	      onChange: this._onChange
	    };
	  },
	  _onChange: function(e) {
	    var target;
	    target = e.target || e.srcElement;
	    return this._onSelect(target.value);
	  },
	  _onSelect: function(item) {
	    return this.dispatch('Items.select', item);
	  }
	});


/***/ }
/******/ ]);