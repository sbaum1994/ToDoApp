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

	module.exports = __webpack_require__(/*! /home/originate/TO-DO/to_do_app/subcomponents/input_form/frontend/input_form.coffee */1);


/***/ },
/* 1 */
/*!*************************************************************!*\
  !*** ./subcomponents/input_form/frontend/input_form.coffee ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	defineComponent({
	  getDefaultProps: function() {
	    return {
	      submission: ''
	    };
	  },
	  _handleSubmit: function(e) {
	    var submission;
	    submission = React.findDOMNode(this.refs.text).value.trim();
	    e.preventDefault();
	    return this.dispatch('Items.addTask', submission);
	  },
	  _handleRemove: function(e) {
	    e.preventDefault();
	    return this.dispatch('Items.removeSelected');
	  },
	  render: function(arg) {
	    var br, button, div, form, input;
	    div = arg.div, br = arg.br, form = arg.form, input = arg.input, button = arg.button;
	    return div({
	      className: 'input-form'
	    }, div({
	      className: 'submit-task'
	    }, form({
	      onSubmit: this._handleSubmit
	    }, div({
	      className: 'submit-task-input'
	    }, input({
	      type: 'text',
	      ref: 'text'
	    })), div({
	      className: 'submit-button'
	    }, input({
	      type: 'submit',
	      value: 'Submit Task'
	    })))), div({
	      className: 'remove-task'
	    }, form({
	      onClick: this._handleRemove
	    }, input({
	      type: 'button',
	      value: 'Remove Tasks'
	    }))));
	  }
	});


/***/ }
/******/ ]);