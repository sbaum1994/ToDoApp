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

	__webpack_require__(/*! /home/originate/TO-DO/to_do_app/frontend/flux/actions.coffee */1);
	__webpack_require__(/*! /home/originate/TO-DO/to_do_app/frontend/flux/stores.coffee */2);
	module.exports = __webpack_require__(/*! /home/originate/TO-DO/to_do_app/frontend/to_do_app.coffee */3);


/***/ },
/* 1 */
/*!**************************************!*\
  !*** ./frontend/flux/actions.coffee ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	defineActions('Items', {
	  addTask: function(item) {
	    return this.stores.Items.addTask(item);
	  },
	  select: function(index) {
	    return this.stores.Items.select(index);
	  },
	  removeSelected: function() {
	    return this.stores.Items.removeSelected();
	  }
	});


/***/ },
/* 2 */
/*!*************************************!*\
  !*** ./frontend/flux/stores.coffee ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	defineStore('Items', {
	  items: Immutable.List(),
	  addTask: function(item) {
	    item = [item, 0];
	    return this.items = this.items.push(item);
	  },
	  select: function(index) {
	    var item;
	    item = this.items.get(index);
	    return this.items = this.items.set(index, [item[0], 1]);
	  },
	  removeSelected: function() {
	    return this.items = this.items.filter((function(_this) {
	      return function(item) {
	        return item[1] === 0;
	      };
	    })(this));
	  },
	  "export": function() {
	    return {
	      items: this.items
	    };
	  }
	});


/***/ },
/* 3 */
/*!***********************************!*\
  !*** ./frontend/to_do_app.coffee ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	defineComponent({
	  watchStorePaths: function() {
	    return {
	      listData: ['Items', 'items']
	    };
	  },
	  getInitialState: function() {
	    return {
	      listData: Immutable.List()
	    };
	  },
	  render: function(reactDom) {
	    var div;
	    div = reactDom.div;
	    return div({}, div({
	      className: 'mainapp'
	    }, this._renderToDoList(reactDom), this._renderInput(reactDom)));
	  },
	  _renderInput: function(arg) {
	    var button, div, form, input;
	    div = arg.div, form = arg.form, input = arg.input, button = arg.button;
	    return div({
	      className: 'input-form-container'
	    }, this.inputForm());
	  },
	  _renderToDoList: function(arg) {
	    var div;
	    div = arg.div;
	    return div({
	      className: 'items-list-container'
	    }, this.tableList({
	      items: this.state.listData
	    }));
	  }
	});


/***/ }
/******/ ]);