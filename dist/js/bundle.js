/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/prettier/standalone.js":
/*!*********************************************!*\
  !*** ./node_modules/prettier/standalone.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}function t(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var n="Prettier is an opinionated code formatter",r="./bin/prettier.js",u={node:">=10.13.0"},o=["index.js","standalone.js","src","bin"],a={"@angular/compiler":"10.0.12","@babel/code-frame":"7.10.4","@babel/parser":"7.11.2","@glimmer/syntax":"0.59.0","@iarna/toml":"2.2.5","@typescript-eslint/typescript-estree":"3.10.0","angular-estree-parser":"2.2.0","angular-html-parser":"1.7.1",camelcase:"6.0.0",chalk:"4.1.0","ci-info":"watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540","cjk-regex":"2.0.0",cosmiconfig:"7.0.0",dashify:"2.0.0",diff:"4.0.2",editorconfig:"0.15.3","editorconfig-to-prettier":"0.1.1","escape-string-regexp":"4.0.0",esutils:"2.0.3","fast-glob":"3.2.4","fast-json-stable-stringify":"2.1.0","find-parent-dir":"0.3.0","flow-parser":"0.132.0","get-stream":"6.0.0",globby:"11.0.1",graphql:"15.3.0","html-element-attributes":"2.2.1","html-styles":"1.0.0","html-tag-names":"1.1.5","html-void-elements":"1.0.5",ignore:"4.0.6","jest-docblock":"26.0.0",json5:"2.1.3",leven:"3.1.0","lines-and-columns":"1.1.6","linguist-languages":"7.10.0",lodash:"4.17.20",mem:"6.1.0",minimatch:"3.0.4",minimist:"1.2.5","n-readlines":"1.0.0",outdent:"0.7.1","parse-srcset":"ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee","please-upgrade-node":"3.2.0","postcss-less":"3.1.4","postcss-media-query-parser":"0.2.3","postcss-scss":"2.1.1","postcss-selector-parser":"2.2.3","postcss-values-parser":"2.0.1","regexp-util":"1.2.2","remark-footnotes":"2.0.0","remark-math":"1.0.6","remark-parse":"8.0.3",resolve:"1.17.0",semver:"7.3.2","string-width":"4.2.0",typescript:"4.0.2","unicode-regex":"3.0.0",unified:"9.2.0",vnopts:"1.0.2","yaml-unist-parser":"1.3.1"},i={"@babel/core":"7.11.4","@babel/preset-env":"7.11.0","@babel/types":"7.11.0","@glimmer/reference":"0.59.0","@rollup/plugin-alias":"3.1.1","@rollup/plugin-babel":"5.2.0","@rollup/plugin-commonjs":"14.0.0","@rollup/plugin-json":"4.1.0","@rollup/plugin-node-resolve":"9.0.0","@rollup/plugin-replace":"2.3.3","@types/estree":"0.0.45","@types/node":"14.6.0","@typescript-eslint/types":"3.10.0","babel-loader":"8.1.0",benchmark:"2.1.4","builtin-modules":"3.1.0","cross-env":"7.0.2",cspell:"4.1.0",eslint:"7.7.0","eslint-config-prettier":"6.11.0","eslint-formatter-friendly":"7.0.0","eslint-plugin-import":"2.22.0","eslint-plugin-jest":"23.20.0","eslint-plugin-prettier-internal-rules":"file:scripts/tools/eslint-plugin-prettier-internal-rules","eslint-plugin-react":"7.20.6","eslint-plugin-unicorn":"21.0.0",execa:"4.0.3",jest:"26.4.2","jest-snapshot-serializer-ansi":"1.0.0","jest-snapshot-serializer-raw":"1.1.0","jest-watch-typeahead":"0.6.0","npm-run-all":"4.1.5",prettier:"2.1.1",rimraf:"3.0.2",rollup:"2.26.5","rollup-plugin-node-globals":"1.4.0","rollup-plugin-terser":"7.0.0",shelljs:"0.8.4","snapshot-diff":"0.8.1","strip-ansi":"6.0.0","synchronous-promise":"2.0.13",tempy:"0.6.0","terser-webpack-plugin":"4.1.0",webpack:"4.44.1"},s={prepublishOnly:'echo "Error: must publish from dist/" && exit 1',"prepare-release":"yarn && yarn build && yarn test:dist",test:"jest","test:dev-package":"cross-env INSTALL_PACKAGE=1 jest","test:dist":"cross-env NODE_ENV=production jest","test:dist-standalone":"cross-env NODE_ENV=production TEST_STANDALONE=1 jest","test:integration":"jest tests_integration","perf:repeat":"yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null","perf:repeat-inspect":"yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null","perf:benchmark":"yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",lint:"run-p lint:*","lint:typecheck":"tsc","lint:eslint":"cross-env EFF_NO_LINK_RULES=true eslint . --format friendly","lint:changelog":"node ./scripts/lint-changelog.js","lint:prettier":'prettier . "!test*" --check',"lint:dist":'eslint --no-eslintrc --no-ignore --env=es6,browser --parser-options=ecmaVersion:2016 "dist/!(bin-prettier|index|third-party).js"',"lint:spellcheck":'cspell "**/*" ".github/**/*"',"lint:deps":"node ./scripts/check-deps.js",fix:"run-s fix:eslint fix:prettier","fix:eslint":"yarn lint:eslint --fix","fix:prettier":"yarn lint:prettier --write",build:"node ./scripts/build/build.js","build-docs":"node ./scripts/build-docs.js"},l={name:"prettier",version:"2.1.2",description:n,bin:r,repository:"prettier/prettier",homepage:"https://prettier.io",author:"James Long",license:"MIT",main:"./index.js",browser:"./standalone.js",unpkg:"./standalone.js",engines:u,files:o,dependencies:a,devDependencies:i,scripts:s},c=Object.freeze({__proto__:null,name:"prettier",version:"2.1.2",description:n,bin:r,repository:"prettier/prettier",homepage:"https://prettier.io",author:"James Long",license:"MIT",main:"./index.js",browser:"./standalone.js",unpkg:"./standalone.js",engines:u,files:o,dependencies:a,devDependencies:i,scripts:s,default:l});function p(){}function d(e,t,n,r,u){for(var o=0,a=t.length,i=0,s=0;o<a;o++){var l=t[o];if(l.removed){if(l.value=e.join(r.slice(s,s+l.count)),s+=l.count,o&&t[o-1].added){var c=t[o-1];t[o-1]=t[o],t[o]=c}}else{if(!l.added&&u){var p=n.slice(i,i+l.count);p=p.map((function(e,t){var n=r[s+t];return n.length>e.length?n:e})),l.value=e.join(p)}else l.value=e.join(n.slice(i,i+l.count));i+=l.count,l.added||(s+=l.count)}}var d=t[a-1];return a>1&&"string"==typeof d.value&&(d.added||d.removed)&&e.equals("",d.value)&&(t[a-2].value+=d.value,t.pop()),t}function f(e){return{newPos:e.newPos,components:e.components.slice(0)}}p.prototype={diff:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.callback;"function"==typeof n&&(r=n,n={}),this.options=n;var u=this;function o(e){return r?(setTimeout((function(){r(void 0,e)}),0),!0):e}e=this.castInput(e),t=this.castInput(t),e=this.removeEmpty(this.tokenize(e));var a=(t=this.removeEmpty(this.tokenize(t))).length,i=e.length,s=1,l=a+i,c=[{newPos:-1,components:[]}],p=this.extractCommon(c[0],t,e,0);if(c[0].newPos+1>=a&&p+1>=i)return o([{value:this.join(t),count:t.length}]);function h(){for(var n=-1*s;n<=s;n+=2){var r=void 0,l=c[n-1],p=c[n+1],h=(p?p.newPos:0)-n;l&&(c[n-1]=void 0);var m=l&&l.newPos+1<a,g=p&&0<=h&&h<i;if(m||g){if(!m||g&&l.newPos<p.newPos?(r=f(p),u.pushComponent(r.components,void 0,!0)):((r=l).newPos++,u.pushComponent(r.components,!0,void 0)),h=u.extractCommon(r,t,e,n),r.newPos+1>=a&&h+1>=i)return o(d(u,r.components,t,e,u.useLongestToken));c[n]=r}else c[n]=void 0}s++}if(r)!function e(){setTimeout((function(){if(s>l)return r();h()||e()}),0)}();else for(;s<=l;){var m=h();if(m)return m}},pushComponent:function(e,t,n){var r=e[e.length-1];r&&r.added===t&&r.removed===n?e[e.length-1]={count:r.count+1,added:t,removed:n}:e.push({count:1,added:t,removed:n})},extractCommon:function(e,t,n,r){for(var u=t.length,o=n.length,a=e.newPos,i=a-r,s=0;a+1<u&&i+1<o&&this.equals(t[a+1],n[i+1]);)a++,i++,s++;return s&&e.components.push({count:s}),e.newPos=a,i},equals:function(e,t){return this.options.comparator?this.options.comparator(e,t):e===t||this.options.ignoreCase&&e.toLowerCase()===t.toLowerCase()},removeEmpty:function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};var h=new p;function m(e,t){if("function"==typeof e)t.callback=e;else if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var g=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,D=/\S/,y=new p;y.equals=function(e,t){return this.options.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e===t||this.options.ignoreWhitespace&&!D.test(e)&&!D.test(t)},y.tokenize=function(e){for(var t=e.split(/(\s+|[()[\]{}'"]|\b)/),n=0;n<t.length-1;n++)!t[n+1]&&t[n+2]&&g.test(t[n])&&g.test(t[n+2])&&(t[n]+=t[n+2],t.splice(n+1,2),n--);return t};var E=new p;function C(e,t,n){return E.diff(e,t,n)}E.tokenize=function(e){var t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var r=0;r<n.length;r++){var u=n[r];r%2&&!this.options.newlineIsToken?t[t.length-1]+=u:(this.options.ignoreWhitespace&&(u=u.trim()),t.push(u))}return t};var b=new p;b.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};var A=new p;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}A.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};var x=Object.prototype.toString,S=new p;function w(e,t,n,r,u){var o,a;for(t=t||[],n=n||[],r&&(e=r(u,e)),o=0;o<t.length;o+=1)if(t[o]===e)return n[o];if("[object Array]"===x.call(e)){for(t.push(e),a=new Array(e.length),n.push(a),o=0;o<e.length;o+=1)a[o]=w(e[o],t,n,r,u);return t.pop(),n.pop(),a}if(e&&e.toJSON&&(e=e.toJSON()),"object"===v(e)&&null!==e){t.push(e),a={},n.push(a);var i,s=[];for(i in e)e.hasOwnProperty(i)&&s.push(i);for(s.sort(),o=0;o<s.length;o+=1)a[i=s[o]]=w(e[i],t,n,r,i);t.pop(),n.pop()}else a=e;return a}S.useLongestToken=!0,S.tokenize=E.tokenize,S.castInput=function(e){var t=this.options,n=t.undefinedReplacement,r=t.stringifyReplacer,u=void 0===r?function(e,t){return void 0===t?n:t}:r;return"string"==typeof e?e:JSON.stringify(w(e,null,null,u),u,"  ")},S.equals=function(e,t){return p.prototype.equals.call(S,e.replace(/,([\r\n])/g,"$1"),t.replace(/,([\r\n])/g,"$1"))};var B=new p;function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.split(/\r\n|[\n\v\f\r\x85]/),r=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],u=[],o=0;function a(){var e={};for(u.push(e);o<n.length;){var r=n[o];if(/^(\-\-\-|\+\+\+|@@)\s/.test(r))break;var a=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);a&&(e.index=a[1]),o++}for(i(e),i(e),e.hunks=[];o<n.length;){var l=n[o];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(l))break;if(/^@@/.test(l))e.hunks.push(s());else{if(l&&t.strict)throw new Error("Unknown line "+(o+1)+" "+JSON.stringify(l));o++}}}function i(e){var t=/^(---|\+\+\+)\s+(.*)$/.exec(n[o]);if(t){var r="---"===t[1]?"old":"new",u=t[2].split("\t",2),a=u[0].replace(/\\\\/g,"\\");/^".*"$/.test(a)&&(a=a.substr(1,a.length-2)),e[r+"FileName"]=a,e[r+"Header"]=(u[1]||"").trim(),o++}}function s(){for(var e=o,u=n[o++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),a={oldStart:+u[1],oldLines:+u[2]||1,newStart:+u[3],newLines:+u[4]||1,lines:[],linedelimiters:[]},i=0,s=0;o<n.length&&!(0===n[o].indexOf("--- ")&&o+2<n.length&&0===n[o+1].indexOf("+++ ")&&0===n[o+2].indexOf("@@"));o++){var l=0==n[o].length&&o!=n.length-1?" ":n[o][0];if("+"!==l&&"-"!==l&&" "!==l&&"\\"!==l)break;a.lines.push(n[o]),a.linedelimiters.push(r[o]||"\n"),"+"===l?i++:"-"===l?s++:" "===l&&(i++,s++)}if(i||1!==a.newLines||(a.newLines=0),s||1!==a.oldLines||(a.oldLines=0),t.strict){if(i!==a.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(s!==a.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return a}for(;o<n.length;)a();return u}function k(e,t,n){var r=!0,u=!1,o=!1,a=1;return function i(){if(r&&!o){if(u?a++:r=!1,e+a<=n)return a;o=!0}if(!u)return o||(r=!0),t<=e-a?-a++:(u=!0,i())}}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t&&(t=T(t)),Array.isArray(t)){if(t.length>1)throw new Error("applyPatch only works with a single input.");t=t[0]}var r,u,o=e.split(/\r\n|[\n\v\f\r\x85]/),a=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],i=t.hunks,s=n.compareLine||function(e,t,n,r){return t===r},l=0,c=n.fuzzFactor||0,p=0,d=0;function f(e,t){for(var n=0;n<e.lines.length;n++){var r=e.lines[n],u=r.length>0?r[0]:" ",a=r.length>0?r.substr(1):r;if(" "===u||"-"===u){if(!s(t+1,o[t],u,a)&&++l>c)return!1;t++}}return!0}for(var h=0;h<i.length;h++){for(var m=i[h],g=o.length-m.oldLines,D=0,y=d+m.oldStart-1,E=k(y,p,g);void 0!==D;D=E())if(f(m,y+D)){m.offset=d+=D;break}if(void 0===D)return!1;p=m.offset+m.oldStart+m.oldLines}for(var C=0,b=0;b<i.length;b++){var A=i[b],v=A.oldStart+A.offset+C-1;C+=A.newLines-A.oldLines,v<0&&(v=0);for(var F=0;F<A.lines.length;F++){var x=A.lines[F],S=x.length>0?x[0]:" ",w=x.length>0?x.substr(1):x,B=A.linedelimiters[F];if(" "===S)v++;else if("-"===S)o.splice(v,1),a.splice(v,1);else if("+"===S)o.splice(v,0,w),a.splice(v,0,B),v++;else if("\\"===S){var N=A.lines[F-1]?A.lines[F-1][0]:null;"+"===N?r=!0:"-"===N&&(u=!0)}}}if(r)for(;!o[o.length-1];)o.pop(),a.pop();else u&&(o.push(""),a.push("\n"));for(var O=0;O<o.length-1;O++)o[O]=o[O]+a[O];return o.join("")}function O(e,t,n,r,u,o,a){a||(a={}),void 0===a.context&&(a.context=4);var i=C(n,r,a);function s(e){return e.map((function(e){return" "+e}))}i.push({value:"",lines:[]});for(var l=[],c=0,p=0,d=[],f=1,h=1,m=function(e){var t=i[e],u=t.lines||t.value.replace(/\n$/,"").split("\n");if(t.lines=u,t.added||t.removed){var o;if(!c){var m=i[e-1];c=f,p=h,m&&(d=a.context>0?s(m.lines.slice(-a.context)):[],c-=d.length,p-=d.length)}(o=d).push.apply(o,F(u.map((function(e){return(t.added?"+":"-")+e})))),t.added?h+=u.length:f+=u.length}else{if(c)if(u.length<=2*a.context&&e<i.length-2){var g;(g=d).push.apply(g,F(s(u)))}else{var D,y=Math.min(u.length,a.context);(D=d).push.apply(D,F(s(u.slice(0,y))));var E={oldStart:c,oldLines:f-c+y,newStart:p,newLines:h-p+y,lines:d};if(e>=i.length-2&&u.length<=a.context){var C=/\n$/.test(n),b=/\n$/.test(r),A=0==u.length&&d.length>E.oldLines;!C&&A&&d.splice(E.oldLines,0,"\\ No newline at end of file"),(C||A)&&b||d.push("\\ No newline at end of file")}l.push(E),c=0,p=0,d=[]}f+=u.length,h+=u.length}},g=0;g<i.length;g++)m(g);return{oldFileName:e,newFileName:t,oldHeader:u,newHeader:o,hunks:l}}function P(e,t,n,r,u,o,a){var i=O(e,t,n,r,u,o,a),s=[];e==t&&s.push("Index: "+e),s.push("==================================================================="),s.push("--- "+i.oldFileName+(void 0===i.oldHeader?"":"\t"+i.oldHeader)),s.push("+++ "+i.newFileName+(void 0===i.newHeader?"":"\t"+i.newHeader));for(var l=0;l<i.hunks.length;l++){var c=i.hunks[l];s.push("@@ -"+c.oldStart+","+c.oldLines+" +"+c.newStart+","+c.newLines+" @@"),s.push.apply(s,c.lines)}return s.join("\n")+"\n"}function _(e,t){if(t.length>e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function I(e){var t=function e(t){var n=0,r=0;return t.forEach((function(t){if("string"!=typeof t){var u=e(t.mine),o=e(t.theirs);void 0!==n&&(u.oldLines===o.oldLines?n+=u.oldLines:n=void 0),void 0!==r&&(u.newLines===o.newLines?r+=u.newLines:r=void 0)}else void 0===r||"+"!==t[0]&&" "!==t[0]||r++,void 0===n||"-"!==t[0]&&" "!==t[0]||n++})),{oldLines:n,newLines:r}}(e.lines),n=t.oldLines,r=t.newLines;void 0!==n?e.oldLines=n:delete e.oldLines,void 0!==r?e.newLines=r:delete e.newLines}function j(e,t){if("string"==typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return T(e)[0];if(!t)throw new Error("Must provide a base reference or pass in a patch");return O(void 0,void 0,t,e)}return e}function M(e){return e.newFileName&&e.newFileName!==e.oldFileName}function L(e,t,n){return t===n?t:(e.conflict=!0,{mine:t,theirs:n})}function R(e,t){return e.oldStart<t.oldStart&&e.oldStart+e.oldLines<t.oldStart}function q(e,t){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+t,newLines:e.newLines,lines:e.lines}}function V(e,t,n,r,u){var o={offset:t,lines:n,index:0},a={offset:r,lines:u,index:0};for(z(e,o,a),z(e,a,o);o.index<o.lines.length&&a.index<a.lines.length;){var i=o.lines[o.index],s=a.lines[a.index];if("-"!==i[0]&&"+"!==i[0]||"-"!==s[0]&&"+"!==s[0])if("+"===i[0]&&" "===s[0]){var l;(l=e.lines).push.apply(l,F(G(o)))}else if("+"===s[0]&&" "===i[0]){var c;(c=e.lines).push.apply(c,F(G(a)))}else"-"===i[0]&&" "===s[0]?$(e,o,a):"-"===s[0]&&" "===i[0]?$(e,a,o,!0):i===s?(e.lines.push(i),o.index++,a.index++):U(e,G(o),G(a));else W(e,o,a)}J(e,o),J(e,a),I(e)}function W(e,t,n){var r=G(t),u=G(n);if(H(r)&&H(u)){var o,a;if(_(r,u)&&X(n,r,r.length-u.length))return void(o=e.lines).push.apply(o,F(r));if(_(u,r)&&X(t,u,u.length-r.length))return void(a=e.lines).push.apply(a,F(u))}else if(function(e,t){return e.length===t.length&&_(e,t)}(r,u)){var i;return void(i=e.lines).push.apply(i,F(r))}U(e,r,u)}function $(e,t,n,r){var u,o=G(t),a=function(e,t){var n=[],r=[],u=0,o=!1,a=!1;for(;u<t.length&&e.index<e.lines.length;){var i=e.lines[e.index],s=t[u];if("+"===s[0])break;if(o=o||" "!==i[0],r.push(s),u++,"+"===i[0])for(a=!0;"+"===i[0];)n.push(i),i=e.lines[++e.index];s.substr(1)===i.substr(1)?(n.push(i),e.index++):a=!0}"+"===(t[u]||"")[0]&&o&&(a=!0);if(a)return n;for(;u<t.length;)r.push(t[u++]);return{merged:r,changes:n}}(n,o);a.merged?(u=e.lines).push.apply(u,F(a.merged)):U(e,r?a:o,r?o:a)}function U(e,t,n){e.conflict=!0,e.lines.push({conflict:!0,mine:t,theirs:n})}function z(e,t,n){for(;t.offset<n.offset&&t.index<t.lines.length;){var r=t.lines[t.index++];e.lines.push(r),t.offset++}}function J(e,t){for(;t.index<t.lines.length;){var n=t.lines[t.index++];e.lines.push(n)}}function G(e){for(var t=[],n=e.lines[e.index][0];e.index<e.lines.length;){var r=e.lines[e.index];if("-"===n&&"+"===r[0]&&(n="+"),n!==r[0])break;t.push(r),e.index++}return t}function H(e){return e.reduce((function(e,t){return e&&"-"===t[0]}),!0)}function X(e,t,n){for(var r=0;r<n;r++){var u=t[t.length-n+r].substr(1);if(e.lines[e.index+r]!==" "+u)return!1}return e.index+=n,!0}function Y(e){var t=e;return t=(t=(t=(t=t.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}B.tokenize=function(e){return e.slice()},B.join=B.removeEmpty=function(e){return e};var K=Object.freeze({__proto__:null,Diff:p,diffChars:function(e,t,n){return h.diff(e,t,n)},diffWords:function(e,t,n){return n=m(n,{ignoreWhitespace:!0}),y.diff(e,t,n)},diffWordsWithSpace:function(e,t,n){return y.diff(e,t,n)},diffLines:C,diffTrimmedLines:function(e,t,n){var r=m(n,{ignoreWhitespace:!0});return E.diff(e,t,r)},diffSentences:function(e,t,n){return b.diff(e,t,n)},diffCss:function(e,t,n){return A.diff(e,t,n)},diffJson:function(e,t,n){return S.diff(e,t,n)},diffArrays:function(e,t,n){return B.diff(e,t,n)},structuredPatch:O,createTwoFilesPatch:P,createPatch:function(e,t,n,r,u,o){return P(e,e,t,n,r,u,o)},applyPatch:N,applyPatches:function(e,t){"string"==typeof e&&(e=T(e));var n=0;!function r(){var u=e[n++];if(!u)return t.complete();t.loadFile(u,(function(e,n){if(e)return t.complete(e);var o=N(n,u,t);t.patched(u,o,(function(e){if(e)return t.complete(e);r()}))}))}()},parsePatch:T,merge:function(e,t,n){e=j(e,n),t=j(t,n);var r={};(e.index||t.index)&&(r.index=e.index||t.index),(e.newFileName||t.newFileName)&&(M(e)?M(t)?(r.oldFileName=L(r,e.oldFileName,t.oldFileName),r.newFileName=L(r,e.newFileName,t.newFileName),r.oldHeader=L(r,e.oldHeader,t.oldHeader),r.newHeader=L(r,e.newHeader,t.newHeader)):(r.oldFileName=e.oldFileName,r.newFileName=e.newFileName,r.oldHeader=e.oldHeader,r.newHeader=e.newHeader):(r.oldFileName=t.oldFileName||e.oldFileName,r.newFileName=t.newFileName||e.newFileName,r.oldHeader=t.oldHeader||e.oldHeader,r.newHeader=t.newHeader||e.newHeader)),r.hunks=[];for(var u=0,o=0,a=0,i=0;u<e.hunks.length||o<t.hunks.length;){var s=e.hunks[u]||{oldStart:1/0},l=t.hunks[o]||{oldStart:1/0};if(R(s,l))r.hunks.push(q(s,a)),u++,i+=s.newLines-s.oldLines;else if(R(l,s))r.hunks.push(q(l,i)),o++,a+=l.newLines-l.oldLines;else{var c={oldStart:Math.min(s.oldStart,l.oldStart),oldLines:0,newStart:Math.min(s.newStart+a,l.oldStart+i),newLines:0,lines:[]};V(c,s.oldStart,s.lines,l.oldStart,l.lines),o++,u++,r.hunks.push(c)}}return r},convertChangesToDMP:function(e){for(var t,n,r=[],u=0;u<e.length;u++)n=(t=e[u]).added?1:t.removed?-1:0,r.push([n,t.value]);return r},convertChangesToXML:function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];r.added?t.push("<ins>"):r.removed&&t.push("<del>"),t.push(Y(r.value)),r.added?t.push("</ins>"):r.removed&&t.push("</del>")}return t.join("")},canonicalize:w});function Q(e){return{type:"concat",parts:e}}function Z(e){return{type:"indent",contents:e}}function ee(e,t){return{type:"align",contents:t,n:e}}function te(e,t){return{type:"group",id:(t=t||{}).id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}const ne={type:"break-parent"},re=Q([{type:"line",hard:!0},ne]),ue=Q([{type:"line",hard:!0,literal:!0},ne]);var oe={concat:Q,join:function(e,t){const n=[];for(let r=0;r<t.length;r++)0!==r&&n.push(e),n.push(t[r]);return Q(n)},line:{type:"line"},softline:{type:"line",soft:!0},hardline:re,literalline:ue,group:te,conditionalGroup:function(e,t){return te(e[0],Object.assign({},t,{expandedStates:e}))},fill:function(e){return{type:"fill",parts:e}},lineSuffix:function(e){return{type:"line-suffix",contents:e}},lineSuffixBoundary:{type:"line-suffix-boundary"},cursor:{type:"cursor",placeholder:Symbol("cursor")},breakParent:ne,ifBreak:function(e,t,n){return{type:"if-break",breakContents:e,flatContents:t,groupId:(n=n||{}).groupId}},trim:{type:"trim"},indent:Z,align:ee,addAlignmentToDoc:function(e,t,n){let r=e;if(t>0){for(let e=0;e<Math.floor(t/n);++e)r=Z(r);r=ee(t%n,r),r=ee(-1/0,r)}return r},markAsRoot:function(e){return ee({type:"root"},e)},dedentToRoot:function(e){return ee(-1/0,e)},dedent:function(e){return ee(-1,e)}},ae=e=>"string"==typeof e?e.replace((({onlyFirst:e=!1}={})=>{const t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e?void 0:"g")})(),""):e;const ie=e=>!Number.isNaN(e)&&(e>=4352&&(e<=4447||9001===e||9002===e||11904<=e&&e<=12871&&12351!==e||12880<=e&&e<=19903||19968<=e&&e<=42182||43360<=e&&e<=43388||44032<=e&&e<=55203||63744<=e&&e<=64255||65040<=e&&e<=65049||65072<=e&&e<=65131||65281<=e&&e<=65376||65504<=e&&e<=65510||110592<=e&&e<=110593||127488<=e&&e<=127569||131072<=e&&e<=262141));var se=ie,le=ie;se.default=le;const ce=e=>{if("string"!=typeof(e=e.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,"  "))||0===e.length)return 0;e=ae(e);let t=0;for(let n=0;n<e.length;n++){const r=e.codePointAt(n);r<=31||r>=127&&r<=159||(r>=768&&r<=879||(r>65535&&n++,t+=se(r)?2:1))}return t};var pe=ce,de=ce;pe.default=de;var fe=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")},he=e=>e[e.length-1],me="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ge(){throw new Error("setTimeout has not been defined")}function De(){throw new Error("clearTimeout has not been defined")}var ye=ge,Ee=De;function Ce(e){if(ye===setTimeout)return setTimeout(e,0);if((ye===ge||!ye)&&setTimeout)return ye=setTimeout,setTimeout(e,0);try{return ye(e,0)}catch(t){try{return ye.call(null,e,0)}catch(t){return ye.call(this,e,0)}}}"function"==typeof me.setTimeout&&(ye=setTimeout),"function"==typeof me.clearTimeout&&(Ee=clearTimeout);var be,Ae=[],ve=!1,Fe=-1;function xe(){ve&&be&&(ve=!1,be.length?Ae=be.concat(Ae):Fe=-1,Ae.length&&Se())}function Se(){if(!ve){var e=Ce(xe);ve=!0;for(var t=Ae.length;t;){for(be=Ae,Ae=[];++Fe<t;)be&&be[Fe].run();Fe=-1,t=Ae.length}be=null,ve=!1,function(e){if(Ee===clearTimeout)return clearTimeout(e);if((Ee===De||!Ee)&&clearTimeout)return Ee=clearTimeout,clearTimeout(e);try{Ee(e)}catch(t){try{return Ee.call(null,e)}catch(t){return Ee.call(this,e)}}}(e)}}function we(e,t){this.fun=e,this.array=t}we.prototype.run=function(){this.fun.apply(null,this.array)};function Be(){}var Te=Be,ke=Be,Ne=Be,Oe=Be,Pe=Be,_e=Be,Ie=Be;var je=me.performance||{},Me=je.now||je.mozNow||je.msNow||je.oNow||je.webkitNow||function(){return(new Date).getTime()};var Le=new Date;var Re={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Ae.push(new we(e,t)),1!==Ae.length||ve||Ce(Se)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:Te,addListener:ke,once:Ne,off:Oe,removeListener:Pe,removeAllListeners:_e,emit:Ie,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*Me.call(je),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-Le)/1e3}};var qe="object"==typeof Re&&Re.env&&Re.env.NODE_DEBUG&&/\bsemver\b/i.test(Re.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};var Ve={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,MAX_SAFE_COMPONENT_LENGTH:16},We="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $e(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}function Ue(e){return e&&e.default||e}var ze=$e((function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:n}=Ve,r=(t=e.exports={}).re=[],u=t.src=[],o=t.t={};let a=0;const i=(e,t,n)=>{const i=a++;qe(i,t),o[e]=i,u[i]=t,r[i]=new RegExp(t,n?"g":void 0)};i("NUMERICIDENTIFIER","0|[1-9]\\d*"),i("NUMERICIDENTIFIERLOOSE","[0-9]+"),i("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),i("MAINVERSION","(".concat(u[o.NUMERICIDENTIFIER],")\\.")+"(".concat(u[o.NUMERICIDENTIFIER],")\\.")+"(".concat(u[o.NUMERICIDENTIFIER],")")),i("MAINVERSIONLOOSE","(".concat(u[o.NUMERICIDENTIFIERLOOSE],")\\.")+"(".concat(u[o.NUMERICIDENTIFIERLOOSE],")\\.")+"(".concat(u[o.NUMERICIDENTIFIERLOOSE],")")),i("PRERELEASEIDENTIFIER","(?:".concat(u[o.NUMERICIDENTIFIER],"|").concat(u[o.NONNUMERICIDENTIFIER],")")),i("PRERELEASEIDENTIFIERLOOSE","(?:".concat(u[o.NUMERICIDENTIFIERLOOSE],"|").concat(u[o.NONNUMERICIDENTIFIER],")")),i("PRERELEASE","(?:-(".concat(u[o.PRERELEASEIDENTIFIER],"(?:\\.").concat(u[o.PRERELEASEIDENTIFIER],")*))")),i("PRERELEASELOOSE","(?:-?(".concat(u[o.PRERELEASEIDENTIFIERLOOSE],"(?:\\.").concat(u[o.PRERELEASEIDENTIFIERLOOSE],")*))")),i("BUILDIDENTIFIER","[0-9A-Za-z-]+"),i("BUILD","(?:\\+(".concat(u[o.BUILDIDENTIFIER],"(?:\\.").concat(u[o.BUILDIDENTIFIER],")*))")),i("FULLPLAIN","v?".concat(u[o.MAINVERSION]).concat(u[o.PRERELEASE],"?").concat(u[o.BUILD],"?")),i("FULL","^".concat(u[o.FULLPLAIN],"$")),i("LOOSEPLAIN","[v=\\s]*".concat(u[o.MAINVERSIONLOOSE]).concat(u[o.PRERELEASELOOSE],"?").concat(u[o.BUILD],"?")),i("LOOSE","^".concat(u[o.LOOSEPLAIN],"$")),i("GTLT","((?:<|>)?=?)"),i("XRANGEIDENTIFIERLOOSE","".concat(u[o.NUMERICIDENTIFIERLOOSE],"|x|X|\\*")),i("XRANGEIDENTIFIER","".concat(u[o.NUMERICIDENTIFIER],"|x|X|\\*")),i("XRANGEPLAIN","[v=\\s]*(".concat(u[o.XRANGEIDENTIFIER],")")+"(?:\\.(".concat(u[o.XRANGEIDENTIFIER],")")+"(?:\\.(".concat(u[o.XRANGEIDENTIFIER],")")+"(?:".concat(u[o.PRERELEASE],")?").concat(u[o.BUILD],"?")+")?)?"),i("XRANGEPLAINLOOSE","[v=\\s]*(".concat(u[o.XRANGEIDENTIFIERLOOSE],")")+"(?:\\.(".concat(u[o.XRANGEIDENTIFIERLOOSE],")")+"(?:\\.(".concat(u[o.XRANGEIDENTIFIERLOOSE],")")+"(?:".concat(u[o.PRERELEASELOOSE],")?").concat(u[o.BUILD],"?")+")?)?"),i("XRANGE","^".concat(u[o.GTLT],"\\s*").concat(u[o.XRANGEPLAIN],"$")),i("XRANGELOOSE","^".concat(u[o.GTLT],"\\s*").concat(u[o.XRANGEPLAINLOOSE],"$")),i("COERCE","".concat("(^|[^\\d])(\\d{1,").concat(n,"})")+"(?:\\.(\\d{1,".concat(n,"}))?")+"(?:\\.(\\d{1,".concat(n,"}))?")+"(?:$|[^\\d])"),i("COERCERTL",u[o.COERCE],!0),i("LONETILDE","(?:~>?)"),i("TILDETRIM","(\\s*)".concat(u[o.LONETILDE],"\\s+"),!0),t.tildeTrimReplace="$1~",i("TILDE","^".concat(u[o.LONETILDE]).concat(u[o.XRANGEPLAIN],"$")),i("TILDELOOSE","^".concat(u[o.LONETILDE]).concat(u[o.XRANGEPLAINLOOSE],"$")),i("LONECARET","(?:\\^)"),i("CARETTRIM","(\\s*)".concat(u[o.LONECARET],"\\s+"),!0),t.caretTrimReplace="$1^",i("CARET","^".concat(u[o.LONECARET]).concat(u[o.XRANGEPLAIN],"$")),i("CARETLOOSE","^".concat(u[o.LONECARET]).concat(u[o.XRANGEPLAINLOOSE],"$")),i("COMPARATORLOOSE","^".concat(u[o.GTLT],"\\s*(").concat(u[o.LOOSEPLAIN],")$|^$")),i("COMPARATOR","^".concat(u[o.GTLT],"\\s*(").concat(u[o.FULLPLAIN],")$|^$")),i("COMPARATORTRIM","(\\s*)".concat(u[o.GTLT],"\\s*(").concat(u[o.LOOSEPLAIN],"|").concat(u[o.XRANGEPLAIN],")"),!0),t.comparatorTrimReplace="$1$2$3",i("HYPHENRANGE","^\\s*(".concat(u[o.XRANGEPLAIN],")")+"\\s+-\\s+"+"(".concat(u[o.XRANGEPLAIN],")")+"\\s*$"),i("HYPHENRANGELOOSE","^\\s*(".concat(u[o.XRANGEPLAINLOOSE],")")+"\\s+-\\s+"+"(".concat(u[o.XRANGEPLAINLOOSE],")")+"\\s*$"),i("STAR","(<|>)?=?\\s*\\*"),i("GTE0","^\\s*>=\\s*0.0.0\\s*$"),i("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")}));const Je=/^[0-9]+$/,Ge=(e,t)=>{const n=Je.test(e),r=Je.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1};var He={compareIdentifiers:Ge,rcompareIdentifiers:(e,t)=>Ge(t,e)};const{MAX_LENGTH:Xe,MAX_SAFE_INTEGER:Ye}=Ve,{re:Ke,t:Qe}=ze,{compareIdentifiers:Ze}=He;class et{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof et){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: ".concat(e));if(e.length>Xe)throw new TypeError("version is longer than ".concat(Xe," characters"));qe("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const n=e.trim().match(t.loose?Ke[Qe.LOOSE]:Ke[Qe.FULL]);if(!n)throw new TypeError("Invalid Version: ".concat(e));if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Ye||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ye||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ye||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<Ye)return t}return e}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version="".concat(this.major,".").concat(this.minor,".").concat(this.patch),this.prerelease.length&&(this.version+="-".concat(this.prerelease.join("."))),this.version}toString(){return this.version}compare(e){if(qe("SemVer.compare",this.version,this.options,e),!(e instanceof et)){if("string"==typeof e&&e===this.version)return 0;e=new et(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof et||(e=new et(e,this.options)),Ze(this.major,e.major)||Ze(this.minor,e.minor)||Ze(this.patch,e.patch)}comparePre(e){if(e instanceof et||(e=new et(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const n=this.prerelease[t],r=e.prerelease[t];if(qe("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===n)return-1;if(n!==r)return Ze(n,r)}while(++t)}compareBuild(e){e instanceof et||(e=new et(e,this.options));let t=0;do{const n=this.build[t],r=e.build[t];if(qe("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===n)return-1;if(n!==r)return Ze(n,r)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: ".concat(e))}return this.format(),this.raw=this.version,this}}var tt=et;var nt=(e,t,n)=>new tt(e,n).compare(new tt(t,n));var rt=(e,t,n)=>nt(e,t,n)<0;var ut=(e,t,n)=>nt(e,t,n)>=0,ot=$e((function(e,t){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}function r(){return"undefined"!=typeof WeakMap?new WeakMap:{add:n,delete:n,get:n,set:n,has:function(e){return!1}}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.prototype.hasOwnProperty,o=function(e,t){return u.call(e,t)};function a(e,t){for(var n in t)o(t,n)&&(e[n]=t[n]);return e}var i=/^[ \t]*(?:\r\n|\r|\n)/,s=/(?:\r\n|\r|\n)[ \t]*$/,l=/^(?:[\r\n]|$)/,c=/(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,p=/^[ \t]*[\r\n][ \t\r\n]*$/;function d(e,t,n){var r=0,u=e[0].match(c);u&&(r=u[1].length);var o=new RegExp("(\\r\\n|\\r|\\n).{0,"+r+"}","g");t&&(e=e.slice(1));var a=n.newline,l=n.trimLeadingNewline,p=n.trimTrailingNewline,d="string"==typeof a,f=e.length;return e.map((function(e,t){return e=e.replace(o,"$1"),0===t&&l&&(e=e.replace(i,"")),t===f-1&&p&&(e=e.replace(s,"")),d&&(e=e.replace(/\r\n|\n|\r/g,(function(e){return a}))),e}))}function f(e,t){for(var n="",r=0,u=e.length;r<u;r++)n+=e[r],r<u-1&&(n+=t[r]);return n}function h(e){return o(e,"raw")&&o(e,"length")}var m=function e(t){var n=r(),u=r();return a((function r(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];if(h(o)){var c=o,g=(i[0]===r||i[0]===m)&&p.test(c[0])&&l.test(c[1]),D=g?u:n,y=D.get(c);if(y||(y=d(c,g,t),D.set(c,y)),0===i.length)return y[0];var E=f(y,g?i.slice(1):i);return E}return e(a(a({},t),o||{}))}),{string:function(e){return d([e],!1,t)[0]}})}({trimLeadingNewline:!0,trimTrailingNewline:!0});t.outdent=m,t.default=m;try{e.exports=m,Object.defineProperty(m,"__esModule",{value:!0}),m.default=m,m.outdent=m}catch(e){}}));function at(){const e=t(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);return at=function(){return e},e}function it(){const e=t(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);return it=function(){return e},e}function st(){const e=t(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);return st=function(){return e},e}function lt(){const e=t(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);return lt=function(){return e},e}function ct(){const e=t(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);return ct=function(){return e},e}function pt(){const e=t(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);return pt=function(){return e},e}const{outdent:dt}=ot;var ft={CATEGORY_CONFIG:"Config",CATEGORY_EDITOR:"Editor",CATEGORY_FORMAT:"Format",CATEGORY_OTHER:"Other",CATEGORY_OUTPUT:"Output",CATEGORY_GLOBAL:"Global",CATEGORY_SPECIAL:"Special",options:{cursorOffset:{since:"1.4.0",category:"Special",type:"int",default:-1,range:{start:-1,end:1/0,step:1},description:dt(pt()),cliCategory:"Editor"},endOfLine:{since:"1.15.0",category:"Global",type:"choice",default:[{since:"1.15.0",value:"auto"},{since:"2.0.0",value:"lf"}],description:"Which end of line characters to apply.",choices:[{value:"lf",description:"Line Feed only (\\n), common on Linux and macOS as well as inside git repos"},{value:"crlf",description:"Carriage Return + Line Feed characters (\\r\\n), common on Windows"},{value:"cr",description:"Carriage Return character only (\\r), used very rarely"},{value:"auto",description:dt(ct())}]},filepath:{since:"1.4.0",category:"Special",type:"path",description:"Specify the input filepath. This will be used to do parser inference.",cliName:"stdin-filepath",cliCategory:"Other",cliDescription:"Path to the file to pretend that stdin comes from."},insertPragma:{since:"1.8.0",category:"Special",type:"boolean",default:!1,description:"Insert @format pragma into file's first docblock comment.",cliCategory:"Other"},parser:{since:"0.0.10",category:"Global",type:"choice",default:[{since:"0.0.10",value:"babylon"},{since:"1.13.0",value:void 0}],description:"Which parser to use.",exception:e=>"string"==typeof e||"function"==typeof e,choices:[{value:"flow",description:"Flow"},{value:"babel",since:"1.16.0",description:"JavaScript"},{value:"babel-flow",since:"1.16.0",description:"Flow"},{value:"babel-ts",since:"2.0.0",description:"TypeScript"},{value:"typescript",since:"1.4.0",description:"TypeScript"},{value:"css",since:"1.7.1",description:"CSS"},{value:"less",since:"1.7.1",description:"Less"},{value:"scss",since:"1.7.1",description:"SCSS"},{value:"json",since:"1.5.0",description:"JSON"},{value:"json5",since:"1.13.0",description:"JSON5"},{value:"json-stringify",since:"1.13.0",description:"JSON.stringify"},{value:"graphql",since:"1.5.0",description:"GraphQL"},{value:"markdown",since:"1.8.0",description:"Markdown"},{value:"mdx",since:"1.15.0",description:"MDX"},{value:"vue",since:"1.10.0",description:"Vue"},{value:"yaml",since:"1.14.0",description:"YAML"},{value:"glimmer",since:null,description:"Handlebars"},{value:"html",since:"1.15.0",description:"HTML"},{value:"angular",since:"1.15.0",description:"Angular"},{value:"lwc",since:"1.17.0",description:"Lightning Web Components"}]},plugins:{since:"1.10.0",type:"path",array:!0,default:[{value:[]}],category:"Global",description:"Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",exception:e=>"string"==typeof e||"object"==typeof e,cliName:"plugin",cliCategory:"Config"},pluginSearchDirs:{since:"1.13.0",type:"path",array:!0,default:[{value:[]}],category:"Global",description:dt(lt()),exception:e=>"string"==typeof e||"object"==typeof e,cliName:"plugin-search-dir",cliCategory:"Config"},printWidth:{since:"0.0.0",category:"Global",type:"int",default:80,description:"The line length where Prettier will try wrap.",range:{start:0,end:1/0,step:1}},rangeEnd:{since:"1.4.0",category:"Special",type:"int",default:1/0,range:{start:0,end:1/0,step:1},description:dt(st()),cliCategory:"Editor"},rangeStart:{since:"1.4.0",category:"Special",type:"int",default:0,range:{start:0,end:1/0,step:1},description:dt(it()),cliCategory:"Editor"},requirePragma:{since:"1.7.0",category:"Special",type:"boolean",default:!1,description:dt(at()),cliCategory:"Other"},tabWidth:{type:"int",category:"Global",default:2,description:"Number of spaces per indentation level.",range:{start:0,end:1/0,step:1}},useTabs:{since:"1.0.0",category:"Global",type:"boolean",default:!1,description:"Indent with tabs instead of spaces."},embeddedLanguageFormatting:{since:"2.1.0",category:"Global",type:"choice",default:[{since:"2.1.0",value:"auto"}],description:"Control how Prettier formats quoted code embedded in the file.",choices:[{value:"auto",description:"Format embedded code if Prettier can automatically identify it."},{value:"off",description:"Never automatically format embedded code."}]}}},ht=Ue(c);const mt={compare:nt,lt:rt,gte:ut},gt=ht.version,Dt=ft.options;var yt={getSupportInfo:function({plugins:t=[],showUnreleased:n=!1,showDeprecated:r=!1,showInternal:u=!1}={}){const o=gt.split("-",1)[0],a=t.reduce((e,t)=>e.concat(t.languages||[]),[]).filter(s),i=((e,t)=>Object.entries(e).map(([e,n])=>Object.assign({[t]:e},n)))(Object.assign({},...t.map(({options:e})=>e),Dt),"name").filter(e=>s(e)&&l(e)).sort((e,t)=>e.name===t.name?0:e.name<t.name?-1:1).map((function(t){if(u)return t;return e(t,["cliName","cliCategory","cliDescription"])})).map(e=>{e=Object.assign({},e),Array.isArray(e.default)&&(e.default=1===e.default.length?e.default[0].value:e.default.filter(s).sort((e,t)=>mt.compare(t.since,e.since))[0].value),Array.isArray(e.choices)&&(e.choices=e.choices.filter(e=>s(e)&&l(e)),"parser"===e.name&&function(e,t,n){const r=new Set(e.choices.map(e=>e.value));for(const u of t)if(u.parsers)for(const t of u.parsers)if(!r.has(t)){r.add(t);const o=n.find(e=>e.parsers&&e.parsers[t]);let a=u.name;o&&o.name&&(a+=" (plugin: ".concat(o.name,")")),e.choices.push({value:t,description:a})}}(e,a,t));const n=t.filter(t=>t.defaultOptions&&void 0!==t.defaultOptions[e.name]).reduce((t,n)=>(t[n.name]=n.defaultOptions[e.name],t),{});return Object.assign({},e,{pluginDefaults:n})});return{languages:a,options:i};function s(e){return n||!("since"in e)||e.since&&mt.gte(o,e.since)}function l(e){return r||!("deprecated"in e)||e.deprecated&&mt.lt(o,e.deprecated)}}};const Et=/[^\x20-\x7F]/;function Ct(e){return(t,n,r)=>{const u=r&&r.backwards;if(!1===n)return!1;const{length:o}=t;let a=n;for(;a>=0&&a<o;){const n=t.charAt(a);if(e instanceof RegExp){if(!e.test(n))return a}else if(!e.includes(n))return a;u?a--:a++}return(-1===a||a===o)&&a}}const bt=Ct(/\s/),At=Ct(" \t"),vt=Ct(",; \t"),Ft=Ct(/[^\n\r]/);function xt(e,t){if(!1===t)return!1;if("/"===e.charAt(t)&&"*"===e.charAt(t+1))for(let n=t+2;n<e.length;++n)if("*"===e.charAt(n)&&"/"===e.charAt(n+1))return n+2;return t}function St(e,t){return!1!==t&&("/"===e.charAt(t)&&"/"===e.charAt(t+1)?Ft(e,t):t)}function wt(e,t,n){const r=n&&n.backwards;if(!1===t)return!1;const u=e.charAt(t);if(r){if("\r"===e.charAt(t-1)&&"\n"===u)return t-2;if("\n"===u||"\r"===u||"\u2028"===u||"\u2029"===u)return t-1}else{if("\r"===u&&"\n"===e.charAt(t+1))return t+2;if("\n"===u||"\r"===u||"\u2028"===u||"\u2029"===u)return t+1}return t}function Bt(e,t,n){const r=At(e,(n=n||{}).backwards?t-1:t,n);return r!==wt(e,r,n)}function Tt(e,t){let n=null,r=t;for(;r!==n;)n=r,r=vt(e,r),r=xt(e,r),r=At(e,r);return r=St(e,r),r=wt(e,r),!1!==r&&Bt(e,r)}function kt(e,t){let n=null,r=t;for(;r!==n;)n=r,r=At(e,r),r=xt(e,r),r=St(e,r),r=wt(e,r);return r}function Nt(e,t,n){return kt(e,n(t))}function Ot(e,t,n){let r=0;for(let u=n=n||0;u<e.length;++u)"\t"===e[u]?r=r+t-r%t:r++;return r}function Pt(e,t){const n=e.slice(1,-1),r={quote:'"',regex:/"/g},u={quote:"'",regex:/'/g},o="'"===t?u:r,a=o===u?r:u;let i=o.quote;if(n.includes(o.quote)||n.includes(a.quote)){i=(n.match(o.regex)||[]).length>(n.match(a.regex)||[]).length?a.quote:o.quote}return i}function _t(e,t,n){const r='"'===t?"'":'"',u=e.replace(/\\([\S\s])|(["'])/g,(e,u,o)=>u===r?u:o===t?"\\"+o:o||(n&&/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(u)?u:"\\"+u));return t+u+t}function It(e){return e&&(e.comments&&e.comments.length>0&&e.comments.some(e=>jt(e)&&!e.unignore)||e.prettierIgnore)}function jt(e){return"prettier-ignore"===e.value.trim()}function Mt(e,t){(e.comments||(e.comments=[])).push(t),t.printed=!1,"JSXText"===e.type&&(t.printed=!0)}var Lt={replaceEndOfLineWith:function(e,t){const n=[];for(const r of e.split("\n"))0!==n.length&&n.push(t),n.push(r);return n},getStringWidth:function(e){return e?Et.test(e)?pe(e):e.length:0},getMaxContinuousCount:function(e,t){const n=e.match(new RegExp("(".concat(fe(t),")+"),"g"));return null===n?0:n.reduce((e,n)=>Math.max(e,n.length/t.length),0)},getMinNotPresentContinuousCount:function(e,t){const n=e.match(new RegExp("(".concat(fe(t),")+"),"g"));if(null===n)return 0;const r=new Map;let u=0;for(const e of n){const n=e.length/t.length;r.set(n,!0),n>u&&(u=n)}for(let e=1;e<u;e++)if(!r.get(e))return e;return u+1},getParserName:function(e,t){const n=yt.getSupportInfo({plugins:t.plugins}).languages.find(t=>t.name.toLowerCase()===e||t.aliases&&t.aliases.includes(e)||t.extensions&&t.extensions.some(t=>t===".".concat(e)));return n?n.parsers[0]:null},getPenultimate:e=>e[e.length-2],getLast:he,getNextNonSpaceNonCommentCharacterIndexWithStartIndex:kt,getNextNonSpaceNonCommentCharacterIndex:Nt,getNextNonSpaceNonCommentCharacter:function(e,t,n){return e.charAt(Nt(e,t,n))},skip:Ct,skipWhitespace:bt,skipSpaces:At,skipToLineEnd:vt,skipEverythingButNewLine:Ft,skipInlineComment:xt,skipTrailingComment:St,skipNewline:wt,isNextLineEmptyAfterIndex:Tt,isNextLineEmpty:function(e,t,n){return Tt(e,n(t))},isPreviousLineEmpty:function(e,t,n){let r=n(t)-1;return r=At(e,r,{backwards:!0}),r=wt(e,r,{backwards:!0}),r=At(e,r,{backwards:!0}),r!==wt(e,r,{backwards:!0})},hasNewline:Bt,hasNewlineInRange:function(e,t,n){for(let r=t;r<n;++r)if("\n"===e.charAt(r))return!0;return!1},hasSpaces:function(e,t,n){return At(e,(n=n||{}).backwards?t-1:t,n)!==t},getAlignmentSize:Ot,getIndentSize:function(e,t){const n=e.lastIndexOf("\n");return-1===n?0:Ot(e.slice(n+1).match(/^[\t ]*/)[0],t)},getPreferredQuote:Pt,printString:function(e,t,n){const r=e.slice(1,-1),u=!r.includes('"')&&!r.includes("'"),o="json"===t.parser?'"':t.__isInHtmlAttribute?"'":Pt(e,t.singleQuote?"'":'"');return n?u?o+r+o:e:_t(r,o,!("css"===t.parser||"less"===t.parser||"scss"===t.parser||t.embeddedInHtml))},printNumber:function(e){return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/,"$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/,"$1").replace(/^([+-])?\./,"$10.").replace(/(\.\d+?)0+(?=e|$)/,"$1").replace(/\.(?=e|$)/,"")},hasIgnoreComment:function(e){return It(e.getValue())},hasNodeIgnoreComment:It,isNodeIgnoreComment:jt,makeString:_t,addLeadingComment:function(e,t){t.leading=!0,t.trailing=!1,Mt(e,t)},addDanglingComment:function(e,t,n){t.leading=!1,t.trailing=!1,n&&(t.marker=n),Mt(e,t)},addTrailingComment:function(e,t){t.leading=!1,t.trailing=!0,Mt(e,t)},isWithinParentArrayProperty:function(e,t){const n=e.getValue(),r=e.getParentNode();if(null==r)return!1;if(!Array.isArray(r[t]))return!1;const u=e.getName();return r[t][u]===n},isFrontMatterNode:function(e){return e&&"front-matter"===e.type},getShebang:function(e){if(!e.startsWith("#!"))return"";const t=e.indexOf("\n");return-1===t?e:e.slice(0,t)}};var Rt={guessEndOfLine:function(e){const t=e.indexOf("\r");return t>=0?"\n"===e.charAt(t+1)?"crlf":"cr":"lf"},convertEndOfLineToChars:function(e){switch(e){case"cr":return"\r";case"crlf":return"\r\n";default:return"\n"}},countEndOfLineChars:function(e,t){let n;if("\n"===t)n=/\n/g;else if("\r"===t)n=/\r/g;else{if("\r\n"!==t)throw new Error('Unexpected "eol" '.concat(JSON.stringify(t),"."));n=/\r\n/g}const r=e.match(n);return r?r.length:0},normalizeEndOfLine:function(e){return e.replace(/\r\n?/g,"\n")}};const{getStringWidth:qt}=Lt,{convertEndOfLineToChars:Vt}=Rt,{concat:Wt,fill:$t,cursor:Ut}=oe;let zt;function Jt(e,t){return Ht(e,{type:"indent"},t)}function Gt(e,t,n){if(t===-1/0)return e.root||{value:"",length:0,queue:[]};if(t<0)return Ht(e,{type:"dedent"},n);if(!t)return e;if("root"===t.type)return Object.assign({},e,{root:e});return Ht(e,{type:"string"==typeof t?"stringAlign":"numberAlign",n:t},n)}function Ht(e,t,n){const r="dedent"===t.type?e.queue.slice(0,-1):e.queue.concat(t);let u="",o=0,a=0,i=0;for(const e of r)switch(e.type){case"indent":c(),n.useTabs?s(1):l(n.tabWidth);break;case"stringAlign":c(),u+=e.n,o+=e.n.length;break;case"numberAlign":a+=1,i+=e.n;break;default:throw new Error("Unexpected type '".concat(e.type,"'"))}return p(),Object.assign({},e,{value:u,length:o,queue:r});function s(e){u+="\t".repeat(e),o+=n.tabWidth*e}function l(e){u+=" ".repeat(e),o+=e}function c(){n.useTabs?function(){a>0&&s(a);d()}():p()}function p(){i>0&&l(i),d()}function d(){a=0,i=0}}function Xt(e){if(0===e.length)return 0;let t=0;for(;e.length>0&&"string"==typeof e[e.length-1]&&e[e.length-1].match(/^[\t ]*$/);)t+=e.pop().length;if(e.length&&"string"==typeof e[e.length-1]){const n=e[e.length-1].replace(/[\t ]*$/,"");t+=e[e.length-1].length-n.length,e[e.length-1]=n}return t}function Yt(e,t,n,r,u){let o=t.length;const a=[e],i=[];for(;n>=0;){if(0===a.length){if(0===o)return!0;a.push(t[o-1]),o--;continue}const[e,s,l]=a.pop();if("string"==typeof l)i.push(l),n-=qt(l);else switch(l.type){case"concat":for(let t=l.parts.length-1;t>=0;t--)a.push([e,s,l.parts[t]]);break;case"indent":a.push([Jt(e,r),s,l.contents]);break;case"align":a.push([Gt(e,l.n,r),s,l.contents]);break;case"trim":n+=Xt(i);break;case"group":if(u&&l.break)return!1;a.push([e,l.break?1:s,l.contents]),l.id&&(zt[l.id]=a[a.length-1][1]);break;case"fill":for(let t=l.parts.length-1;t>=0;t--)a.push([e,s,l.parts[t]]);break;case"if-break":{const t=l.groupId?zt[l.groupId]:s;1===t&&l.breakContents&&a.push([e,s,l.breakContents]),2===t&&l.flatContents&&a.push([e,s,l.flatContents]);break}case"line":switch(s){case 2:if(!l.hard){l.soft||(i.push(" "),n-=1);break}return!0;case 1:return!0}}}return!1}var Kt={printDocToString:function(e,t){zt={};const n=t.printWidth,r=Vt(t.endOfLine);let u=0;const o=[[{value:"",length:0,queue:[]},1,e]],a=[];let i=!1,s=[];for(;0!==o.length;){const[e,l,c]=o.pop();if("string"==typeof c){const e="\n"!==r&&c.includes("\n")?c.replace(/\n/g,r):c;a.push(e),u+=qt(e)}else switch(c.type){case"cursor":a.push(Ut.placeholder);break;case"concat":for(let t=c.parts.length-1;t>=0;t--)o.push([e,l,c.parts[t]]);break;case"indent":o.push([Jt(e,t),l,c.contents]);break;case"align":o.push([Gt(e,c.n,t),l,c.contents]);break;case"trim":u-=Xt(a);break;case"group":switch(l){case 2:if(!i){o.push([e,c.break?1:2,c.contents]);break}case 1:{i=!1;const r=[e,2,c.contents],a=n-u;if(!c.break&&Yt(r,o,a,t))o.push(r);else if(c.expandedStates){const n=c.expandedStates[c.expandedStates.length-1];if(c.break){o.push([e,1,n]);break}for(let r=1;r<c.expandedStates.length+1;r++){if(r>=c.expandedStates.length){o.push([e,1,n]);break}{const n=[e,2,c.expandedStates[r]];if(Yt(n,o,a,t)){o.push(n);break}}}}else o.push([e,1,c.contents]);break}}c.id&&(zt[c.id]=o[o.length-1][1]);break;case"fill":{const r=n-u,{parts:a}=c;if(0===a.length)break;const[i,s]=a,p=[e,2,i],d=[e,1,i],f=Yt(p,[],r,t,!0);if(1===a.length){f?o.push(p):o.push(d);break}const h=[e,2,s],m=[e,1,s];if(2===a.length){f?(o.push(h),o.push(p)):(o.push(m),o.push(d));break}a.splice(0,2);const g=[e,l,$t(a)],D=a[0];Yt([e,2,Wt([i,s,D])],[],r,t,!0)?(o.push(g),o.push(h),o.push(p)):f?(o.push(g),o.push(m),o.push(p)):(o.push(g),o.push(m),o.push(d));break}case"if-break":{const t=c.groupId?zt[c.groupId]:l;1===t&&c.breakContents&&o.push([e,l,c.breakContents]),2===t&&c.flatContents&&o.push([e,l,c.flatContents]);break}case"line-suffix":s.push([e,l,c.contents]);break;case"line-suffix-boundary":s.length>0&&o.push([e,l,{type:"line",hard:!0}]);break;case"line":switch(l){case 2:if(!c.hard){c.soft||(a.push(" "),u+=1);break}i=!0;case 1:if(s.length){o.push([e,l,c]),o.push(...s.reverse()),s=[];break}c.literal?e.root?(a.push(r,e.root.value),u=e.root.length):(a.push(r),u=0):(u-=Xt(a),a.push(r+e.value),u=e.length)}}}const l=a.indexOf(Ut.placeholder);if(-1!==l){const e=a.indexOf(Ut.placeholder,l+1),t=a.slice(0,l).join(""),n=a.slice(l+1,e).join("");return{formatted:t+n+a.slice(e+1).join(""),cursorNodeStart:t.length,cursorNodeText:n}}return{formatted:a.join("")}}};const{literalline:Qt,concat:Zt}=oe,en={};function tn(e,t,n,r){const u=[e];for(;0!==u.length;){const e=u.pop();if(e!==en){if(n&&u.push(e,en),!t||!1!==t(e))if("concat"===e.type||"fill"===e.type)for(let t=e.parts.length-1;t>=0;--t)u.push(e.parts[t]);else if("if-break"===e.type)e.flatContents&&u.push(e.flatContents),e.breakContents&&u.push(e.breakContents);else if("group"===e.type&&e.expandedStates)if(r)for(let t=e.expandedStates.length-1;t>=0;--t)u.push(e.expandedStates[t]);else u.push(e.contents);else e.contents&&u.push(e.contents)}else n(u.pop())}}function nn(e,t){if("concat"===e.type||"fill"===e.type){const n=e.parts.map(e=>nn(e,t));return t(Object.assign({},e,{parts:n}))}if("if-break"===e.type){const n=e.breakContents&&nn(e.breakContents,t),r=e.flatContents&&nn(e.flatContents,t);return t(Object.assign({},e,{breakContents:n,flatContents:r}))}if(e.contents){const n=nn(e.contents,t);return t(Object.assign({},e,{contents:n}))}return t(e)}function rn(e,t,n){let r=n,u=!1;return tn(e,(function(e){const n=t(e);if(void 0!==n&&(u=!0,r=n),u)return!1})),r}function un(e){return"string"!=typeof e&&("line"===e.type||void 0)}function on(e){return!("group"!==e.type||!e.break)||(!("line"!==e.type||!e.hard)||("break-parent"===e.type||void 0))}function an(e){if(e.length>0){const t=e[e.length-1];t.expandedStates||(t.break=!0)}return null}function sn(e){return"line"!==e.type||e.hard?"if-break"===e.type?e.flatContents||"":e:e.soft?"":" "}function ln(e){const t=[],n=e.filter(Boolean);for(;0!==n.length;){const e=n.shift();e&&("concat"!==e.type?0===t.length||"string"!=typeof t[t.length-1]||"string"!=typeof e?t.push(e):t[t.length-1]+=e:n.unshift(...e.parts))}return t}function cn(e){if("concat"===e.type){const t=[];for(let n=0;n<e.parts.length;++n){const r=e.parts[n];if("string"!=typeof r&&"concat"===r.type)t.push(...cn(r).parts);else{const e=cn(r);""!==e&&t.push(e)}}return Object.assign({},e,{parts:t})}return"if-break"===e.type?Object.assign({},e,{breakContents:null!=e.breakContents?cn(e.breakContents):null,flatContents:null!=e.flatContents?cn(e.flatContents):null}):"group"===e.type?Object.assign({},e,{contents:cn(e.contents),expandedStates:e.expandedStates?e.expandedStates.map(cn):e.expandedStates}):e.contents?Object.assign({},e,{contents:cn(e.contents)}):e}function pn(e){if("string"==typeof e)return JSON.stringify(e);if("line"===e.type)return e.literal?"literalline":e.hard?"hardline":e.soft?"softline":"line";if("break-parent"===e.type)return"breakParent";if("trim"===e.type)return"trim";if("concat"===e.type)return"["+e.parts.map(pn).join(", ")+"]";if("indent"===e.type)return"indent("+pn(e.contents)+")";if("align"===e.type)return e.n===-1/0?"dedentToRoot("+pn(e.contents)+")":e.n<0?"dedent("+pn(e.contents)+")":"root"===e.n.type?"markAsRoot("+pn(e.contents)+")":"align("+JSON.stringify(e.n)+", "+pn(e.contents)+")";if("if-break"===e.type)return"ifBreak("+pn(e.breakContents)+(e.flatContents?", "+pn(e.flatContents):"")+")";if("group"===e.type)return e.expandedStates?"conditionalGroup(["+e.expandedStates.map(pn).join(",")+"])":(e.break?"wrappedGroup":"group")+"("+pn(e.contents)+")";if("fill"===e.type)return"fill("+e.parts.map(pn).join(", ")+")";if("line-suffix"===e.type)return"lineSuffix("+pn(e.contents)+")";if("line-suffix-boundary"===e.type)return"lineSuffixBoundary";throw new Error("Unknown doc type "+e.type)}var dn={builders:oe,printer:Kt,utils:{isEmpty:function(e){return"string"==typeof e&&0===e.length},willBreak:function(e){return rn(e,on,!1)},isLineNext:function(e){return rn(e,un,!1)},traverseDoc:tn,findInDoc:rn,mapDoc:nn,propagateBreaks:function(e){const t=new Set,n=[];tn(e,(function(e){if("break-parent"===e.type&&an(n),"group"===e.type){if(n.push(e),t.has(e))return!1;t.add(e)}}),(function(e){if("group"===e.type){n.pop().break&&an(n)}}),!0)},removeLines:function(e){return nn(e,sn)},stripTrailingHardline:function e(t,n=!1){if("concat"===t.type&&0!==t.parts.length){const r=n?function(e){let t,{parts:n}=e;for(let r=e.parts.length;r>0&&!t;r--)t=n[r-1];return"group"===t.type&&(n=t.contents.parts),n}(t):t.parts,u=r[r.length-1];if("concat"===u.type)return 2===u.parts.length&&u.parts[0].hard&&"break-parent"===u.parts[1].type?{type:"concat",parts:r.slice(0,-1)}:{type:"concat",parts:t.parts.slice(0,-1).concat(e(u))}}return t},normalizeParts:ln,normalizeDoc:function(e){return nn(e,e=>e.parts?Object.assign({},e,{parts:ln(e.parts)}):e)},replaceNewlinesWithLiterallines:function(e){return nn(e,e=>"string"==typeof e&&e.includes("\n")?Zt(e.split(/(\n)/g).map((e,t)=>t%2==0?e:Qt)):e)}},debug:{printDocToDebug:e=>pn(cn(e))}},fn=Object.freeze({__proto__:null,default:{}});const hn=/[/\\]/;function mn(e){return e.split(hn).pop()}var gn=Object.freeze({__proto__:null,extname:function(e){const t=mn(e),n=t.lastIndexOf(".");return-1===n?"":t.slice(n)},basename:mn,isAbsolute:function(){return!0}}),Dn=[],yn=[],En="undefined"!=typeof Uint8Array?Uint8Array:Array,Cn=!1;function bn(){Cn=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,n=e.length;t<n;++t)Dn[t]=e[t],yn[e.charCodeAt(t)]=t;yn["-".charCodeAt(0)]=62,yn["_".charCodeAt(0)]=63}function An(e,t,n){for(var r,u,o=[],a=t;a<n;a+=3)r=(e[a]<<16)+(e[a+1]<<8)+e[a+2],o.push(Dn[(u=r)>>18&63]+Dn[u>>12&63]+Dn[u>>6&63]+Dn[63&u]);return o.join("")}function vn(e){var t;Cn||bn();for(var n=e.length,r=n%3,u="",o=[],a=0,i=n-r;a<i;a+=16383)o.push(An(e,a,a+16383>i?i:a+16383));return 1===r?(t=e[n-1],u+=Dn[t>>2],u+=Dn[t<<4&63],u+="=="):2===r&&(t=(e[n-2]<<8)+e[n-1],u+=Dn[t>>10],u+=Dn[t>>4&63],u+=Dn[t<<2&63],u+="="),o.push(u),o.join("")}function Fn(e,t,n,r,u){var o,a,i=8*u-r-1,s=(1<<i)-1,l=s>>1,c=-7,p=n?u-1:0,d=n?-1:1,f=e[t+p];for(p+=d,o=f&(1<<-c)-1,f>>=-c,c+=i;c>0;o=256*o+e[t+p],p+=d,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=r;c>0;a=256*a+e[t+p],p+=d,c-=8);if(0===o)o=1-l;else{if(o===s)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,r),o-=l}return(f?-1:1)*a*Math.pow(2,o-r)}function xn(e,t,n,r,u,o){var a,i,s,l=8*o-u-1,c=(1<<l)-1,p=c>>1,d=23===u?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,h=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),(t+=a+p>=1?d/s:d*Math.pow(2,1-p))*s>=2&&(a++,s/=2),a+p>=c?(i=0,a=c):a+p>=1?(i=(t*s-1)*Math.pow(2,u),a+=p):(i=t*Math.pow(2,p-1)*Math.pow(2,u),a=0));u>=8;e[n+f]=255&i,f+=h,i/=256,u-=8);for(a=a<<u|i,l+=u;l>0;e[n+f]=255&a,f+=h,a/=256,l-=8);e[n+f-h]|=128*m}var Sn={}.toString,wn=Array.isArray||function(e){return"[object Array]"==Sn.call(e)};function Bn(){return kn.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function Tn(e,t){if(Bn()<t)throw new RangeError("Invalid typed array length");return kn.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=kn.prototype:(null===e&&(e=new kn(t)),e.length=t),e}function kn(e,t,n){if(!(kn.TYPED_ARRAY_SUPPORT||this instanceof kn))return new kn(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return Pn(this,e)}return Nn(this,e,t,n)}function Nn(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r);kn.TYPED_ARRAY_SUPPORT?(e=t).__proto__=kn.prototype:e=_n(e,t);return e}(e,t,n,r):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!kn.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|Mn(t,n),u=(e=Tn(e,r)).write(t,n);u!==r&&(e=e.slice(0,u));return e}(e,t,n):function(e,t){if(jn(t)){var n=0|In(t.length);return 0===(e=Tn(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?Tn(e,0):_n(e,t);if("Buffer"===t.type&&wn(t.data))return _n(e,t.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function On(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function Pn(e,t){if(On(t),e=Tn(e,t<0?0:0|In(t)),!kn.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function _n(e,t){var n=t.length<0?0:0|In(t.length);e=Tn(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e}function In(e){if(e>=Bn())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Bn().toString(16)+" bytes");return 0|e}function jn(e){return!(null==e||!e._isBuffer)}function Mn(e,t){if(jn(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return lr(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return cr(e).length;default:if(r)return lr(e).length;t=(""+t).toLowerCase(),r=!0}}function Ln(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Qn(this,t,n);case"utf8":case"utf-8":return Xn(this,t,n);case"ascii":return Yn(this,t,n);case"latin1":case"binary":return Kn(this,t,n);case"base64":return Hn(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zn(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function Rn(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function qn(e,t,n,r,u){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=u?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(u)return-1;n=e.length-1}else if(n<0){if(!u)return-1;n=0}if("string"==typeof t&&(t=kn.from(t,r)),jn(t))return 0===t.length?-1:Vn(e,t,n,r,u);if("number"==typeof t)return t&=255,kn.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?u?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Vn(e,[t],n,r,u);throw new TypeError("val must be string, number or Buffer")}function Vn(e,t,n,r,u){var o,a=1,i=e.length,s=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,i/=2,s/=2,n/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(u){var c=-1;for(o=n;o<i;o++)if(l(e,o)===l(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===s)return c*a}else-1!==c&&(o-=o-c),c=-1}else for(n+s>i&&(n=i-s),o=n;o>=0;o--){for(var p=!0,d=0;d<s;d++)if(l(e,o+d)!==l(t,d)){p=!1;break}if(p)return o}return-1}function Wn(e,t,n,r){n=Number(n)||0;var u=e.length-n;r?(r=Number(r))>u&&(r=u):r=u;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;a<r;++a){var i=parseInt(t.substr(2*a,2),16);if(isNaN(i))return a;e[n+a]=i}return a}function $n(e,t,n,r){return pr(lr(t,e.length-n),e,n,r)}function Un(e,t,n,r){return pr(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function zn(e,t,n,r){return Un(e,t,n,r)}function Jn(e,t,n,r){return pr(cr(t),e,n,r)}function Gn(e,t,n,r){return pr(function(e,t){for(var n,r,u,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=(n=e.charCodeAt(a))>>8,u=n%256,o.push(u),o.push(r);return o}(t,e.length-n),e,n,r)}function Hn(e,t,n){return 0===t&&n===e.length?vn(e):vn(e.slice(t,n))}function Xn(e,t,n){n=Math.min(e.length,n);for(var r=[],u=t;u<n;){var o,a,i,s,l=e[u],c=null,p=l>239?4:l>223?3:l>191?2:1;if(u+p<=n)switch(p){case 1:l<128&&(c=l);break;case 2:128==(192&(o=e[u+1]))&&(s=(31&l)<<6|63&o)>127&&(c=s);break;case 3:o=e[u+1],a=e[u+2],128==(192&o)&&128==(192&a)&&(s=(15&l)<<12|(63&o)<<6|63&a)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:o=e[u+1],a=e[u+2],i=e[u+3],128==(192&o)&&128==(192&a)&&128==(192&i)&&(s=(15&l)<<18|(63&o)<<12|(63&a)<<6|63&i)>65535&&s<1114112&&(c=s)}null===c?(c=65533,p=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),u+=p}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}kn.TYPED_ARRAY_SUPPORT=void 0===me.TYPED_ARRAY_SUPPORT||me.TYPED_ARRAY_SUPPORT,kn.poolSize=8192,kn._augment=function(e){return e.__proto__=kn.prototype,e},kn.from=function(e,t,n){return Nn(null,e,t,n)},kn.TYPED_ARRAY_SUPPORT&&(kn.prototype.__proto__=Uint8Array.prototype,kn.__proto__=Uint8Array),kn.alloc=function(e,t,n){return function(e,t,n,r){return On(t),t<=0?Tn(e,t):void 0!==n?"string"==typeof r?Tn(e,t).fill(n,r):Tn(e,t).fill(n):Tn(e,t)}(null,e,t,n)},kn.allocUnsafe=function(e){return Pn(null,e)},kn.allocUnsafeSlow=function(e){return Pn(null,e)},kn.isBuffer=function(e){return null!=e&&(!!e._isBuffer||dr(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&dr(e.slice(0,0))}(e))},kn.compare=function(e,t){if(!jn(e)||!jn(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,u=0,o=Math.min(n,r);u<o;++u)if(e[u]!==t[u]){n=e[u],r=t[u];break}return n<r?-1:r<n?1:0},kn.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},kn.concat=function(e,t){if(!wn(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return kn.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=kn.allocUnsafe(t),u=0;for(n=0;n<e.length;++n){var o=e[n];if(!jn(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,u),u+=o.length}return r},kn.byteLength=Mn,kn.prototype._isBuffer=!0,kn.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Rn(this,t,t+1);return this},kn.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Rn(this,t,t+3),Rn(this,t+1,t+2);return this},kn.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Rn(this,t,t+7),Rn(this,t+1,t+6),Rn(this,t+2,t+5),Rn(this,t+3,t+4);return this},kn.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?Xn(this,0,e):Ln.apply(this,arguments)},kn.prototype.equals=function(e){if(!jn(e))throw new TypeError("Argument must be a Buffer");return this===e||0===kn.compare(this,e)},kn.prototype.inspect=function(){var e="";return this.length>0&&(e=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(e+=" ... ")),"<Buffer "+e+">"},kn.prototype.compare=function(e,t,n,r,u){if(!jn(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===u&&(u=this.length),t<0||n>e.length||r<0||u>this.length)throw new RangeError("out of range index");if(r>=u&&t>=n)return 0;if(r>=u)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(u>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0),i=Math.min(o,a),s=this.slice(r,u),l=e.slice(t,n),c=0;c<i;++c)if(s[c]!==l[c]){o=s[c],a=l[c];break}return o<a?-1:a<o?1:0},kn.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},kn.prototype.indexOf=function(e,t,n){return qn(this,e,t,n,!0)},kn.prototype.lastIndexOf=function(e,t,n){return qn(this,e,t,n,!1)},kn.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var u=this.length-t;if((void 0===n||n>u)&&(n=u),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return Wn(this,e,t,n);case"utf8":case"utf-8":return $n(this,e,t,n);case"ascii":return Un(this,e,t,n);case"latin1":case"binary":return zn(this,e,t,n);case"base64":return Jn(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Gn(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},kn.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Yn(e,t,n){var r="";n=Math.min(e.length,n);for(var u=t;u<n;++u)r+=String.fromCharCode(127&e[u]);return r}function Kn(e,t,n){var r="";n=Math.min(e.length,n);for(var u=t;u<n;++u)r+=String.fromCharCode(e[u]);return r}function Qn(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var u="",o=t;o<n;++o)u+=sr(e[o]);return u}function Zn(e,t,n){for(var r=e.slice(t,n),u="",o=0;o<r.length;o+=2)u+=String.fromCharCode(r[o]+256*r[o+1]);return u}function er(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function tr(e,t,n,r,u,o){if(!jn(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>u||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function nr(e,t,n,r){t<0&&(t=65535+t+1);for(var u=0,o=Math.min(e.length-n,2);u<o;++u)e[n+u]=(t&255<<8*(r?u:1-u))>>>8*(r?u:1-u)}function rr(e,t,n,r){t<0&&(t=4294967295+t+1);for(var u=0,o=Math.min(e.length-n,4);u<o;++u)e[n+u]=t>>>8*(r?u:3-u)&255}function ur(e,t,n,r,u,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function or(e,t,n,r,u){return u||ur(e,0,n,4),xn(e,t,n,r,23,4),n+4}function ar(e,t,n,r,u){return u||ur(e,0,n,8),xn(e,t,n,r,52,8),n+8}kn.prototype.slice=function(e,t){var n,r=this.length;if((e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e),kn.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=kn.prototype;else{var u=t-e;n=new kn(u,void 0);for(var o=0;o<u;++o)n[o]=this[o+e]}return n},kn.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||er(e,t,this.length);for(var r=this[e],u=1,o=0;++o<t&&(u*=256);)r+=this[e+o]*u;return r},kn.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||er(e,t,this.length);for(var r=this[e+--t],u=1;t>0&&(u*=256);)r+=this[e+--t]*u;return r},kn.prototype.readUInt8=function(e,t){return t||er(e,1,this.length),this[e]},kn.prototype.readUInt16LE=function(e,t){return t||er(e,2,this.length),this[e]|this[e+1]<<8},kn.prototype.readUInt16BE=function(e,t){return t||er(e,2,this.length),this[e]<<8|this[e+1]},kn.prototype.readUInt32LE=function(e,t){return t||er(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},kn.prototype.readUInt32BE=function(e,t){return t||er(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},kn.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||er(e,t,this.length);for(var r=this[e],u=1,o=0;++o<t&&(u*=256);)r+=this[e+o]*u;return r>=(u*=128)&&(r-=Math.pow(2,8*t)),r},kn.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||er(e,t,this.length);for(var r=t,u=1,o=this[e+--r];r>0&&(u*=256);)o+=this[e+--r]*u;return o>=(u*=128)&&(o-=Math.pow(2,8*t)),o},kn.prototype.readInt8=function(e,t){return t||er(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},kn.prototype.readInt16LE=function(e,t){t||er(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},kn.prototype.readInt16BE=function(e,t){t||er(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},kn.prototype.readInt32LE=function(e,t){return t||er(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},kn.prototype.readInt32BE=function(e,t){return t||er(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},kn.prototype.readFloatLE=function(e,t){return t||er(e,4,this.length),Fn(this,e,!0,23,4)},kn.prototype.readFloatBE=function(e,t){return t||er(e,4,this.length),Fn(this,e,!1,23,4)},kn.prototype.readDoubleLE=function(e,t){return t||er(e,8,this.length),Fn(this,e,!0,52,8)},kn.prototype.readDoubleBE=function(e,t){return t||er(e,8,this.length),Fn(this,e,!1,52,8)},kn.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||tr(this,e,t,n,Math.pow(2,8*n)-1,0);var u=1,o=0;for(this[t]=255&e;++o<n&&(u*=256);)this[t+o]=e/u&255;return t+n},kn.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||tr(this,e,t,n,Math.pow(2,8*n)-1,0);var u=n-1,o=1;for(this[t+u]=255&e;--u>=0&&(o*=256);)this[t+u]=e/o&255;return t+n},kn.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,1,255,0),kn.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},kn.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,2,65535,0),kn.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):nr(this,e,t,!0),t+2},kn.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,2,65535,0),kn.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):nr(this,e,t,!1),t+2},kn.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,4,4294967295,0),kn.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):rr(this,e,t,!0),t+4},kn.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,4,4294967295,0),kn.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):rr(this,e,t,!1),t+4},kn.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var u=Math.pow(2,8*n-1);tr(this,e,t,n,u-1,-u)}var o=0,a=1,i=0;for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===i&&0!==this[t+o-1]&&(i=1),this[t+o]=(e/a>>0)-i&255;return t+n},kn.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var u=Math.pow(2,8*n-1);tr(this,e,t,n,u-1,-u)}var o=n-1,a=1,i=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===i&&0!==this[t+o+1]&&(i=1),this[t+o]=(e/a>>0)-i&255;return t+n},kn.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,1,127,-128),kn.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},kn.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,2,32767,-32768),kn.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):nr(this,e,t,!0),t+2},kn.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,2,32767,-32768),kn.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):nr(this,e,t,!1),t+2},kn.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,4,2147483647,-2147483648),kn.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):rr(this,e,t,!0),t+4},kn.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||tr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),kn.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):rr(this,e,t,!1),t+4},kn.prototype.writeFloatLE=function(e,t,n){return or(this,e,t,!0,n)},kn.prototype.writeFloatBE=function(e,t,n){return or(this,e,t,!1,n)},kn.prototype.writeDoubleLE=function(e,t,n){return ar(this,e,t,!0,n)},kn.prototype.writeDoubleBE=function(e,t,n){return ar(this,e,t,!1,n)},kn.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var u,o=r-n;if(this===e&&n<t&&t<r)for(u=o-1;u>=0;--u)e[u+t]=this[u+n];else if(o<1e3||!kn.TYPED_ARRAY_SUPPORT)for(u=0;u<o;++u)e[u+t]=this[u+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},kn.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var u=e.charCodeAt(0);u<256&&(e=u)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!kn.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var a=jn(e)?e:lr(new kn(e,r).toString()),i=a.length;for(o=0;o<n-t;++o)this[o+t]=a[o%i]}return this};var ir=/[^+\/0-9A-Za-z-_]/g;function sr(e){return e<16?"0"+e.toString(16):e.toString(16)}function lr(e,t){var n;t=t||1/0;for(var r=e.length,u=null,o=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!u){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}u=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),u=n;continue}n=65536+(u-55296<<10|n-56320)}else u&&(t-=3)>-1&&o.push(239,191,189);if(u=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function cr(e){return function(e){var t,n,r,u,o,a;Cn||bn();var i=e.length;if(i%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===e[i-2]?2:"="===e[i-1]?1:0,a=new En(3*i/4-o),r=o>0?i-4:i;var s=0;for(t=0,n=0;t<r;t+=4,n+=3)u=yn[e.charCodeAt(t)]<<18|yn[e.charCodeAt(t+1)]<<12|yn[e.charCodeAt(t+2)]<<6|yn[e.charCodeAt(t+3)],a[s++]=u>>16&255,a[s++]=u>>8&255,a[s++]=255&u;return 2===o?(u=yn[e.charCodeAt(t)]<<2|yn[e.charCodeAt(t+1)]>>4,a[s++]=255&u):1===o&&(u=yn[e.charCodeAt(t)]<<10|yn[e.charCodeAt(t+1)]<<4|yn[e.charCodeAt(t+2)]>>2,a[s++]=u>>8&255,a[s++]=255&u),a}(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(ir,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function pr(e,t,n,r){for(var u=0;u<r&&!(u+n>=t.length||u>=e.length);++u)t[u+n]=e[u];return u}function dr(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var fr=Ue(fn);var hr=class{constructor(e,t){(t=t||{}).readChunk||(t.readChunk=1024),t.newLineCharacter?t.newLineCharacter=t.newLineCharacter.charCodeAt(0):t.newLineCharacter=10,this.fd="number"==typeof e?e:fr.openSync(e,"r"),this.options=t,this.newLineCharacter=t.newLineCharacter,this.reset()}_searchInBuffer(e,t){let n=-1;for(let r=0;r<=e.length;r++){if(e[r]===t){n=r;break}}return n}reset(){this.eofReached=!1,this.linesCache=[],this.fdPosition=0}close(){fr.closeSync(this.fd),this.fd=null}_extractLines(e){let t;const n=[];let r=0,u=0;for(;;){let o=e[r++];if(o===this.newLineCharacter)t=e.slice(u,r),n.push(t),u=r;else if(!o)break}let o=e.slice(u,r);return o.length&&n.push(o),n}_readChunk(e){let t,n=0;const r=[];do{const e=new kn(this.options.readChunk);t=fr.readSync(this.fd,e,0,this.options.readChunk,this.fdPosition),n+=t,this.fdPosition=this.fdPosition+t,r.push(e)}while(t&&-1===this._searchInBuffer(r[r.length-1],this.options.newLineCharacter));let u=kn.concat(r);return t<this.options.readChunk&&(this.eofReached=!0,u=u.slice(0,n)),n&&(this.linesCache=this._extractLines(u),e&&(this.linesCache[0]=kn.concat([e,this.linesCache[0]]))),n}next(){if(!this.fd)return!1;let e,t=!1;if(this.eofReached&&0===this.linesCache.length)return t;if(this.linesCache.length||(e=this._readChunk()),this.linesCache.length){t=this.linesCache.shift();10!==t[t.length-1]&&(e=this._readChunk(t),e&&(t=this.linesCache.shift()))}return this.eofReached&&0===this.linesCache.length&&this.close(),t&&t[t.length-1]===this.newLineCharacter&&(t=t.slice(0,t.length-1)),t}};var mr=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var u=e[t];r[u[0]]=u[1]}return r};class gr extends Error{}class Dr extends Error{}class yr extends Error{}var Er={ConfigError:gr,DebugError:Dr,UndefinedParserError:yr},Cr=function(e,t){return(Cr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */var br=function(){return(br=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)};function Ar(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function vr(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,u,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){u={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return a}function Fr(e){return this instanceof Fr?(this.v=e,this):new Fr(e)}var xr=Object.freeze({__proto__:null,__extends:function(e,t){function n(){this.constructor=e}Cr(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},get __assign(){return br},__rest:function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(r=Object.getOwnPropertySymbols(e);u<r.length;u++)t.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(n[r[u]]=e[r[u]])}return n},__decorate:function(e,t,n,r){var u,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(u=e[i])&&(a=(o<3?u(a):o>3?u(t,n,a):u(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__param:function(e,t){return function(n,r){t(n,r,e)}},__metadata:function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter:function(e,t,n,r){return new(n||(n=Promise))((function(u,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function i(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},__generator:function(e,t){var n,r,u,o,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(u=2&o[0]?r.return:o[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,o[1])).done)return u;switch(r=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(u=a.trys,(u=u.length>0&&u[u.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){a.label=o[1];break}if(6===o[0]&&a.label<u[1]){a.label=u[1],u=o;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(o);break}u[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},__createBinding:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},__exportStar:function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])},__values:Ar,__read:vr,__spread:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(vr(arguments[t]));return e},__spreadArrays:function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),u=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,i=o.length;a<i;a++,u++)r[u]=o[a];return r},__await:Fr,__asyncGenerator:function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,u=n.apply(e,t||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){u[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=u[e](t)).value instanceof Fr?Promise.resolve(n.value.v).then(s,l):c(o[0][2],n)}catch(e){c(o[0][3],e)}var n}function s(e){i("next",e)}function l(e){i("throw",e)}function c(e,t){e(t),o.shift(),o.length&&i(o[0][0],o[0][1])}},__asyncDelegator:function(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,u){t[r]=e[r]?function(t){return(n=!n)?{value:Fr(e[r](t)),done:"return"===r}:u?u(t):t}:u}},__asyncValues:function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=Ar(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,u){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,u,(t=e[n](t)).done,t.value)}))}}},__makeTemplateObject:function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__importStar:function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},__importDefault:function(e){return e&&e.__esModule?e:{default:e}},__classPrivateFieldGet:function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet:function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}}),Sr=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.apiDescriptor={key:e=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)?e:JSON.stringify(e),value(e){if(null===e||"object"!=typeof e)return JSON.stringify(e);if(Array.isArray(e))return"[".concat(e.map(e=>t.apiDescriptor.value(e)).join(", "),"]");const n=Object.keys(e);return 0===n.length?"{}":"{ ".concat(n.map(n=>"".concat(t.apiDescriptor.key(n),": ").concat(t.apiDescriptor.value(e[n]))).join(", ")," }")},pair:({key:e,value:n})=>t.apiDescriptor.value({[e]:n})}})),wr=Ue(xr),Br=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),wr.__exportStar(Sr,t)})),Tr=/[|\\{}()[\]^$+*?.]/g,kr=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(Tr,"\\$&")},Nr={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Or=$e((function(e){var t={};for(var n in Nr)Nr.hasOwnProperty(n)&&(t[Nr[n]]=n);var r=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var u in r)if(r.hasOwnProperty(u)){if(!("channels"in r[u]))throw new Error("missing channels property: "+u);if(!("labels"in r[u]))throw new Error("missing channel labels property: "+u);if(r[u].labels.length!==r[u].channels)throw new Error("channel and label counts mismatch: "+u);var o=r[u].channels,a=r[u].labels;delete r[u].channels,delete r[u].labels,Object.defineProperty(r[u],"channels",{value:o}),Object.defineProperty(r[u],"labels",{value:a})}r.rgb.hsl=function(e){var t,n,r=e[0]/255,u=e[1]/255,o=e[2]/255,a=Math.min(r,u,o),i=Math.max(r,u,o),s=i-a;return i===a?t=0:r===i?t=(u-o)/s:u===i?t=2+(o-r)/s:o===i&&(t=4+(r-u)/s),(t=Math.min(60*t,360))<0&&(t+=360),n=(a+i)/2,[t,100*(i===a?0:n<=.5?s/(i+a):s/(2-i-a)),100*n]},r.rgb.hsv=function(e){var t,n,r,u,o,a=e[0]/255,i=e[1]/255,s=e[2]/255,l=Math.max(a,i,s),c=l-Math.min(a,i,s),p=function(e){return(l-e)/6/c+.5};return 0===c?u=o=0:(o=c/l,t=p(a),n=p(i),r=p(s),a===l?u=r-n:i===l?u=1/3+t-r:s===l&&(u=2/3+n-t),u<0?u+=1:u>1&&(u-=1)),[360*u,100*o,100*l]},r.rgb.hwb=function(e){var t=e[0],n=e[1],u=e[2];return[r.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(n,u))),100*(u=1-1/255*Math.max(t,Math.max(n,u)))]},r.rgb.cmyk=function(e){var t,n=e[0]/255,r=e[1]/255,u=e[2]/255;return[100*((1-n-(t=Math.min(1-n,1-r,1-u)))/(1-t)||0),100*((1-r-t)/(1-t)||0),100*((1-u-t)/(1-t)||0),100*t]},r.rgb.keyword=function(e){var n=t[e];if(n)return n;var r,u,o,a=1/0;for(var i in Nr)if(Nr.hasOwnProperty(i)){var s=Nr[i],l=(u=e,o=s,Math.pow(u[0]-o[0],2)+Math.pow(u[1]-o[1],2)+Math.pow(u[2]-o[2],2));l<a&&(a=l,r=i)}return r},r.keyword.rgb=function(e){return Nr[e]},r.rgb.xyz=function(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},r.rgb.lab=function(e){var t=r.rgb.xyz(e),n=t[0],u=t[1],o=t[2];return u/=100,o/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(u=u>.008856?Math.pow(u,1/3):7.787*u+16/116)-16,500*(n-u),200*(u-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},r.hsl.rgb=function(e){var t,n,r,u,o,a=e[0]/360,i=e[1]/100,s=e[2]/100;if(0===i)return[o=255*s,o,o];t=2*s-(n=s<.5?s*(1+i):s+i-s*i),u=[0,0,0];for(var l=0;l<3;l++)(r=a+1/3*-(l-1))<0&&r++,r>1&&r--,o=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,u[l]=255*o;return u},r.hsl.hsv=function(e){var t=e[0],n=e[1]/100,r=e[2]/100,u=n,o=Math.max(r,.01);return n*=(r*=2)<=1?r:2-r,u*=o<=1?o:2-o,[t,100*(0===r?2*u/(o+u):2*n/(r+n)),100*((r+n)/2)]},r.hsv.rgb=function(e){var t=e[0]/60,n=e[1]/100,r=e[2]/100,u=Math.floor(t)%6,o=t-Math.floor(t),a=255*r*(1-n),i=255*r*(1-n*o),s=255*r*(1-n*(1-o));switch(r*=255,u){case 0:return[r,s,a];case 1:return[i,r,a];case 2:return[a,r,s];case 3:return[a,i,r];case 4:return[s,a,r];case 5:return[r,a,i]}},r.hsv.hsl=function(e){var t,n,r,u=e[0],o=e[1]/100,a=e[2]/100,i=Math.max(a,.01);return r=(2-o)*a,n=o*i,[u,100*(n=(n/=(t=(2-o)*i)<=1?t:2-t)||0),100*(r/=2)]},r.hwb.rgb=function(e){var t,n,r,u,o,a,i,s=e[0]/360,l=e[1]/100,c=e[2]/100,p=l+c;switch(p>1&&(l/=p,c/=p),r=6*s-(t=Math.floor(6*s)),0!=(1&t)&&(r=1-r),u=l+r*((n=1-c)-l),t){default:case 6:case 0:o=n,a=u,i=l;break;case 1:o=u,a=n,i=l;break;case 2:o=l,a=n,i=u;break;case 3:o=l,a=u,i=n;break;case 4:o=u,a=l,i=n;break;case 5:o=n,a=l,i=u}return[255*o,255*a,255*i]},r.cmyk.rgb=function(e){var t=e[0]/100,n=e[1]/100,r=e[2]/100,u=e[3]/100;return[255*(1-Math.min(1,t*(1-u)+u)),255*(1-Math.min(1,n*(1-u)+u)),255*(1-Math.min(1,r*(1-u)+u))]},r.xyz.rgb=function(e){var t,n,r,u=e[0]/100,o=e[1]/100,a=e[2]/100;return n=-.9689*u+1.8758*o+.0415*a,r=.0557*u+-.204*o+1.057*a,t=(t=3.2406*u+-1.5372*o+-.4986*a)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,[255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1))]},r.xyz.lab=function(e){var t=e[0],n=e[1],r=e[2];return n/=100,r/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},r.lab.xyz=function(e){var t,n,r,u=e[0];t=e[1]/500+(n=(u+16)/116),r=n-e[2]/200;var o=Math.pow(n,3),a=Math.pow(t,3),i=Math.pow(r,3);return n=o>.008856?o:(n-16/116)/7.787,t=a>.008856?a:(t-16/116)/7.787,r=i>.008856?i:(r-16/116)/7.787,[t*=95.047,n*=100,r*=108.883]},r.lab.lch=function(e){var t,n=e[0],r=e[1],u=e[2];return(t=360*Math.atan2(u,r)/2/Math.PI)<0&&(t+=360),[n,Math.sqrt(r*r+u*u),t]},r.lch.lab=function(e){var t,n=e[0],r=e[1];return t=e[2]/360*2*Math.PI,[n,r*Math.cos(t),r*Math.sin(t)]},r.rgb.ansi16=function(e){var t=e[0],n=e[1],u=e[2],o=1 in arguments?arguments[1]:r.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(u/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return 2===o&&(a+=60),a},r.hsv.ansi16=function(e){return r.rgb.ansi16(r.hsv.rgb(e),e[2])},r.rgb.ansi256=function(e){var t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},r.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},r.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var n;return e-=16,[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},r.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},r.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var n=t[0];3===t[0].length&&(n=n.split("").map((function(e){return e+e})).join(""));var r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},r.rgb.hcg=function(e){var t,n=e[0]/255,r=e[1]/255,u=e[2]/255,o=Math.max(Math.max(n,r),u),a=Math.min(Math.min(n,r),u),i=o-a;return t=i<=0?0:o===n?(r-u)/i%6:o===r?2+(u-n)/i:4+(n-r)/i+4,t/=6,[360*(t%=1),100*i,100*(i<1?a/(1-i):0)]},r.hsl.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=1,u=0;return(r=n<.5?2*t*n:2*t*(1-n))<1&&(u=(n-.5*r)/(1-r)),[e[0],100*r,100*u]},r.hsv.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=t*n,u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},r.hcg.rgb=function(e){var t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];var u,o=[0,0,0],a=t%1*6,i=a%1,s=1-i;switch(Math.floor(a)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return u=(1-n)*r,[255*(n*o[0]+u),255*(n*o[1]+u),255*(n*o[2]+u)]},r.hcg.hsv=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t),r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},r.hcg.hsl=function(e){var t=e[1]/100,n=e[2]/100*(1-t)+.5*t,r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},r.hcg.hwb=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},r.hwb.hcg=function(e){var t=e[1]/100,n=1-e[2]/100,r=n-t,u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},r.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},r.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},r.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},r.gray.hsl=r.gray.hsv=function(e){return[0,0,e[0]]},r.gray.hwb=function(e){return[0,100,e[0]]},r.gray.cmyk=function(e){return[0,0,0,e[0]]},r.gray.lab=function(e){return[e[0],0,0]},r.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},r.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}}));function Pr(e){var t=function(){for(var e={},t=Object.keys(Or),n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;)for(var r=n.pop(),u=Object.keys(Or[r]),o=u.length,a=0;a<o;a++){var i=u[a],s=t[i];-1===s.distance&&(s.distance=t[r].distance+1,s.parent=r,n.unshift(i))}return t}function _r(e,t){return function(n){return t(e(n))}}function Ir(e,t){for(var n=[t[e].parent,e],r=Or[t[e].parent][e],u=t[e].parent;t[u].parent;)n.unshift(t[u].parent),r=_r(Or[t[u].parent][u],r),u=t[u].parent;return r.conversion=n,r}var jr={};Object.keys(Or).forEach((function(e){jr[e]={},Object.defineProperty(jr[e],"channels",{value:Or[e].channels}),Object.defineProperty(jr[e],"labels",{value:Or[e].labels});var t=function(e){for(var t=Pr(e),n={},r=Object.keys(t),u=r.length,o=0;o<u;o++){var a=r[o];null!==t[a].parent&&(n[a]=Ir(a,t))}return n}(e);Object.keys(t).forEach((function(n){var r=t[n];jr[e][n]=function(e){var t=function(t){if(null==t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var n=e(t);if("object"==typeof n)for(var r=n.length,u=0;u<r;u++)n[u]=Math.round(n[u]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(r),jr[e][n].raw=function(e){var t=function(t){return null==t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))}));var Mr=jr,Lr=$e((function(e){const t=(e,t)=>function(){const n=e.apply(Mr,arguments);return"[".concat(n+t,"m")},n=(e,t)=>function(){const n=e.apply(Mr,arguments);return"[".concat(38+t,";5;").concat(n,"m")},r=(e,t)=>function(){const n=e.apply(Mr,arguments);return"[".concat(38+t,";2;").concat(n[0],";").concat(n[1],";").concat(n[2],"m")};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,u={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};u.color.grey=u.color.gray;for(const t of Object.keys(u)){const n=u[t];for(const t of Object.keys(n)){const r=n[t];u[t]={open:"[".concat(r[0],"m"),close:"[".concat(r[1],"m")},n[t]=u[t],e.set(r[0],r[1])}Object.defineProperty(u,t,{value:n,enumerable:!1}),Object.defineProperty(u,"codes",{value:e,enumerable:!1})}const o=e=>e,a=(e,t,n)=>[e,t,n];u.color.close="[39m",u.bgColor.close="[49m",u.color.ansi={ansi:t(o,0)},u.color.ansi256={ansi256:n(o,0)},u.color.ansi16m={rgb:r(a,0)},u.bgColor.ansi={ansi:t(o,10)},u.bgColor.ansi256={ansi256:n(o,10)},u.bgColor.ansi16m={rgb:r(a,10)};for(let e of Object.keys(Mr)){if("object"!=typeof Mr[e])continue;const o=Mr[e];"ansi16"===e&&(e="ansi"),"ansi16"in o&&(u.color.ansi[e]=t(o.ansi16,0),u.bgColor.ansi[e]=t(o.ansi16,10)),"ansi256"in o&&(u.color.ansi256[e]=n(o.ansi256,0),u.bgColor.ansi256[e]=n(o.ansi256,10)),"rgb"in o&&(u.color.ansi16m[e]=r(o.rgb,0),u.bgColor.ansi16m[e]=r(o.rgb,10))}return u}})})),Rr={EOL:"\n"},qr=(e,t)=>{t=t||Re.argv;const n=e.startsWith("-")?"":1===e.length?"-":"--",r=t.indexOf(n+e),u=t.indexOf("--");return-1!==r&&(-1===u||r<u)};const Vr=Re.env;let Wr;function $r(e){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(function(e){if(!1===Wr)return 0;if(qr("color=16m")||qr("color=full")||qr("color=truecolor"))return 3;if(qr("color=256"))return 2;if(e&&!e.isTTY&&!0!==Wr)return 0;const t=Wr?1:0;if("win32"===Re.platform){const e=Rr.release().split(".");return Number(Re.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in Vr)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in Vr)||"codeship"===Vr.CI_NAME?1:t;if("TEAMCITY_VERSION"in Vr)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Vr.TEAMCITY_VERSION)?1:0;if("truecolor"===Vr.COLORTERM)return 3;if("TERM_PROGRAM"in Vr){const e=parseInt((Vr.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(Vr.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(Vr.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Vr.TERM)||"COLORTERM"in Vr?1:(Vr.TERM,t)}(e))}qr("no-color")||qr("no-colors")||qr("color=false")?Wr=!1:(qr("color")||qr("colors")||qr("color=true")||qr("color=always"))&&(Wr=!0),"FORCE_COLOR"in Vr&&(Wr=0===Vr.FORCE_COLOR.length||0!==parseInt(Vr.FORCE_COLOR,10));var Ur={supportsColor:$r,stdout:$r(Re.stdout),stderr:$r(Re.stderr)};const zr=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,Jr=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,Gr=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,Hr=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,Xr=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function Yr(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):Xr.get(e)||e}function Kr(e,t){const n=[],r=t.trim().split(/\s*,\s*/g);let u;for(const t of r)if(isNaN(t)){if(!(u=t.match(Gr)))throw new Error("Invalid Chalk template style argument: ".concat(t," (in style '").concat(e,"')"));n.push(u[2].replace(Hr,(e,t,n)=>t?Yr(t):n))}else n.push(Number(t));return n}function Qr(e){Jr.lastIndex=0;const t=[];let n;for(;null!==(n=Jr.exec(e));){const e=n[1];if(n[2]){const r=Kr(e,n[2]);t.push([e].concat(r))}else t.push([e])}return t}function Zr(e,t){const n={};for(const e of t)for(const t of e.styles)n[t[0]]=e.inverse?null:t.slice(1);let r=e;for(const e of Object.keys(n))if(Array.isArray(n[e])){if(!(e in r))throw new Error("Unknown Chalk style: ".concat(e));r=n[e].length>0?r[e].apply(r,n[e]):r[e]}return r}var eu=(e,t)=>{const n=[],r=[];let u=[];if(t.replace(zr,(t,o,a,i,s,l)=>{if(o)u.push(Yr(o));else if(i){const t=u.join("");u=[],r.push(0===n.length?t:Zr(e,n)(t)),n.push({inverse:a,styles:Qr(i)})}else if(s){if(0===n.length)throw new Error("Found extraneous } in Chalk template literal");r.push(Zr(e,n)(u.join(""))),u=[],n.pop()}else u.push(l)}),r.push(u.join("")),n.length>0){const e="Chalk template literal is missing ".concat(n.length," closing bracket").concat(1===n.length?"":"s"," (`}`)");throw new Error(e)}return r.join("")},tu=$e((function(e){const t=Ur.stdout,n="win32"===Re.platform&&!(Re.env.TERM||"").toLowerCase().startsWith("xterm"),r=["ansi","ansi","ansi256","ansi16m"],u=new Set(["gray"]),o=Object.create(null);function a(e,n){n=n||{};const r=t?t.level:0;e.level=void 0===n.level?r:n.level,e.enabled="enabled"in n?n.enabled:e.level>0}function i(e){if(!this||!(this instanceof i)||this.template){const t={};return a(t,e),t.template=function(){const e=[].slice.call(arguments);return p.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,i.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=i,t.template}a(this,e)}n&&(Lr.blue.open="[94m");for(const e of Object.keys(Lr))Lr[e].closeRe=new RegExp(kr(Lr[e].close),"g"),o[e]={get(){const t=Lr[e];return l.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}};o.visible={get(){return l.call(this,this._styles||[],!0,"visible")}},Lr.color.closeRe=new RegExp(kr(Lr.color.close),"g");for(const e of Object.keys(Lr.color.ansi))u.has(e)||(o[e]={get(){const t=this.level;return function(){const n=Lr.color[r[t]][e].apply(null,arguments),u={open:n,close:Lr.color.close,closeRe:Lr.color.closeRe};return l.call(this,this._styles?this._styles.concat(u):[u],this._empty,e)}}});Lr.bgColor.closeRe=new RegExp(kr(Lr.bgColor.close),"g");for(const e of Object.keys(Lr.bgColor.ansi)){if(u.has(e))continue;o["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const t=this.level;return function(){const n=Lr.bgColor[r[t]][e].apply(null,arguments),u={open:n,close:Lr.bgColor.close,closeRe:Lr.bgColor.closeRe};return l.call(this,this._styles?this._styles.concat(u):[u],this._empty,e)}}}}const s=Object.defineProperties(()=>{},o);function l(e,t,n){const r=function e(){return c.apply(e,arguments)};r._styles=e,r._empty=t;const u=this;return Object.defineProperty(r,"level",{enumerable:!0,get:()=>u.level,set(e){u.level=e}}),Object.defineProperty(r,"enabled",{enumerable:!0,get:()=>u.enabled,set(e){u.enabled=e}}),r.hasGrey=this.hasGrey||"gray"===n||"grey"===n,r.__proto__=s,r}function c(){const e=arguments,t=e.length;let r=String(arguments[0]);if(0===t)return"";if(t>1)for(let n=1;n<t;n++)r+=" "+e[n];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;const u=Lr.dim.open;n&&this.hasGrey&&(Lr.dim.open="");for(const e of this._styles.slice().reverse())r=e.open+r.replace(e.closeRe,e.open)+e.close,r=r.replace(/\r?\n/g,"".concat(e.close,"$&").concat(e.open));return Lr.dim.open=u,r}function p(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");const n=[].slice.call(arguments,2),r=[t.raw[0]];for(let e=1;e<t.length;e++)r.push(String(n[e-1]).replace(/[{}\\]/g,"\\$&")),r.push(String(t.raw[e]));return eu(e,r.join(""))}Object.defineProperties(i.prototype,o),e.exports=i(),e.exports.supportsColor=t,e.exports.default=e.exports})),nu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.commonDeprecatedHandler=(e,t,{descriptor:n})=>{const r=["".concat(tu.default.yellow("string"==typeof e?n.key(e):n.pair(e))," is deprecated")];return t&&r.push("we now treat it as ".concat(tu.default.blue("string"==typeof t?n.key(t):n.pair(t)))),r.join("; ")+"."}})),ru=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),wr.__exportStar(nu,t)})),uu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.commonInvalidHandler=(e,t,n)=>["Invalid ".concat(tu.default.red(n.descriptor.key(e))," value."),"Expected ".concat(tu.default.blue(n.schemas[e].expected(n)),","),"but received ".concat(tu.default.red(n.descriptor.value(t)),".")].join(" ")})),ou=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),wr.__exportStar(uu,t)})),au=[],iu=[],su=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.levenUnknownHandler=(e,t,{descriptor:n,logger:r,schemas:u})=>{const o=["Ignored unknown option ".concat(tu.default.yellow(n.pair({key:e,value:t})),".")],a=Object.keys(u).sort().find(t=>function(e,t){if(e===t)return 0;var n=e;e.length>t.length&&(e=t,t=n);var r=e.length,u=t.length;if(0===r)return u;if(0===u)return r;for(;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-u);)r--,u--;if(0===r)return u;for(var o,a,i,s,l=0;l<r&&e.charCodeAt(l)===t.charCodeAt(l);)l++;if(u-=l,0==(r-=l))return u;for(var c=0,p=0;c<r;)iu[l+c]=e.charCodeAt(l+c),au[c]=++c;for(;p<u;)for(o=t.charCodeAt(l+p),i=p++,a=p,c=0;c<r;c++)s=o===iu[l+c]?i:i+1,i=au[c],a=au[c]=i>a?s>a?a+1:s:s>i?i+1:s;return a}(e,t)<3);a&&o.push("Did you mean ".concat(tu.default.blue(n.key(a)),"?")),r.warn(o.join(" "))}})),lu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),wr.__exportStar(su,t)})),cu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),wr.__exportStar(ru,t),wr.__exportStar(ou,t),wr.__exportStar(lu,t)})),pu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const n=["default","expected","validate","deprecated","forward","redirect","overlap","preprocess","postprocess"];function r(e,t){const r=new e(t),a=Object.create(r);for(const e of n)e in t&&(a[e]=o(t[e],r,u.prototype[e].length));return a}t.createSchema=r;class u{constructor(e){this.name=e.name}static create(e){return r(this,e)}default(e){}expected(e){return"nothing"}validate(e,t){return!1}deprecated(e,t){return!1}forward(e,t){}redirect(e,t){}overlap(e,t,n){return e}preprocess(e,t){return e}postprocess(e,t){return e}}function o(e,t,n){return"function"==typeof e?(...r)=>e(...r.slice(0,n-1),t,...r.slice(n-1)):()=>e}t.Schema=u})),du=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends pu.Schema{constructor(e){super(e),this._sourceName=e.sourceName}expected(e){return e.schemas[this._sourceName].expected(e)}validate(e,t){return t.schemas[this._sourceName].validate(e,t)}redirect(e,t){return this._sourceName}}t.AliasSchema=n})),fu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends pu.Schema{expected(){return"anything"}validate(){return!0}}t.AnySchema=n})),hu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends pu.Schema{constructor(e){var{valueSchema:t,name:n=t.name}=e,r=wr.__rest(e,["valueSchema","name"]);super(Object.assign({},r,{name:n})),this._valueSchema=t}expected(e){return"an array of ".concat(this._valueSchema.expected(e))}validate(e,t){if(!Array.isArray(e))return!1;const n=[];for(const r of e){const e=t.normalizeValidateResult(this._valueSchema.validate(r,t),r);!0!==e&&n.push(e.value)}return 0===n.length||{value:n}}deprecated(e,t){const n=[];for(const r of e){const e=t.normalizeDeprecatedResult(this._valueSchema.deprecated(r,t),r);!1!==e&&n.push(...e.map(({value:e})=>({value:[e]})))}return n}forward(e,t){const n=[];for(const u of e){const e=t.normalizeForwardResult(this._valueSchema.forward(u,t),u);n.push(...e.map(r))}return n}redirect(e,t){const n=[],u=[];for(const o of e){const e=t.normalizeRedirectResult(this._valueSchema.redirect(o,t),o);"remain"in e&&n.push(e.remain),u.push(...e.redirect.map(r))}return 0===n.length?{redirect:u}:{redirect:u,remain:n}}overlap(e,t){return e.concat(t)}}function r({from:e,to:t}){return{from:[e],to:t}}t.ArraySchema=n})),mu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends pu.Schema{expected(){return"true or false"}validate(e){return"boolean"==typeof e}}t.BooleanSchema=n})),gu=$e((function(e,t){function n(e,t){return"string"==typeof e||"key"in e?{from:t,to:e}:"from"in e?{from:e.from,to:e.to}:{from:t,to:e.to}}function r(e,t){return void 0===e?[]:Array.isArray(e)?e.map(e=>n(e,t)):[n(e,t)]}Object.defineProperty(t,"__esModule",{value:!0}),t.recordFromArray=function(e,t){const n=Object.create(null);for(const r of e){const e=r[t];if(n[e])throw new Error("Duplicate ".concat(t," ").concat(JSON.stringify(e)));n[e]=r}return n},t.mapFromArray=function(e,t){const n=new Map;for(const r of e){const e=r[t];if(n.has(e))throw new Error("Duplicate ".concat(t," ").concat(JSON.stringify(e)));n.set(e,r)}return n},t.createAutoChecklist=function(){const e=Object.create(null);return t=>{const n=JSON.stringify(t);return!!e[n]||(e[n]=!0,!1)}},t.partition=function(e,t){const n=[],r=[];for(const u of e)t(u)?n.push(u):r.push(u);return[n,r]},t.isInt=function(e){return e===Math.floor(e)},t.comparePrimitive=function(e,t){if(e===t)return 0;const n=typeof e,r=typeof t,u=["undefined","object","boolean","number","string"];return n!==r?u.indexOf(n)-u.indexOf(r):"string"!==n?Number(e)-Number(t):e.localeCompare(t)},t.normalizeDefaultResult=function(e){return void 0===e?{}:e},t.normalizeValidateResult=function(e,t){return!0===e||(!1===e?{value:t}:e)},t.normalizeDeprecatedResult=function(e,t,n=!1){return!1!==e&&(!0===e?!!n||[{value:t}]:"value"in e?[e]:0!==e.length&&e)},t.normalizeTransferResult=n,t.normalizeForwardResult=r,t.normalizeRedirectResult=function(e,t){const n=r("object"==typeof e&&"redirect"in e?e.redirect:e,t);return 0===n.length?{remain:t,redirect:n}:"object"==typeof e&&"remain"in e?{remain:e.remain,redirect:n}:{redirect:n}}})),Du=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends pu.Schema{constructor(e){super(e),this._choices=gu.mapFromArray(e.choices.map(e=>e&&"object"==typeof e?e:{value:e}),"value")}expected({descriptor:e}){const t=Array.from(this._choices.keys()).map(e=>this._choices.get(e)).filter(e=>!e.deprecated).map(e=>e.value).sort(gu.comparePrimitive).map(e.value),n=t.slice(0,-2),r=t.slice(-2);return n.concat(r.join(" or ")).join(", ")}validate(e){return this._choices.has(e)}deprecated(e){const t=this._choices.get(e);return!(!t||!t.deprecated)&&{value:e}}forward(e){const t=this._choices.get(e);return t?t.forward:void 0}redirect(e){const t=this._choices.get(e);return t?t.redirect:void 0}}t.ChoiceSchema=n})),yu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends pu.Schema{expected(){return"a number"}validate(e,t){return"number"==typeof e}}t.NumberSchema=n})),Eu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends yu.NumberSchema{expected(){return"an integer"}validate(e,t){return!0===t.normalizeValidateResult(super.validate(e,t),e)&&gu.isInt(e)}}t.IntegerSchema=n})),Cu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n extends pu.Schema{expected(){return"a string"}validate(e){return"string"==typeof e}}t.StringSchema=n})),bu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),wr.__exportStar(du,t),wr.__exportStar(fu,t),wr.__exportStar(hu,t),wr.__exportStar(mu,t),wr.__exportStar(Du,t),wr.__exportStar(Eu,t),wr.__exportStar(yu,t),wr.__exportStar(Cu,t)})),Au=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDescriptor=Sr.apiDescriptor,t.defaultUnknownHandler=su.levenUnknownHandler,t.defaultInvalidHandler=ou.commonInvalidHandler,t.defaultDeprecatedHandler=nu.commonDeprecatedHandler})),vu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.normalize=(e,t,r)=>new n(t,r).normalize(e);class n{constructor(e,t){const{logger:n=console,descriptor:r=Au.defaultDescriptor,unknown:u=Au.defaultUnknownHandler,invalid:o=Au.defaultInvalidHandler,deprecated:a=Au.defaultDeprecatedHandler}=t||{};this._utils={descriptor:r,logger:n||{warn:()=>{}},schemas:gu.recordFromArray(e,"name"),normalizeDefaultResult:gu.normalizeDefaultResult,normalizeDeprecatedResult:gu.normalizeDeprecatedResult,normalizeForwardResult:gu.normalizeForwardResult,normalizeRedirectResult:gu.normalizeRedirectResult,normalizeValidateResult:gu.normalizeValidateResult},this._unknownHandler=u,this._invalidHandler=o,this._deprecatedHandler=a,this.cleanHistory()}cleanHistory(){this._hasDeprecationWarned=gu.createAutoChecklist()}normalize(e){const t={},n=[e],r=()=>{for(;0!==n.length;){const e=n.shift(),r=this._applyNormalization(e,t);n.push(...r)}};r();for(const e of Object.keys(this._utils.schemas)){const r=this._utils.schemas[e];if(!(e in t)){const t=gu.normalizeDefaultResult(r.default(this._utils));"value"in t&&n.push({[e]:t.value})}}r();for(const e of Object.keys(this._utils.schemas)){const n=this._utils.schemas[e];e in t&&(t[e]=n.postprocess(t[e],this._utils))}return t}_applyNormalization(e,t){const n=[],[r,u]=gu.partition(Object.keys(e),e=>e in this._utils.schemas);for(const u of r){const r=this._utils.schemas[u],o=r.preprocess(e[u],this._utils),a=gu.normalizeValidateResult(r.validate(o,this._utils),o);if(!0!==a){const{value:e}=a,t=this._invalidHandler(u,e,this._utils);throw"string"==typeof t?new Error(t):t}const i=({from:e,to:t})=>{n.push("string"==typeof t?{[t]:e}:{[t.key]:t.value})},s=({value:e,redirectTo:t})=>{const n=gu.normalizeDeprecatedResult(r.deprecated(e,this._utils),o,!0);if(!1!==n)if(!0===n)this._hasDeprecationWarned(u)||this._utils.logger.warn(this._deprecatedHandler(u,t,this._utils));else for(const{value:e}of n){const n={key:u,value:e};if(!this._hasDeprecationWarned(n)){const r="string"==typeof t?{key:t,value:e}:t;this._utils.logger.warn(this._deprecatedHandler(n,r,this._utils))}}};gu.normalizeForwardResult(r.forward(o,this._utils),o).forEach(i);const l=gu.normalizeRedirectResult(r.redirect(o,this._utils),o);if(l.redirect.forEach(i),"remain"in l){const e=l.remain;t[u]=u in t?r.overlap(t[u],e,this._utils):e,s({value:e})}for(const{from:e,to:t}of l.redirect)s({value:e,redirectTo:t})}for(const r of u){const u=e[r],o=this._unknownHandler(r,u,this._utils);if(o)for(const e of Object.keys(o)){const r={[e]:o[e]};e in this._utils.schemas?n.push(r):Object.assign(t,r)}}return n}}t.Normalizer=n})),Fu=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),wr.__exportStar(Br,t),wr.__exportStar(cu,t),wr.__exportStar(bu,t),wr.__exportStar(vu,t),wr.__exportStar(pu,t)}));const xu=[],Su=[],wu=(e,t)=>{if(e===t)return 0;const n=e;e.length>t.length&&(e=t,t=n);let r=e.length,u=t.length;for(;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-u);)r--,u--;let o,a,i,s,l=0;for(;l<r&&e.charCodeAt(l)===t.charCodeAt(l);)l++;if(r-=l,u-=l,0===r)return u;let c=0,p=0;for(;c<r;)Su[c]=e.charCodeAt(l+c),xu[c]=++c;for(;p<u;)for(o=t.charCodeAt(l+p),i=p++,a=p,c=0;c<r;c++)s=o===Su[c]?i:i+1,i=xu[c],a=xu[c]=i>a?s>a?a+1:s:s>i?i+1:s;return a};var Bu=wu,Tu=wu;Bu.default=Tu;var ku={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const Nu={};for(const e of Object.keys(ku))Nu[ku[e]]=e;const Ou={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Pu=Ou;for(const e of Object.keys(Ou)){if(!("channels"in Ou[e]))throw new Error("missing channels property: "+e);if(!("labels"in Ou[e]))throw new Error("missing channel labels property: "+e);if(Ou[e].labels.length!==Ou[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=Ou[e];delete Ou[e].channels,delete Ou[e].labels,Object.defineProperty(Ou[e],"channels",{value:t}),Object.defineProperty(Ou[e],"labels",{value:n})}function _u(e){const t=function(){const e={},t=Object.keys(Pu);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;){const e=n.pop(),r=Object.keys(Pu[e]);for(let u=r.length,o=0;o<u;o++){const u=r[o],a=t[u];-1===a.distance&&(a.distance=t[e].distance+1,a.parent=e,n.unshift(u))}}return t}function Iu(e,t){return function(n){return t(e(n))}}function ju(e,t){const n=[t[e].parent,e];let r=Pu[t[e].parent][e],u=t[e].parent;for(;t[u].parent;)n.unshift(t[u].parent),r=Iu(Pu[t[u].parent][u],r),u=t[u].parent;return r.conversion=n,r}Ou.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,u=Math.min(t,n,r),o=Math.max(t,n,r),a=o-u;let i,s;o===u?i=0:t===o?i=(n-r)/a:n===o?i=2+(r-t)/a:r===o&&(i=4+(t-n)/a),i=Math.min(60*i,360),i<0&&(i+=360);const l=(u+o)/2;return s=o===u?0:l<=.5?a/(o+u):a/(2-o-u),[i,100*s,100*l]},Ou.rgb.hsv=function(e){let t,n,r,u,o;const a=e[0]/255,i=e[1]/255,s=e[2]/255,l=Math.max(a,i,s),c=l-Math.min(a,i,s),p=function(e){return(l-e)/6/c+.5};return 0===c?(u=0,o=0):(o=c/l,t=p(a),n=p(i),r=p(s),a===l?u=r-n:i===l?u=1/3+t-r:s===l&&(u=2/3+n-t),u<0?u+=1:u>1&&(u-=1)),[360*u,100*o,100*l]},Ou.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const u=Ou.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[u,100*o,100*r]},Ou.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,u=Math.min(1-t,1-n,1-r);return[100*((1-t-u)/(1-u)||0),100*((1-n-u)/(1-u)||0),100*((1-r-u)/(1-u)||0),100*u]},Ou.rgb.keyword=function(e){const t=Nu[e];if(t)return t;let n,r=1/0;for(const t of Object.keys(ku)){const a=(o=ku[t],((u=e)[0]-o[0])**2+(u[1]-o[1])**2+(u[2]-o[2])**2);a<r&&(r=a,n=t)}var u,o;return n},Ou.keyword.rgb=function(e){return ku[e]},Ou.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*t+.3576*n+.1805*r),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},Ou.rgb.lab=function(e){const t=Ou.rgb.xyz(e);let n=t[0],r=t[1],u=t[2];n/=95.047,r/=100,u/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,u=u>.008856?u**(1/3):7.787*u+16/116;return[116*r-16,500*(n-r),200*(r-u)]},Ou.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let u,o,a;if(0===n)return a=255*r,[a,a,a];u=r<.5?r*(1+n):r+n-r*n;const i=2*r-u,s=[0,0,0];for(let e=0;e<3;e++)o=t+1/3*-(e-1),o<0&&o++,o>1&&o--,a=6*o<1?i+6*(u-i)*o:2*o<1?u:3*o<2?i+(u-i)*(2/3-o)*6:i,s[e]=255*a;return s},Ou.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,u=n;const o=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,u*=o<=1?o:2-o;return[t,100*(0===r?2*u/(o+u):2*n/(r+n)),100*((r+n)/2)]},Ou.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const u=Math.floor(t)%6,o=t-Math.floor(t),a=255*r*(1-n),i=255*r*(1-n*o),s=255*r*(1-n*(1-o));switch(r*=255,u){case 0:return[r,s,a];case 1:return[i,r,a];case 2:return[a,r,s];case 3:return[a,i,r];case 4:return[s,a,r];case 5:return[r,a,i]}},Ou.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,u=Math.max(r,.01);let o,a;a=(2-n)*r;const i=(2-n)*u;return o=n*u,o/=i<=1?i:2-i,o=o||0,a/=2,[t,100*o,100*a]},Ou.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const u=n+r;let o;u>1&&(n/=u,r/=u);const a=Math.floor(6*t),i=1-r;o=6*t-a,0!=(1&a)&&(o=1-o);const s=n+o*(i-n);let l,c,p;switch(a){default:case 6:case 0:l=i,c=s,p=n;break;case 1:l=s,c=i,p=n;break;case 2:l=n,c=i,p=s;break;case 3:l=n,c=s,p=i;break;case 4:l=s,c=n,p=i;break;case 5:l=i,c=n,p=s}return[255*l,255*c,255*p]},Ou.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,u=e[3]/100;return[255*(1-Math.min(1,t*(1-u)+u)),255*(1-Math.min(1,n*(1-u)+u)),255*(1-Math.min(1,r*(1-u)+u))]},Ou.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let u,o,a;return u=3.2406*t+-1.5372*n+-.4986*r,o=-.9689*t+1.8758*n+.0415*r,a=.0557*t+-.204*n+1.057*r,u=u>.0031308?1.055*u**(1/2.4)-.055:12.92*u,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,u=Math.min(Math.max(0,u),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[255*u,255*o,255*a]},Ou.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(t-n),200*(n-r)]},Ou.lab.xyz=function(e){let t,n,r;n=(e[0]+16)/116,t=e[1]/500+n,r=n-e[2]/200;const u=n**3,o=t**3,a=r**3;return n=u>.008856?u:(n-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,r=a>.008856?a:(r-16/116)/7.787,t*=95.047,n*=100,r*=108.883,[t,n,r]},Ou.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let u;u=360*Math.atan2(r,n)/2/Math.PI,u<0&&(u+=360);return[t,Math.sqrt(n*n+r*r),u]},Ou.lch.lab=function(e){const t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},Ou.rgb.ansi16=function(e,t=null){const[n,r,u]=e;let o=null===t?Ou.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),0===o)return 30;let a=30+(Math.round(u/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===o&&(a+=60),a},Ou.hsv.ansi16=function(e){return Ou.rgb.ansi16(Ou.hsv.rgb(e),e[2])},Ou.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];if(t===n&&n===r)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},Ou.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},Ou.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},Ou.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},Ou.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];3===t[0].length&&(n=n.split("").map(e=>e+e).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},Ou.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,u=Math.max(Math.max(t,n),r),o=Math.min(Math.min(t,n),r),a=u-o;let i,s;return i=a<1?o/(1-a):0,s=a<=0?0:u===t?(n-r)/a%6:u===n?2+(r-t)/a:4+(t-n)/a,s/=6,s%=1,[360*s,100*a,100*i]},Ou.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let u=0;return r<1&&(u=(n-.5*r)/(1-r)),[e[0],100*r,100*u]},Ou.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},Ou.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];const u=[0,0,0],o=t%1*6,a=o%1,i=1-a;let s=0;switch(Math.floor(o)){case 0:u[0]=1,u[1]=a,u[2]=0;break;case 1:u[0]=i,u[1]=1,u[2]=0;break;case 2:u[0]=0,u[1]=1,u[2]=a;break;case 3:u[0]=0,u[1]=i,u[2]=1;break;case 4:u[0]=a,u[1]=0,u[2]=1;break;default:u[0]=1,u[1]=0,u[2]=i}return s=(1-n)*r,[255*(n*u[0]+s),255*(n*u[1]+s),255*(n*u[2]+s)]},Ou.hcg.hsv=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);let r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},Ou.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},Ou.hcg.hwb=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},Ou.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},Ou.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},Ou.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},Ou.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},Ou.gray.hsl=function(e){return[0,0,e[0]]},Ou.gray.hsv=Ou.gray.hsl,Ou.gray.hwb=function(e){return[0,100,e[0]]},Ou.gray.cmyk=function(e){return[0,0,0,e[0]]},Ou.gray.lab=function(e){return[e[0],0,0]},Ou.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},Ou.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const Mu={};Object.keys(Pu).forEach(e=>{Mu[e]={},Object.defineProperty(Mu[e],"channels",{value:Pu[e].channels}),Object.defineProperty(Mu[e],"labels",{value:Pu[e].labels});const t=function(e){const t=_u(e),n={},r=Object.keys(t);for(let e=r.length,u=0;u<e;u++){const e=r[u];null!==t[e].parent&&(n[e]=ju(e,t))}return n}(e);Object.keys(t).forEach(n=>{const r=t[n];Mu[e][n]=function(e){const t=function(...t){const n=t[0];if(null==n)return n;n.length>1&&(t=n);const r=e(t);if("object"==typeof r)for(let e=r.length,t=0;t<e;t++)r[t]=Math.round(r[t]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(r),Mu[e][n].raw=function(e){const t=function(...t){const n=t[0];return null==n?n:(n.length>1&&(t=n),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)})});var Lu=Mu,Ru=$e((function(e){const t=(e,t)=>(...n)=>{const r=e(...n);return"[".concat(r+t,"m")},n=(e,t)=>(...n)=>{const r=e(...n);return"[".concat(38+t,";5;").concat(r,"m")},r=(e,t)=>(...n)=>{const r=e(...n);return"[".concat(38+t,";2;").concat(r[0],";").concat(r[1],";").concat(r[2],"m")},u=e=>e,o=(e,t,n)=>[e,t,n],a=(e,t,n)=>{Object.defineProperty(e,t,{get:()=>{const r=n();return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0}),r},enumerable:!0,configurable:!0})};let i;const s=(e,t,n,r)=>{void 0===i&&(i=Lu);const u=r?10:0,o={};for(const[r,a]of Object.entries(i)){const i="ansi16"===r?"ansi":r;r===t?o[i]=e(n,u):"object"==typeof a&&(o[i]=e(a[t],u))}return o};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,i={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};i.color.gray=i.color.blackBright,i.bgColor.bgGray=i.bgColor.bgBlackBright,i.color.grey=i.color.blackBright,i.bgColor.bgGrey=i.bgColor.bgBlackBright;for(const[t,n]of Object.entries(i)){for(const[t,r]of Object.entries(n))i[t]={open:"[".concat(r[0],"m"),close:"[".concat(r[1],"m")},n[t]=i[t],e.set(r[0],r[1]);Object.defineProperty(i,t,{value:n,enumerable:!1})}return Object.defineProperty(i,"codes",{value:e,enumerable:!1}),i.color.close="[39m",i.bgColor.close="[49m",a(i.color,"ansi",()=>s(t,"ansi16",u,!1)),a(i.color,"ansi256",()=>s(n,"ansi256",u,!1)),a(i.color,"ansi16m",()=>s(r,"rgb",o,!1)),a(i.bgColor,"ansi",()=>s(t,"ansi16",u,!0)),a(i.bgColor,"ansi256",()=>s(n,"ansi256",u,!0)),a(i.bgColor,"ansi16m",()=>s(r,"rgb",o,!0)),i}})})),qu={isatty:()=>!1},Vu=(e,t=Re.argv)=>{const n=e.startsWith("-")?"":1===e.length?"-":"--",r=t.indexOf(n+e),u=t.indexOf("--");return-1!==r&&(-1===u||r<u)};const{env:Wu}=Re;let $u;function Uu(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function zu(e,t){if(0===$u)return 0;if(Vu("color=16m")||Vu("color=full")||Vu("color=truecolor"))return 3;if(Vu("color=256"))return 2;if(e&&!t&&void 0===$u)return 0;const n=$u||0;if("dumb"===Wu.TERM)return n;if("win32"===Re.platform){const e=Rr.release().split(".");return Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in Wu)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in Wu)||"codeship"===Wu.CI_NAME?1:n;if("TEAMCITY_VERSION"in Wu)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Wu.TEAMCITY_VERSION)?1:0;if("GITHUB_ACTIONS"in Wu)return 1;if("truecolor"===Wu.COLORTERM)return 3;if("TERM_PROGRAM"in Wu){const e=parseInt((Wu.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(Wu.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(Wu.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Wu.TERM)||"COLORTERM"in Wu?1:n}Vu("no-color")||Vu("no-colors")||Vu("color=false")||Vu("color=never")?$u=0:(Vu("color")||Vu("colors")||Vu("color=true")||Vu("color=always"))&&($u=1),"FORCE_COLOR"in Wu&&($u="true"===Wu.FORCE_COLOR?1:"false"===Wu.FORCE_COLOR?0:0===Wu.FORCE_COLOR.length?1:Math.min(parseInt(Wu.FORCE_COLOR,10),3));var Ju={supportsColor:function(e){return Uu(zu(e,e&&e.isTTY))},stdout:Uu(zu(!0,qu.isatty(1))),stderr:Uu(zu(!0,qu.isatty(2)))};var Gu={stringReplaceAll:(e,t,n)=>{let r=e.indexOf(t);if(-1===r)return e;const u=t.length;let o=0,a="";do{a+=e.substr(o,r-o)+t+n,o=r+u,r=e.indexOf(t,o)}while(-1!==r);return a+=e.substr(o),a},stringEncaseCRLFWithFirstIndex:(e,t,n,r)=>{let u=0,o="";do{const a="\r"===e[r-1];o+=e.substr(u,(a?r-1:r)-u)+t+(a?"\r\n":"\n")+n,u=r+1,r=e.indexOf("\n",u)}while(-1!==r);return o+=e.substr(u),o}};const Hu=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,Xu=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,Yu=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,Ku=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,Qu=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function Zu(e){const t="u"===e[0],n="{"===e[1];return t&&!n&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):t&&n?String.fromCodePoint(parseInt(e.slice(2,-1),16)):Qu.get(e)||e}function eo(e,t){const n=[],r=t.trim().split(/\s*,\s*/g);let u;for(const t of r){const r=Number(t);if(Number.isNaN(r)){if(!(u=t.match(Yu)))throw new Error("Invalid Chalk template style argument: ".concat(t," (in style '").concat(e,"')"));n.push(u[2].replace(Ku,(e,t,n)=>t?Zu(t):n))}else n.push(r)}return n}function to(e){Xu.lastIndex=0;const t=[];let n;for(;null!==(n=Xu.exec(e));){const e=n[1];if(n[2]){const r=eo(e,n[2]);t.push([e].concat(r))}else t.push([e])}return t}function no(e,t){const n={};for(const e of t)for(const t of e.styles)n[t[0]]=e.inverse?null:t.slice(1);let r=e;for(const[e,t]of Object.entries(n))if(Array.isArray(t)){if(!(e in r))throw new Error("Unknown Chalk style: ".concat(e));r=t.length>0?r[e](...t):r[e]}return r}var ro=(e,t)=>{const n=[],r=[];let u=[];if(t.replace(Hu,(t,o,a,i,s,l)=>{if(o)u.push(Zu(o));else if(i){const t=u.join("");u=[],r.push(0===n.length?t:no(e,n)(t)),n.push({inverse:a,styles:to(i)})}else if(s){if(0===n.length)throw new Error("Found extraneous } in Chalk template literal");r.push(no(e,n)(u.join(""))),u=[],n.pop()}else u.push(l)}),r.push(u.join("")),n.length>0){const e="Chalk template literal is missing ".concat(n.length," closing bracket").concat(1===n.length?"":"s"," (`}`)");throw new Error(e)}return r.join("")};const{stdout:uo,stderr:oo}=Ju,{stringReplaceAll:ao,stringEncaseCRLFWithFirstIndex:io}=Gu,{isArray:so}=Array,lo=["ansi","ansi","ansi256","ansi16m"],co=Object.create(null);class po{constructor(e){return fo(e)}}const fo=e=>{const t={};return((e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const n=uo?uo.level:0;e.level=void 0===t.level?n:t.level})(t,e),t.template=(...e)=>bo(t.template,...e),Object.setPrototypeOf(t,ho.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},t.template.Instance=po,t.template};function ho(e){return fo(e)}for(const[e,t]of Object.entries(Ru))co[e]={get(){const n=yo(this,Do(t.open,t.close,this._styler),this._isEmpty);return Object.defineProperty(this,e,{value:n}),n}};co.visible={get(){const e=yo(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:e}),e}};const mo=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const e of mo)co[e]={get(){const{level:t}=this;return function(...n){const r=Do(Ru.color[lo[t]][e](...n),Ru.color.close,this._styler);return yo(this,r,this._isEmpty)}}};for(const e of mo){co["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const{level:t}=this;return function(...n){const r=Do(Ru.bgColor[lo[t]][e](...n),Ru.bgColor.close,this._styler);return yo(this,r,this._isEmpty)}}}}const go=Object.defineProperties(()=>{},Object.assign({},co,{level:{enumerable:!0,get(){return this._generator.level},set(e){this._generator.level=e}}})),Do=(e,t,n)=>{let r,u;return void 0===n?(r=e,u=t):(r=n.openAll+e,u=t+n.closeAll),{open:e,close:t,openAll:r,closeAll:u,parent:n}},yo=(e,t,n)=>{const r=(...e)=>so(e[0])&&so(e[0].raw)?Eo(r,bo(r,...e)):Eo(r,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(r,go),r._generator=e,r._styler=t,r._isEmpty=n,r},Eo=(e,t)=>{if(e.level<=0||!t)return e._isEmpty?"":t;let n=e._styler;if(void 0===n)return t;const{openAll:r,closeAll:u}=n;if(-1!==t.indexOf(""))for(;void 0!==n;)t=ao(t,n.close,n.open),n=n.parent;const o=t.indexOf("\n");return-1!==o&&(t=io(t,u,r,o)),r+t+u};let Co;const bo=(e,...t)=>{const[n]=t;if(!so(n)||!so(n.raw))return t.join(" ");const r=t.slice(1),u=[n.raw[0]];for(let e=1;e<n.length;e++)u.push(String(r[e-1]).replace(/[{}\\]/g,"\\$&"),String(n.raw[e]));return void 0===Co&&(Co=ro),Co(e,u.join(""))};Object.defineProperties(ho.prototype,co);const Ao=ho();Ao.supportsColor=uo,Ao.stderr=ho({level:oo?oo.level:0}),Ao.stderr.supportsColor=oo;var vo=Ao;var Fo=function(e,t){for(var n=-1,r=t.length,u=e.length;++n<r;)e[u+n]=t[n];return e},xo="object"==typeof We&&We&&We.Object===Object&&We,So="object"==typeof self&&self&&self.Object===Object&&self,wo=(xo||So||Function("return this")()).Symbol,Bo=Object.prototype,To=Bo.hasOwnProperty,ko=Bo.toString,No=wo?wo.toStringTag:void 0;var Oo=function(e){var t=To.call(e,No),n=e[No];try{e[No]=void 0;var r=!0}catch(e){}var u=ko.call(e);return r&&(t?e[No]=n:delete e[No]),u},Po=Object.prototype.toString;var _o=function(e){return Po.call(e)},Io=wo?wo.toStringTag:void 0;var jo=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Io&&Io in Object(e)?Oo(e):_o(e)};var Mo=function(e){return null!=e&&"object"==typeof e};var Lo=function(e){return Mo(e)&&"[object Arguments]"==jo(e)},Ro=Object.prototype,qo=Ro.hasOwnProperty,Vo=Ro.propertyIsEnumerable,Wo=Lo(function(){return arguments}())?Lo:function(e){return Mo(e)&&qo.call(e,"callee")&&!Vo.call(e,"callee")},$o=Array.isArray,Uo=wo?wo.isConcatSpreadable:void 0;var zo=function(e){return $o(e)||Wo(e)||!!(Uo&&e&&e[Uo])};var Jo=function e(t,n,r,u,o){var a=-1,i=t.length;for(r||(r=zo),o||(o=[]);++a<i;){var s=t[a];n>0&&r(s)?n>1?e(s,n-1,r,u,o):Fo(o,s):u||(o[o.length]=s)}return o};var Go=function(e){return(null==e?0:e.length)?Jo(e,1):[]};const Ho={key:e=>1===e.length?"-".concat(e):"--".concat(e),value:e=>Fu.apiDescriptor.value(e),pair:({key:e,value:t})=>!1===t?"--no-".concat(e):!0===t?Ho.key(e):""===t?"".concat(Ho.key(e)," without an argument"):"".concat(Ho.key(e),"=").concat(t)};class Xo extends Fu.ChoiceSchema{constructor({name:e,flags:t}){super({name:e,choices:t}),this._flags=t.slice().sort()}preprocess(e,t){if("string"==typeof e&&0!==e.length&&!this._flags.includes(e)){const n=this._flags.find(t=>Bu(t,e)<3);if(n)return t.logger.warn(["Unknown flag ".concat(vo.yellow(t.descriptor.value(e)),","),"did you mean ".concat(vo.blue(t.descriptor.value(n)),"?")].join(" ")),n}return e}expected(){return"a flag"}}let Yo;function Ko(t,n,{logger:r,isCLI:u=!1,passThrough:o=!1}={}){const a=o?Array.isArray(o)?(e,t)=>o.includes(e)?{[e]:t}:void 0:(e,t)=>({[e]:t}):(t,n,r)=>{const u=e(r.schemas,["_"]);return Fu.levenUnknownHandler(t,n,Object.assign({},r,{schemas:u}))},i=u?Ho:Fu.apiDescriptor,s=function(e,{isCLI:t}){const n=[];t&&n.push(Fu.AnySchema.create({name:"_"}));for(const r of e)n.push(Qo(r,{isCLI:t,optionInfos:e})),r.alias&&t&&n.push(Fu.AliasSchema.create({name:r.alias,sourceName:r.name}));return n}(n,{isCLI:u}),l=new Fu.Normalizer(s,{logger:r,unknown:a,descriptor:i}),c=!1!==r;c&&Yo&&(l._hasDeprecationWarned=Yo);const p=l.normalize(t);return c&&(Yo=l._hasDeprecationWarned),p}function Qo(e,{isCLI:t,optionInfos:n}){let r;const u={name:e.name},o={};switch(e.type){case"int":r=Fu.IntegerSchema,t&&(u.preprocess=e=>Number(e));break;case"string":r=Fu.StringSchema;break;case"choice":r=Fu.ChoiceSchema,u.choices=e.choices.map(t=>"object"==typeof t&&t.redirect?Object.assign({},t,{redirect:{to:{key:e.name,value:t.redirect}}}):t);break;case"boolean":r=Fu.BooleanSchema;break;case"flag":r=Xo,u.flags=Go(n.map(e=>[e.alias,e.description&&e.name,e.oppositeDescription&&"no-".concat(e.name)].filter(Boolean)));break;case"path":r=Fu.StringSchema;break;default:throw new Error("Unexpected type ".concat(e.type))}if(e.exception?u.validate=(t,n,r)=>e.exception(t)||n.validate(t,r):u.validate=(e,t,n)=>void 0===e||t.validate(e,n),e.redirect&&(o.redirect=t=>t?{to:{key:e.redirect.option,value:e.redirect.value}}:void 0),e.deprecated&&(o.deprecated=!0),t&&!e.array){const e=u.preprocess||(e=>e);u.preprocess=(t,n,r)=>n.preprocess(e(Array.isArray(t)?t[t.length-1]:t),r)}return e.array?Fu.ArraySchema.create(Object.assign({},t?{preprocess:e=>[].concat(e)}:{},o,{valueSchema:r.create(u)})):r.create(Object.assign({},u,o))}var Zo={normalizeApiOptions:function(e,t,n){return Ko(e,t,n)},normalizeCliOptions:function(e,t,n){return Ko(e,t,Object.assign({isCLI:!0},n))}};function ea(e,t){const{ignoreDecorators:n}=t||{};if(!n){const t=e.declaration&&e.declaration.decorators||e.decorators;if(t&&t.length>0)return ea(t[0])}return e.range?e.range[0]:e.start}function ta(e){const t=e.range?e.range[1]:e.end;return e.typeAnnotation?Math.max(t,ta(e.typeAnnotation)):t}var na={locStart:ea,locEnd:ta,composeLoc:function(e,t=e){const n=ea(e);return[n,"number"==typeof t?n+t:ta(t)]}},ra=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0],closed:void 0};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}})),ua=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=l,t.isIdentifierChar=c,t.isIdentifierName=function(e){let t=!0;for(let n=0,r=Array.from(e);n<r.length;n++){const e=r[n].codePointAt(0);if(t){if(!l(e))return!1;t=!1}else if(!c(e))return!1}return!t};let n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",r="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const u=new RegExp("["+n+"]"),o=new RegExp("["+n+r+"]");n=r=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],i=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function s(e,t){let n=65536;for(let r=0,u=t.length;r<u;r+=2){if(n+=t[r],n>e)return!1;if(n+=t[r+1],n>=e)return!0}return!1}function l(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&u.test(String.fromCharCode(e)):s(e,a)))}function c(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):s(e,a)||s(e,i))))}})),oa=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=i,t.isStrictReservedWord=s,t.isStrictBindOnlyReservedWord=l,t.isStrictBindReservedWord=function(e,t){return s(e,t)||l(e)},t.isKeyword=function(e){return u.has(e)};const n=["implements","interface","let","package","private","protected","public","static","yield"],r=["eval","arguments"],u=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),o=new Set(n),a=new Set(r);function i(e,t){return t&&"await"===e||"enum"===e}function s(e,t){return i(e,t)||o.has(e)}function l(e){return a.has(e)}})),aa=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return ua.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return ua.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return ua.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return oa.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return oa.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return oa.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return oa.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return oa.isKeyword}})})),ia=/[|\\{}()[\]^$+*?.]/g,sa=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(ia,"\\$&")},la={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},ca=$e((function(e){var t={};for(var n in la)la.hasOwnProperty(n)&&(t[la[n]]=n);var r=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var u in r)if(r.hasOwnProperty(u)){if(!("channels"in r[u]))throw new Error("missing channels property: "+u);if(!("labels"in r[u]))throw new Error("missing channel labels property: "+u);if(r[u].labels.length!==r[u].channels)throw new Error("channel and label counts mismatch: "+u);var o=r[u].channels,a=r[u].labels;delete r[u].channels,delete r[u].labels,Object.defineProperty(r[u],"channels",{value:o}),Object.defineProperty(r[u],"labels",{value:a})}r.rgb.hsl=function(e){var t,n,r=e[0]/255,u=e[1]/255,o=e[2]/255,a=Math.min(r,u,o),i=Math.max(r,u,o),s=i-a;return i===a?t=0:r===i?t=(u-o)/s:u===i?t=2+(o-r)/s:o===i&&(t=4+(r-u)/s),(t=Math.min(60*t,360))<0&&(t+=360),n=(a+i)/2,[t,100*(i===a?0:n<=.5?s/(i+a):s/(2-i-a)),100*n]},r.rgb.hsv=function(e){var t,n,r,u,o,a=e[0]/255,i=e[1]/255,s=e[2]/255,l=Math.max(a,i,s),c=l-Math.min(a,i,s),p=function(e){return(l-e)/6/c+.5};return 0===c?u=o=0:(o=c/l,t=p(a),n=p(i),r=p(s),a===l?u=r-n:i===l?u=1/3+t-r:s===l&&(u=2/3+n-t),u<0?u+=1:u>1&&(u-=1)),[360*u,100*o,100*l]},r.rgb.hwb=function(e){var t=e[0],n=e[1],u=e[2];return[r.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(n,u))),100*(u=1-1/255*Math.max(t,Math.max(n,u)))]},r.rgb.cmyk=function(e){var t,n=e[0]/255,r=e[1]/255,u=e[2]/255;return[100*((1-n-(t=Math.min(1-n,1-r,1-u)))/(1-t)||0),100*((1-r-t)/(1-t)||0),100*((1-u-t)/(1-t)||0),100*t]},r.rgb.keyword=function(e){var n=t[e];if(n)return n;var r,u,o,a=1/0;for(var i in la)if(la.hasOwnProperty(i)){var s=la[i],l=(u=e,o=s,Math.pow(u[0]-o[0],2)+Math.pow(u[1]-o[1],2)+Math.pow(u[2]-o[2],2));l<a&&(a=l,r=i)}return r},r.keyword.rgb=function(e){return la[e]},r.rgb.xyz=function(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},r.rgb.lab=function(e){var t=r.rgb.xyz(e),n=t[0],u=t[1],o=t[2];return u/=100,o/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(u=u>.008856?Math.pow(u,1/3):7.787*u+16/116)-16,500*(n-u),200*(u-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},r.hsl.rgb=function(e){var t,n,r,u,o,a=e[0]/360,i=e[1]/100,s=e[2]/100;if(0===i)return[o=255*s,o,o];t=2*s-(n=s<.5?s*(1+i):s+i-s*i),u=[0,0,0];for(var l=0;l<3;l++)(r=a+1/3*-(l-1))<0&&r++,r>1&&r--,o=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,u[l]=255*o;return u},r.hsl.hsv=function(e){var t=e[0],n=e[1]/100,r=e[2]/100,u=n,o=Math.max(r,.01);return n*=(r*=2)<=1?r:2-r,u*=o<=1?o:2-o,[t,100*(0===r?2*u/(o+u):2*n/(r+n)),100*((r+n)/2)]},r.hsv.rgb=function(e){var t=e[0]/60,n=e[1]/100,r=e[2]/100,u=Math.floor(t)%6,o=t-Math.floor(t),a=255*r*(1-n),i=255*r*(1-n*o),s=255*r*(1-n*(1-o));switch(r*=255,u){case 0:return[r,s,a];case 1:return[i,r,a];case 2:return[a,r,s];case 3:return[a,i,r];case 4:return[s,a,r];case 5:return[r,a,i]}},r.hsv.hsl=function(e){var t,n,r,u=e[0],o=e[1]/100,a=e[2]/100,i=Math.max(a,.01);return r=(2-o)*a,n=o*i,[u,100*(n=(n/=(t=(2-o)*i)<=1?t:2-t)||0),100*(r/=2)]},r.hwb.rgb=function(e){var t,n,r,u,o,a,i,s=e[0]/360,l=e[1]/100,c=e[2]/100,p=l+c;switch(p>1&&(l/=p,c/=p),r=6*s-(t=Math.floor(6*s)),0!=(1&t)&&(r=1-r),u=l+r*((n=1-c)-l),t){default:case 6:case 0:o=n,a=u,i=l;break;case 1:o=u,a=n,i=l;break;case 2:o=l,a=n,i=u;break;case 3:o=l,a=u,i=n;break;case 4:o=u,a=l,i=n;break;case 5:o=n,a=l,i=u}return[255*o,255*a,255*i]},r.cmyk.rgb=function(e){var t=e[0]/100,n=e[1]/100,r=e[2]/100,u=e[3]/100;return[255*(1-Math.min(1,t*(1-u)+u)),255*(1-Math.min(1,n*(1-u)+u)),255*(1-Math.min(1,r*(1-u)+u))]},r.xyz.rgb=function(e){var t,n,r,u=e[0]/100,o=e[1]/100,a=e[2]/100;return n=-.9689*u+1.8758*o+.0415*a,r=.0557*u+-.204*o+1.057*a,t=(t=3.2406*u+-1.5372*o+-.4986*a)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,[255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1))]},r.xyz.lab=function(e){var t=e[0],n=e[1],r=e[2];return n/=100,r/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},r.lab.xyz=function(e){var t,n,r,u=e[0];t=e[1]/500+(n=(u+16)/116),r=n-e[2]/200;var o=Math.pow(n,3),a=Math.pow(t,3),i=Math.pow(r,3);return n=o>.008856?o:(n-16/116)/7.787,t=a>.008856?a:(t-16/116)/7.787,r=i>.008856?i:(r-16/116)/7.787,[t*=95.047,n*=100,r*=108.883]},r.lab.lch=function(e){var t,n=e[0],r=e[1],u=e[2];return(t=360*Math.atan2(u,r)/2/Math.PI)<0&&(t+=360),[n,Math.sqrt(r*r+u*u),t]},r.lch.lab=function(e){var t,n=e[0],r=e[1];return t=e[2]/360*2*Math.PI,[n,r*Math.cos(t),r*Math.sin(t)]},r.rgb.ansi16=function(e){var t=e[0],n=e[1],u=e[2],o=1 in arguments?arguments[1]:r.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(u/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return 2===o&&(a+=60),a},r.hsv.ansi16=function(e){return r.rgb.ansi16(r.hsv.rgb(e),e[2])},r.rgb.ansi256=function(e){var t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},r.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},r.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var n;return e-=16,[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},r.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},r.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var n=t[0];3===t[0].length&&(n=n.split("").map((function(e){return e+e})).join(""));var r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},r.rgb.hcg=function(e){var t,n=e[0]/255,r=e[1]/255,u=e[2]/255,o=Math.max(Math.max(n,r),u),a=Math.min(Math.min(n,r),u),i=o-a;return t=i<=0?0:o===n?(r-u)/i%6:o===r?2+(u-n)/i:4+(n-r)/i+4,t/=6,[360*(t%=1),100*i,100*(i<1?a/(1-i):0)]},r.hsl.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=1,u=0;return(r=n<.5?2*t*n:2*t*(1-n))<1&&(u=(n-.5*r)/(1-r)),[e[0],100*r,100*u]},r.hsv.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=t*n,u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},r.hcg.rgb=function(e){var t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];var u,o=[0,0,0],a=t%1*6,i=a%1,s=1-i;switch(Math.floor(a)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return u=(1-n)*r,[255*(n*o[0]+u),255*(n*o[1]+u),255*(n*o[2]+u)]},r.hcg.hsv=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t),r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},r.hcg.hsl=function(e){var t=e[1]/100,n=e[2]/100*(1-t)+.5*t,r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},r.hcg.hwb=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},r.hwb.hcg=function(e){var t=e[1]/100,n=1-e[2]/100,r=n-t,u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},r.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},r.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},r.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},r.gray.hsl=r.gray.hsv=function(e){return[0,0,e[0]]},r.gray.hwb=function(e){return[0,100,e[0]]},r.gray.cmyk=function(e){return[0,0,0,e[0]]},r.gray.lab=function(e){return[e[0],0,0]},r.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},r.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}}));function pa(e){var t=function(){for(var e={},t=Object.keys(ca),n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;)for(var r=n.pop(),u=Object.keys(ca[r]),o=u.length,a=0;a<o;a++){var i=u[a],s=t[i];-1===s.distance&&(s.distance=t[r].distance+1,s.parent=r,n.unshift(i))}return t}function da(e,t){return function(n){return t(e(n))}}function fa(e,t){for(var n=[t[e].parent,e],r=ca[t[e].parent][e],u=t[e].parent;t[u].parent;)n.unshift(t[u].parent),r=da(ca[t[u].parent][u],r),u=t[u].parent;return r.conversion=n,r}var ha={};Object.keys(ca).forEach((function(e){ha[e]={},Object.defineProperty(ha[e],"channels",{value:ca[e].channels}),Object.defineProperty(ha[e],"labels",{value:ca[e].labels});var t=function(e){for(var t=pa(e),n={},r=Object.keys(t),u=r.length,o=0;o<u;o++){var a=r[o];null!==t[a].parent&&(n[a]=fa(a,t))}return n}(e);Object.keys(t).forEach((function(n){var r=t[n];ha[e][n]=function(e){var t=function(t){if(null==t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var n=e(t);if("object"==typeof n)for(var r=n.length,u=0;u<r;u++)n[u]=Math.round(n[u]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(r),ha[e][n].raw=function(e){var t=function(t){return null==t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))}));var ma=ha,ga=$e((function(e){const t=(e,t)=>function(){const n=e.apply(ma,arguments);return"[".concat(n+t,"m")},n=(e,t)=>function(){const n=e.apply(ma,arguments);return"[".concat(38+t,";5;").concat(n,"m")},r=(e,t)=>function(){const n=e.apply(ma,arguments);return"[".concat(38+t,";2;").concat(n[0],";").concat(n[1],";").concat(n[2],"m")};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,u={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};u.color.grey=u.color.gray;for(const t of Object.keys(u)){const n=u[t];for(const t of Object.keys(n)){const r=n[t];u[t]={open:"[".concat(r[0],"m"),close:"[".concat(r[1],"m")},n[t]=u[t],e.set(r[0],r[1])}Object.defineProperty(u,t,{value:n,enumerable:!1}),Object.defineProperty(u,"codes",{value:e,enumerable:!1})}const o=e=>e,a=(e,t,n)=>[e,t,n];u.color.close="[39m",u.bgColor.close="[49m",u.color.ansi={ansi:t(o,0)},u.color.ansi256={ansi256:n(o,0)},u.color.ansi16m={rgb:r(a,0)},u.bgColor.ansi={ansi:t(o,10)},u.bgColor.ansi256={ansi256:n(o,10)},u.bgColor.ansi16m={rgb:r(a,10)};for(let e of Object.keys(ma)){if("object"!=typeof ma[e])continue;const o=ma[e];"ansi16"===e&&(e="ansi"),"ansi16"in o&&(u.color.ansi[e]=t(o.ansi16,0),u.bgColor.ansi[e]=t(o.ansi16,10)),"ansi256"in o&&(u.color.ansi256[e]=n(o.ansi256,0),u.bgColor.ansi256[e]=n(o.ansi256,10)),"rgb"in o&&(u.color.ansi16m[e]=r(o.rgb,0),u.bgColor.ansi16m[e]=r(o.rgb,10))}return u}})}));const Da=Re.env;let ya;function Ea(e){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(function(e){if(!1===ya)return 0;if(qr("color=16m")||qr("color=full")||qr("color=truecolor"))return 3;if(qr("color=256"))return 2;if(e&&!e.isTTY&&!0!==ya)return 0;const t=ya?1:0;if("win32"===Re.platform){const e=Rr.release().split(".");return Number(Re.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in Da)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in Da)||"codeship"===Da.CI_NAME?1:t;if("TEAMCITY_VERSION"in Da)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Da.TEAMCITY_VERSION)?1:0;if("truecolor"===Da.COLORTERM)return 3;if("TERM_PROGRAM"in Da){const e=parseInt((Da.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(Da.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(Da.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Da.TERM)||"COLORTERM"in Da?1:(Da.TERM,t)}(e))}qr("no-color")||qr("no-colors")||qr("color=false")?ya=!1:(qr("color")||qr("colors")||qr("color=true")||qr("color=always"))&&(ya=!0),"FORCE_COLOR"in Da&&(ya=0===Da.FORCE_COLOR.length||0!==parseInt(Da.FORCE_COLOR,10));var Ca={supportsColor:Ea,stdout:Ea(Re.stdout),stderr:Ea(Re.stderr)};const ba=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,Aa=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,va=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,Fa=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,xa=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function Sa(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):xa.get(e)||e}function wa(e,t){const n=[],r=t.trim().split(/\s*,\s*/g);let u;for(const t of r)if(isNaN(t)){if(!(u=t.match(va)))throw new Error("Invalid Chalk template style argument: ".concat(t," (in style '").concat(e,"')"));n.push(u[2].replace(Fa,(e,t,n)=>t?Sa(t):n))}else n.push(Number(t));return n}function Ba(e){Aa.lastIndex=0;const t=[];let n;for(;null!==(n=Aa.exec(e));){const e=n[1];if(n[2]){const r=wa(e,n[2]);t.push([e].concat(r))}else t.push([e])}return t}function Ta(e,t){const n={};for(const e of t)for(const t of e.styles)n[t[0]]=e.inverse?null:t.slice(1);let r=e;for(const e of Object.keys(n))if(Array.isArray(n[e])){if(!(e in r))throw new Error("Unknown Chalk style: ".concat(e));r=n[e].length>0?r[e].apply(r,n[e]):r[e]}return r}var ka=(e,t)=>{const n=[],r=[];let u=[];if(t.replace(ba,(t,o,a,i,s,l)=>{if(o)u.push(Sa(o));else if(i){const t=u.join("");u=[],r.push(0===n.length?t:Ta(e,n)(t)),n.push({inverse:a,styles:Ba(i)})}else if(s){if(0===n.length)throw new Error("Found extraneous } in Chalk template literal");r.push(Ta(e,n)(u.join(""))),u=[],n.pop()}else u.push(l)}),r.push(u.join("")),n.length>0){const e="Chalk template literal is missing ".concat(n.length," closing bracket").concat(1===n.length?"":"s"," (`}`)");throw new Error(e)}return r.join("")},Na=$e((function(e){const t=Ca.stdout,n="win32"===Re.platform&&!(Re.env.TERM||"").toLowerCase().startsWith("xterm"),r=["ansi","ansi","ansi256","ansi16m"],u=new Set(["gray"]),o=Object.create(null);function a(e,n){n=n||{};const r=t?t.level:0;e.level=void 0===n.level?r:n.level,e.enabled="enabled"in n?n.enabled:e.level>0}function i(e){if(!this||!(this instanceof i)||this.template){const t={};return a(t,e),t.template=function(){const e=[].slice.call(arguments);return p.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,i.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=i,t.template}a(this,e)}n&&(ga.blue.open="[94m");for(const e of Object.keys(ga))ga[e].closeRe=new RegExp(sa(ga[e].close),"g"),o[e]={get(){const t=ga[e];return l.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}};o.visible={get(){return l.call(this,this._styles||[],!0,"visible")}},ga.color.closeRe=new RegExp(sa(ga.color.close),"g");for(const e of Object.keys(ga.color.ansi))u.has(e)||(o[e]={get(){const t=this.level;return function(){const n=ga.color[r[t]][e].apply(null,arguments),u={open:n,close:ga.color.close,closeRe:ga.color.closeRe};return l.call(this,this._styles?this._styles.concat(u):[u],this._empty,e)}}});ga.bgColor.closeRe=new RegExp(sa(ga.bgColor.close),"g");for(const e of Object.keys(ga.bgColor.ansi)){if(u.has(e))continue;o["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const t=this.level;return function(){const n=ga.bgColor[r[t]][e].apply(null,arguments),u={open:n,close:ga.bgColor.close,closeRe:ga.bgColor.closeRe};return l.call(this,this._styles?this._styles.concat(u):[u],this._empty,e)}}}}const s=Object.defineProperties(()=>{},o);function l(e,t,n){const r=function e(){return c.apply(e,arguments)};r._styles=e,r._empty=t;const u=this;return Object.defineProperty(r,"level",{enumerable:!0,get:()=>u.level,set(e){u.level=e}}),Object.defineProperty(r,"enabled",{enumerable:!0,get:()=>u.enabled,set(e){u.enabled=e}}),r.hasGrey=this.hasGrey||"gray"===n||"grey"===n,r.__proto__=s,r}function c(){const e=arguments,t=e.length;let r=String(arguments[0]);if(0===t)return"";if(t>1)for(let n=1;n<t;n++)r+=" "+e[n];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;const u=ga.dim.open;n&&this.hasGrey&&(ga.dim.open="");for(const e of this._styles.slice().reverse())r=e.open+r.replace(e.closeRe,e.open)+e.close,r=r.replace(/\r?\n/g,"".concat(e.close,"$&").concat(e.open));return ga.dim.open=u,r}function p(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");const n=[].slice.call(arguments,2),r=[t.raw[0]];for(let e=1;e<t.length;e++)r.push(String(n[e-1]).replace(/[{}\\]/g,"\\$&")),r.push(String(t.raw[e]));return ka(e,r.join(""))}Object.defineProperties(i.prototype,o),e.exports=i(),e.exports.supportsColor=t,e.exports.default=e.exports})),Oa=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.shouldHighlight=l,t.getChalk=c,t.default=function(e,t={}){if(l(t)){const n=c(t);return function(e,t){return t.replace(r.default,(function(...t){const n=function(e){const[t,n]=e.slice(-2),u=(0,r.matchToToken)(e);if("name"===u.type){if((0,aa.isKeyword)(u.value)||(0,aa.isReservedWord)(u.value))return"keyword";if(i.test(u.value)&&("<"===n[t-1]||"</"==n.substr(t-2,2)))return"jsx_tag";if(u.value[0]!==u.value[0].toLowerCase())return"capitalized"}if("punctuator"===u.type&&s.test(u.value))return"bracket";if("invalid"===u.type&&("@"===u.value||"#"===u.value))return"punctuator";return u.type}(t),u=e[n];return u?t[0].split(a).map(e=>u(e)).join("\n"):t[0]}))}(function(e){return{keyword:e.cyan,capitalized:e.yellow,jsx_tag:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.grey,invalid:e.white.bgRed.bold}}(n),e)}return e};var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=r?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(ra),u=(n=Na)&&n.__esModule?n:{default:n};function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}const a=/\r\n|[\n\r\u2028\u2029]/,i=/^[a-z][\w-]*$/i,s=/^[()[\]{}]$/;function l(e){return u.default.supportsColor||e.forceColor}function c(e){let t=u.default;return e.forceColor&&(t=new u.default.constructor({enabled:!0,level:1})),t}})),Pa=$e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=a,t.default=function(e,t,n,r={}){if(!u){u=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(Re.emitWarning)Re.emitWarning(e,"DeprecationWarning");else{new Error(e).name="DeprecationWarning",console.warn(new Error(e))}}n=Math.max(n,0);return a(e,{start:{column:n,line:t}},r)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=u?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(Oa);function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}let u=!1;const o=/\r\n|[\n\r\u2028\u2029]/;function a(e,t,r={}){const u=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r),a=(0,n.getChalk)(r),i=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(a),s=(e,t)=>u?e(t):t,l=e.split(o),{start:c,end:p,markerLines:d}=function(e,t,n){const r=Object.assign({column:0,line:-1},e.start),u=Object.assign({},r,e.end),{linesAbove:o=2,linesBelow:a=3}=n||{},i=r.line,s=r.column,l=u.line,c=u.column;let p=Math.max(i-(o+1),0),d=Math.min(t.length,l+a);-1===i&&(p=0),-1===l&&(d=t.length);const f=l-i,h={};if(f)for(let e=0;e<=f;e++){const n=e+i;if(s)if(0===e){const e=t[n-1].length;h[n]=[s,e-s+1]}else if(e===f)h[n]=[0,c];else{const r=t[n-e].length;h[n]=[0,r]}else h[n]=!0}else h[i]=s===c?!s||[s,0]:[s,c-s];return{start:p,end:d,markerLines:h}}(t,l,r),f=t.start&&"number"==typeof t.start.column,h=String(p).length;let m=(u?(0,n.default)(e,r):e).split(o).slice(c,p).map((e,t)=>{const n=c+1+t,u=" ".concat(n).slice(-h),o=" ".concat(u," | "),a=d[n],l=!d[n+1];if(a){let t="";if(Array.isArray(a)){const n=e.slice(0,Math.max(a[0]-1,0)).replace(/[^\t]/g," "),u=a[1]||1;t=["\n ",s(i.gutter,o.replace(/\d/g," ")),n,s(i.marker,"^").repeat(u)].join(""),l&&r.message&&(t+=" "+s(i.message,r.message))}return[s(i.marker,">"),s(i.gutter,o),e,t].join("")}return" ".concat(s(i.gutter,o)).concat(e)}).join("\n");return r.message&&!f&&(m="".concat(" ".repeat(h+1)).concat(r.message,"\n").concat(m)),u?a.reset(m):m}}));const{ConfigError:_a}=Er,{locStart:Ia,locEnd:ja}=na,Ma=Object.getOwnPropertyNames,La=Object.getOwnPropertyDescriptor;function Ra(e){const t={};for(const n of e.plugins)if(n.parsers)for(const e of Ma(n.parsers))Object.defineProperty(t,e,La(n.parsers,e));return t}function qa(e,t){if(t=t||Ra(e),"function"==typeof e.parser)return{parse:e.parser,astFormat:"estree",locStart:Ia,locEnd:ja};if("string"==typeof e.parser){if(Object.prototype.hasOwnProperty.call(t,e.parser))return t[e.parser];throw new _a("Couldn't resolve parser \"".concat(e.parser,'". Parsers must be explicitly added to the standalone bundle.'))}}var Va={parse:function(e,t){const n=Ra(t),r=Object.keys(n).reduce((e,t)=>Object.defineProperty(e,t,{enumerable:!0,get:()=>n[t].parse}),{}),u=qa(t,n);try{return u.preprocess&&(e=u.preprocess(e,t)),{text:e,ast:u.parse(e,r,t)}}catch(t){const{loc:n}=t;if(n){const r=Pa;throw t.codeFrame=r.codeFrameColumns(e,n,{highlightCode:!0}),t.message+="\n"+t.codeFrame,t}throw t.stack}},resolveParser:qa};const{UndefinedParserError:Wa}=Er,{getSupportInfo:$a}=yt,{resolveParser:Ua}=Va,za={astFormat:"estree",printer:{},originalText:void 0,locStart:null,locEnd:null};function Ja(e,t){const n=gn.basename(e).toLowerCase(),r=$a({plugins:t}).languages.filter(e=>null!==e.since);let u=r.find(e=>e.extensions&&e.extensions.some(e=>n.endsWith(e))||e.filenames&&e.filenames.some(e=>e.toLowerCase()===n));if(!u&&!n.includes(".")){const t=function(e){if("string"!=typeof e)return"";let t;try{t=fr.openSync(e,"r")}catch(e){return""}try{const e=new hr(t).next().toString("utf8"),n=e.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);if(n)return n[1];const r=e.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);return r?r[1]:""}catch(e){return""}finally{try{fr.closeSync(t)}catch(e){}}}(e);u=r.find(e=>e.interpreters&&e.interpreters.includes(t))}return u&&u.parsers[0]}var Ga={normalize:function(e,t){t=t||{};const n=Object.assign({},e),r=$a({plugins:e.plugins,showUnreleased:!0,showDeprecated:!0}).options,u=Object.assign({},za,mr(r.filter(e=>void 0!==e.default).map(e=>[e.name,e.default])));if(!n.parser)if(n.filepath){if(n.parser=Ja(n.filepath,n.plugins),!n.parser)throw new Wa("No parser could be inferred for file: ".concat(n.filepath))}else{(t.logger||console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."),n.parser="babel"}const o=Ua(Zo.normalizeApiOptions(n,[r.find(e=>"parser"===e.name)],{passThrough:!0,logger:!1}));n.astFormat=o.astFormat,n.locEnd=o.locEnd,n.locStart=o.locStart;const a=function(e){const{astFormat:t}=e;if(!t)throw new Error("getPlugin() requires astFormat to be set");const n=e.plugins.find(e=>e.printers&&e.printers[t]);if(!n)throw new Error("Couldn't find plugin for AST format \"".concat(t,'"'));return n}(n);n.printer=a.printers[n.astFormat];const i=r.filter(e=>e.pluginDefaults&&void 0!==e.pluginDefaults[a.name]).reduce((e,t)=>Object.assign(e,{[t.name]:t.pluginDefaults[a.name]}),{}),s=Object.assign({},u,i);return Object.keys(s).forEach(e=>{null==n[e]&&(n[e]=s[e])}),"json"===n.parser&&(n.trailingComma="none"),Zo.normalizeApiOptions(n,r,Object.assign({passThrough:Object.keys(za)},t))},hiddenDefaults:za,inferParser:Ja};var Ha=function e(t,n,r){if(Array.isArray(t))return t.map(t=>e(t,n,r)).filter(Boolean);if(!t||"object"!=typeof t)return t;const u={};for(const r of Object.keys(t))"function"!=typeof t[r]&&(u[r]=e(t[r],n,t));if(n.printer.massageAstNode){const e=n.printer.massageAstNode(t,u,r);if(null===e)return;if(e)return e}return u};function Xa(){}Xa.ok=function(){},Xa.strictEqual=function(){};const{concat:Ya,line:Ka,hardline:Qa,breakParent:Za,indent:ei,lineSuffix:ti,join:ni,cursor:ri}=dn.builders,{hasNewline:ui,skipNewline:oi,skipSpaces:ai,isPreviousLineEmpty:ii,addLeadingComment:si,addDanglingComment:li,addTrailingComment:ci}=Lt,pi=Symbol("child-nodes");function di(e,t,n){if(!e)return;const{printer:r,locStart:u,locEnd:o}=t;if(n){if(r.canAttachComment&&r.canAttachComment(e)){let t;for(t=n.length-1;t>=0&&!(u(n[t])<=u(e)&&o(n[t])<=o(e));--t);return void n.splice(t+1,0,e)}}else if(e[pi])return e[pi];const a=r.getCommentChildNodes&&r.getCommentChildNodes(e,t)||"object"==typeof e&&Object.keys(e).filter(e=>"enclosingNode"!==e&&"precedingNode"!==e&&"followingNode"!==e&&"tokens"!==e&&"comments"!==e).map(t=>e[t]);return a?(n||Object.defineProperty(e,pi,{value:n=[],enumerable:!1}),a.forEach(e=>{di(e,t,n)}),n):void 0}function fi(e,t,n){const r=e.length;if(0===r)return;const{precedingNode:u,followingNode:o,enclosingNode:a}=e[0],i=n.printer.getGapRegex&&n.printer.getGapRegex(a)||/^[\s(]*$/;let s,l=n.locStart(o);for(s=r;s>0;--s){const r=e[s-1];Xa.strictEqual(r.precedingNode,u),Xa.strictEqual(r.followingNode,o);const a=t.slice(n.locEnd(r),l);if(!i.test(a))break;l=n.locStart(r)}e.forEach((e,t)=>{t<s?ci(u,e):si(o,e)});for(const e of[u,o])e.comments&&e.comments.length>1&&e.comments.sort((e,t)=>n.locStart(e)-n.locStart(t));e.length=0}function hi(e,t){return e.getValue().printed=!0,t.printer.printComment(e,t)}function mi(e,t,n){const r=n.locStart(t)-1;for(let t=1;t<e.length;++t)if(r<n.locStart(e[t]))return t-1;return 0}function gi(e,t,n){return e.getNode()===t.cursorNode&&e.getValue()?Ya([ri,n,ri]):n}var Di={attach:function(e,t,n,r){if(!Array.isArray(e))return;const u=[],{locStart:o,locEnd:a}=r;e.forEach((i,s)=>{if("json"===r.parser||"json5"===r.parser||"__js_expression"===r.parser||"__vue_expression"===r.parser){if(o(i)-o(t)<=0)return void si(t,i);if(a(i)-a(t)>=0)return void ci(t,i)}!function e(t,n,r){const{locStart:u,locEnd:o}=r,a=di(t,r);let i,s,l=0,c=a.length;for(;l<c;){const t=l+c>>1,p=a[t];if(u(p)-u(n)<=0&&o(n)-o(p)<=0)return n.enclosingNode=p,void e(p,n,r);if(o(p)-u(n)<=0)i=p,l=t+1;else{if(!(o(n)-u(p)<=0))throw new Error("Comment location overlaps with node location");s=p,c=t}}if(n.enclosingNode&&"TemplateLiteral"===n.enclosingNode.type){const{quasis:e}=n.enclosingNode,t=mi(e,n,r);i&&mi(e,i,r)!==t&&(i=null),s&&mi(e,s,r)!==t&&(s=null)}i&&(n.precedingNode=i),s&&(n.followingNode=s)}(t,i,r);const{precedingNode:l,enclosingNode:c,followingNode:p}=i,d=r.printer.handleComments&&r.printer.handleComments.ownLine?r.printer.handleComments.ownLine:()=>!1,f=r.printer.handleComments&&r.printer.handleComments.endOfLine?r.printer.handleComments.endOfLine:()=>!1,h=r.printer.handleComments&&r.printer.handleComments.remaining?r.printer.handleComments.remaining:()=>!1,m=e.length-1===s;if(ui(n,o(i),{backwards:!0}))d(i,n,r,t,m)||(p?si(p,i):l?ci(l,i):li(c||t,i));else if(ui(n,a(i)))f(i,n,r,t,m)||(l?ci(l,i):p?si(p,i):li(c||t,i));else if(h(i,n,r,t,m));else if(l&&p){const e=u.length;if(e>0){u[e-1].followingNode!==i.followingNode&&fi(u,n,r)}u.push(i)}else l?ci(l,i):p?si(p,i):li(c||t,i)}),fi(u,n,r),e.forEach(e=>{delete e.precedingNode,delete e.enclosingNode,delete e.followingNode})},printComments:function(e,t,n,r){const u=e.getValue(),o=t(e),a=u&&u.comments;if(!a||0===a.length)return gi(e,n,o);const i=[],s=[r?";":"",o];return e.each(e=>{const t=e.getValue(),{leading:r,trailing:u}=t;if(r){const r=function(e,t){const n=e.getValue(),r=hi(e,t);if(!r)return"";if(t.printer.isBlockComment&&t.printer.isBlockComment(n)){const e=ui(t.originalText,t.locEnd(n))?ui(t.originalText,t.locStart(n),{backwards:!0})?Qa:Ka:" ";return Ya([r,e])}return Ya([r,Qa])}(e,n);if(!r)return;i.push(r);const u=n.originalText,o=oi(u,ai(u,n.locEnd(t)));!1!==o&&ui(u,o)&&i.push(Qa)}else u&&s.push(function(e,t){const n=e.getValue(),r=hi(e,t);if(!r)return"";const{printer:u,originalText:o,locStart:a}=t,i=u.isBlockComment&&u.isBlockComment(n);if(ui(o,a(n),{backwards:!0})){const e=ii(o,n,a);return ti(Ya([Qa,e?Qa:"",r]))}let s=Ya([" ",r]);return i||(s=Ya([ti(s),Za])),s}(e,n))},"comments"),gi(e,n,Ya(i.concat(s)))},printDanglingComments:function(e,t,n,r){const u=[],o=e.getValue();return o&&o.comments?(e.each(e=>{const n=e.getValue();!n||n.leading||n.trailing||r&&!r(n)||u.push(hi(e,t))},"comments"),0===u.length?"":n?ni(Qa,u):ei(Ya([Qa,ni(Qa,u)]))):""},getSortedChildNodes:di,ensureAllCommentsPrinted:function(e){e&&e.forEach(e=>{if(!e.printed)throw new Error('Comment "'+e.value.trim()+'" was not printed. Please report this error!');delete e.printed})}};function yi(e,t){const n=Ei(e.stack,t);return-1===n?null:e.stack[n]}function Ei(e,t){for(let n=e.length-1;n>=0;n-=2){const r=e[n];if(r&&!Array.isArray(r)&&--t<0)return n}return-1}var Ci=class{constructor(e){this.stack=[e]}getName(){const{stack:e}=this,{length:t}=e;return t>1?e[t-2]:null}getValue(){return he(this.stack)}getNode(e=0){return yi(this,e)}getParentNode(e=0){return yi(this,e+1)}call(e,...t){const{stack:n}=this,{length:r}=n;let u=he(n);for(const e of t)u=u[e],n.push(e,u);const o=e(this);return n.length=r,o}callParent(e,t=0){const n=Ei(this.stack,t+1),r=this.stack.splice(n+1),u=e(this);return this.stack.push(...r),u}each(e,...t){const{stack:n}=this,{length:r}=n;let u=he(n);for(const e of t)u=u[e],n.push(e,u);for(let t=0;t<u.length;++t)t in u&&(n.push(t,u[t]),e(this),n.length-=2);n.length=r}map(e,...t){const{stack:n}=this,{length:r}=n;let u=he(n);for(const e of t)u=u[e],n.push(e,u);const o=new Array(u.length);for(let t=0;t<u.length;++t)t in u&&(n.push(t,u[t]),o[t]=e(this,t),n.length-=2);return n.length=r,o}match(...e){let t=this.stack.length-1,n=null,r=this.stack[t--];for(const u of e){if(void 0===r)return!1;let e=null;if("number"==typeof n&&(e=n,n=this.stack[t--],r=this.stack[t--]),u&&!u(r,n,e))return!1;n=this.stack[t--],r=this.stack[t--]}return!0}};const{utils:{stripTrailingHardline:bi}}=dn,{normalize:Ai}=Ga;var vi={printSubtree:function(e,t,n,r){if(n.printer.embed&&"auto"===n.embeddedLanguageFormatting)return n.printer.embed(e,t,(e,t,u)=>function(e,t,n,r,{stripTrailingHardline:u=!1}={}){const o=Ai(Object.assign({},n,t,{parentParser:n.parser,embeddedInHtml:!(!n.embeddedInHtml&&"html"!==n.parser&&"vue"!==n.parser&&"angular"!==n.parser&&"lwc"!==n.parser),originalText:e}),{passThrough:!0}),a=Va.parse(e,o),{ast:i}=a;e=a.text;const s=i.comments;delete i.comments,Di.attach(s,i,e,o),o[Symbol.for("comments")]=s||[],o[Symbol.for("tokens")]=i.tokens||[];const l=r(i,o);if(Di.ensureAllCommentsPrinted(s),u)return"string"==typeof l?l.replace(/(?:\r?\n)*$/,""):bi(l,!0);return l}(e,t,n,r,u),n)}};const Fi=dn,xi=Fi.builders,{concat:Si,hardline:wi,addAlignmentToDoc:Bi}=xi,Ti=Fi.utils;function ki(e,t,n=0){const{printer:r}=t;r.preprocess&&(e=r.preprocess(e,t));const u=new Map;let o=function e(n,o){const a=n.getValue(),i=a&&"object"==typeof a&&void 0===o;if(i&&u.has(a))return u.get(a);let s;return s=r.willPrintOwnComments&&r.willPrintOwnComments(n,t)?Ni(n,t,e,o):Di.printComments(n,n=>Ni(n,t,e,o),t,o&&o.needsSemi),i&&u.set(a,s),s}(new Ci(e));return n>0&&(o=Bi(Si([wi,o]),n,t.tabWidth)),Ti.propagateBreaks(o),o}function Ni(e,t,n,r){Xa.ok(e instanceof Ci);const u=e.getValue(),{printer:o}=t;if(o.hasPrettierIgnore&&o.hasPrettierIgnore(e))return function(e,t){const{originalText:n,[Symbol.for("comments")]:r,locStart:u,locEnd:o}=t,a=u(e),i=o(e);for(const e of r)u(e)>=a&&o(e)<=i&&(e.printed=!0);return n.slice(a,i)}(u,t);if(u)try{const r=vi.printSubtree(e,n,t,ki);if(r)return r}catch(e){if(We.PRETTIER_DEBUG)throw e}return o.print(e,t,n,r)}var Oi=ki;function Pi(e,t,n,r,u=[]){if(!(t<n.locStart(e)||t>n.locEnd(e))){for(const o of Di.getSortedChildNodes(e,n)){const a=Pi(o,t,n,r,[e,...u]);if(a)return a}return!r||r(e)?{node:e,parentNodes:u}:void 0}}const _i=new Set(["ObjectExpression","ArrayExpression","StringLiteral","NumericLiteral","BooleanLiteral","NullLiteral"]),Ii=new Set(["OperationDefinition","FragmentDefinition","VariableDefinition","TypeExtensionDefinition","ObjectTypeDefinition","FieldDefinition","DirectiveDefinition","EnumTypeDefinition","EnumValueDefinition","InputValueDefinition","InputObjectTypeDefinition","SchemaDefinition","OperationTypeDefinition","InterfaceTypeDefinition","UnionTypeDefinition","ScalarTypeDefinition"]);function ji(e,t){if(null==t)return!1;switch(e.parser){case"flow":case"babel":case"babel-flow":case"babel-ts":case"typescript":return function(e){return"Directive"===e||"TypeAlias"===e||"TSExportAssignment"===e||e.startsWith("Declare")||e.startsWith("TSDeclare")||e.endsWith("Statement")||e.endsWith("Declaration")}(t.type);case"json":return _i.has(t.type);case"graphql":return Ii.has(t.kind);case"vue":return"root"!==t.tag}return!1}var Mi={calculateRange:function(e,t,n){const r=e.slice(t.rangeStart,t.rangeEnd),u=Math.max(t.rangeStart+r.search(/\S/),t.rangeStart);let o;for(o=t.rangeEnd;o>t.rangeStart&&!/\S/.test(e[o-1]);--o);const a=Pi(n,u,t,e=>ji(t,e)),i=Pi(n,o,t,e=>ji(t,e));if(!a||!i)return{rangeStart:0,rangeEnd:0};const{startNode:s,endNode:l}=function(e,t,n){let r=e.node,u=t.node;if(r===u)return{startNode:r,endNode:u};for(const r of t.parentNodes){if(!("Program"!==r.type&&"File"!==r.type&&n.locStart(r)>=n.locStart(e.node)))break;u=r}for(const u of e.parentNodes){if(!("Program"!==u.type&&"File"!==u.type&&n.locEnd(u)<=n.locEnd(t.node)))break;r=u}return{startNode:r,endNode:u}}(a,i,t);return{rangeStart:Math.min(t.locStart(s),t.locStart(l)),rangeEnd:Math.max(t.locEnd(s),t.locEnd(l))}},findNodeAtOffset:Pi},Li=Ue(K);const{printer:{printDocToString:Ri},debug:{printDocToDebug:qi}}=dn,{getAlignmentSize:Vi}=Lt,{guessEndOfLine:Wi,convertEndOfLineToChars:$i,countEndOfLineChars:Ui,normalizeEndOfLine:zi}=Rt,Ji=Ga.normalize,Gi=Symbol("cursor");function Hi(e,t,n){const r=t.comments;return r&&(delete t.comments,Di.attach(r,t,e,n)),n[Symbol.for("comments")]=r||[],n[Symbol.for("tokens")]=t.tokens||[],n.originalText=e,r}function Xi(e,t,n){if(!e||!e.trim().length)return{formatted:"",cursorOffset:-1};n=n||0;const r=Va.parse(e,t),{ast:u}=r;if(e=r.text,t.cursorOffset>=0){const e=Mi.findNodeAtOffset(u,t.cursorOffset,t);e&&e.node&&(t.cursorNode=e.node)}const o=Hi(e,u,t),a=Oi(u,t,n),i=Ri(a,t);if(Di.ensureAllCommentsPrinted(o),n>0){const e=i.formatted.trim();void 0!==i.cursorNodeStart&&(i.cursorNodeStart-=i.formatted.indexOf(e)),i.formatted=e+$i(t.endOfLine)}if(t.cursorOffset>=0){let n,r,u,o,a;if(t.cursorNode&&i.cursorNodeText?(n=t.locStart(t.cursorNode),r=e.slice(n,t.locEnd(t.cursorNode)),u=t.cursorOffset-n,o=i.cursorNodeStart,a=i.cursorNodeText):(n=0,r=e,u=t.cursorOffset,o=0,a=i.formatted),r===a)return{formatted:i.formatted,cursorOffset:o+u};const s=r.split("");s.splice(u,0,Gi);const l=a.split(""),c=Li.diffArrays(s,l);let p=o;for(const e of c)if(e.removed){if(e.value.includes(Gi))break}else p+=e.count;return{formatted:i.formatted,cursorOffset:p}}return{formatted:i.formatted,cursorOffset:-1}}function Yi(e,t){const n=Va.resolveParser(t),r="\ufeff"===e.charAt(0);let u=r?e.slice(1):e;const o=t.cursorOffset>=0;o||(t.cursorOffset=-1);const a=!n.hasPragma||n.hasPragma(u);if(t.requirePragma&&!a)return{formatted:e,cursorOffset:t.cursorOffset};"auto"===t.endOfLine&&(t.endOfLine=Wi(u));const i=t.rangeStart>0,s=t.rangeEnd<u.length;if(r&&(o&&t.cursorOffset--,i&&t.rangeStart--,s&&t.rangeEnd--),u.includes("\r")){const e=e=>Ui(u.slice(0,e),"\r\n");o&&(t.cursorOffset-=e(t.cursorOffset)),i&&(t.rangeStart-=e(t.rangeStart)),s&&(t.rangeEnd-=e(t.rangeEnd)),u=zi(u)}let l;return t.rangeStart<0&&(t.rangeStart=0),t.rangeEnd>u.length&&(t.rangeEnd=u.length),i||s?l=function(e,t){const n=Va.parse(e,t),{ast:r}=n;e=n.text;const{rangeStart:u,rangeEnd:o}=Mi.calculateRange(e,t,r),a=e.slice(u,o),i=Math.min(u,e.lastIndexOf("\n",u)+1),s=e.slice(i,u).match(/^\s*/)[0],l=Vi(s,t.tabWidth),c=Xi(a,Object.assign({},t,{rangeStart:0,rangeEnd:1/0,cursorOffset:t.cursorOffset>u&&t.cursorOffset<o?t.cursorOffset-u:-1,endOfLine:"lf"}),l),p=c.formatted.trimEnd();let{cursorOffset:d}=t;d>=o?d=t.cursorOffset+(p.length-a.length):c.cursorOffset>=0&&(d=c.cursorOffset+u);let f=e.slice(0,u)+p+e.slice(o);if("lf"!==t.endOfLine){const e=$i(t.endOfLine);d>=0&&"\r\n"===e&&(d+=Ui(f.slice(0,d),"\n")),f=f.replace(/\n/g,e)}return{formatted:f,cursorOffset:d}}(u,t):(!a&&t.insertPragma&&t.printer.insertPragma&&(u=t.printer.insertPragma(u)),l=Xi(u,t)),r&&(l.formatted="\ufeff"+l.formatted,o&&l.cursorOffset>=0&&l.cursorOffset++),l}var Ki={formatWithCursor:(e,t)=>Yi(e,t=Ji(t)),parse(e,t,n){t=Ji(t),e=zi("\ufeff"===e.charAt(0)?e.slice(1):e);const r=Va.parse(e,t);return n&&(r.ast=Ha(r.ast,t)),r},formatAST(e,t){t=Ji(t);const n=Oi(e,t);return Ri(n,t)},formatDoc(e,t){t=Ji(Object.assign({},t,{parser:"babel"}));return Yi(qi(e),t).formatted},printToDoc(e,t){t=Ji(t);const n=Va.parse(e,t),{ast:r,text:u}=n;return Hi(u,r,t),Oi(r,t)},printDocToString:(e,t)=>Ri(e,Ji(t))};const{getMaxContinuousCount:Qi,getStringWidth:Zi,getAlignmentSize:es,getIndentSize:ts,skip:ns,skipWhitespace:rs,skipSpaces:us,skipNewline:os,skipToLineEnd:as,skipEverythingButNewLine:is,skipInlineComment:ss,skipTrailingComment:ls,hasNewline:cs,hasNewlineInRange:ps,hasSpaces:ds,isNextLineEmpty:fs,isNextLineEmptyAfterIndex:hs,isPreviousLineEmpty:ms,getNextNonSpaceNonCommentCharacterIndex:gs,makeString:Ds,addLeadingComment:ys,addDanglingComment:Es,addTrailingComment:Cs}=Lt;var bs={getMaxContinuousCount:Qi,getStringWidth:Zi,getAlignmentSize:es,getIndentSize:ts,skip:ns,skipWhitespace:rs,skipSpaces:us,skipNewline:os,skipToLineEnd:as,skipEverythingButNewLine:is,skipInlineComment:ss,skipTrailingComment:ls,hasNewline:cs,hasNewlineInRange:ps,hasSpaces:ds,isNextLineEmpty:fs,isNextLineEmptyAfterIndex:hs,isPreviousLineEmpty:ms,getNextNonSpaceNonCommentCharacterIndex:gs,makeString:Ds,addLeadingComment:ys,addDanglingComment:Es,addTrailingComment:Cs},As=function(t,n){const{languageId:r}=t,u=e(t,["languageId"]);return Object.assign({linguistLanguageId:r},u,n(t))};const{getLast:vs,hasNewline:Fs,getNextNonSpaceNonCommentCharacterIndexWithStartIndex:xs,getNextNonSpaceNonCommentCharacter:Ss,hasNewlineInRange:ws,isNodeIgnoreComment:Bs,addLeadingComment:Ts,addTrailingComment:ks,addDanglingComment:Ns,getNextNonSpaceNonCommentCharacterIndex:Os}=Lt;function Ps(e,t){const n=(e.body||e.properties).filter(e=>"EmptyStatement"!==e.type);0===n.length?Ns(e,t):Ts(n[0],t)}function _s(e,t){"BlockStatement"===e.type?Ps(e,t):Ts(e,t)}function Is(e,t,n,r,u,o){if(!n||"IfStatement"!==n.type||!r)return!1;return")"===Ss(e,u,o.locEnd)?(ks(t,u),!0):t===n.consequent&&r===n.alternate?("BlockStatement"===t.type?ks(t,u):Ns(n,u),!0):"BlockStatement"===r.type?(Ps(r,u),!0):"IfStatement"===r.type?(_s(r.consequent,u),!0):n.consequent===r&&(Ts(r,u),!0)}function js(e,t,n,r,u,o){if(!n||"WhileStatement"!==n.type||!r)return!1;return")"===Ss(e,u,o.locEnd)?(ks(t,u),!0):"BlockStatement"===r.type&&(Ps(r,u),!0)}function Ms(e,t,n,r){return!(!e||"TryStatement"!==e.type&&"CatchClause"!==e.type||!n)&&("CatchClause"===e.type&&t?(ks(t,r),!0):"BlockStatement"===n.type?(Ps(n,r),!0):"TryStatement"===n.type?(_s(n.finalizer,r),!0):"CatchClause"===n.type&&(_s(n.body,r),!0))}function Ls(e,t,n,r){if(e&&("ClassDeclaration"===e.type||"ClassExpression"===e.type||"DeclareClass"===e.type||"DeclareInterface"===e.type||"InterfaceDeclaration"===e.type||"TSInterfaceDeclaration"===e.type)){if(e.decorators&&e.decorators.length>0&&(!n||"Decorator"!==n.type))return ks(e.decorators[e.decorators.length-1],r),!0;if(e.body&&n===e.body)return Ps(e.body,r),!0;if(n)for(const u of["implements","extends","mixins"])if(e[u]&&n===e[u][0])return!t||t!==e.id&&t!==e.typeParameters&&t!==e.superClass?Ns(e,r,u):ks(t,r),!0}return!1}function Rs(e,t,n,r,u){return(t&&n&&("Property"===t.type||"TSDeclareMethod"===t.type||"TSAbstractMethodDefinition"===t.type)&&"Identifier"===n.type&&t.key===n&&":"!==Ss(e,n,u.locEnd)||!(!n||!t||"Decorator"!==n.type||"ClassMethod"!==t.type&&"ClassProperty"!==t.type&&"TSAbstractClassProperty"!==t.type&&"TSAbstractMethodDefinition"!==t.type&&"TSDeclareMethod"!==t.type&&"MethodDefinition"!==t.type))&&(ks(n,r),!0)}function qs(e,t,n,r,u,o){if(t&&"FunctionTypeParam"===t.type&&n&&"FunctionTypeAnnotation"===n.type&&r&&"FunctionTypeParam"!==r.type)return ks(t,u),!0;if(t&&("Identifier"===t.type||"AssignmentPattern"===t.type)&&n&&zs(n)&&")"===Ss(e,u,o.locEnd))return ks(t,u),!0;if(n&&"FunctionDeclaration"===n.type&&r&&"BlockStatement"===r.type){const t=(()=>{if(0!==(n.params||n.parameters).length)return xs(e,o.locEnd(vs(n.params||n.parameters)));const t=xs(e,o.locEnd(n.id));return!1!==t&&xs(e,t+1)})();if(o.locStart(u)>t)return Ps(r,u),!0}return!1}function Vs(e,t){return!(!e||"ImportSpecifier"!==e.type)&&(Ts(e,t),!0)}function Ws(e,t){return!(!e||"LabeledStatement"!==e.type)&&(Ts(e,t),!0)}function $s(e,t,n,r){return t&&t.body&&0===t.body.length?(r?Ns(t,n):Ts(t,n),!0):!(!e||"Program"!==e.type||0!==e.body.length||!e.directives||0!==e.directives.length)&&(r?Ns(e,n):Ts(e,n),!0)}function Us(e){return"Block"===e.type||"CommentBlock"===e.type}function zs(e){return"ArrowFunctionExpression"===e.type||"FunctionExpression"===e.type||"FunctionDeclaration"===e.type||"ObjectMethod"===e.type||"ClassMethod"===e.type||"TSDeclareFunction"===e.type||"TSCallSignatureDeclaration"===e.type||"TSConstructSignatureDeclaration"===e.type||"TSConstructSignatureDeclaration"===e.type||"TSMethodSignature"===e.type||"TSConstructorType"===e.type||"TSFunctionType"===e.type||"TSDeclareMethod"===e.type}function Js(e){return Us(e)&&"*"===e.value[0]&&/@type\b/.test(e.value)}var Gs={handleOwnLineComment:function(e,t,n,r,u){const{precedingNode:o,enclosingNode:a,followingNode:i}=e;return qs(t,o,a,i,e,n)||function(e,t,n){if(e&&("MemberExpression"===e.type||"OptionalMemberExpression"===e.type)&&t&&"Identifier"===t.type)return Ts(e,n),!0;return!1}(a,i,e)||Is(t,o,a,i,e,n)||js(t,o,a,i,e,n)||Ms(a,o,i,e)||Ls(a,o,i,e)||Vs(a,e)||function(e,t,n){if(e&&("ForInStatement"===e.type||"ForOfStatement"===e.type))return Ts(e,n),!0;return!1}(a,0,e)||function(e,t,n,r){if(t&&("UnionTypeAnnotation"===t.type||"TSUnionType"===t.type))return Bs(r)&&(n.prettierIgnore=!0,r.unignore=!0),!!e&&(ks(e,r),!0);n&&("UnionTypeAnnotation"===n.type||"TSUnionType"===n.type)&&Bs(r)&&(n.types[0].prettierIgnore=!0,r.unignore=!0);return!1}(o,a,i,e)||$s(a,r,e,u)||function(e,t,n,r,u){if(n&&"ImportSpecifier"===n.type&&t&&"ImportDeclaration"===t.type&&Fs(e,u.locEnd(r)))return ks(n,r),!0;return!1}(t,a,o,e,n)||function(e,t){if(e&&"AssignmentPattern"===e.type)return Ts(e,t),!0;return!1}(a,e)||Rs(t,a,o,e,n)||Ws(a,e)},handleEndOfLineComment:function(e,t,n,r,u){const{precedingNode:o,enclosingNode:a,followingNode:i}=e;return function(e,t){if(e&&Js(t))return Ts(e,t),!0;return!1}(i,e)||qs(t,o,a,i,e,n)||function(e,t,n,r,u,o){const a=t&&!ws(u,o.locEnd(t),o.locStart(r));if((!t||!a)&&e&&("ConditionalExpression"===e.type||"TSConditionalType"===e.type)&&n)return Ts(n,r),!0;return!1}(a,o,i,e,t,n)||Vs(a,e)||Is(t,o,a,i,e,n)||js(t,o,a,i,e,n)||Ms(a,o,i,e)||Ls(a,o,i,e)||Ws(a,e)||function(e,t,n){if(t&&("CallExpression"===t.type||"OptionalCallExpression"===t.type)&&e&&t.callee===e&&t.arguments.length>0)return Ts(t.arguments[0],n),!0;return!1}(o,a,e)||function(e,t){if(e&&("Property"===e.type||"ObjectProperty"===e.type))return Ts(e,t),!0;return!1}(a,e)||$s(a,r,e,u)||function(e,t,n){if(e&&"TypeAlias"===e.type)return Ts(e,n),!0;return!1}(a,0,e)||function(e,t,n){if(e&&("VariableDeclarator"===e.type||"AssignmentExpression"===e.type)&&t&&("ObjectExpression"===t.type||"ArrayExpression"===t.type||"TemplateLiteral"===t.type||"TaggedTemplateExpression"===t.type||Us(n)))return Ts(t,n),!0;return!1}(a,i,e)},handleRemainingComment:function(e,t,n,r,u){const{precedingNode:o,enclosingNode:a,followingNode:i}=e;return!!(Is(t,o,a,i,e,n)||js(t,o,a,i,e,n)||function(e,t,n){if(e&&("ObjectProperty"===e.type||"Property"===e.type)&&e.shorthand&&e.key===t&&"AssignmentPattern"===e.value.type)return ks(e.value.left,n),!0;return!1}(a,o,e)||function(e,t,n,r){if(")"!==Ss(e,n,r.locEnd))return!1;if(t&&(zs(t)&&0===(t.params||t.parameters).length||("CallExpression"===t.type||"OptionalCallExpression"===t.type||"NewExpression"===t.type)&&0===t.arguments.length))return Ns(t,n),!0;if(t&&"MethodDefinition"===t.type&&0===t.value.params.length)return Ns(t.value,n),!0;return!1}(t,a,e,n)||Rs(t,a,o,e,n)||$s(a,r,e,u)||function(e,t,n,r){if(!t||"ArrowFunctionExpression"!==t.type)return!1;const u=Os(e,n,r.locEnd);if(!1!==u&&"=>"===e.slice(u,u+2))return Ns(t,n),!0;return!1}(t,a,e,n)||function(e,t,n,r,u){if("("!==Ss(e,r,u.locEnd))return!1;if(n&&t&&("FunctionDeclaration"===t.type||"FunctionExpression"===t.type||"ClassMethod"===t.type||"MethodDefinition"===t.type||"ObjectMethod"===t.type))return ks(n,r),!0;return!1}(t,a,o,e,n)||function(e,t,n,r,u){if(!t||"TSMappedType"!==t.type)return!1;if(r&&"TSTypeParameter"===r.type&&r.name)return Ts(r.name,u),!0;if(n&&"TSTypeParameter"===n.type&&n.constraint)return ks(n.constraint,u),!0;return!1}(0,a,o,i,e)||function(e,t){if(e&&("ContinueStatement"===e.type||"BreakStatement"===e.type)&&!e.label)return ks(e,t),!0;return!1}(a,e)||function(e,t,n,r,u){if(!n&&t&&("TSMethodSignature"===t.type||"TSDeclareFunction"===t.type||"TSAbstractMethodDefinition"===t.type)&&";"===Ss(e,r,u.locEnd))return ks(t,r),!0;return!1}(t,a,i,e,n))},hasLeadingComment:function(e,t=(()=>!0)){return e.leadingComments?e.leadingComments.some(t):!!e.comments&&e.comments.some(e=>e.leading&&t(e))},isBlockComment:Us,isTypeCastComment:Js,getGapRegex:function(e){if(e&&"BinaryExpression"!==e.type&&"LogicalExpression"!==e.type)return/^[\s&(|]*$/},getCommentChildNodes:function(e,t){if(("typescript"===t.parser||"flow"===t.parser)&&"MethodDefinition"===e.type&&e.value&&"FunctionExpression"===e.value.type&&0===e.value.params.length&&!e.value.returnType&&(!e.value.typeParameters||0===e.value.typeParameters.length)&&e.value.body)return[...e.decorators||[],e.key,e.value.body]}};const{builders:{indent:Hs,join:Xs,line:Ys,hardline:Ks,softline:Qs,literalline:Zs,concat:el,group:tl,dedentToRoot:nl},utils:{mapDoc:rl,replaceNewlinesWithLiterallines:ul}}=dn,{isBlockComment:ol,hasLeadingComment:al}=Gs;function il(e){return e.replace(/([\\`]|\${)/g,"\\$1")}function sl(e,t){return rl(e,e=>{if(!e.parts)return e;const n=e.parts.map(e=>"string"==typeof e?t?e.replace(/(\\*)`/g,"$1$1\\`"):il(e):e);return Object.assign({},e,{parts:n})})}function ll(e){const t=[];let n=!1;return e.map(e=>e.trim()).forEach((e,r,u)=>{""!==e&&(""===u[r-1]&&n?t.push(el([Ks,e])):t.push(e),n=!0)}),0===t.length?null:Xs(Ks,t)}function cl(e){const t=e.getValue(),n=e.getParentNode(),r=e.getParentNode(1);return r&&t.quasis&&"JSXExpressionContainer"===n.type&&"JSXElement"===r.type&&"style"===r.openingElement.name.name&&r.openingElement.attributes.some(e=>"jsx"===e.name.name)||n&&"TaggedTemplateExpression"===n.type&&"Identifier"===n.tag.type&&"css"===n.tag.name||n&&"TaggedTemplateExpression"===n.type&&"MemberExpression"===n.tag.type&&"css"===n.tag.object.name&&("global"===n.tag.property.name||"resolve"===n.tag.property.name)}function pl(e){return e.match(e=>"TemplateLiteral"===e.type,(e,t)=>"ArrayExpression"===e.type&&"elements"===t,(e,t)=>("Property"===e.type||"ObjectProperty"===e.type)&&"Identifier"===e.key.type&&"styles"===e.key.name&&"value"===t,...dl)}const dl=[(e,t)=>"ObjectExpression"===e.type&&"properties"===t,(e,t)=>"CallExpression"===e.type&&"Identifier"===e.callee.type&&"Component"===e.callee.name&&"arguments"===t,(e,t)=>"Decorator"===e.type&&"expression"===t];function fl(e){const t=e.getParentNode();if(!t||"TaggedTemplateExpression"!==t.type)return!1;const{tag:n}=t;switch(n.type){case"MemberExpression":return ml(n.object)||gl(n);case"CallExpression":return ml(n.callee)||"MemberExpression"===n.callee.type&&("MemberExpression"===n.callee.object.type&&(ml(n.callee.object.object)||gl(n.callee.object))||"CallExpression"===n.callee.object.type&&ml(n.callee.object.callee));case"Identifier":return"css"===n.name;default:return!1}}function hl(e){const t=e.getParentNode(),n=e.getParentNode(1);return n&&"JSXExpressionContainer"===t.type&&"JSXAttribute"===n.type&&"JSXIdentifier"===n.name.type&&"css"===n.name.name}function ml(e){return"Identifier"===e.type&&"styled"===e.name}function gl(e){return/^[A-Z]/.test(e.object.name)&&"extend"===e.property.name}function Dl(e,t){return al(e,e=>ol(e)&&e.value===" ".concat(t," "))}let yl=0;var El=function(e,t,n,r){const u=e.getValue(),o=e.getParentNode(),a=e.getParentNode(1);switch(u.type){case"TemplateLiteral":{if([cl,fl,hl,pl].some(t=>t(e))){const r=u.quasis.map(e=>e.value.raw);let o=0;const a=r.reduce((e,t,n)=>0===n?t:e+"@prettier-placeholder-"+o+++"-id"+t,"");return function(e,t,n){const r=t.getValue();if(1===r.quasis.length&&!r.quasis[0].value.raw.trim())return"``";const u=r.expressions?t.map(n,"expressions"):[],o=function(e,t){if(!t||!t.length)return e;let n=0;const r=rl(e,e=>{if(!e||!e.parts||!e.parts.length)return e;let{parts:r}=e;const u=r.indexOf("@"),o=u+1;if(u>-1&&"string"==typeof r[o]&&r[o].startsWith("prettier-placeholder")){const e=r[u],t=r[o],n=r.slice(o+1);r=r.slice(0,u).concat([e+t]).concat(n)}const a=[];return r.forEach(e=>{"string"==typeof e&&e.includes("@prettier-placeholder")?e.split(/@prettier-placeholder-(\d+)-id/).forEach((e,r)=>{r%2!=0?(a.push("${",t[e],"}"),n++):a.push(ul(e))}):a.push(e)}),Object.assign({},e,{parts:a})});return t.length===n?r:null}(e,u);if(!o)throw new Error("Couldn't insert all the expressions");return el(["`",Hs(el([Ks,o])),Qs,"`"])}(n(a,{parser:"scss"},{stripTrailingHardline:!0}),e,t)}if(function(e){const t=e.getValue(),n=e.getParentNode();return Dl(t,"GraphQL")||n&&("TaggedTemplateExpression"===n.type&&("MemberExpression"===n.tag.type&&"graphql"===n.tag.object.name&&"experimental"===n.tag.property.name||"Identifier"===n.tag.type&&("gql"===n.tag.name||"graphql"===n.tag.name))||"CallExpression"===n.type&&"Identifier"===n.callee.type&&"graphql"===n.callee.name)}(e)){const r=u.expressions?e.map(t,"expressions"):[],o=u.quasis.length;if(1===o&&""===u.quasis[0].value.raw.trim())return"``";const a=[];for(let e=0;e<o;e++){const t=0===e,i=e===o-1,s=u.quasis[e].value.cooked;if("string"!=typeof s)return null;const l=s.split("\n"),c=l.length,p=r[e],d=c>2&&""===l[0].trim()&&""===l[1].trim(),f=c>2&&""===l[c-1].trim()&&""===l[c-2].trim(),h=l.every(e=>/^\s*(?:#[^\n\r]*)?$/.test(e));if(!i&&/#[^\n\r]*$/.test(l[c-1]))return null;let m=null;m=h?ll(l):n(s,{parser:"graphql"},{stripTrailingHardline:!0}),m?(m=sl(m,!1),!t&&d&&a.push(""),a.push(m),!i&&f&&a.push("")):t||i||!d||a.push(""),p&&a.push(el(["${",p,"}"]))}return el(["`",Hs(el([Ks,Xs(Ks,a)])),Ks,"`"])}const o=function(e){return Dl(e.getValue(),"HTML")||e.match(e=>"TemplateLiteral"===e.type,(e,t)=>"TaggedTemplateExpression"===e.type&&"Identifier"===e.tag.type&&"html"===e.tag.name&&"quasi"===t)}(e)?"html":function(e){return e.match(e=>"TemplateLiteral"===e.type,(e,t)=>("Property"===e.type||"ObjectProperty"===e.type)&&"Identifier"===e.key.type&&"template"===e.key.name&&"value"===t,...dl)}(e)?"angular":void 0;if(o)return function(e,t,n,r,u){const o=e.getValue(),a=yl;yl=yl+1>>>0;const i=e=>"PRETTIER_HTML_PLACEHOLDER_".concat(e,"_").concat(a,"_IN_JS"),s=o.quasis.map((e,t,n)=>t===n.length-1?e.value.cooked:e.value.cooked+i(t)).join(""),l=e.map(t,"expressions");if(0===l.length&&0===s.trim().length)return"``";const c=new RegExp(i("(\\d+)"),"g");let p=0;const d=rl(n(s,{parser:r,__onHtmlRoot(e){p=e.children.length}},{stripTrailingHardline:!0}),e=>{if("string"!=typeof e)return e;const t=[],n=e.split(c);for(let e=0;e<n.length;e++){let r=n[e];if(e%2==0){r&&(r=il(r),u.embeddedInHtml&&(r=r.replace(/<\/(script)\b/gi,"<\\/$1")),t.push(r));continue}const o=+r;t.push(el(["${",tl(l[o]),"}"]))}return el(t)}),f=/^\s/.test(s)?" ":"",h=/\s$/.test(s)?" ":"",m="ignore"===u.htmlWhitespaceSensitivity?Ks:f&&h?Ys:null;if(m)return tl(el(["`",Hs(el([m,tl(d)])),m,"`"]));return tl(el(["`",f,p>1?Hs(tl(d)):tl(d),h,"`"]))}(e,t,n,o,r);break}case"TemplateElement":if(a&&"TaggedTemplateExpression"===a.type&&1===o.quasis.length&&"Identifier"===a.tag.type&&("md"===a.tag.name||"markdown"===a.tag.name)){const e=o.quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g,(e,t)=>"\\".repeat(t.length/2)+"`"),t=function(e){const t=e.match(/^([^\S\n]*)\S/m);return null===t?"":t[1]}(e);return el([""!==t?Hs(el([Qs,i(e.replace(new RegExp("^".concat(t),"gm"),""))])):el([Zs,nl(i(e))]),Qs])}}function i(e){return sl(n(e,{parser:"markdown",__inJsTemplate:!0},{stripTrailingHardline:!0}),!0)}};var Cl=function(e,t,n){if(["range","raw","comments","leadingComments","trailingComments","innerComments","extra","start","end","loc","flags","errors","tokens"].forEach(e=>{delete t[e]}),"Program"===e.type&&delete t.sourceType,"BigIntLiteral"===e.type&&(t.value&&(t.value=t.value.toLowerCase()),t.bigint&&(t.bigint=t.bigint.toLowerCase())),"DecimalLiteral"===e.type&&(t.value=Number(t.value)),"EmptyStatement"===e.type)return null;if("JSXText"===e.type)return null;if("JSXExpressionContainer"===e.type&&("Literal"===e.expression.type||"StringLiteral"===e.expression.type)&&" "===e.expression.value)return null;if("Property"!==e.type&&"ObjectProperty"!==e.type&&"MethodDefinition"!==e.type&&"ClassProperty"!==e.type&&"ClassMethod"!==e.type&&"TSDeclareMethod"!==e.type&&"TSPropertySignature"!==e.type&&"ObjectTypeProperty"!==e.type||"object"!=typeof e.key||!e.key||"Literal"!==e.key.type&&"NumericLiteral"!==e.key.type&&"StringLiteral"!==e.key.type&&"Identifier"!==e.key.type||delete t.key,"OptionalMemberExpression"===e.type&&!1===e.optional&&(t.type="MemberExpression",delete t.optional),"JSXElement"===e.type&&"style"===e.openingElement.name.name&&e.openingElement.attributes.some(e=>"jsx"===e.name.name)){t.children.filter(e=>"JSXExpressionContainer"===e.type&&"TemplateLiteral"===e.expression.type).map(e=>e.expression).reduce((e,t)=>e.concat(t.quasis),[]).forEach(e=>delete e.value)}"JSXAttribute"===e.type&&"css"===e.name.name&&"JSXExpressionContainer"===e.value.type&&"TemplateLiteral"===e.value.expression.type&&t.value.expression.quasis.forEach(e=>delete e.value),"JSXAttribute"===e.type&&e.value&&"Literal"===e.value.type&&/["']|&quot;|&apos;/.test(e.value.value)&&(t.value.value=t.value.value.replace(/["']|&quot;|&apos;/g,'"'));const r=e.expression||e.callee;if("Decorator"===e.type&&"CallExpression"===r.type&&"Component"===r.callee.name&&1===r.arguments.length){const n=e.expression.arguments[0].properties;t.expression.arguments[0].properties.forEach((e,t)=>{let r=null;switch(n[t].key.name){case"styles":"ArrayExpression"===e.value.type&&(r=e.value.elements[0]);break;case"template":"TemplateLiteral"===e.value.type&&(r=e.value)}r&&r.quasis.forEach(e=>delete e.value)})}if("TaggedTemplateExpression"!==e.type||"MemberExpression"!==e.tag.type&&("Identifier"!==e.tag.type||"gql"!==e.tag.name&&"graphql"!==e.tag.name&&"css"!==e.tag.name&&"md"!==e.tag.name&&"markdown"!==e.tag.name&&"html"!==e.tag.name)&&"CallExpression"!==e.tag.type||t.quasi.quasis.forEach(e=>delete e.value),"TemplateLiteral"===e.type){(e.leadingComments&&e.leadingComments.some(e=>"CommentBlock"===e.type&&["GraphQL","HTML"].some(t=>e.value===" ".concat(t," ")))||"CallExpression"===n.type&&"graphql"===n.callee.name)&&t.quasis.forEach(e=>delete e.value),e.leadingComments||t.quasis.forEach(e=>{e.value&&delete e.value.cooked})}"InterpreterDirective"===e.type&&(t.value=t.value.trimEnd())};const bl=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");const t=e.match(/(?:\r?\n)/g)||[];if(0===t.length)return;const n=t.filter(e=>"\r\n"===e).length;return n>t.length-n?"\r\n":"\n"};var Al=bl;Al.graceful=e=>"string"==typeof e&&bl(e)||"\n";var vl=$e((function(e,t){function n(){const e=Rr;return n=function(){return e},e}function r(){const e=(t=Al)&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.extract=function(e){const t=e.match(a);return t?t[0].trimLeft():""},t.strip=function(e){const t=e.match(a);return t&&t[0]?e.substring(t[0].length):e},t.parse=function(e){return f(e).pragmas},t.parseWithComments=f,t.print=function({comments:e="",pragmas:t={}}){const u=(0,r().default)(e)||n().EOL,o=Object.keys(t),a=o.map(e=>h(e,t[e])).reduce((e,t)=>e.concat(t),[]).map(e=>" * "+e+u).join("");if(!e){if(0===o.length)return"";if(1===o.length&&!Array.isArray(t[o[0]])){const e=t[o[0]];return"".concat("/**"," ").concat(h(o[0],e)[0]).concat(" */")}}const i=e.split(u).map(e=>"".concat(" *"," ").concat(e)).join(u)+u;return"/**"+u+(e?i:"")+(e&&o.length?" *"+u:"")+a+" */"};const u=/\*\/$/,o=/^\/\*\*/,a=/^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,i=/(^|\s+)\/\/([^\r\n]*)/g,s=/^(\r?\n)+/,l=/(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,c=/(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,p=/(\r?\n|^) *\* ?/g,d=[];function f(e){const t=(0,r().default)(e)||n().EOL;e=e.replace(o,"").replace(u,"").replace(p,"$1");let a="";for(;a!==e;)a=e,e=e.replace(l,"".concat(t,"$1 $2").concat(t));e=e.replace(s,"").trimRight();const f=Object.create(null),h=e.replace(c,"").replace(s,"").trimRight();let m;for(;m=c.exec(e);){const e=m[2].replace(i,"");"string"==typeof f[m[1]]||Array.isArray(f[m[1]])?f[m[1]]=d.concat(f[m[1]],e):f[m[1]]=e}return{comments:h,pragmas:f}}function h(e,t){return d.concat(t).map(t=>"@".concat(e," ").concat(t).trim())}}));const{parseWithComments:Fl,strip:xl,extract:Sl,print:wl}=vl,{getShebang:Bl}=Lt,{normalizeEndOfLine:Tl}=Rt;function kl(e){const t=Bl(e);t&&(e=e.slice(t.length+1));const n=Sl(e),{pragmas:r,comments:u}=Fl(n);return{shebang:t,text:e,pragmas:r,comments:u}}var Nl={hasPragma:function(e){const t=Object.keys(kl(e).pragmas);return t.includes("prettier")||t.includes("format")},insertPragma:function(e){const{shebang:t,text:n,pragmas:r,comments:u}=kl(e),o=xl(n),a=wl({pragmas:Object.assign({format:""},r),comments:u.trimStart()});return(t?"".concat(t,"\n"):"")+Tl(a)+(o.startsWith("\n")?"\n":"\n\n")+o}},Ol=$e((function(e){!function(){function t(e){if(null==e)return!1;switch(e.type){case"BlockStatement":case"BreakStatement":case"ContinueStatement":case"DebuggerStatement":case"DoWhileStatement":case"EmptyStatement":case"ExpressionStatement":case"ForInStatement":case"ForStatement":case"IfStatement":case"LabeledStatement":case"ReturnStatement":case"SwitchStatement":case"ThrowStatement":case"TryStatement":case"VariableDeclaration":case"WhileStatement":case"WithStatement":return!0}return!1}function n(e){switch(e.type){case"IfStatement":return null!=e.alternate?e.alternate:e.consequent;case"LabeledStatement":case"ForStatement":case"ForInStatement":case"WhileStatement":case"WithStatement":return e.body}return null}e.exports={isExpression:function(e){if(null==e)return!1;switch(e.type){case"ArrayExpression":case"AssignmentExpression":case"BinaryExpression":case"CallExpression":case"ConditionalExpression":case"FunctionExpression":case"Identifier":case"Literal":case"LogicalExpression":case"MemberExpression":case"NewExpression":case"ObjectExpression":case"SequenceExpression":case"ThisExpression":case"UnaryExpression":case"UpdateExpression":return!0}return!1},isStatement:t,isIterationStatement:function(e){if(null==e)return!1;switch(e.type){case"DoWhileStatement":case"ForInStatement":case"ForStatement":case"WhileStatement":return!0}return!1},isSourceElement:function(e){return t(e)||null!=e&&"FunctionDeclaration"===e.type},isProblematicIfStatement:function(e){var t;if("IfStatement"!==e.type)return!1;if(null==e.alternate)return!1;t=e.consequent;do{if("IfStatement"===t.type&&null==t.alternate)return!0;t=n(t)}while(t);return!1},trailingStatement:n}}()})),Pl=$e((function(e){!function(){var t,n,r,u,o,a;function i(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(Math.floor((e-65536)/1024)+55296)+String.fromCharCode((e-65536)%1024+56320)}for(n={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,NonAsciiIdentifierPart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/},t={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},r=[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],u=new Array(128),a=0;a<128;++a)u[a]=a>=97&&a<=122||a>=65&&a<=90||36===a||95===a;for(o=new Array(128),a=0;a<128;++a)o[a]=a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||36===a||95===a;e.exports={isDecimalDigit:function(e){return 48<=e&&e<=57},isHexDigit:function(e){return 48<=e&&e<=57||97<=e&&e<=102||65<=e&&e<=70},isOctalDigit:function(e){return e>=48&&e<=55},isWhiteSpace:function(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&r.indexOf(e)>=0},isLineTerminator:function(e){return 10===e||13===e||8232===e||8233===e},isIdentifierStartES5:function(e){return e<128?u[e]:n.NonAsciiIdentifierStart.test(i(e))},isIdentifierPartES5:function(e){return e<128?o[e]:n.NonAsciiIdentifierPart.test(i(e))},isIdentifierStartES6:function(e){return e<128?u[e]:t.NonAsciiIdentifierStart.test(i(e))},isIdentifierPartES6:function(e){return e<128?o[e]:t.NonAsciiIdentifierPart.test(i(e))}}}()})),_l=$e((function(e){!function(){var t=Pl;function n(e,t){return!(!t&&"yield"===e)&&r(e,t)}function r(e,t){if(t&&function(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"let":return!0;default:return!1}}(e))return!0;switch(e.length){case 2:return"if"===e||"in"===e||"do"===e;case 3:return"var"===e||"for"===e||"new"===e||"try"===e;case 4:return"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e;case 5:return"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e;case 6:return"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e;case 7:return"default"===e||"finally"===e||"extends"===e;case 8:return"function"===e||"continue"===e||"debugger"===e;case 10:return"instanceof"===e;default:return!1}}function u(e,t){return"null"===e||"true"===e||"false"===e||n(e,t)}function o(e,t){return"null"===e||"true"===e||"false"===e||r(e,t)}function a(e){var n,r,u;if(0===e.length)return!1;if(u=e.charCodeAt(0),!t.isIdentifierStartES5(u))return!1;for(n=1,r=e.length;n<r;++n)if(u=e.charCodeAt(n),!t.isIdentifierPartES5(u))return!1;return!0}function i(e){var n,r,u,o,a;if(0===e.length)return!1;for(a=t.isIdentifierStartES6,n=0,r=e.length;n<r;++n){if(55296<=(u=e.charCodeAt(n))&&u<=56319){if(++n>=r)return!1;if(!(56320<=(o=e.charCodeAt(n))&&o<=57343))return!1;u=1024*(u-55296)+(o-56320)+65536}if(!a(u))return!1;a=t.isIdentifierPartES6}return!0}e.exports={isKeywordES5:n,isKeywordES6:r,isReservedWordES5:u,isReservedWordES6:o,isRestrictedWord:function(e){return"eval"===e||"arguments"===e},isIdentifierNameES5:a,isIdentifierNameES6:i,isIdentifierES5:function(e,t){return a(e)&&!u(e,t)},isIdentifierES6:function(e,t){return i(e)&&!o(e,t)}}}()}));const Il=$e((function(e,t){t.ast=Ol,t.code=Pl,t.keyword=_l})).keyword.isIdentifierNameES5,{getLast:jl,hasNewline:Ml,hasNewlineInRange:Ll,hasIgnoreComment:Rl,hasNodeIgnoreComment:ql,skipWhitespace:Vl}=Lt,Wl=new RegExp("^".concat("(?:(?=.)\\s)","*:")),$l=new RegExp("^".concat("(?:(?=.)\\s)","*::"));function Ul(e,t){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e))return e.some(e=>Ul(e,t));const n=t(e);return"boolean"==typeof n?n:Object.keys(e).some(n=>Ul(e[n],t))}function zl(e){return"AssignmentExpression"===e.type||"BinaryExpression"===e.type||"LogicalExpression"===e.type||"NGPipeExpression"===e.type||"ConditionalExpression"===e.type||"CallExpression"===e.type||"OptionalCallExpression"===e.type||"MemberExpression"===e.type||"OptionalMemberExpression"===e.type||"SequenceExpression"===e.type||"TaggedTemplateExpression"===e.type||"BindExpression"===e.type||"UpdateExpression"===e.type&&!e.prefix||"TSAsExpression"===e.type||"TSNonNullExpression"===e.type}const Jl=new Set(["ExportDefaultDeclaration","ExportDefaultSpecifier","DeclareExportDeclaration","ExportNamedDeclaration","ExportAllDeclaration"]);function Gl(e){return e&&Jl.has(e.type)}function Hl(e){return"BooleanLiteral"===e.type||"DirectiveLiteral"===e.type||"Literal"===e.type||"NullLiteral"===e.type||"NumericLiteral"===e.type||"BigIntLiteral"===e.type||"DecimalLiteral"===e.type||"RegExpLiteral"===e.type||"StringLiteral"===e.type||"TemplateLiteral"===e.type||"TSTypeLiteral"===e.type||"JSXText"===e.type}function Xl(e){return"NumericLiteral"===e.type||"Literal"===e.type&&"number"==typeof e.value}function Yl(e){return"StringLiteral"===e.type||"Literal"===e.type&&"string"==typeof e.value}function Kl(e){return"FunctionExpression"===e.type||"ArrowFunctionExpression"===e.type}function Ql(e){return!("CallExpression"!==e.type&&"OptionalCallExpression"!==e.type||"Identifier"!==e.callee.type||"async"!==e.callee.name&&"inject"!==e.callee.name&&"fakeAsync"!==e.callee.name)}function Zl(e){return"JSXElement"===e.type||"JSXFragment"===e.type}function ec(e){return"get"===e.kind||"set"===e.kind}function tc(e,t,n){return n.locStart(e)===n.locStart(t)}function nc(e,t){return ec(e)||tc(e,e.value,t)}const rc=new Set(["BinaryExpression","LogicalExpression","NGPipeExpression"]);const uc=new Set(["AnyTypeAnnotation","NullLiteralTypeAnnotation","GenericTypeAnnotation","ThisTypeAnnotation","NumberTypeAnnotation","VoidTypeAnnotation","EmptyTypeAnnotation","MixedTypeAnnotation","BooleanTypeAnnotation","BooleanLiteralTypeAnnotation","StringTypeAnnotation"]);const oc=/^(skip|[fx]?(it|describe|test))$/;function ac(e){return"CallExpression"===e.type||"OptionalCallExpression"===e.type}const ic=new RegExp("([ \n\r\t]+)"),sc=new RegExp("[^ \n\r\t]");function lc(e){return Hl(e)&&(sc.test(fc(e))||!/\n/.test(fc(e)))}function cc(e,t,n){if(Zl(t))return ql(t);return t.comments&&t.comments.some(t=>t.leading&&Ml(e,n.locEnd(t)))}function pc(e){return/^(\d+|\d+\.\d+)$/.test(e)}function dc(e){return e.quasis.some(e=>e.value.raw.includes("\n"))}function fc(e){return e.extra?e.extra.raw:e.raw}const hc={"==":!0,"!=":!0,"===":!0,"!==":!0},mc={"*":!0,"/":!0,"%":!0},gc={">>":!0,">>>":!0,"<<":!0};const Dc={};function yc(e){return Dc[e]}[["|>"],["??"],["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"],["**"]].forEach((e,t)=>{e.forEach(e=>{Dc[e]=t})});var Ec={classChildNeedsASIProtection:function(e){if(e){if(e.static||e.accessibility)return!1;if(!e.computed){const t=e.key&&e.key.name;if("in"===t||"instanceof"===t)return!0}switch(e.type){case"ClassProperty":case"TSAbstractClassProperty":return e.computed;case"MethodDefinition":case"TSAbstractMethodDefinition":case"ClassMethod":case"ClassPrivateMethod":{const t=e.value?e.value.async:e.async,n=e.value?e.value.generator:e.generator;return!t&&"get"!==e.kind&&"set"!==e.kind&&!(!e.computed&&!n)}case"TSIndexSignature":return!0;default:return!1}}},classPropMayCauseASIProblems:function(e){const t=e.getNode();if("ClassProperty"!==t.type)return!1;const n=t.key&&t.key.name;return!("static"!==n&&"get"!==n&&"set"!==n||t.value||t.typeAnnotation)||void 0},getFlowVariance:function(e){if(!e.variance)return null;const t=e.variance.kind||e.variance;switch(t){case"plus":return"+";case"minus":return"-";default:return t}},getLeftSidePathName:function(e,t){if(t.expressions)return["expressions",0];if(t.left)return["left"];if(t.test)return["test"];if(t.object)return["object"];if(t.callee)return["callee"];if(t.tag)return["tag"];if(t.argument)return["argument"];if(t.expression)return["expression"];throw new Error("Unexpected node has no left side.")},getParentExportDeclaration:function(e){const t=e.getParentNode();return"declaration"===e.getName()&&Gl(t)?t:null},getTypeScriptMappedTypeModifier:function(e,t){return"+"===e?"+"+t:"-"===e?"-"+t:t},hasDanglingComments:function(e){return e.comments&&e.comments.some(e=>!e.leading&&!e.trailing)},hasFlowAnnotationComment:function(e){return e&&$l.test(e[0].value)},hasFlowShorthandAnnotationComment:function(e){return e.extra&&e.extra.parenthesized&&e.trailingComments&&Wl.test(e.trailingComments[0].value)},hasLeadingComment:function(e){return e.comments&&e.comments.some(e=>e.leading)},hasLeadingOwnLineComment:cc,hasNakedLeftSide:zl,hasNewlineBetweenOrAfterDecorators:function(e,t){return Ll(t.originalText,t.locStart(e.decorators[0]),t.locEnd(jl(e.decorators)))||Ml(t.originalText,t.locEnd(jl(e.decorators)))},hasNgSideEffect:function(e){return Ul(e.getValue(),e=>{switch(e.type){case void 0:return!1;case"CallExpression":case"OptionalCallExpression":case"AssignmentExpression":return!0}})},hasNode:Ul,hasPrettierIgnore:function(e){return Rl(e)||function(e){const t=e.getValue(),n=e.getParentNode();if(!(n&&t&&Zl(t)&&Zl(n)))return!1;let r=null;for(let e=n.children.indexOf(t);e>0;e--){const t=n.children[e-1];if("JSXText"!==t.type||lc(t)){r=t;break}}return r&&"JSXExpressionContainer"===r.type&&"JSXEmptyExpression"===r.expression.type&&r.expression.comments&&r.expression.comments.some(e=>"prettier-ignore"===e.value.trim())}(e)},hasTrailingComment:function(e){return e.comments&&e.comments.some(e=>e.trailing)},hasTrailingLineComment:function(e){return e.comments&&e.comments.some(e=>e.trailing&&!Gs.isBlockComment(e))},identity:function(e){return e},isBinaryish:function(e){return rc.has(e.type)},isCallOrOptionalCallExpression:ac,isEmptyJSXElement:function(e){if(0===e.children.length)return!0;if(e.children.length>1)return!1;const t=e.children[0];return Hl(t)&&!lc(t)},isExportDeclaration:Gl,isFlowAnnotationComment:function(e,t,n){const r=n.locStart(t),u=Vl(e,n.locEnd(t));return!1!==u&&"/*"===e.slice(r,r+2)&&"*/"===e.slice(u,u+2)},isFunctionCompositionArgs:function(e){if(e.length<=1)return!1;let t=0;for(const n of e)if(Kl(n)){if(t+=1,t>1)return!0}else if(ac(n))for(const e of n.arguments)if(Kl(e))return!0;return!1},isFunctionNotation:nc,isFunctionOrArrowExpression:Kl,isGetterOrSetter:ec,isJestEachTemplateLiteral:function(e,t){const n=/^[fx]?(describe|it|test)$/;return"TaggedTemplateExpression"===t.type&&t.quasi===e&&"MemberExpression"===t.tag.type&&"Identifier"===t.tag.property.type&&"each"===t.tag.property.name&&("Identifier"===t.tag.object.type&&n.test(t.tag.object.name)||"MemberExpression"===t.tag.object.type&&"Identifier"===t.tag.object.property.type&&("only"===t.tag.object.property.name||"skip"===t.tag.object.property.name)&&"Identifier"===t.tag.object.object.type&&n.test(t.tag.object.object.name))},isJSXNode:Zl,isJSXWhitespaceExpression:function(e){return"JSXExpressionContainer"===e.type&&Hl(e.expression)&&" "===e.expression.value&&!e.expression.comments},isLastStatement:function(e){const t=e.getParentNode();if(!t)return!0;const n=e.getValue(),r=(t.body||t.consequent).filter(e=>"EmptyStatement"!==e.type);return r[r.length-1]===n},isLiteral:Hl,isLongCurriedCallExpression:function(e){const t=e.getValue(),n=e.getParentNode();return ac(t)&&ac(n)&&n.callee===t&&t.arguments.length>n.arguments.length&&n.arguments.length>0},isSimpleCallArgument:function e(t,n){if(n>=2)return!1;const r=t=>e(t,n+1),u="Literal"===t.type&&"regex"in t&&t.regex.pattern||"RegExpLiteral"===t.type&&t.pattern;return!(u&&u.length>5)&&("Literal"===t.type||"BigIntLiteral"===t.type||"DecimalLiteral"===t.type||"BooleanLiteral"===t.type||"NullLiteral"===t.type||"NumericLiteral"===t.type||"RegExpLiteral"===t.type||"StringLiteral"===t.type||"Identifier"===t.type||"ThisExpression"===t.type||"Super"===t.type||"PrivateName"===t.type||"ArgumentPlaceholder"===t.type||"Import"===t.type||("TemplateLiteral"===t.type?t.expressions.every(r):"ObjectExpression"===t.type?t.properties.every(e=>!e.computed&&(e.shorthand||e.value&&r(e.value))):"ArrayExpression"===t.type?t.elements.every(e=>null===e||r(e)):"ImportExpression"===t.type?r(t.source):"CallExpression"===t.type||"OptionalCallExpression"===t.type||"NewExpression"===t.type?e(t.callee,n)&&t.arguments.every(r):"MemberExpression"===t.type||"OptionalMemberExpression"===t.type?e(t.object,n)&&e(t.property,n):"UnaryExpression"!==t.type||"!"!==t.operator&&"-"!==t.operator?"TSNonNullExpression"===t.type&&e(t.expression,n):e(t.argument,n)))},isMeaningfulJSXText:lc,isMemberExpressionChain:function e(t){return("MemberExpression"===t.type||"OptionalMemberExpression"===t.type)&&("Identifier"===t.object.type||e(t.object))},isMemberish:function(e){return"MemberExpression"===e.type||"OptionalMemberExpression"===e.type||"BindExpression"===e.type&&Boolean(e.object)},isNgForOf:function(e,t,n){return"NGMicrosyntaxKeyedExpression"===e.type&&"of"===e.key.name&&1===t&&"NGMicrosyntaxLet"===n.body[0].type&&null===n.body[0].value},isNumericLiteral:Xl,isObjectType:function(e){return"ObjectTypeAnnotation"===e.type||"TSTypeLiteral"===e.type},isObjectTypePropertyAFunction:function(e,t){return!("ObjectTypeProperty"!==e.type&&"ObjectTypeInternalSlot"!==e.type||"FunctionTypeAnnotation"!==e.value.type||e.static||nc(e,t))},isSimpleFlowType:function(e){return e&&uc.has(e.type)&&!("GenericTypeAnnotation"===e.type&&e.typeParameters)},isSimpleNumber:pc,isSimpleTemplateLiteral:function(e){return 0!==e.expressions.length&&e.expressions.every(e=>{if(e.comments)return!1;if("Identifier"===e.type||"ThisExpression"===e.type)return!0;if("MemberExpression"===e.type||"OptionalMemberExpression"===e.type){let t=e;for(;"MemberExpression"===t.type||"OptionalMemberExpression"===t.type;){if("Identifier"!==t.property.type&&"Literal"!==t.property.type&&"StringLiteral"!==t.property.type&&"NumericLiteral"!==t.property.type)return!1;if(t=t.object,t.comments)return!1}return"Identifier"===t.type||"ThisExpression"===t.type}return!1})},isStringLiteral:Yl,isStringPropSafeToUnquote:function(e,t){return"json"!==t.parser&&Yl(e.key)&&fc(e.key).slice(1,-1)===e.key.value&&(Il(e.key.value)&&!(("typescript"===t.parser||"babel-ts"===t.parser)&&"ClassProperty"===e.type)||pc(e.key.value)&&String(Number(e.key.value))===e.key.value&&"babel"===t.parser)},isTemplateOnItsOwnLine:function(e,t,n){return("TemplateLiteral"===e.type&&dc(e)||"TaggedTemplateExpression"===e.type&&dc(e.quasi))&&!Ml(t,n.locStart(e),{backwards:!0})},isTestCall:function e(t,n){if("CallExpression"!==t.type)return!1;if(1===t.arguments.length){if(Ql(t)&&n&&e(n))return Kl(t.arguments[0]);if("Identifier"===(r=t).callee.type&&/^(before|after)(Each|All)$/.test(r.callee.name)&&1===r.arguments.length)return Ql(t.arguments[0])}else if((2===t.arguments.length||3===t.arguments.length)&&("Identifier"===t.callee.type&&oc.test(t.callee.name)||function(e){return("MemberExpression"===e.callee.type||"OptionalMemberExpression"===e.callee.type)&&"Identifier"===e.callee.object.type&&"Identifier"===e.callee.property.type&&oc.test(e.callee.object.name)&&("only"===e.callee.property.name||"skip"===e.callee.property.name)}(t))&&(function(e){return"TemplateLiteral"===e.type}(t.arguments[0])||Yl(t.arguments[0])))return!(t.arguments[2]&&!Xl(t.arguments[2]))&&((2===t.arguments.length?Kl(t.arguments[1]):function(e){return"FunctionExpression"===e.type||"ArrowFunctionExpression"===e.type&&"BlockStatement"===e.body.type}(t.arguments[1])&&t.arguments[1].params.length<=1)||Ql(t.arguments[1]));var r;return!1},isTheOnlyJSXElementInMarkdown:function(e,t){if("markdown"!==e.parentParser&&"mdx"!==e.parentParser)return!1;const n=t.getNode();if(!n.expression||!Zl(n.expression))return!1;const r=t.getParentNode();return"Program"===r.type&&1===r.body.length},isTSXFile:function(e){return e.filepath&&/\.tsx$/i.test(e.filepath)},isTypeAnnotationAFunction:function(e,t){return!("TypeAnnotation"!==e.type&&"TSTypeAnnotation"!==e.type||"FunctionTypeAnnotation"!==e.typeAnnotation.type||e.static||tc(e,e.typeAnnotation,t))},matchJsxWhitespaceRegex:ic,needsHardlineAfterDanglingComment:function(e){if(!e.comments)return!1;const t=jl(e.comments.filter(e=>!e.leading&&!e.trailing));return t&&!Gs.isBlockComment(t)},rawText:fc,returnArgumentHasLeadingComment:function(e,t){if(cc(e.originalText,t,e))return!0;if(zl(t)){let r,u=t;for(;r=(n=u).expressions?n.expressions[0]:n.left||n.test||n.callee||n.object||n.tag||n.argument||n.expression;)if(u=r,cc(e.originalText,u,e))return!0}var n;return!1},shouldPrintComma:function(e,t="es5"){return"es5"===e.trailingComma&&"es5"===t||"all"===e.trailingComma&&("all"===t||"es5"===t)},isBitwiseOperator:function(e){return!!gc[e]||"|"===e||"^"===e||"&"===e},shouldFlatten:function(e,t){return yc(t)===yc(e)&&("**"!==e&&((!hc[e]||!hc[t])&&(!("%"===t&&mc[e]||"%"===e&&mc[t])&&((t===e||!mc[t]||!mc[e])&&(!gc[e]||!gc[t])))))},startsWithNoLookaheadToken:function e(t,n){switch((t=function(e){for(;e.left;)e=e.left;return e}(t)).type){case"FunctionExpression":case"ClassExpression":case"DoExpression":return n;case"ObjectExpression":return!0;case"MemberExpression":case"OptionalMemberExpression":return e(t.object,n);case"TaggedTemplateExpression":return"FunctionExpression"!==t.tag.type&&e(t.tag,n);case"CallExpression":case"OptionalCallExpression":return"FunctionExpression"!==t.callee.type&&e(t.callee,n);case"ConditionalExpression":return e(t.test,n);case"UpdateExpression":return!t.prefix&&e(t.argument,n);case"BindExpression":return t.object&&e(t.object,n);case"SequenceExpression":return e(t.expressions[0],n);case"TSAsExpression":return e(t.expression,n);default:return!1}},getPrecedence:yc};const{getLeftSidePathName:Cc,hasFlowShorthandAnnotationComment:bc,hasNakedLeftSide:Ac,hasNode:vc,isBitwiseOperator:Fc,startsWithNoLookaheadToken:xc,shouldFlatten:Sc,getPrecedence:wc}=Ec;function Bc(e,t){const n=e.getParentNode();if(!n)return!1;const r=e.getName(),u=e.getNode();if(e.getValue()!==u)return!1;if(t.__isInHtmlInterpolation&&!t.bracketSpacing&&function(e){switch(e.type){case"ObjectExpression":return!0;default:return!1}}(u)&&Tc(e))return!0;if(function(e){return"BlockStatement"===e.type||"BreakStatement"===e.type||"ClassBody"===e.type||"ClassDeclaration"===e.type||"ClassMethod"===e.type||"ClassProperty"===e.type||"ClassPrivateProperty"===e.type||"ContinueStatement"===e.type||"DebuggerStatement"===e.type||"DeclareClass"===e.type||"DeclareExportAllDeclaration"===e.type||"DeclareExportDeclaration"===e.type||"DeclareFunction"===e.type||"DeclareInterface"===e.type||"DeclareModule"===e.type||"DeclareModuleExports"===e.type||"DeclareVariable"===e.type||"DoWhileStatement"===e.type||"EnumDeclaration"===e.type||"ExportAllDeclaration"===e.type||"ExportDefaultDeclaration"===e.type||"ExportNamedDeclaration"===e.type||"ExpressionStatement"===e.type||"ForInStatement"===e.type||"ForOfStatement"===e.type||"ForStatement"===e.type||"FunctionDeclaration"===e.type||"IfStatement"===e.type||"ImportDeclaration"===e.type||"InterfaceDeclaration"===e.type||"LabeledStatement"===e.type||"MethodDefinition"===e.type||"ReturnStatement"===e.type||"SwitchStatement"===e.type||"ThrowStatement"===e.type||"TryStatement"===e.type||"TSDeclareFunction"===e.type||"TSEnumDeclaration"===e.type||"TSImportEqualsDeclaration"===e.type||"TSInterfaceDeclaration"===e.type||"TSModuleDeclaration"===e.type||"TSNamespaceExportDeclaration"===e.type||"TypeAlias"===e.type||"VariableDeclaration"===e.type||"WhileStatement"===e.type||"WithStatement"===e.type}(u))return!1;if("flow"!==t.parser&&bc(e.getValue()))return!0;if("Identifier"===u.type)return!!(u.extra&&u.extra.parenthesized&&/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(u.name));if("ParenthesizedExpression"===n.type)return!1;if(!("ClassDeclaration"!==n.type&&"ClassExpression"!==n.type||n.superClass!==u||"ArrowFunctionExpression"!==u.type&&"AssignmentExpression"!==u.type&&"AwaitExpression"!==u.type&&"BinaryExpression"!==u.type&&"ConditionalExpression"!==u.type&&"LogicalExpression"!==u.type&&"NewExpression"!==u.type&&"ObjectExpression"!==u.type&&"ParenthesizedExpression"!==u.type&&"SequenceExpression"!==u.type&&"TaggedTemplateExpression"!==u.type&&"UnaryExpression"!==u.type&&"UpdateExpression"!==u.type&&"YieldExpression"!==u.type))return!0;if("ExportDefaultDeclaration"===n.type)return function e(t,n){const r=t.getValue(),u=t.getParentNode();if("FunctionExpression"===r.type||"ClassExpression"===r.type)return"ExportDefaultDeclaration"===u.type||!Bc(t,n);if(!Ac(r)||"ExportDefaultDeclaration"!==u.type&&Bc(t,n))return!1;return t.call(t=>e(t,n),...Cc(t,r))}(e,t)||"SequenceExpression"===u.type;if("Decorator"===n.type&&n.expression===u){let e=!1,t=!1,n=u;for(;n;)switch(n.type){case"MemberExpression":t=!0,n=n.object;break;case"CallExpression":if(t||e)return!0;e=!0,n=n.callee;break;case"Identifier":return!1;default:return!0}return!0}if("ArrowFunctionExpression"===n.type&&n.body===u&&"SequenceExpression"!==u.type&&xc(u,!1)||"ExpressionStatement"===n.type&&xc(u,!0))return!0;switch(u.type){case"SpreadElement":case"SpreadProperty":return"MemberExpression"===n.type&&"object"===r&&n.object===u;case"UpdateExpression":if("UnaryExpression"===n.type)return u.prefix&&("++"===u.operator&&"+"===n.operator||"--"===u.operator&&"-"===n.operator);case"UnaryExpression":switch(n.type){case"UnaryExpression":return u.operator===n.operator&&("+"===u.operator||"-"===u.operator);case"BindExpression":return!0;case"MemberExpression":case"OptionalMemberExpression":return"object"===r;case"TaggedTemplateExpression":return!0;case"NewExpression":case"CallExpression":case"OptionalCallExpression":return"callee"===r;case"BinaryExpression":return"**"===n.operator&&"left"===r;case"TSNonNullExpression":return!0;default:return!1}case"BinaryExpression":{if("UpdateExpression"===n.type||"PipelineTopicExpression"===n.type&&"|>"===u.operator)return!0;const t=t=>{let n=0;for(;t;){const r=e.getParentNode(n++);if(!r)return!1;if("ForStatement"===r.type&&r.init===t)return!0;t=r}return!1};if("in"===u.operator&&t(u))return!0;if("|>"===u.operator&&u.extra&&u.extra.parenthesized){const t=e.getParentNode(1);if("BinaryExpression"===t.type&&"|>"===t.operator)return!0}}case"TSTypeAssertion":case"TSAsExpression":case"LogicalExpression":switch(n.type){case"ConditionalExpression":return"TSAsExpression"===u.type;case"CallExpression":case"NewExpression":case"OptionalCallExpression":return"callee"===r;case"ClassExpression":case"ClassDeclaration":return"superClass"===r&&n.superClass===u;case"TSTypeAssertion":case"TaggedTemplateExpression":case"UnaryExpression":case"JSXSpreadAttribute":case"SpreadElement":case"SpreadProperty":case"BindExpression":case"AwaitExpression":case"TSAsExpression":case"TSNonNullExpression":case"UpdateExpression":return!0;case"MemberExpression":case"OptionalMemberExpression":return"object"===r;case"AssignmentExpression":return n.left===u&&("TSTypeAssertion"===u.type||"TSAsExpression"===u.type);case"LogicalExpression":if("LogicalExpression"===u.type)return n.operator!==u.operator;case"BinaryExpression":{if(!u.operator&&"TSTypeAssertion"!==u.type)return!0;const e=n.operator,t=wc(e),o=u.operator,a=wc(o);return t>a||(t===a&&"right"===r?(Xa.strictEqual(n.right,u),!0):t===a&&!Sc(e,o)||(t<a&&"%"===o?"+"===e||"-"===e:!!Fc(e)))}default:return!1}case"SequenceExpression":switch(n.type){case"ReturnStatement":case"ForStatement":return!1;case"ExpressionStatement":return"expression"!==r;case"ArrowFunctionExpression":return"body"!==r;default:return!0}case"YieldExpression":if("UnaryExpression"===n.type||"AwaitExpression"===n.type||"TSAsExpression"===n.type||"TSNonNullExpression"===n.type)return!0;case"AwaitExpression":switch(n.type){case"TaggedTemplateExpression":case"UnaryExpression":case"LogicalExpression":case"SpreadElement":case"SpreadProperty":case"TSAsExpression":case"TSNonNullExpression":case"BindExpression":return!0;case"MemberExpression":case"OptionalMemberExpression":return"object"===r;case"NewExpression":case"CallExpression":case"OptionalCallExpression":return"callee"===r;case"ConditionalExpression":return n.test===u;case"BinaryExpression":return!(!u.argument&&"|>"===n.operator);default:return!1}case"TSJSDocFunctionType":case"TSConditionalType":if("TSConditionalType"===n.type&&u===n.extendsType)return!0;case"TSFunctionType":case"TSConstructorType":if("TSConditionalType"===n.type&&u===n.checkType)return!0;case"TSUnionType":case"TSIntersectionType":if("TSUnionType"===n.type||"TSIntersectionType"===n.type)return!0;case"TSInferType":if("TSInferType"===u.type&&"TSRestType"===n.type)return!1;case"TSTypeOperator":return"TSArrayType"===n.type||"TSOptionalType"===n.type||"TSRestType"===n.type||"TSIndexedAccessType"===n.type&&u===n.objectType||"TSTypeOperator"===n.type||"TSTypeAnnotation"===n.type&&/^TSJSDoc/.test(e.getParentNode(1).type);case"ArrayTypeAnnotation":return"NullableTypeAnnotation"===n.type;case"IntersectionTypeAnnotation":case"UnionTypeAnnotation":return"ArrayTypeAnnotation"===n.type||"NullableTypeAnnotation"===n.type||"IntersectionTypeAnnotation"===n.type||"UnionTypeAnnotation"===n.type;case"NullableTypeAnnotation":return"ArrayTypeAnnotation"===n.type;case"FunctionTypeAnnotation":{const t="NullableTypeAnnotation"===n.type?e.getParentNode(1):n;return"UnionTypeAnnotation"===t.type||"IntersectionTypeAnnotation"===t.type||"ArrayTypeAnnotation"===t.type||"NullableTypeAnnotation"===t.type||"FunctionTypeParam"===n.type&&null===n.name&&u.params&&u.params.some(e=>e.typeAnnotation&&"NullableTypeAnnotation"===e.typeAnnotation.type)}case"StringLiteral":case"NumericLiteral":case"Literal":if("string"==typeof u.value&&"ExpressionStatement"===n.type&&!n.directive){const t=e.getParentNode(1);return"Program"===t.type||"BlockStatement"===t.type}return"MemberExpression"===n.type&&"number"==typeof u.value&&"object"===r&&n.object===u;case"AssignmentExpression":{const t=e.getParentNode(1);return"ArrowFunctionExpression"===n.type&&n.body===u||("ClassProperty"!==n.type||n.key!==u||!n.computed)&&(("TSPropertySignature"!==n.type||n.name!==u)&&(("ForStatement"!==n.type||n.init!==u&&n.update!==u)&&("ExpressionStatement"===n.type?"ObjectPattern"===u.left.type:("TSPropertySignature"!==n.type||n.key!==u)&&("AssignmentExpression"!==n.type&&(("SequenceExpression"!==n.type||!t||"ForStatement"!==t.type||t.init!==n&&t.update!==n)&&(("Property"!==n.type||n.value!==u)&&"NGChainedExpression"!==n.type))))))}case"ConditionalExpression":switch(n.type){case"TaggedTemplateExpression":case"UnaryExpression":case"SpreadElement":case"SpreadProperty":case"BinaryExpression":case"LogicalExpression":case"NGPipeExpression":case"ExportDefaultDeclaration":case"AwaitExpression":case"JSXSpreadAttribute":case"TSTypeAssertion":case"TypeCastExpression":case"TSAsExpression":case"TSNonNullExpression":return!0;case"NewExpression":case"CallExpression":case"OptionalCallExpression":return"callee"===r;case"ConditionalExpression":return"test"===r&&n.test===u;case"MemberExpression":case"OptionalMemberExpression":return"object"===r;default:return!1}case"FunctionExpression":switch(n.type){case"NewExpression":case"CallExpression":case"OptionalCallExpression":return"callee"===r;case"TaggedTemplateExpression":return!0;default:return!1}case"ArrowFunctionExpression":switch(n.type){case"PipelineTopicExpression":return!(!u.extra||!u.extra.parenthesized);case"BinaryExpression":return"|>"!==n.operator||u.extra&&u.extra.parenthesized;case"NewExpression":case"CallExpression":case"OptionalCallExpression":return"callee"===r;case"MemberExpression":case"OptionalMemberExpression":return"object"===r;case"TSAsExpression":case"BindExpression":case"TaggedTemplateExpression":case"UnaryExpression":case"LogicalExpression":case"AwaitExpression":case"TSTypeAssertion":return!0;case"ConditionalExpression":return"test"===r;default:return!1}case"ClassExpression":switch(n.type){case"NewExpression":return"callee"===r&&n.callee===u;default:return!1}case"OptionalMemberExpression":case"OptionalCallExpression":{const t=e.getParentNode(1);if("MemberExpression"===n.type&&"object"===r||("CallExpression"===n.type||"NewExpression"===n.type)&&"callee"===r||"TSNonNullExpression"===n.type&&"MemberExpression"===t.type&&t.object===n)return!0}case"CallExpression":case"MemberExpression":case"TaggedTemplateExpression":case"TSNonNullExpression":if(("BindExpression"===n.type||"NewExpression"===n.type)&&"callee"===r){let e=u;for(;e;)switch(e.type){case"CallExpression":case"OptionalCallExpression":return!0;case"MemberExpression":case"OptionalMemberExpression":case"BindExpression":e=e.object;break;case"TaggedTemplateExpression":e=e.tag;break;case"TSNonNullExpression":e=e.expression;break;default:return!1}}return!1;case"BindExpression":return("BindExpression"===n.type||"NewExpression"===n.type)&&"callee"===r||("MemberExpression"===n.type||"OptionalMemberExpression"===n.type)&&"object"===r;case"NGPipeExpression":return!("NGRoot"===n.type||"NGMicrosyntaxExpression"===n.type||!("ObjectProperty"!==n.type||u.extra&&u.extra.parenthesized)||"ArrayExpression"===n.type||("CallExpression"===n.type||"OptionalCallExpression"===n.type)&&n.arguments[r]===u||"NGPipeExpression"===n.type&&"right"===r||"MemberExpression"===n.type&&"property"===r||"AssignmentExpression"===n.type);case"JSXFragment":case"JSXElement":return"callee"===r||"BinaryExpression"===n.type&&"<"===n.operator&&"left"===r||"ArrayExpression"!==n.type&&"ArrowFunctionExpression"!==n.type&&"AssignmentExpression"!==n.type&&"AssignmentPattern"!==n.type&&"BinaryExpression"!==n.type&&"CallExpression"!==n.type&&"NewExpression"!==n.type&&"ConditionalExpression"!==n.type&&"ExpressionStatement"!==n.type&&"JsExpressionRoot"!==n.type&&"JSXAttribute"!==n.type&&"JSXElement"!==n.type&&"JSXExpressionContainer"!==n.type&&"JSXFragment"!==n.type&&"LogicalExpression"!==n.type&&"ObjectProperty"!==n.type&&"OptionalCallExpression"!==n.type&&"Property"!==n.type&&"ReturnStatement"!==n.type&&"ThrowStatement"!==n.type&&"TypeCastExpression"!==n.type&&"VariableDeclarator"!==n.type;case"TypeAnnotation":return"returnType"===r&&"ArrowFunctionExpression"===n.type&&function(e){return vc(e,e=>"ObjectTypeAnnotation"===e.type&&vc(e,e=>"FunctionTypeAnnotation"===e.type||void 0)||void 0)}(u)}return!1}function Tc(e){const t=e.getValue(),n=e.getParentNode(),r=e.getName();switch(n.type){case"NGPipeExpression":if("number"==typeof r&&n.arguments[r]===t&&n.arguments.length-1===r)return e.callParent(Tc);break;case"ObjectProperty":if("value"===r){const t=e.getParentNode(1);return t.properties[t.properties.length-1]===n}break;case"BinaryExpression":case"LogicalExpression":if("right"===r)return e.callParent(Tc);break;case"ConditionalExpression":if("alternate"===r)return e.callParent(Tc);break;case"UnaryExpression":if(n.prefix)return e.callParent(Tc)}return!1}var kc=Bc;const{builders:{concat:Nc,join:Oc,line:Pc}}=dn;var _c={isVueEventBindingExpression:function e(t){switch(t.type){case"MemberExpression":switch(t.property.type){case"Identifier":case"NumericLiteral":case"StringLiteral":return e(t.object)}return!1;case"Identifier":return!0;default:return!1}},printHtmlBinding:function(e,t,n){const r=e.getValue();if(t.__onHtmlBindingRoot&&null===e.getName()&&t.__onHtmlBindingRoot(r,t),"File"===r.type)return t.__isVueForBindingLeft?e.call(e=>{const{params:t}=e.getValue();return Nc([t.length>1?"(":"",Oc(Nc([",",Pc]),e.map(n,"params")),t.length>1?")":""])},"program","body",0):t.__isVueSlotScope?e.call(e=>Oc(Nc([",",Pc]),e.map(n,"params")),"program","body",0):void 0}};var Ic=function(e,t){switch(t.parser){case"json":case"json5":case"json-stringify":case"__js_expression":case"__vue_expression":return Object.assign({},e,{type:t.parser.startsWith("__")?"JsExpressionRoot":"JsonRoot",node:e,comments:[],rootMarker:t.rootMarker});default:return e}};const{getLast:jc,getPenultimate:Mc,isNextLineEmpty:Lc}=Lt,{hasLeadingComment:Rc,hasTrailingComment:qc,isFunctionCompositionArgs:Vc,isJSXNode:Wc,isLongCurriedCallExpression:$c,shouldPrintComma:Uc}=Ec,{builders:{concat:zc,line:Jc,hardline:Gc,softline:Hc,group:Xc,indent:Yc,conditionalGroup:Kc,ifBreak:Qc,breakParent:Zc},utils:{willBreak:ep}}=dn;function tp(e){return"ObjectExpression"===e.type&&(e.properties.length>0||e.comments)||"ArrayExpression"===e.type&&(e.elements.length>0||e.comments)||"TSTypeAssertion"===e.type&&tp(e.expression)||"TSAsExpression"===e.type&&tp(e.expression)||"FunctionExpression"===e.type||"ArrowFunctionExpression"===e.type&&(!e.returnType||!e.returnType.typeAnnotation||"TSTypeReference"!==e.returnType.typeAnnotation.type)&&("BlockStatement"===e.body.type||"ArrowFunctionExpression"===e.body.type||"ObjectExpression"===e.body.type||"ArrayExpression"===e.body.type||"CallExpression"===e.body.type||"OptionalCallExpression"===e.body.type||"ConditionalExpression"===e.body.type||Wc(e.body))}var np=function(e,t,n){const r=e.getValue(),u="ImportExpression"===r.type,o=u?[r.source]:r.arguments;if(0===o.length)return zc(["(",Di.printDanglingComments(e,t,!0),")"]);if(2===o.length&&"ArrowFunctionExpression"===o[0].type&&0===o[0].params.length&&"BlockStatement"===o[0].body.type&&"ArrayExpression"===o[1].type&&!o.some(e=>e.comments))return zc(["(",e.call(n,"arguments",0),", ",e.call(n,"arguments",1),")"]);let a=!1,i=!1,s=!1;const l=o.length-1,c=(e,r)=>{const u=e.getNode(),o=[n(e)];return r===l||(Lc(t.originalText,u,t.locEnd)?(0===r&&(s=!0),a=!0,o.push(",",Gc,Gc)):o.push(",",Jc)),i=function(e,t){if(!e||"ArrowFunctionExpression"!==e.type||!e.body||"BlockStatement"!==e.body.type||!e.params||e.params.length<1)return!1;let r=!1;return t.each(e=>{const t=zc([n(e)]);r=r||ep(t)},"params"),r}(u,e),zc(o)},p=u?[e.call(e=>c(e,0),"source")]:e.map(c,"arguments"),d=u||r.callee&&"Import"===r.callee.type||!Uc(t,"all")?"":",";function f(){return Xc(zc(["(",Yc(zc([Jc,zc(p)])),d,Jc,")"]),{shouldBreak:!0})}if("Decorator"!==e.getParentNode().type&&Vc(o))return f();const h=function(e){if(2!==e.length)return!1;const[t,n]=e;return!(t.comments&&t.comments.length||"FunctionExpression"!==t.type&&("ArrowFunctionExpression"!==t.type||"BlockStatement"!==t.body.type)||"FunctionExpression"===n.type||"ArrowFunctionExpression"===n.type||"ConditionalExpression"===n.type||tp(n))}(o),m=function(e){const t=jc(e),n=Mc(e);return!Rc(t)&&!qc(t)&&tp(t)&&(!n||n.type!==t.type)}(o);if(h||m){const t=(h?p.slice(1).some(ep):p.slice(0,-1).some(ep))||a||i;let l=[],c=0;const d=e=>{h&&0===c&&(l=[zc([e.call(e=>n(e,{expandFirstArg:!0})),p.length>1?",":"",s?Gc:Jc,s?Gc:""])].concat(p.slice(1))),m&&c===o.length-1&&(l=p.slice(0,-1).concat(e.call(e=>n(e,{expandLastArg:!0})))),c++};u?e.call(d,"source"):e.each(d,"arguments");const g=p.some(ep),D=zc(["(",zc(l),")"]);return zc([g?Zc:"",Kc([g||r.typeArguments||r.typeParameters?Qc(f(),D):D,zc(h?["(",Xc(l[0],{shouldBreak:!0}),zc(l.slice(1)),")"]:["(",zc(p.slice(0,-1)),Xc(jc(l),{shouldBreak:!0}),")"]),f()],{shouldBreak:t})])}const g=zc(["(",Yc(zc([Hc,zc(p)])),Qc(d),Hc,")"]);return $c(e)?g:Xc(g,{shouldBreak:p.some(ep)||a})};const{isNumericLiteral:rp}=Ec,{builders:{concat:up,softline:op,group:ap,indent:ip}}=dn;function sp(e){const t=e.getValue();return!t.optional||"Identifier"===t.type&&t===e.getParentNode().key?"":"OptionalCallExpression"===t.type||"OptionalMemberExpression"===t.type&&t.computed?"?.":"?"}var lp={printOptionalToken:sp,printFunctionTypeParameters:function(e,t,n){const r=e.getValue();return r.typeArguments?e.call(n,"typeArguments"):r.typeParameters?e.call(n,"typeParameters"):""},printMemberLookup:function(e,t,n){const r=e.call(n,"property"),u=e.getValue(),o=sp(e);return u.computed?!u.property||rp(u.property)?up([o,"[",r,"]"]):ap(up([o,"[",ip(up([op,r])),op,"]"])):up([o,".",r])},printBindExpressionCallee:function(e,t,n){return up(["::",e.call(n,"callee")])}};const{getLast:cp,isNextLineEmpty:pp,isNextLineEmptyAfterIndex:dp,getNextNonSpaceNonCommentCharacterIndex:fp}=Lt,{hasLeadingComment:hp,hasTrailingComment:mp,isCallOrOptionalCallExpression:gp,isFunctionOrArrowExpression:Dp,isLongCurriedCallExpression:yp,isMemberish:Ep,isNumericLiteral:Cp,isSimpleCallArgument:bp}=Ec,{builders:{concat:Ap,join:vp,hardline:Fp,group:xp,indent:Sp,conditionalGroup:wp,breakParent:Bp},utils:{willBreak:Tp}}=dn,{printOptionalToken:kp,printFunctionTypeParameters:Np,printMemberLookup:Op,printBindExpressionCallee:Pp}=lp;var _p=function(e,t,n){const r=e.getParentNode(),u=!r||"ExpressionStatement"===r.type,o=[];function a(e){const{originalText:n}=t,r=fp(n,e,t.locEnd);return")"===n.charAt(r)?!1!==r&&dp(n,r+1):pp(n,e,t.locEnd)}const i=e.getValue();o.unshift({node:i,printed:Ap([kp(e),Np(e,t,n),np(e,t,n)])}),i.callee&&e.call(e=>function e(r){const u=r.getValue();gp(u)&&(Ep(u.callee)||gp(u.callee))?(o.unshift({node:u,printed:Ap([Di.printComments(r,()=>Ap([kp(r),Np(r,t,n),np(r,t,n)]),t),a(u)?Fp:""])}),r.call(t=>e(t),"callee")):Ep(u)?(o.unshift({node:u,needsParens:kc(r,t),printed:Di.printComments(r,()=>"OptionalMemberExpression"===u.type||"MemberExpression"===u.type?Op(r,t,n):Pp(r,t,n),t)}),r.call(t=>e(t),"object")):"TSNonNullExpression"===u.type?(o.unshift({node:u,printed:Di.printComments(r,()=>"!",t)}),r.call(t=>e(t),"expression")):o.unshift({node:u,printed:r.call(n)})}(e),"callee");const s=[];let l=[o[0]],c=1;for(;c<o.length&&("TSNonNullExpression"===o[c].node.type||gp(o[c].node)||("MemberExpression"===o[c].node.type||"OptionalMemberExpression"===o[c].node.type)&&o[c].node.computed&&Cp(o[c].node.property));++c)l.push(o[c]);if(!gp(o[0].node))for(;c+1<o.length&&(Ep(o[c].node)&&Ep(o[c+1].node));++c)l.push(o[c]);s.push(l),l=[];let p=!1;for(;c<o.length;++c){if(p&&Ep(o[c].node)){if(o[c].node.computed&&Cp(o[c].node.property)){l.push(o[c]);continue}s.push(l),l=[],p=!1}(gp(o[c].node)||"ImportExpression"===o[c].node.type)&&(p=!0),l.push(o[c]),o[c].node.comments&&o[c].node.comments.some(e=>e.trailing)&&(s.push(l),l=[],p=!1)}function d(e){return/^[A-Z]|^[$_]+$/.test(e)}l.length>0&&s.push(l);const f=s.length>=2&&!s[1][0].node.comments&&function(e){const n=e[1].length&&e[1][0].node.computed;if(1===e[0].length){const r=e[0][0].node;return"ThisExpression"===r.type||"Identifier"===r.type&&(d(r.name)||u&&function(e){return e.length<=t.tabWidth}(r.name)||n)}const r=cp(e[0]).node;return("MemberExpression"===r.type||"OptionalMemberExpression"===r.type)&&"Identifier"===r.property.type&&(d(r.property.name)||n)}(s);function h(e){const t=e.map(e=>e.printed);return e.length>0&&e[e.length-1].needsParens?Ap(["(",...t,")"]):Ap(t)}const m=s.map(h),g=Ap(m),D=f?3:2,y=Go(s),E=y.slice(1,-1).some(e=>hp(e.node))||y.slice(0,-1).some(e=>mp(e.node))||s[D]&&hp(s[D][0].node);if(s.length<=D&&!E)return yp(e)?g:xp(g);const C=cp(s[f?1:0]).node,b=!gp(C)&&a(C),A=Ap([h(s[0]),f?Ap(s.slice(1,2).map(h)):"",b?Fp:"",function(e){return 0===e.length?"":Sp(xp(Ap([Fp,vp(Fp,e.map(h))])))}(s.slice(f?2:1))]),v=o.map(({node:e})=>e).filter(gp);return E||v.length>2&&v.some(e=>!e.arguments.every(e=>bp(e,0)))||m.slice(0,-1).some(Tp)||function(){const e=cp(cp(s)).node,t=cp(m);return gp(e)&&Tp(t)&&v.slice(0,-1).some(e=>e.arguments.some(Dp))}()?xp(A):Ap([Tp(g)||b?Bp:"",wp([g,A])])};const{builders:{concat:Ip,softline:jp,group:Mp,indent:Lp,join:Rp,line:qp,ifBreak:Vp}}=dn,{shouldPrintComma:Wp}=Ec;var $p={printModuleSource:function(e,t,n){return e.getValue().source?Ip([" from ",e.call(n,"source")]):""},printModuleSpecifiers:function(e,t,n){const r=e.getValue(),u=["ImportDeclaration"===r.type?" ":""];if(r.specifiers&&r.specifiers.length>0){const o=[],a=[];if(e.each(t=>{const r=e.getValue().type;if("ExportNamespaceSpecifier"===r||"ExportDefaultSpecifier"===r||"ImportNamespaceSpecifier"===r||"ImportDefaultSpecifier"===r)o.push(n(t));else{if("ExportSpecifier"!==r&&"ImportSpecifier"!==r)throw new Error("Unknown specifier type ".concat(JSON.stringify(r)));a.push(n(t))}},"specifiers"),u.push(Rp(", ",o)),0!==a.length){0!==o.length&&u.push(", ");a.length>1||o.length>0||r.specifiers.some(e=>e.comments)?u.push(Mp(Ip(["{",Lp(Ip([t.bracketSpacing?qp:jp,Rp(Ip([",",qp]),a)])),Vp(Wp(t)?",":""),t.bracketSpacing?qp:jp,"}"]))):u.push(Ip(["{",t.bracketSpacing?" ":"",Ip(a),t.bracketSpacing?" ":"","}"]))}}else u.push("{}");return Ip(u)}};const{isJSXNode:Up}=Ec,{hasNewlineInRange:zp}=Lt,{builders:{concat:Jp,line:Gp,softline:Hp,group:Xp,indent:Yp,align:Kp,ifBreak:Qp,dedent:Zp,breakParent:ed}}=dn;var td=function(e,t,n,r){const u=e.getValue(),o=u[r.consequentNodePropertyName],a=u[r.alternateNodePropertyName],i=[];let s=!1;const l=e.getParentNode(),c=l.type===r.conditionalNodeType&&r.testNodePropertyNames.some(e=>l[e]===u);let p,d,f=l.type===r.conditionalNodeType&&!c,h=0;do{d=p||u,p=e.getParentNode(h),h++}while(p&&p.type===r.conditionalNodeType&&r.testNodePropertyNames.every(e=>p[e]!==d));const m=p||l,g=d;if(r.shouldCheckJsx&&(Up(u[r.testNodePropertyNames[0]])||Up(o)||Up(a)||function(e){return function(e){const t=[];return function e(n){"ConditionalExpression"===n.type?(e(n.test),e(n.consequent),e(n.alternate)):t.push(n)}(e),t}(e).some(Up)}(g))){s=!0,f=!0;const t=e=>Jp([Qp("(",""),Yp(Jp([Hp,e])),Hp,Qp(")","")]),u=e=>"NullLiteral"===e.type||"Literal"===e.type&&null===e.value||"Identifier"===e.type&&"undefined"===e.name;i.push(" ? ",u(o)?e.call(n,r.consequentNodePropertyName):t(e.call(n,r.consequentNodePropertyName))," : ",a.type===r.conditionalNodeType||u(a)?e.call(n,r.alternateNodePropertyName):t(e.call(n,r.alternateNodePropertyName)))}else{const s=Jp([Gp,"? ",o.type===r.conditionalNodeType?Qp("","("):"",Kp(2,e.call(n,r.consequentNodePropertyName)),o.type===r.conditionalNodeType?Qp("",")"):"",Gp,": ",a.type===r.conditionalNodeType?e.call(n,r.alternateNodePropertyName):Kp(2,e.call(n,r.alternateNodePropertyName))]);i.push(l.type!==r.conditionalNodeType||l[r.alternateNodePropertyName]===u||c?s:t.useTabs?Zp(Yp(s)):Kp(Math.max(0,t.tabWidth-2),s))}const D=Go([...r.testNodePropertyNames.map(e=>u[e].comments),o.comments,a.comments]).filter(Boolean).some(e=>Gs.isBlockComment(e)&&zp(t.originalText,t.locStart(e),t.locEnd(e))),y=!s&&("MemberExpression"===l.type||"OptionalMemberExpression"===l.type||"NGPipeExpression"===l.type&&l.left===u)&&!l.computed,E=(e=>l===m?Xp(e,{shouldBreak:D}):D?Jp([e,ed]):e)(Jp([].concat((C=Jp(r.beforeParts()),l.type===r.conditionalNodeType&&l[r.alternateNodePropertyName]===u?Kp(2,C):C),f?Jp(i):Yp(Jp(i)),r.afterParts(y))));var C;return c?Xp(Jp([Yp(Jp([Hp,E])),Hp])):E};const{getNextNonSpaceNonCommentCharacter:nd,hasNewline:rd,hasNewlineInRange:ud,getLast:od,getStringWidth:ad,printString:id,printNumber:sd,hasIgnoreComment:ld,hasNodeIgnoreComment:cd,getIndentSize:pd,getPreferredQuote:dd}=Lt,{isNextLineEmpty:fd,getNextNonSpaceNonCommentCharacterIndex:hd}=bs,{builders:{concat:md,join:gd,line:Dd,hardline:yd,softline:Ed,literalline:Cd,group:bd,indent:Ad,align:vd,conditionalGroup:Fd,fill:xd,ifBreak:Sd,lineSuffixBoundary:wd,addAlignmentToDoc:Bd},utils:{willBreak:Td,isLineNext:kd,isEmpty:Nd,removeLines:Od,normalizeParts:Pd},printer:{printDocToString:_d}}=dn,{insertPragma:Id}=Nl,{printHtmlBinding:jd,isVueEventBindingExpression:Md}=_c,{classChildNeedsASIProtection:Ld,classPropMayCauseASIProblems:Rd,getFlowVariance:qd,getLeftSidePathName:Vd,getParentExportDeclaration:Wd,getTypeScriptMappedTypeModifier:$d,hasDanglingComments:Ud,hasFlowAnnotationComment:zd,hasFlowShorthandAnnotationComment:Jd,hasLeadingOwnLineComment:Gd,hasNakedLeftSide:Hd,hasNewlineBetweenOrAfterDecorators:Xd,hasNgSideEffect:Yd,hasPrettierIgnore:Kd,hasTrailingComment:Qd,hasTrailingLineComment:Zd,identity:ef,isBinaryish:tf,isCallOrOptionalCallExpression:nf,isEmptyJSXElement:rf,isExportDeclaration:uf,isFlowAnnotationComment:of,isFunctionNotation:af,isGetterOrSetter:sf,isJestEachTemplateLiteral:lf,isJSXNode:cf,isJSXWhitespaceExpression:pf,isLastStatement:df,isLiteral:ff,isMeaningfulJSXText:hf,isMemberExpressionChain:mf,isMemberish:gf,isNgForOf:Df,isNumericLiteral:yf,isObjectType:Ef,isObjectTypePropertyAFunction:Cf,isSimpleFlowType:bf,isSimpleNumber:Af,isSimpleTemplateLiteral:vf,isStringLiteral:Ff,isStringPropSafeToUnquote:xf,isTemplateOnItsOwnLine:Sf,isTestCall:wf,isTheOnlyJSXElementInMarkdown:Bf,isTSXFile:Tf,isTypeAnnotationAFunction:kf,matchJsxWhitespaceRegex:Nf,needsHardlineAfterDanglingComment:Of,rawText:Pf,returnArgumentHasLeadingComment:_f,shouldPrintComma:If,shouldFlatten:jf,startsWithNoLookaheadToken:Mf}=Ec,{printOptionalToken:Lf,printFunctionTypeParameters:Rf,printMemberLookup:qf,printBindExpressionCallee:Vf}=lp,{printModuleSource:Wf,printModuleSpecifiers:$f}=$p,Uf=new WeakMap;let zf=0;function Jf(e,t,n){const r=e.getValue();return bd(md([gd(Dd,e.map(n,"decorators")),Xd(r,t)?yd:Dd]))}function Gf(e,t,n){const r=[],u=e.getNode(),o="ClassBody"===u.type;return e.map((e,a)=>{const i=e.getValue();if(!i)return;if("EmptyStatement"===i.type)return;const s=n(e),l=t.originalText,c=[];if(t.semi||o||Bf(t,e)||!function(e,t){if("ExpressionStatement"!==e.getNode().type)return!1;return e.call(e=>function e(t,n){const r=t.getValue();if(kc(t,n)||"ParenthesizedExpression"===r.type||"TypeCastExpression"===r.type||"ArrowFunctionExpression"===r.type&&!Zf(t,n)||"ArrayExpression"===r.type||"ArrayPattern"===r.type||"UnaryExpression"===r.type&&r.prefix&&("+"===r.operator||"-"===r.operator)||"TemplateLiteral"===r.type||"TemplateElement"===r.type||cf(r)||"BindExpression"===r.type&&!r.object||"RegExpLiteral"===r.type||"Literal"===r.type&&r.pattern||"Literal"===r.type&&r.regex)return!0;if(!Hd(r))return!1;return t.call(t=>e(t,n),...Vd(t,r))}(e,t),"expression")}(e,t)?c.push(s):i.comments&&i.comments.some(e=>e.leading)?c.push(n(e,{needsSemi:!0})):c.push(";",s),!t.semi&&o)if(Rd(e))c.push(";");else if("ClassProperty"===i.type){const e=u.body[a+1];Ld(e)&&c.push(";")}fd(l,i,t.locEnd)&&!df(e)&&c.push(yd),r.push(md(c))}),gd(yd,r)}function Hf(e,t,n){const r=e.getNode();if(r.computed)return md(["[",e.call(n,"key"),"]"]);const u=e.getParentNode(),{key:o}=r;if("ClassPrivateProperty"===r.type&&"Identifier"===o.type)return md(["#",e.call(n,"key")]);if("consistent"===t.quoteProps&&!Uf.has(u)){const e=(u.properties||u.body||u.members).some(e=>!e.computed&&e.key&&Ff(e.key)&&!xf(e,t));Uf.set(u,e)}if(("Identifier"===o.type||yf(o)&&Af(sd(Pf(o)))&&String(o.value)===sd(Pf(o))&&"typescript"!==t.parser&&"babel-ts"!==t.parser)&&("json"===t.parser||"consistent"===t.quoteProps&&Uf.get(u))){const n=id(JSON.stringify("Identifier"===o.type?o.name:o.value.toString()),t);return e.call(e=>Di.printComments(e,()=>n,t),"key")}return xf(r,t)&&("as-needed"===t.quoteProps||"consistent"===t.quoteProps&&!Uf.get(u))?e.call(e=>Di.printComments(e,()=>/^\d/.test(o.value)?sd(o.value):o.value,t),"key"):e.call(n,"key")}function Xf(e,t,n){const r=e.getNode(),{kind:u}=r,o=r.value||r,a=[];return u&&"init"!==u&&"method"!==u&&"constructor"!==u?(Xa.ok("get"===u||"set"===u),a.push(u," ")):(o.async&&a.push("async "),o.generator&&a.push("*")),a.push(Hf(e,t,n),r.optional||r.key.optional?"?":"",r===o?Yf(e,t,n):e.call(e=>Yf(e,t,n),"value")),md(a)}function Yf(e,t,n){const r=[Rf(e,t,n),bd(md([Qf(e,n,t),th(e,n,t)]))];return e.getNode().body?r.push(" ",e.call(n,"body")):r.push(t.semi?";":""),md(r)}function Kf(e,t,n){const r=e.getValue();if(!r.typeAnnotation)return"";const u=e.getParentNode(),o=r.definite||u&&"VariableDeclarator"===u.type&&u.definite,a="DeclareFunction"===u.type&&u.id===r;return of(t.originalText,r.typeAnnotation,t)?md([" /*: ",e.call(n,"typeAnnotation")," */"]):md([a?"":o?"!: ":": ",e.call(n,"typeAnnotation")])}function Qf(e,t,n,r,u){const o=e.getValue(),a=e.getParentNode(),i=o.parameters?"parameters":"params",s=wf(a),l=yh(o),c=r&&!(o[i]&&o[i].some(e=>e.comments)),p=u?Rf(e,n,t):"";let d=[];if(o[i]){const r=o[i].length-1;d=e.map((e,u)=>{const a=[],i=e.getValue();return a.push(t(e)),u===r?o.rest&&a.push(",",Dd):s||l||c?a.push(", "):fd(n.originalText,i,n.locEnd)?a.push(",",yd,yd):a.push(",",Dd),md(a)},i)}if(o.rest&&d.push(md(["...",e.call(t,"rest")])),0===d.length)return md([p,"(",Di.printDanglingComments(e,n,!0,e=>")"===nd(n.originalText,e,n.locEnd)),")"]);const f=od(o[i]);if(c)return bd(md([Od(p),"(",md(d.map(Od)),")"]));const h=o[i].every(e=>!e.decorators);if(l&&h)return md([p,"(",md(d),")"]);if(s)return md([p,"(",md(d),")"]);if((Cf(a,n)||kf(a,n)||"TypeAlias"===a.type||"UnionTypeAnnotation"===a.type||"TSUnionType"===a.type||"IntersectionTypeAnnotation"===a.type||"FunctionTypeAnnotation"===a.type&&a.returnType===o)&&1===o[i].length&&null===o[i][0].name&&o[i][0].typeAnnotation&&null===o.typeParameters&&bf(o[i][0].typeAnnotation)&&!o.rest)return"always"===n.arrowParens?md(["(",md(d),")"]):md(d);const m=!(f&&"RestElement"===f.type||o.rest);return md([p,"(",Ad(md([Ed,md(d)])),Sd(m&&If(n,"all")?",":""),Ed,")"])}function Zf(e,t){if("always"===t.arrowParens)return!1;if("avoid"===t.arrowParens){return function(e){return!(1!==e.params.length||e.rest||e.typeParameters||Ud(e)||"Identifier"!==e.params[0].type||e.params[0].typeAnnotation||e.params[0].comments||e.params[0].optional||e.predicate||e.returnType)}(e.getValue())}return!1}function eh(e,t,n){const r=e.getValue(),u=[];return r.async&&u.push("async "),r.generator?u.push("function* "):u.push("function "),r.id&&u.push(e.call(t,"id")),u.push(Rf(e,n,t),bd(md([Qf(e,t,n),th(e,t,n)])),r.body?" ":"",e.call(t,"body")),md(u)}function th(e,t,n){const r=e.getValue(),u=e.call(t,"returnType");if(r.returnType&&of(n.originalText,r.returnType,n))return md([" /*: ",u," */"]);const o=[u];return r.returnType&&r.returnType.typeAnnotation&&o.unshift(": "),r.predicate&&o.push(r.returnType?" ":": ",e.call(t,"predicate")),md(o)}function nh(e,t,n){const r=e.getValue(),u=t.semi?";":"",o=["export "],a=r.default||"ExportDefaultDeclaration"===r.type;return a&&o.push("default "),o.push(Di.printDanglingComments(e,t,!0)),Of(r)&&o.push(yd),r.declaration?(o.push(e.call(n,"declaration")),a&&"ClassDeclaration"!==r.declaration.type&&"FunctionDeclaration"!==r.declaration.type&&"TSInterfaceDeclaration"!==r.declaration.type&&"DeclareClass"!==r.declaration.type&&"DeclareFunction"!==r.declaration.type&&"TSDeclareFunction"!==r.declaration.type&&"EnumDeclaration"!==r.declaration.type&&o.push(u)):(o.push("type"===r.exportKind?"type ":""),o.push($f(e,t,n)),o.push(Wf(e,t,n)),o.push(u)),md(o)}function rh(e,t){const n=Wd(e);return n?Xa.strictEqual(n.type,"DeclareExportDeclaration"):t.unshift("declare "),md(t)}function uh(e,t,n){const r=e.getValue();return r.modifiers&&r.modifiers.length?md([gd(" ",e.map(n,"modifiers"))," "]):""}const oh=new WeakMap;function ah(e){return oh.has(e)||oh.set(e,Symbol("typeParameters")),oh.get(e)}function ih(e,t,n,r){const u=e.getValue();if(!u[r])return"";if(!Array.isArray(u[r]))return e.call(n,r);const o=e.getNode(2),a=e.getNode(3),i=e.getNode(4);return null!=o&&wf(o)||0===u[r].length||1===u[r].length&&(Dh(u[r][0])||"GenericTypeAnnotation"===u[r][0].type&&Dh(u[r][0].id)||"TSTypeReference"===u[r][0].type&&Dh(u[r][0].typeName)||"NullableTypeAnnotation"===u[r][0].type||i&&"VariableDeclarator"===i.type&&"TSTypeAnnotation"===o.type&&"ArrowFunctionExpression"!==a.type&&"TSUnionType"!==u[r][0].type&&"UnionTypeAnnotation"!==u[r][0].type&&"TSIntersectionType"!==u[r][0].type&&"IntersectionTypeAnnotation"!==u[r][0].type&&"TSConditionalType"!==u[r][0].type&&"TSMappedType"!==u[r][0].type&&"TSTypeOperator"!==u[r][0].type&&"TSIndexedAccessType"!==u[r][0].type&&"TSArrayType"!==u[r][0].type)?md(["<",gd(", ",e.map(n,r)),function(n){if(!Ud(n))return"";const r=n.comments.every(Gs.isBlockComment),u=Di.printDanglingComments(e,t,r);return r?u:md([u,yd])}(u),">"]):bd(md(["<",Ad(md([Ed,gd(md([",",Dd]),e.map(n,r))])),Sd("typescript"!==t.parser&&"babel-ts"!==t.parser&&If(t,"all")?",":""),Ed,">"]),{id:ah(u)})}function sh(e,t,n){const r=e.getValue(),u=[];r.abstract&&u.push("abstract "),u.push("class");const o=r.id&&Qd(r.id)||r.superClass&&r.superClass.comments&&0!==r.superClass.comments.length||r.extends&&0!==r.extends.length||r.mixins&&0!==r.mixins.length||r.implements&&0!==r.implements.length,a=[],i=[];r.id&&a.push(" ",e.call(n,"id")),a.push(e.call(n,"typeParameters"));const s=["superClass","extends","mixins","implements"].filter(e=>!!r[e]).length>1,l=r.typeParameters&&!Zd(r.typeParameters)&&!s;function c(u){if(r[u]&&0!==r[u].length){const o=Di.printDanglingComments(e,t,!0,({marker:e})=>e===u);i.push(l?Sd(" ",Dd,{groupId:ah(r.typeParameters)}):Dd,o,o&&yd,u,bd(Ad(md([Dd,gd(md([",",Dd]),e.map(n,u))]))))}}if(r.superClass){const r=md(["extends ",e.call(n,"superClass"),e.call(n,"superTypeParameters")]),u=e.call(e=>Di.printComments(e,()=>r,t),"superClass");o?i.push(Dd,bd(u)):i.push(" ",u)}else c("extends");if(c("mixins"),c("implements"),o){const e=md(i);l?u.push(bd(md(a.concat(Sd(Ad(e),e))))):u.push(bd(Ad(md(a.concat(e)))))}else u.push(...a,...i);return u.push(" ",e.call(n,"body")),u}function lh(e,t,n,r){return e?"":"JSXElement"===n.type&&!n.closingElement||r&&"JSXElement"===r.type&&!r.closingElement?1===t.length?Ed:yd:Ed}function ch(e,t,n,r){return e?yd:1===t.length?"JSXElement"===n.type&&!n.closingElement||r&&"JSXElement"===r.type&&!r.closingElement?yd:Ed:yd}function ph(e){return"LogicalExpression"===e.type&&("ObjectExpression"===e.right.type&&0!==e.right.properties.length||("ArrayExpression"===e.right.type&&0!==e.right.elements.length||!!cf(e.right)))}function dh(e,t,n,r){if(Gd(r.originalText,t,r))return Ad(md([Dd,n]));return tf(t)&&!ph(t)||"ConditionalExpression"===t.type&&tf(t.test)&&!ph(t.test)||"StringLiteralTypeAnnotation"===t.type||"ClassExpression"===t.type&&t.decorators&&t.decorators.length||("Identifier"===e.type||Ff(e)||"MemberExpression"===e.type)&&(Ff(t)||mf(t))&&"json"!==r.parser&&"json5"!==r.parser||"SequenceExpression"===t.type?bd(Ad(md([Dd,n]))):md([" ",n])}function fh(e,t,n,r,u,o){if(!r)return t;const a=dh(e,r,u,o);return bd(md([t,n,a]))}function hh(e,t,n){return"EmptyStatement"===e.type?";":"BlockStatement"===e.type||n?md([" ",t]):Ad(md([Dd,t]))}function mh(e,t,n){const r=Pf(e),u=n||"DirectiveLiteral"===e.type;return id(r,t,u)}function gh(e){const t=e.flags.split("").sort().join("");return"/".concat(e.pattern,"/").concat(t)}function Dh(e){if(bf(e)||Ef(e))return!0;if("UnionTypeAnnotation"===e.type||"TSUnionType"===e.type){const t=e.types.filter(e=>"VoidTypeAnnotation"===e.type||"TSVoidKeyword"===e.type||"NullLiteralTypeAnnotation"===e.type||"TSNullKeyword"===e.type).length,n=e.types.some(e=>"ObjectTypeAnnotation"===e.type||"TSTypeLiteral"===e.type||"GenericTypeAnnotation"===e.type||"TSTypeReference"===e.type);if(e.types.length-1===t&&n)return!0}return!1}function yh(e){if(!e||e.rest)return!1;const t=e.params||e.parameters;if(!t||1!==t.length)return!1;const n=t[0];return!n.comments&&("ObjectPattern"===n.type||"ArrayPattern"===n.type||"Identifier"===n.type&&n.typeAnnotation&&("TypeAnnotation"===n.typeAnnotation.type||"TSTypeAnnotation"===n.typeAnnotation.type)&&Ef(n.typeAnnotation.typeAnnotation)||"FunctionTypeParam"===n.type&&Ef(n.typeAnnotation)||"AssignmentPattern"===n.type&&("ObjectPattern"===n.left.type||"ArrayPattern"===n.left.type)&&("Identifier"===n.right.type||"ObjectExpression"===n.right.type&&0===n.right.properties.length||"ArrayExpression"===n.right.type&&0===n.right.elements.length))}function Eh(e,t,n,r){const u=[];let o=[];return e.each(e=>{u.push(md(o)),u.push(bd(r(e))),o=[",",Dd],e.getValue()&&fd(t.originalText,e.getValue(),t.locEnd)&&o.push(Ed)},n),md(u)}function Ch(e,t,n){const r=e.getValue(),u=t.semi?";":"",o=[];r.argument&&(_f(t,r.argument)?o.push(md([" (",Ad(md([yd,e.call(n,"argument")])),yd,")"])):tf(r.argument)||"SequenceExpression"===r.argument.type?o.push(bd(md([Sd(" ("," "),Ad(md([Ed,e.call(n,"argument")])),Ed,Sd(")")]))):o.push(" ",e.call(n,"argument")));const a=Array.isArray(r.comments)&&r.comments[r.comments.length-1],i=a&&("CommentLine"===a.type||"Line"===a.type);return i&&o.push(u),Ud(r)&&o.push(" ",Di.printDanglingComments(e,t,!0)),i||o.push(u),md(o)}function bh(e){const t=e.getValue(),n=e.getParentNode();return(t&&(cf(t)||Jd(t)||n&&("CallExpression"===n.type||"OptionalCallExpression"===n.type)&&(zd(t.leadingComments)||zd(t.trailingComments)))||n&&("JSXSpreadAttribute"===n.type||"JSXSpreadChild"===n.type||"UnionTypeAnnotation"===n.type||"TSUnionType"===n.type||("ClassDeclaration"===n.type||"ClassExpression"===n.type)&&n.superClass===t))&&(!ld(e)||"UnionTypeAnnotation"===n.type||"TSUnionType"===n.type)}var Ah={preprocess:Ic,print:function(e,t,n,r){const u=e.getValue();let o=!1;const a=function(e,t,n,r){const u=e.getValue(),o=t.semi?";":"";if(!u)return"";if("string"==typeof u)return u;const a=jd(e,t,n);if(a)return a;let i=[];switch(u.type){case"JsExpressionRoot":return e.call(n,"node");case"JsonRoot":return md([e.call(n,"node"),yd]);case"File":return u.program&&u.program.interpreter&&i.push(e.call(e=>e.call(n,"interpreter"),"program")),i.push(e.call(n,"program")),md(i);case"Program":{const r=!u.body.every(({type:e})=>"EmptyStatement"===e)||u.comments;if(u.directives){const a=u.directives.length;e.map((e,u)=>{i.push(n(e),o,yd),(u<a-1||r)&&fd(t.originalText,e.getValue(),t.locEnd)&&i.push(yd)},"directives")}return i.push(e.call(e=>Gf(e,t,n),"body")),i.push(Di.printDanglingComments(e,t,!0)),r&&i.push(yd),md(i)}case"EmptyStatement":return"";case"ExpressionStatement":if(u.directive)return md([mh(u.expression,t,!0),o]);if("__vue_event_binding"===t.parser){const t=e.getParentNode();if("Program"===t.type&&1===t.body.length&&t.body[0]===u)return md([e.call(n,"expression"),Md(u.expression)?";":""])}return md([e.call(n,"expression"),Bf(t,e)?"":o]);case"ParenthesizedExpression":return!u.expression.comments?md(["(",e.call(n,"expression"),")"]):bd(md(["(",Ad(md([Ed,e.call(n,"expression")])),Ed,")"]));case"AssignmentExpression":return fh(u.left,e.call(n,"left"),md([" ",u.operator]),u.right,e.call(n,"right"),t);case"BinaryExpression":case"LogicalExpression":case"NGPipeExpression":{const r=e.getParentNode(),o=e.getParentNode(1),a=u!==r.body&&("IfStatement"===r.type||"WhileStatement"===r.type||"SwitchStatement"===r.type||"DoWhileStatement"===r.type),i=function e(t,n,r,u,o){let a=[];const i=t.getValue();if(tf(i)){jf(i.operator,i.left.operator)?a=a.concat(t.call(t=>e(t,n,r,!0,o),"left")):a.push(bd(t.call(n,"left")));const s=ph(i),l=("|>"===i.operator||"NGPipeExpression"===i.type||"|"===i.operator&&"__vue_expression"===r.parser)&&!Gd(r.originalText,i.right,r),c="NGPipeExpression"===i.type?"|":i.operator,p="NGPipeExpression"===i.type&&0!==i.arguments.length?bd(Ad(md([Ed,": ",gd(md([Ed,":",Sd(" ")]),t.map(n,"arguments").map(e=>vd(2,bd(e))))]))):"",d=md(s?[c," ",t.call(n,"right"),p]:[l?Dd:"",c,l?" ":Dd,t.call(n,"right"),p]),f=t.getParentNode(),h=Zd(i.left),m=h||!(o&&"LogicalExpression"===i.type)&&f.type!==i.type&&i.left.type!==i.type&&i.right.type!==i.type;a.push(l?"":" ",m?bd(d,{shouldBreak:h}):d),u&&i.comments&&(a=Pd(Di.printComments(t,()=>md(a),r).parts))}else a.push(bd(t.call(n)));return a}(e,n,t,!1,a);if(a)return md(i);if(("CallExpression"===r.type||"OptionalCallExpression"===r.type)&&r.callee===u||"UnaryExpression"===r.type||("MemberExpression"===r.type||"OptionalMemberExpression"===r.type)&&!r.computed)return bd(md([Ad(md([Ed,md(i)])),Ed]));const s="ReturnStatement"===r.type||"ThrowStatement"===r.type||"JSXExpressionContainer"===r.type&&"JSXAttribute"===o.type||"|"!==u.operator&&"JsExpressionRoot"===r.type||"NGPipeExpression"!==u.type&&("NGRoot"===r.type&&"__ng_binding"===t.parser||"NGMicrosyntaxExpression"===r.type&&"NGMicrosyntax"===o.type&&1===o.body.length)||u===r.body&&"ArrowFunctionExpression"===r.type||u!==r.body&&"ForStatement"===r.type||"ConditionalExpression"===r.type&&"ReturnStatement"!==o.type&&"ThrowStatement"!==o.type&&"CallExpression"!==o.type&&"OptionalCallExpression"!==o.type||"TemplateLiteral"===r.type,l="AssignmentExpression"===r.type||"VariableDeclarator"===r.type||"ClassProperty"===r.type||"TSAbstractClassProperty"===r.type||"ClassPrivateProperty"===r.type||"ObjectProperty"===r.type||"Property"===r.type,c=tf(u.left)&&jf(u.operator,u.left.operator);if(s||ph(u)&&!c||!ph(u)&&l)return bd(md(i));if(0===i.length)return"";const p=cf(u.right),d=i.findIndex(e=>"string"!=typeof e&&"group"===e.type),f=i.slice(0,-1===d?1:d+1),h=md(i.slice(f.length,p?-1:void 0)),m=Symbol("logicalChain-"+ ++zf),g=bd(md([...f,Ad(h)]),{id:m});if(!p)return g;const D=od(i);return bd(md([g,Sd(Ad(D),D,{groupId:m})]))}case"AssignmentPattern":return md([e.call(n,"left")," = ",e.call(n,"right")]);case"TSTypeAssertion":{const t=!("ArrayExpression"===u.expression.type||"ObjectExpression"===u.expression.type),r=bd(md(["<",Ad(md([Ed,e.call(n,"typeAnnotation")])),Ed,">"])),o=md([Sd("("),Ad(md([Ed,e.call(n,"expression")])),Ed,Sd(")")]);return t?Fd([md([r,e.call(n,"expression")]),md([r,bd(o,{shouldBreak:!0})]),md([r,e.call(n,"expression")])]):bd(md([r,e.call(n,"expression")]))}case"OptionalMemberExpression":case"MemberExpression":{const r=e.getParentNode();let o,a=0;do{o=e.getParentNode(a),a++}while(o&&("MemberExpression"===o.type||"OptionalMemberExpression"===o.type||"TSNonNullExpression"===o.type));const i=o&&("NewExpression"===o.type||"BindExpression"===o.type||"VariableDeclarator"===o.type&&"Identifier"!==o.id.type||"AssignmentExpression"===o.type&&"Identifier"!==o.left.type)||u.computed||"Identifier"===u.object.type&&"Identifier"===u.property.type&&"MemberExpression"!==r.type&&"OptionalMemberExpression"!==r.type;return md([e.call(n,"object"),i?qf(e,t,n):bd(Ad(md([Ed,qf(e,t,n)])))])}case"MetaProperty":return md([e.call(n,"meta"),".",e.call(n,"property")]);case"BindExpression":return u.object&&i.push(e.call(n,"object")),i.push(bd(Ad(md([Ed,Vf(e,t,n)])))),md(i);case"Identifier":return md([u.name,Lf(e),Kf(e,t,n)]);case"V8IntrinsicIdentifier":return md(["%",u.name]);case"SpreadElement":case"SpreadElementPattern":case"SpreadProperty":case"SpreadPropertyPattern":case"RestElement":case"ObjectTypeSpreadProperty":return md(["...",e.call(n,"argument"),Kf(e,t,n)]);case"FunctionDeclaration":case"FunctionExpression":return i.push(eh(e,n,t)),u.body||i.push(o),md(i);case"ArrowFunctionExpression":{u.async&&i.push("async "),Zf(e,t)?i.push(e.call(n,"params",0)):i.push(bd(md([Qf(e,n,t,r&&(r.expandLastArg||r.expandFirstArg),!0),th(e,n,t)])));const o=Di.printDanglingComments(e,t,!0,e=>{const n=hd(t.originalText,e,t.locEnd);return!1!==n&&"=>"===t.originalText.slice(n,n+2)});o&&i.push(" ",o),i.push(" =>");const a=e.call(e=>n(e,r),"body");if(!Gd(t.originalText,u.body,t)&&("ArrayExpression"===u.body.type||"ObjectExpression"===u.body.type||"BlockStatement"===u.body.type||cf(u.body)||Sf(u.body,t.originalText,t)||"ArrowFunctionExpression"===u.body.type||"DoExpression"===u.body.type))return bd(md([md(i)," ",a]));if("SequenceExpression"===u.body.type)return bd(md([md(i),bd(md([" (",Ad(md([Ed,a])),Ed,")"]))]));const s=(r&&r.expandLastArg||"JSXExpressionContainer"===e.getParentNode().type)&&!(u.comments&&u.comments.length),l=r&&r.expandLastArg&&If(t,"all"),c="ConditionalExpression"===u.body.type&&!Mf(u.body,!1);return bd(md([md(i),bd(md([Ad(md([Dd,c?Sd("","("):"",a,c?Sd("",")"):""])),s?md([Sd(l?",":""),Ed]):""]))]))}case"YieldExpression":return i.push("yield"),u.delegate&&i.push("*"),u.argument&&i.push(" ",e.call(n,"argument")),md(i);case"AwaitExpression":{i.push("await"),u.argument&&i.push(" ",e.call(n,"argument"));const t=e.getParentNode();return("CallExpression"===t.type||"OptionalCallExpression"===t.type)&&t.callee===u||("MemberExpression"===t.type||"OptionalMemberExpression"===t.type)&&t.object===u?bd(md([Ad(md([Ed,md(i)])),Ed])):md(i)}case"ImportSpecifier":return u.importKind&&i.push(e.call(n,"importKind")," "),i.push(e.call(n,"imported")),u.local&&u.local.name!==u.imported.name&&i.push(" as ",e.call(n,"local")),md(i);case"ExportSpecifier":return i.push(e.call(n,"local")),u.exported&&u.exported.name!==u.local.name&&i.push(" as ",e.call(n,"exported")),md(i);case"ImportNamespaceSpecifier":return i.push("* as "),i.push(e.call(n,"local")),md(i);case"ImportDefaultSpecifier":return e.call(n,"local");case"TSExportAssignment":return md(["export = ",e.call(n,"expression"),o]);case"ExportDefaultDeclaration":case"ExportNamedDeclaration":return nh(e,t,n);case"DeclareExportDeclaration":return md(["declare ",nh(e,t,n)]);case"ExportAllDeclaration":return i.push("export"),"type"===u.exportKind&&i.push(" type"),i.push(" *"),u.exported&&i.push(" as ",e.call(n,"exported")),i.push(Wf(e,t,n),o),md(i);case"ExportNamespaceSpecifier":return md(["* as ",e.call(n,"exported")]);case"ExportDefaultSpecifier":return e.call(n,"exported");case"ImportDeclaration":return i.push("import"),u.importKind&&"value"!==u.importKind&&i.push(" ",u.importKind),u.specifiers&&u.specifiers.length>0?(i.push($f(e,t,n)),i.push(Wf(e,t,n))):u.importKind&&"type"===u.importKind||/{\s*}/.test(t.originalText.slice(t.locStart(u),t.locStart(u.source)))?i.push(" {}",Wf(e,t,n)):i.push(" ",e.call(n,"source")),Array.isArray(u.attributes)&&0!==u.attributes.length&&i.push(" with ",md(e.map(n,"attributes"))),i.push(o),md(i);case"ImportAttribute":return md([e.call(n,"key"),": ",e.call(n,"value")]);case"Import":return"import";case"TSModuleBlock":case"BlockStatement":{const r=e.call(e=>Gf(e,t,n),"body"),a=u.body.some(e=>"EmptyStatement"!==e.type),s=u.directives&&u.directives.length>0,l=e.getParentNode(),c=e.getParentNode(1);return a||s||Ud(u)||"ArrowFunctionExpression"!==l.type&&"FunctionExpression"!==l.type&&"FunctionDeclaration"!==l.type&&"ObjectMethod"!==l.type&&"ClassMethod"!==l.type&&"ClassPrivateMethod"!==l.type&&"ForStatement"!==l.type&&"WhileStatement"!==l.type&&"DoWhileStatement"!==l.type&&"DoExpression"!==l.type&&("CatchClause"!==l.type||c.finalizer)&&"TSModuleDeclaration"!==l.type?(i.push("{"),s&&e.each(e=>{i.push(Ad(md([yd,n(e),o]))),fd(t.originalText,e.getValue(),t.locEnd)&&i.push(yd)},"directives"),a&&i.push(Ad(md([yd,r]))),i.push(Di.printDanglingComments(e,t)),i.push(yd,"}"),md(i)):"{}"}case"ReturnStatement":return md(["return",Ch(e,t,n)]);case"NewExpression":case"ImportExpression":case"OptionalCallExpression":case"CallExpression":{const r="NewExpression"===u.type,o="ImportExpression"===u.type,a=Lf(e),i=o?[u.source]:u.arguments;if(!o&&!r&&"Identifier"===u.callee.type&&("require"===u.callee.name||"define"===u.callee.name)||1===i.length&&Sf(i[0],t.originalText,t)||!r&&wf(u,e.getParentNode()))return md([r?"new ":"",e.call(n,"callee"),a,Rf(e,t,n),md(["(",o?e.call(n,"source"):gd(", ",e.map(n,"arguments")),")"])]);const s=u.callee&&"Identifier"===u.callee.type&&zd(u.callee.trailingComments);if(s&&(u.callee.trailingComments[0].printed=!0),!o&&!r&&gf(u.callee)&&!e.call(e=>kc(e,t),"callee"))return _p(e,t,n);const l=md([r?"new ":"",o?"import":e.call(n,"callee"),a,s?"/*:: ".concat(u.callee.trailingComments[0].value.slice(2).trim()," */"):"",Rf(e,t,n),np(e,t,n)]);return o||nf(u.callee)?bd(l):l}case"ObjectTypeInternalSlot":return md([u.static?"static ":"","[[",e.call(n,"id"),"]]",Lf(e),u.method?"":": ",e.call(n,"value")]);case"ObjectExpression":case"ObjectPattern":case"ObjectTypeAnnotation":case"TSInterfaceBody":case"TSTypeLiteral":case"RecordExpression":{let r;r="TSTypeLiteral"===u.type?"members":"TSInterfaceBody"===u.type?"body":"properties";const a="ObjectTypeAnnotation"===u.type,i=[];a&&i.push("indexers","callProperties","internalSlots"),i.push(r);const s=i.map(e=>u[e][0]).sort((e,n)=>t.locStart(e)-t.locStart(n))[0],l=e.getParentNode(0),c=a&&l&&("InterfaceDeclaration"===l.type||"DeclareInterface"===l.type||"DeclareClass"===l.type)&&"body"===e.getName(),p="TSInterfaceBody"===u.type||c||"ObjectPattern"===u.type&&"FunctionDeclaration"!==l.type&&"FunctionExpression"!==l.type&&"ArrowFunctionExpression"!==l.type&&"ObjectMethod"!==l.type&&"ClassMethod"!==l.type&&"ClassPrivateMethod"!==l.type&&"AssignmentPattern"!==l.type&&"CatchClause"!==l.type&&u.properties.some(e=>e.value&&("ObjectPattern"===e.value.type||"ArrayPattern"===e.value.type))||"ObjectPattern"!==u.type&&s&&ud(t.originalText,t.locStart(u),t.locStart(s)),d=c?";":"TSInterfaceBody"===u.type||"TSTypeLiteral"===u.type?Sd(o,";"):",",f="RecordExpression"===u.type?"#{":u.exact?"{|":"{",h=u.exact?"|}":"}",m=[];i.forEach(r=>{e.each(e=>{const r=e.getValue();m.push({node:r,printed:n(e),loc:t.locStart(r)})},r)});let g=[];const D=m.sort((e,t)=>e.loc-t.loc).map(e=>{const n=md(g.concat(bd(e.printed)));return g=[d,Dd],"TSPropertySignature"!==e.node.type&&"TSMethodSignature"!==e.node.type&&"TSConstructSignatureDeclaration"!==e.node.type||!cd(e.node)||g.shift(),fd(t.originalText,e.node,t.locEnd)&&g.push(yd),n});if(u.inexact){let n;if(Ud(u)){const r=!u.comments.every(Gs.isBlockComment),o=Di.printDanglingComments(e,t,!0);n=md([o,r||rd(t.originalText,t.locEnd(u.comments[u.comments.length-1]))?yd:Dd,"..."])}else n="...";D.push(md(g.concat(n)))}const y=od(u[r]),E=!(u.inexact||y&&"RestElement"===y.type);let C;if(0===D.length){if(!Ud(u))return md([f,h,Kf(e,t,n)]);C=bd(md([f,Di.printDanglingComments(e,t),Ed,h,Lf(e),Kf(e,t,n)]))}else C=md([f,Ad(md([t.bracketSpacing?Dd:Ed,md(D)])),Sd(E&&(","!==d||If(t))?d:""),md([t.bracketSpacing?Dd:Ed,h]),Lf(e),Kf(e,t,n)]);return e.match(e=>"ObjectPattern"===e.type&&!e.decorators,(e,t,n)=>yh(e)&&("params"===t||"parameters"===t)&&0===n)||e.match(Dh,(e,t)=>"typeAnnotation"===t,(e,t)=>"typeAnnotation"===t,(e,t,n)=>yh(e)&&("params"===t||"parameters"===t)&&0===n)?C:bd(C,{shouldBreak:p})}case"ObjectProperty":case"Property":return u.method||"get"===u.kind||"set"===u.kind?Xf(e,t,n):(u.shorthand?i.push(e.call(n,"value")):i.push(fh(u.key,Hf(e,t,n),":",u.value,e.call(n,"value"),t)),md(i));case"ClassMethod":case"ClassPrivateMethod":case"MethodDefinition":case"TSAbstractMethodDefinition":case"TSDeclareMethod":return u.decorators&&0!==u.decorators.length&&i.push(Jf(e,t,n)),u.accessibility&&i.push(u.accessibility+" "),u.static&&i.push("static "),("TSAbstractMethodDefinition"===u.type||u.abstract)&&i.push("abstract "),i.push(Xf(e,t,n)),md(i);case"ObjectMethod":return Xf(e,t,n);case"Decorator":return md(["@",e.call(n,"expression"),e.call(n,"callee")]);case"ArrayExpression":case"ArrayPattern":case"TupleExpression":{const r="TupleExpression"===u.type?"#[":"[",o="]";if(0===u.elements.length)Ud(u)?i.push(bd(md([r,Di.printDanglingComments(e,t),Ed,o]))):i.push(r,o);else{const a=od(u.elements),s=!(a&&"RestElement"===a.type),l=s&&null===a,c=!t.__inJestEach&&u.elements.length>1&&u.elements.every((e,t,n)=>{const r=e&&e.type;if("ArrayExpression"!==r&&"ObjectExpression"!==r)return!1;const u=n[t+1];if(u&&r!==u.type)return!1;const o="ArrayExpression"===r?"elements":"properties";return e[o]&&e[o].length>1});i.push(bd(md([r,Ad(md([Ed,Eh(e,t,"elements",n)])),l?",":"",Sd(s&&!l&&If(t)?",":""),Di.printDanglingComments(e,t,!0),Ed,o]),{shouldBreak:c}))}return i.push(Lf(e),Kf(e,t,n)),md(i)}case"SequenceExpression":{const t=e.getParentNode(0);if("ExpressionStatement"===t.type||"ForStatement"===t.type){const t=[];return e.each(e=>{0===e.getName()?t.push(n(e)):t.push(",",Ad(md([Dd,n(e)])))},"expressions"),bd(md(t))}return bd(md([gd(md([",",Dd]),e.map(n,"expressions"))]))}case"ThisExpression":return"this";case"Super":return"super";case"NullLiteral":return"null";case"RegExpLiteral":return gh(u);case"NumericLiteral":return sd(u.extra.raw);case"DecimalLiteral":return sd(u.value)+"m";case"BigIntLiteral":return(u.bigint||u.extra.raw).toLowerCase();case"BooleanLiteral":case"StringLiteral":case"Literal":return u.regex?gh(u.regex):u.bigint?u.raw.toLowerCase():"number"==typeof u.value?sd(u.raw):"string"!=typeof u.value?""+u.value:mh(u,t);case"Directive":return e.call(n,"value");case"DirectiveLiteral":return mh(u,t);case"UnaryExpression":return i.push(u.operator),/[a-z]$/.test(u.operator)&&i.push(" "),u.argument.comments&&u.argument.comments.length>0?i.push(bd(md(["(",Ad(md([Ed,e.call(n,"argument")])),Ed,")"]))):i.push(e.call(n,"argument")),md(i);case"UpdateExpression":return i.push(e.call(n,"argument"),u.operator),u.prefix&&i.reverse(),md(i);case"ConditionalExpression":return td(e,t,n,{beforeParts:()=>[e.call(n,"test")],afterParts:e=>[e?Ed:""],shouldCheckJsx:!0,conditionalNodeType:"ConditionalExpression",consequentNodePropertyName:"consequent",alternateNodePropertyName:"alternate",testNodePropertyNames:["test"]});case"VariableDeclaration":{const t=e.map(e=>n(e),"declarations"),r=e.getParentNode(),a="ForStatement"===r.type||"ForInStatement"===r.type||"ForOfStatement"===r.type,s=u.declarations.some(e=>e.init);let l;return 1!==t.length||u.declarations[0].comments?t.length>0&&(l=Ad(t[0])):l=t[0],i=[u.declare?"declare ":"",u.kind,l?md([" ",l]):"",Ad(md(t.slice(1).map(e=>md([",",s&&!a?yd:Dd,e]))))],a&&r.body!==u||i.push(o),bd(md(i))}case"TSTypeAliasDeclaration":{u.declare&&i.push("declare ");const r=dh(u.id,u.typeAnnotation,u.typeAnnotation&&e.call(n,"typeAnnotation"),t);return i.push("type ",e.call(n,"id"),e.call(n,"typeParameters")," =",r,o),bd(md(i))}case"VariableDeclarator":return fh(u.id,e.call(n,"id")," =",u.init,u.init&&e.call(n,"init"),t);case"WithStatement":return bd(md(["with (",e.call(n,"object"),")",hh(u.body,e.call(n,"body"))]));case"IfStatement":{const r=hh(u.consequent,e.call(n,"consequent")),o=bd(md(["if (",bd(md([Ad(md([Ed,e.call(n,"test")])),Ed])),")",r]));if(i.push(o),u.alternate){const r=Qd(u.consequent)&&u.consequent.comments.some(e=>e.trailing&&!Gs.isBlockComment(e))||Of(u),o="BlockStatement"===u.consequent.type&&!r;i.push(o?" ":yd),Ud(u)&&i.push(Di.printDanglingComments(e,t,!0),r?yd:" "),i.push("else",bd(hh(u.alternate,e.call(n,"alternate"),"IfStatement"===u.alternate.type)))}return md(i)}case"ForStatement":{const r=hh(u.body,e.call(n,"body")),o=Di.printDanglingComments(e,t,!0),a=o?md([o,Ed]):"";return u.init||u.test||u.update?md([a,bd(md(["for (",bd(md([Ad(md([Ed,e.call(n,"init"),";",Dd,e.call(n,"test"),";",Dd,e.call(n,"update")])),Ed])),")",r]))]):md([a,bd(md(["for (;;)",r]))])}case"WhileStatement":return bd(md(["while (",bd(md([Ad(md([Ed,e.call(n,"test")])),Ed])),")",hh(u.body,e.call(n,"body"))]));case"ForInStatement":return bd(md([u.each?"for each (":"for (",e.call(n,"left")," in ",e.call(n,"right"),")",hh(u.body,e.call(n,"body"))]));case"ForOfStatement":return bd(md(["for",u.await?" await":""," (",e.call(n,"left")," of ",e.call(n,"right"),")",hh(u.body,e.call(n,"body"))]));case"DoWhileStatement":{const t=hh(u.body,e.call(n,"body")),r=bd(md(["do",t]));return i=[r],"BlockStatement"===u.body.type?i.push(" "):i.push(yd),i.push("while ("),i.push(bd(md([Ad(md([Ed,e.call(n,"test")])),Ed])),")",o),md(i)}case"DoExpression":return md(["do ",e.call(n,"body")]);case"BreakStatement":return i.push("break"),u.label&&i.push(" ",e.call(n,"label")),i.push(o),md(i);case"ContinueStatement":return i.push("continue"),u.label&&i.push(" ",e.call(n,"label")),i.push(o),md(i);case"LabeledStatement":return"EmptyStatement"===u.body.type?md([e.call(n,"label"),":;"]):md([e.call(n,"label"),": ",e.call(n,"body")]);case"TryStatement":return md(["try ",e.call(n,"block"),u.handler?md([" ",e.call(n,"handler")]):"",u.finalizer?md([" finally ",e.call(n,"finalizer")]):""]);case"CatchClause":if(u.param){const r=u.param.comments&&u.param.comments.some(e=>!Gs.isBlockComment(e)||e.leading&&rd(t.originalText,t.locEnd(e))||e.trailing&&rd(t.originalText,t.locStart(e),{backwards:!0})),o=e.call(n,"param");return md(["catch ",md(r?["(",Ad(md([Ed,o])),Ed,") "]:["(",o,") "]),e.call(n,"body")])}return md(["catch ",e.call(n,"body")]);case"ThrowStatement":return md(["throw",Ch(e,t,n)]);case"SwitchStatement":return md([bd(md(["switch (",Ad(md([Ed,e.call(n,"discriminant")])),Ed,")"]))," {",u.cases.length>0?Ad(md([yd,gd(yd,e.map(e=>{const r=e.getValue();return md([e.call(n),u.cases.indexOf(r)!==u.cases.length-1&&fd(t.originalText,r,t.locEnd)?yd:""])},"cases"))])):"",yd,"}"]);case"SwitchCase":{u.test?i.push("case ",e.call(n,"test"),":"):i.push("default:");const r=u.consequent.filter(e=>"EmptyStatement"!==e.type);if(r.length>0){const u=e.call(e=>Gf(e,t,n),"consequent");i.push(1===r.length&&"BlockStatement"===r[0].type?md([" ",u]):Ad(md([yd,u])))}return md(i)}case"DebuggerStatement":return md(["debugger",o]);case"JSXAttribute":if(i.push(e.call(n,"name")),u.value){let r;if(Ff(u.value)){let e=Pf(u.value).replace(/&apos;/g,"'").replace(/&quot;/g,'"');const n=dd(e,t.jsxSingleQuote?"'":'"'),o="'"===n?"&apos;":"&quot;";e=e.slice(1,-1).replace(new RegExp(n,"g"),o),r=md([n,e,n])}else r=e.call(n,"value");i.push("=",r)}return md(i);case"JSXIdentifier":return""+u.name;case"JSXNamespacedName":return gd(":",[e.call(n,"namespace"),e.call(n,"name")]);case"JSXMemberExpression":return gd(".",[e.call(n,"object"),e.call(n,"property")]);case"TSQualifiedName":return gd(".",[e.call(n,"left"),e.call(n,"right")]);case"JSXSpreadAttribute":case"JSXSpreadChild":return md(["{",e.call(e=>{const r=md(["...",n(e)]),u=e.getValue();return u.comments&&u.comments.length&&bh(e)?md([Ad(md([Ed,Di.printComments(e,()=>r,t)])),Ed]):r},"JSXSpreadAttribute"===u.type?"argument":"expression"),"}"]);case"JSXExpressionContainer":{const t=e.getParentNode(0),r=u.expression.comments&&u.expression.comments.length>0,o="JSXEmptyExpression"===u.expression.type||!r&&("ArrayExpression"===u.expression.type||"ObjectExpression"===u.expression.type||"ArrowFunctionExpression"===u.expression.type||"CallExpression"===u.expression.type||"OptionalCallExpression"===u.expression.type||"FunctionExpression"===u.expression.type||"TemplateLiteral"===u.expression.type||"TaggedTemplateExpression"===u.expression.type||"DoExpression"===u.expression.type||cf(t)&&("ConditionalExpression"===u.expression.type||tf(u.expression)));return bd(o?md(["{",e.call(n,"expression"),wd,"}"]):md(["{",Ad(md([Ed,e.call(n,"expression")])),Ed,wd,"}"]))}case"JSXFragment":case"JSXElement":{const r=Di.printComments(e,()=>function(e,t,n){const r=e.getValue();if("JSXElement"===r.type&&rf(r))return md([e.call(n,"openingElement"),e.call(n,"closingElement")]);const u="JSXElement"===r.type?e.call(n,"openingElement"):e.call(n,"openingFragment"),o="JSXElement"===r.type?e.call(n,"closingElement"):e.call(n,"closingFragment");if(1===r.children.length&&"JSXExpressionContainer"===r.children[0].type&&("TemplateLiteral"===r.children[0].expression.type||"TaggedTemplateExpression"===r.children[0].expression.type))return md([u,md(e.map(n,"children")),o]);r.children=r.children.map(e=>pf(e)?{type:"JSXText",value:" ",raw:" "}:e);const a=r.children.filter(cf).length>0,i=r.children.filter(e=>"JSXExpressionContainer"===e.type).length>1,s="JSXElement"===r.type&&r.openingElement.attributes.length>1;let l=Td(u)||a||s||i;const c="mdx"===e.getParentNode().rootMarker,p=t.singleQuote?"{' '}":'{" "}',d=c?md([" "]):Sd(md([p,Ed])," "),f=r.openingElement&&r.openingElement.name&&"fbt"===r.openingElement.name.name,h=function(e,t,n,r,u){const o=e.getValue(),a=[];return e.map((e,t)=>{const i=e.getValue();if(ff(i)){const e=Pf(i);if(hf(i)){const n=e.split(Nf);if(""===n[0]){if(a.push(""),n.shift(),/\n/.test(n[0])){const e=o.children[t+1];a.push(ch(u,n[1],i,e))}else a.push(r);n.shift()}let s;if(""===od(n)&&(n.pop(),s=n.pop()),0===n.length)return;if(n.forEach((e,t)=>{t%2==1?a.push(Dd):a.push(e)}),void 0!==s)if(/\n/.test(s)){const e=o.children[t+1];a.push(ch(u,od(a),i,e))}else a.push(r);else{const e=o.children[t+1];a.push(lh(u,od(a),i,e))}}else/\n/.test(e)?e.match(/\n/g).length>1&&(a.push(""),a.push(yd)):(a.push(""),a.push(r))}else{const r=n(e);a.push(r);const s=o.children[t+1];if(s&&hf(s)){const e=Pf(s).trim().split(Nf)[0];a.push(lh(u,e,i,s))}else a.push(yd)}},"children"),a}(e,0,n,d,f),m=r.children.some(e=>hf(e));for(let e=h.length-2;e>=0;e--){const t=""===h[e]&&""===h[e+1],n=h[e]===yd&&""===h[e+1]&&h[e+2]===yd,r=(h[e]===Ed||h[e]===yd)&&""===h[e+1]&&h[e+2]===d,u=h[e]===d&&""===h[e+1]&&(h[e+2]===Ed||h[e+2]===yd),o=h[e]===d&&""===h[e+1]&&h[e+2]===d,a=h[e]===Ed&&""===h[e+1]&&h[e+2]===yd||h[e]===yd&&""===h[e+1]&&h[e+2]===Ed;n&&m||t||r||o||a?h.splice(e,2):u&&h.splice(e+1,2)}for(;h.length&&(kd(od(h))||Nd(od(h)));)h.pop();for(;h.length&&(kd(h[0])||Nd(h[0]))&&(kd(h[1])||Nd(h[1]));)h.shift(),h.shift();const g=[];h.forEach((e,t)=>{if(e===d){if(1===t&&""===h[t-1])return 2===h.length?void g.push(p):void g.push(md([p,yd]));if(t===h.length-1)return void g.push(p);if(""===h[t-1]&&h[t-2]===yd)return void g.push(p)}g.push(e),Td(e)&&(l=!0)});const D=m?xd(g):bd(md(g),{shouldBreak:!0});if(c)return D;const y=bd(md([u,Ad(md([yd,D])),yd,o]));if(l)return y;return Fd([bd(md([u,md(h),o])),y])}(e,t,n),t);return function(e,t,n){const r=e.getParentNode();if(!r)return t;if({ArrayExpression:!0,JSXAttribute:!0,JSXElement:!0,JSXExpressionContainer:!0,JSXFragment:!0,ExpressionStatement:!0,CallExpression:!0,OptionalCallExpression:!0,ConditionalExpression:!0,JsExpressionRoot:!0}[r.type])return t;const u=e.match(void 0,e=>"ArrowFunctionExpression"===e.type,nf,e=>"JSXExpressionContainer"===e.type),o=kc(e,n);return bd(md([o?"":Sd("("),Ad(md([Ed,t])),Ed,o?"":Sd(")")]),{shouldBreak:u})}(e,r,t)}case"JSXOpeningElement":{const r=e.getValue(),u=r.name&&r.name.comments&&r.name.comments.length>0||r.typeParameters&&r.typeParameters.comments&&r.typeParameters.comments.length>0;if(r.selfClosing&&!r.attributes.length&&!u)return md(["<",e.call(n,"name"),e.call(n,"typeParameters")," />"]);if(r.attributes&&1===r.attributes.length&&r.attributes[0].value&&Ff(r.attributes[0].value)&&!r.attributes[0].value.value.includes("\n")&&!u&&(!r.attributes[0].comments||!r.attributes[0].comments.length))return bd(md(["<",e.call(n,"name"),e.call(n,"typeParameters")," ",md(e.map(n,"attributes")),r.selfClosing?" />":">"]));const o=r.attributes.length&&Qd(od(r.attributes)),a=!r.attributes.length&&!u||t.jsxBracketSameLine&&(!u||r.attributes.length)&&!o,i=r.attributes&&r.attributes.some(e=>e.value&&Ff(e.value)&&e.value.value.includes("\n"));return bd(md(["<",e.call(n,"name"),e.call(n,"typeParameters"),md([Ad(md(e.map(e=>md([Dd,n(e)]),"attributes"))),r.selfClosing?Dd:a?">":Ed]),r.selfClosing?"/>":a?"":">"]),{shouldBreak:i})}case"JSXClosingElement":return md(["</",e.call(n,"name"),">"]);case"JSXOpeningFragment":case"JSXClosingFragment":{const n=u.comments&&u.comments.length,r=n&&!u.comments.every(Gs.isBlockComment),o="JSXOpeningFragment"===u.type;return md([o?"<":"</",Ad(md([r?yd:n&&!o?" ":"",Di.printDanglingComments(e,t,!0)])),r?yd:"",">"])}case"JSXText":throw new Error("JSXTest should be handled by JSXElement");case"JSXEmptyExpression":{const n=u.comments&&!u.comments.every(Gs.isBlockComment);return md([Di.printDanglingComments(e,t,!n),n?yd:""])}case"ClassBody":return u.comments||0!==u.body.length?md(["{",u.body.length>0?Ad(md([yd,e.call(e=>Gf(e,t,n),"body")])):Di.printDanglingComments(e,t),yd,"}"]):"{}";case"ClassProperty":case"TSAbstractClassProperty":case"ClassPrivateProperty":{u.decorators&&0!==u.decorators.length&&i.push(Jf(e,t,n)),u.accessibility&&i.push(u.accessibility+" "),u.declare&&i.push("declare "),u.static&&i.push("static "),("TSAbstractClassProperty"===u.type||u.abstract)&&i.push("abstract "),u.readonly&&i.push("readonly ");const r=qd(u);return r&&i.push(r),i.push(Hf(e,t,n),Lf(e),Kf(e,t,n)),u.value&&i.push(" =",dh(u.key,u.value,e.call(n,"value"),t)),i.push(o),bd(md(i))}case"ClassDeclaration":case"ClassExpression":return u.declare&&i.push("declare "),i.push(md(sh(e,t,n))),md(i);case"TSInterfaceHeritage":case"TSExpressionWithTypeArguments":return i.push(e.call(n,"expression")),u.typeParameters&&i.push(e.call(n,"typeParameters")),md(i);case"TemplateElement":return gd(Cd,u.value.raw.split(/\r?\n/g));case"TemplateLiteral":{const r=e.getParentNode();if(lf(u,r)){const r=function(e,t,n){const r=e.getNode(),u=r.quasis[0].value.raw.trim().split(/\s*\|\s*/);if(u.length>1||u.some(e=>0!==e.length)){t.__inJestEach=!0;const o=e.map(n,"expressions");t.__inJestEach=!1;const a=[],i=o.map(e=>"${"+_d(e,Object.assign({},t,{printWidth:1/0,endOfLine:"lf"})).formatted+"}"),s=[{hasLineBreak:!1,cells:[]}];for(let e=1;e<r.quasis.length;e++){const t=s[s.length-1],n=i[e-1];t.cells.push(n),n.includes("\n")&&(t.hasLineBreak=!0),r.quasis[e].value.raw.includes("\n")&&s.push({hasLineBreak:!1,cells:[]})}const l=Math.max(u.length,...s.map(e=>e.cells.length)),c=Array.from({length:l}).fill(0),p=[{cells:u},...s.filter(e=>0!==e.cells.length)];for(const{cells:e}of p.filter(e=>!e.hasLineBreak))e.forEach((e,t)=>{c[t]=Math.max(c[t],ad(e))});return a.push(wd,"`",Ad(md([yd,gd(yd,p.map(e=>gd(" | ",e.cells.map((t,n)=>e.hasLineBreak?t:t+" ".repeat(c[n]-ad(t))))))])),yd,"`"),md(a)}}(e,t,n);if(r)return r}let o=e.map(n,"expressions");const a=vf(u);return a&&(o=o.map(e=>_d(e,Object.assign({},t,{printWidth:1/0})).formatted)),i.push(wd,"`"),e.each(e=>{const r=e.getName();if(i.push(n(e)),r<o.length){const{tabWidth:n}=t,s=e.getValue(),l=pd(s.value.raw,n);let c=o[r];a||(u.expressions[r].comments&&u.expressions[r].comments.length||"MemberExpression"===u.expressions[r].type||"OptionalMemberExpression"===u.expressions[r].type||"ConditionalExpression"===u.expressions[r].type||"SequenceExpression"===u.expressions[r].type||"TSAsExpression"===u.expressions[r].type||tf(u.expressions[r]))&&(c=md([Ad(md([Ed,c])),Ed]));const p=0===l&&s.value.raw.endsWith("\n")?vd(-1/0,c):Bd(c,l,n);i.push(bd(md(["${",p,wd,"}"])))}},"quasis"),i.push("`"),md(i)}case"TaggedTemplateExpression":return md([e.call(n,"tag"),e.call(n,"typeParameters"),e.call(n,"quasi")]);case"Node":case"Printable":case"SourceLocation":case"Position":case"Statement":case"Function":case"Pattern":case"Expression":case"Declaration":case"Specifier":case"NamedSpecifier":case"Comment":case"MemberTypeAnnotation":case"Type":throw new Error("unprintable type: "+JSON.stringify(u.type));case"TypeAnnotation":case"TSTypeAnnotation":return u.typeAnnotation?e.call(n,"typeAnnotation"):"";case"TSNamedTupleMember":return md([e.call(n,"label"),u.optional?"?":"",": ",e.call(n,"elementType")]);case"TSTupleType":case"TupleTypeAnnotation":{const r="TSTupleType"===u.type?"elementTypes":"types",o=u[r].length>0&&"TSRestType"===od(u[r]).type;return bd(md(["[",Ad(md([Ed,Eh(e,t,r,n)])),Sd(If(t,"all")&&!o?",":""),Di.printDanglingComments(e,t,!0),Ed,"]"]))}case"ExistsTypeAnnotation":return"*";case"EmptyTypeAnnotation":return"empty";case"AnyTypeAnnotation":return"any";case"MixedTypeAnnotation":return"mixed";case"ArrayTypeAnnotation":return md([e.call(n,"elementType"),"[]"]);case"BooleanTypeAnnotation":return"boolean";case"BooleanLiteralTypeAnnotation":return""+u.value;case"DeclareClass":return rh(e,sh(e,t,n));case"TSDeclareFunction":return md([u.declare?"declare ":"",eh(e,n,t),o]);case"DeclareFunction":return rh(e,["function ",e.call(n,"id"),u.predicate?" ":"",e.call(n,"predicate"),o]);case"DeclareModule":return rh(e,["module ",e.call(n,"id")," ",e.call(n,"body")]);case"DeclareModuleExports":return rh(e,["module.exports",": ",e.call(n,"typeAnnotation"),o]);case"DeclareVariable":return rh(e,["var ",e.call(n,"id"),o]);case"DeclareExportAllDeclaration":return md(["declare export *",Wf(e,t,n)]);case"DeclareOpaqueType":case"OpaqueType":return i.push("opaque type ",e.call(n,"id"),e.call(n,"typeParameters")),u.supertype&&i.push(": ",e.call(n,"supertype")),u.impltype&&i.push(" = ",e.call(n,"impltype")),i.push(o),"DeclareOpaqueType"===u.type?rh(e,i):md(i);case"EnumDeclaration":return md(["enum ",e.call(n,"id")," ",e.call(n,"body")]);case"EnumBooleanBody":case"EnumNumberBody":case"EnumStringBody":case"EnumSymbolBody":if("EnumSymbolBody"===u.type||u.explicitType){let e=null;switch(u.type){case"EnumBooleanBody":e="boolean";break;case"EnumNumberBody":e="number";break;case"EnumStringBody":e="string";break;case"EnumSymbolBody":e="symbol"}i.push("of ",e," ")}return 0===u.members.length?i.push(bd(md(["{",Di.printDanglingComments(e,t),Ed,"}"]))):i.push(bd(md(["{",Ad(md([yd,Eh(e,t,"members",n),If(t)?",":""])),Di.printDanglingComments(e,t,!0),yd,"}"]))),md(i);case"EnumBooleanMember":case"EnumNumberMember":case"EnumStringMember":return md([e.call(n,"id")," = ","object"==typeof u.init?e.call(n,"init"):String(u.init)]);case"EnumDefaultedMember":return e.call(n,"id");case"FunctionTypeAnnotation":case"TSFunctionType":{const r=e.getParentNode(0),o=e.getParentNode(1),a=e.getParentNode(2);let s="TSFunctionType"===u.type||!(("ObjectTypeProperty"===r.type||"ObjectTypeInternalSlot"===r.type)&&!qd(r)&&!r.optional&&t.locStart(r)===t.locStart(u)||"ObjectTypeCallProperty"===r.type||a&&"DeclareFunction"===a.type),l=s&&("TypeAnnotation"===r.type||"TSTypeAnnotation"===r.type);const c=l&&s&&("TypeAnnotation"===r.type||"TSTypeAnnotation"===r.type)&&"ArrowFunctionExpression"===o.type;return Cf(r,t)&&(s=!0,l=!0),c&&i.push("("),i.push(Qf(e,n,t,!1,!0)),(u.returnType||u.predicate||u.typeAnnotation)&&i.push(s?" => ":": ",e.call(n,"returnType"),e.call(n,"predicate"),e.call(n,"typeAnnotation")),c&&i.push(")"),bd(md(i))}case"TSRestType":return md(["...",e.call(n,"typeAnnotation")]);case"TSOptionalType":return md([e.call(n,"typeAnnotation"),"?"]);case"FunctionTypeParam":return md([e.call(n,"name"),Lf(e),u.name?": ":"",e.call(n,"typeAnnotation")]);case"GenericTypeAnnotation":return md([e.call(n,"id"),e.call(n,"typeParameters")]);case"DeclareInterface":case"InterfaceDeclaration":case"InterfaceTypeAnnotation":case"TSInterfaceDeclaration":{("DeclareInterface"===u.type||u.declare)&&i.push("declare "),"TSInterfaceDeclaration"===u.type&&i.push(u.abstract?"abstract ":"",uh(e,t,n)),i.push("interface");const r=[],o=[];"InterfaceTypeAnnotation"!==u.type&&r.push(" ",e.call(n,"id"),e.call(n,"typeParameters"));const a=u.typeParameters&&!Zd(u.typeParameters);if(u.extends&&0!==u.extends.length&&o.push(a?Sd(" ",Dd,{groupId:ah(u.typeParameters)}):Dd,"extends ",(1===u.extends.length?ef:Ad)(gd(md([",",Dd]),e.map(n,"extends")))),u.id&&Qd(u.id)||u.extends&&0!==u.extends.length){const e=md(o);a?i.push(bd(md(r.concat(Sd(Ad(e),e))))):i.push(bd(Ad(md(r.concat(e)))))}else i.push(...r,...o);return i.push(" ",e.call(n,"body")),bd(md(i))}case"ClassImplements":case"InterfaceExtends":return md([e.call(n,"id"),e.call(n,"typeParameters")]);case"TSClassImplements":return md([e.call(n,"expression"),e.call(n,"typeParameters")]);case"TSIntersectionType":case"IntersectionTypeAnnotation":{const t=e.map(n,"types"),r=[];let o=!1;for(let e=0;e<t.length;++e)0===e?r.push(t[e]):Ef(u.types[e-1])&&Ef(u.types[e])?r.push(md([" & ",o?Ad(t[e]):t[e]])):Ef(u.types[e-1])||Ef(u.types[e])?(e>1&&(o=!0),r.push(" & ",e>1?Ad(t[e]):t[e])):r.push(Ad(md([" &",Dd,t[e]])));return bd(md(r))}case"TSUnionType":case"UnionTypeAnnotation":{const r=e.getParentNode(),o=!("TypeParameterInstantiation"===r.type||"TSTypeParameterInstantiation"===r.type||"GenericTypeAnnotation"===r.type||"TSTypeReference"===r.type||"TSTypeAssertion"===r.type||"TupleTypeAnnotation"===r.type||"TSTupleType"===r.type||"FunctionTypeParam"===r.type&&!r.name||("TypeAlias"===r.type||"VariableDeclarator"===r.type||"TSTypeAliasDeclaration"===r.type)&&Gd(t.originalText,u,t)),a=Dh(u),i=e.map(e=>{let r=e.call(n);return a||(r=vd(2,r)),Di.printComments(e,()=>r,t)},"types");if(a)return gd(" | ",i);const s=o&&!Gd(t.originalText,u,t),l=md([Sd(md([s?Dd:"","| "])),gd(md([Dd,"| "]),i)]);return kc(e,t)?bd(md([Ad(l),Ed])):"TupleTypeAnnotation"===r.type&&r.types.length>1||"TSTupleType"===r.type&&r.elementTypes.length>1?bd(md([Ad(md([Sd(md(["(",Ed])),l])),Ed,Sd(")")])):bd(o?Ad(l):l)}case"NullableTypeAnnotation":return md(["?",e.call(n,"typeAnnotation")]);case"TSNullKeyword":case"NullLiteralTypeAnnotation":return"null";case"ThisTypeAnnotation":return"this";case"NumberTypeAnnotation":return"number";case"SymbolTypeAnnotation":return"symbol";case"ObjectTypeCallProperty":return u.static&&i.push("static "),i.push(e.call(n,"value")),md(i);case"ObjectTypeIndexer":{const t=qd(u);return md([t||"","[",e.call(n,"id"),u.id?": ":"",e.call(n,"key"),"]: ",e.call(n,"value")])}case"ObjectTypeProperty":{const r=qd(u);let o="";return u.proto?o="proto ":u.static&&(o="static "),md([o,sf(u)?u.kind+" ":"",r||"",Hf(e,t,n),Lf(e),af(u,t)?"":": ",e.call(n,"value")])}case"QualifiedTypeIdentifier":return md([e.call(n,"qualification"),".",e.call(n,"id")]);case"StringLiteralTypeAnnotation":return mh(u,t);case"NumberLiteralTypeAnnotation":return Xa.strictEqual(typeof u.value,"number"),null!=u.extra?sd(u.extra.raw):sd(u.raw);case"StringTypeAnnotation":return"string";case"DeclareTypeAlias":case"TypeAlias":{("DeclareTypeAlias"===u.type||u.declare)&&i.push("declare ");const r=dh(u.id,u.right,e.call(n,"right"),t);return i.push("type ",e.call(n,"id"),e.call(n,"typeParameters")," =",r,o),bd(md(i))}case"TypeCastExpression":return md(["(",e.call(n,"expression"),Kf(e,t,n),")"]);case"TypeParameterDeclaration":case"TypeParameterInstantiation":{const r=e.getValue(),u=t.originalText.slice(0,t.locStart(r)).lastIndexOf("/*");return u>=0&&t.originalText.slice(u).match(/^\/\*\s*::/)?md(["/*:: ",ih(e,t,n,"params")," */"]):ih(e,t,n,"params")}case"TSTypeParameterDeclaration":case"TSTypeParameterInstantiation":return ih(e,t,n,"params");case"TSTypeParameter":case"TypeParameter":{const r=e.getParentNode();if("TSMappedType"===r.type)return i.push("[",e.call(n,"name")),u.constraint&&i.push(" in ",e.call(n,"constraint")),i.push("]"),md(i);const o=qd(u);o&&i.push(o),i.push(e.call(n,"name")),u.bound&&(i.push(": "),i.push(e.call(n,"bound"))),u.constraint&&i.push(" extends ",e.call(n,"constraint")),u.default&&i.push(" = ",e.call(n,"default"));const a=e.getNode(2);return r.params&&1===r.params.length&&Tf(t)&&!u.constraint&&"ArrowFunctionExpression"===a.type&&i.push(","),md(i)}case"TypeofTypeAnnotation":return md(["typeof ",e.call(n,"argument")]);case"VoidTypeAnnotation":return"void";case"InferredPredicate":return"%checks";case"DeclaredPredicate":return md(["%checks(",e.call(n,"value"),")"]);case"TSAbstractKeyword":return"abstract";case"TSAnyKeyword":return"any";case"TSAsyncKeyword":return"async";case"TSBooleanKeyword":return"boolean";case"TSBigIntKeyword":return"bigint";case"TSConstKeyword":return"const";case"TSDeclareKeyword":return"declare";case"TSExportKeyword":return"export";case"TSNeverKeyword":return"never";case"TSNumberKeyword":return"number";case"TSObjectKeyword":return"object";case"TSProtectedKeyword":return"protected";case"TSPrivateKeyword":return"private";case"TSPublicKeyword":return"public";case"TSReadonlyKeyword":return"readonly";case"TSSymbolKeyword":return"symbol";case"TSStaticKeyword":return"static";case"TSStringKeyword":return"string";case"TSUndefinedKeyword":return"undefined";case"TSUnknownKeyword":return"unknown";case"TSVoidKeyword":return"void";case"TSAsExpression":return md([e.call(n,"expression")," as ",e.call(n,"typeAnnotation")]);case"TSArrayType":return md([e.call(n,"elementType"),"[]"]);case"TSPropertySignature":return u.export&&i.push("export "),u.accessibility&&i.push(u.accessibility+" "),u.static&&i.push("static "),u.readonly&&i.push("readonly "),i.push(Hf(e,t,n),Lf(e)),u.typeAnnotation&&(i.push(": "),i.push(e.call(n,"typeAnnotation"))),u.initializer&&i.push(" = ",e.call(n,"initializer")),md(i);case"TSParameterProperty":return u.accessibility&&i.push(u.accessibility+" "),u.export&&i.push("export "),u.static&&i.push("static "),u.readonly&&i.push("readonly "),i.push(e.call(n,"parameter")),md(i);case"TSTypeReference":return md([e.call(n,"typeName"),ih(e,t,n,"typeParameters")]);case"TSTypeQuery":return md(["typeof ",e.call(n,"exprName")]);case"TSIndexSignature":{const r=e.getParentNode(),a=u.parameters.length>1?Sd(If(t)?",":""):"",i=bd(md([Ad(md([Ed,gd(md([", ",Ed]),e.map(n,"parameters"))])),a,Ed]));return md([u.export?"export ":"",u.accessibility?md([u.accessibility," "]):"",u.static?"static ":"",u.readonly?"readonly ":"","[",u.parameters?i:"",u.typeAnnotation?"]: ":"]",u.typeAnnotation?e.call(n,"typeAnnotation"):"","ClassBody"===r.type?o:""])}case"TSTypePredicate":return md([u.asserts?"asserts ":"",e.call(n,"parameterName"),u.typeAnnotation?md([" is ",e.call(n,"typeAnnotation")]):""]);case"TSNonNullExpression":return md([e.call(n,"expression"),"!"]);case"TSThisType":return"this";case"TSImportType":return md([u.isTypeOf?"typeof ":"","import(",e.call(n,u.parameter?"parameter":"argument"),")",u.qualifier?md([".",e.call(n,"qualifier")]):"",ih(e,t,n,"typeParameters")]);case"TSLiteralType":return e.call(n,"literal");case"TSIndexedAccessType":return md([e.call(n,"objectType"),"[",e.call(n,"indexType"),"]"]);case"TSConstructSignatureDeclaration":case"TSCallSignatureDeclaration":case"TSConstructorType":if("TSCallSignatureDeclaration"!==u.type&&i.push("new "),i.push(bd(Qf(e,n,t,!1,!0))),u.returnType||u.typeAnnotation){const t="TSConstructorType"===u.type;i.push(t?" => ":": ",e.call(n,"returnType"),e.call(n,"typeAnnotation"))}return md(i);case"TSTypeOperator":return md([u.operator," ",e.call(n,"typeAnnotation")]);case"TSMappedType":{const r=ud(t.originalText,t.locStart(u),t.locEnd(u));return bd(md(["{",Ad(md([t.bracketSpacing?Dd:Ed,u.readonly?md([$d(u.readonly,"readonly")," "]):"",uh(e,t,n),e.call(n,"typeParameter"),u.optional?$d(u.optional,"?"):"",u.typeAnnotation?": ":"",e.call(n,"typeAnnotation"),Sd(o,"")])),Di.printDanglingComments(e,t,!0),t.bracketSpacing?Dd:Ed,"}"]),{shouldBreak:r})}case"TSMethodSignature":return i.push(u.accessibility?md([u.accessibility," "]):"",u.export?"export ":"",u.static?"static ":"",u.readonly?"readonly ":"",u.computed?"[":"",e.call(n,"key"),u.computed?"]":"",Lf(e),Qf(e,n,t,!1,!0)),(u.returnType||u.typeAnnotation)&&i.push(": ",e.call(n,"returnType"),e.call(n,"typeAnnotation")),bd(md(i));case"TSNamespaceExportDeclaration":return i.push("export as namespace ",e.call(n,"id")),t.semi&&i.push(";"),bd(md(i));case"TSEnumDeclaration":return u.declare&&i.push("declare "),u.modifiers&&i.push(uh(e,t,n)),u.const&&i.push("const "),i.push("enum ",e.call(n,"id")," "),0===u.members.length?i.push(bd(md(["{",Di.printDanglingComments(e,t),Ed,"}"]))):i.push(bd(md(["{",Ad(md([yd,Eh(e,t,"members",n),If(t,"es5")?",":""])),Di.printDanglingComments(e,t,!0),yd,"}"]))),md(i);case"TSEnumMember":return i.push(e.call(n,"id")),u.initializer&&i.push(" = ",e.call(n,"initializer")),md(i);case"TSImportEqualsDeclaration":return u.isExport&&i.push("export "),i.push("import ",e.call(n,"id")," = ",e.call(n,"moduleReference")),t.semi&&i.push(";"),bd(md(i));case"TSExternalModuleReference":return md(["require(",e.call(n,"expression"),")"]);case"TSModuleDeclaration":{const r=e.getParentNode(),a=ff(u.id),s="TSModuleDeclaration"===r.type,l=u.body&&"TSModuleDeclaration"===u.body.type;if(s)i.push(".");else{u.declare&&i.push("declare "),i.push(uh(e,t,n));const r=t.originalText.slice(t.locStart(u),t.locStart(u.id));"Identifier"===u.id.type&&"global"===u.id.name&&!/namespace|module/.test(r)||i.push(a||/(^|\s)module(\s|$)/.test(r)?"module ":"namespace ")}return i.push(e.call(n,"id")),l?i.push(e.call(n,"body")):u.body?i.push(" ",bd(e.call(n,"body"))):i.push(o),md(i)}case"PrivateName":return md(["#",e.call(n,"id")]);case"TSPrivateIdentifier":return u.escapedText;case"TSConditionalType":return td(e,t,n,{beforeParts:()=>[e.call(n,"checkType")," ","extends"," ",e.call(n,"extendsType")],afterParts:()=>[],shouldCheckJsx:!1,conditionalNodeType:"TSConditionalType",consequentNodePropertyName:"trueType",alternateNodePropertyName:"falseType",testNodePropertyNames:["checkType","extendsType"]});case"TSInferType":return md(["infer"," ",e.call(n,"typeParameter")]);case"InterpreterDirective":return i.push("#!",u.value,yd),fd(t.originalText,u,t.locEnd)&&i.push(yd),md(i);case"NGRoot":return md([].concat(e.call(n,"node"),u.node.comments&&0!==u.node.comments.length?md([" //",u.node.comments[0].value.trimEnd()]):[]));case"NGChainedExpression":return bd(gd(md([";",Dd]),e.map(e=>Yd(e)?n(e):md(["(",n(e),")"]),"expressions")));case"NGEmptyExpression":return"";case"NGQuotedExpression":return md([u.prefix,": ",u.value.trim()]);case"NGMicrosyntax":return md(e.map((e,t)=>md([0===t?"":Df(e.getValue(),t,u)?" ":md([";",Dd]),n(e)]),"body"));case"NGMicrosyntaxKey":return/^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i.test(u.name)?u.name:JSON.stringify(u.name);case"NGMicrosyntaxExpression":return md([e.call(n,"expression"),null===u.alias?"":md([" as ",e.call(n,"alias")])]);case"NGMicrosyntaxKeyedExpression":{const t=e.getName(),r=e.getParentNode(),o=Df(u,t,r)||(1===t&&("then"===u.key.name||"else"===u.key.name)||2===t&&"else"===u.key.name&&"NGMicrosyntaxKeyedExpression"===r.body[t-1].type&&"then"===r.body[t-1].key.name)&&"NGMicrosyntaxExpression"===r.body[0].type;return md([e.call(n,"key"),o?" ":": ",e.call(n,"expression")])}case"NGMicrosyntaxLet":return md(["let ",e.call(n,"key"),null===u.value?"":md([" = ",e.call(n,"value")])]);case"NGMicrosyntaxAs":return md([e.call(n,"key")," as ",e.call(n,"alias")]);case"PipelineBareFunction":return e.call(n,"callee");case"PipelineTopicExpression":return e.call(n,"expression");case"PipelinePrimaryTopicReference":return i.push("#"),md(i);case"ArgumentPlaceholder":return"?";case"TSJSDocAllType":return"*";case"TSJSDocUnknownType":return"?";case"TSJSDocNullableType":return md(["?",e.call(n,"typeAnnotation")]);case"TSJSDocNonNullableType":return md(["!",e.call(n,"typeAnnotation")]);case"TSJSDocFunctionType":return md(["function(","): ",e.call(n,"typeAnnotation")]);default:throw new Error("unknown type: "+JSON.stringify(u.type))}}(e,t,n,r);if(!u||Nd(a))return a;const i=Wd(e),s=[];if("ClassMethod"===u.type||"ClassPrivateMethod"===u.type||"ClassProperty"===u.type||"TSAbstractClassProperty"===u.type||"ClassPrivateProperty"===u.type||"MethodDefinition"===u.type||"TSAbstractMethodDefinition"===u.type||"TSDeclareMethod"===u.type);else if(u.decorators&&u.decorators.length>0&&!(i&&t.locStart(i,{ignoreDecorators:!0})>t.locStart(u.decorators[0]))){const r="ClassExpression"===u.type||"ClassDeclaration"===u.type||Xd(u,t)?yd:Dd;e.each(e=>{let t=e.getValue();t=t.expression?t.expression:t.callee,s.push(n(e),r)},"decorators"),i&&s.unshift(yd)}else uf(u)&&u.declaration&&u.declaration.decorators&&u.declaration.decorators.length>0&&t.locStart(u,{ignoreDecorators:!0})>t.locStart(u.declaration.decorators[0])?e.each(e=>{const t="Decorator"===e.getValue().type?"":"@";s.push(t,n(e),yd)},"declaration","decorators"):o=kc(e,t);const l=[];if(o&&l.unshift("("),l.push(a),o){const t=e.getValue();Jd(t)&&(l.push(" /*"),l.push(t.trailingComments[0].value.trimStart()),l.push("*/"),t.trailingComments[0].printed=!0),l.push(")")}return s.length>0?bd(md(s.concat(l))):md(l)},embed:El,insertPragma:Id,massageAstNode:Cl,hasPrettierIgnore:Kd,willPrintOwnComments:bh,canAttachComment:function(e){return e.type&&"CommentBlock"!==e.type&&"CommentLine"!==e.type&&"Line"!==e.type&&"Block"!==e.type&&"EmptyStatement"!==e.type&&"TemplateElement"!==e.type&&"Import"!==e.type},printComment:function(e,t){const n=e.getValue();switch(n.type){case"CommentBlock":case"Block":{if(function(e){const t="*".concat(e.value,"*").split("\n");return t.length>1&&t.every(e=>"*"===e.trim()[0])}(n)){const e=function(e){const t=e.value.split("\n");return md(["/*",gd(yd,t.map((e,n)=>0===n?e.trimEnd():" "+(n<t.length-1?e.trim():e.trimStart()))),"*/"])}(n);return n.trailing&&!rd(t.originalText,t.locStart(n),{backwards:!0})?md([yd,e]):e}const e=t.locEnd(n),r="*-/"===t.originalText.slice(e-3,e);return"/*"+n.value+(r?"*-/":"*/")}case"CommentLine":case"Line":return t.originalText.slice(t.locStart(n),t.locEnd(n)).trimEnd();default:throw new Error("Not a comment: "+JSON.stringify(n))}},isBlockComment:Gs.isBlockComment,handleComments:{ownLine:Gs.handleOwnLineComment,endOfLine:Gs.handleEndOfLineComment,remaining:Gs.handleRemainingComment},getGapRegex:Gs.getGapRegex,getCommentChildNodes:Gs.getCommentChildNodes};const{concat:vh,hardline:Fh,indent:xh,join:Sh}=dn.builders;var wh={preprocess:Ic,print:function(e,t,n){const r=e.getValue();switch(r.type){case"JsonRoot":return vh([e.call(n,"node"),Fh]);case"ArrayExpression":return 0===r.elements.length?"[]":vh(["[",xh(vh([Fh,Sh(vh([",",Fh]),e.map(n,"elements"))])),Fh,"]"]);case"ObjectExpression":return 0===r.properties.length?"{}":vh(["{",xh(vh([Fh,Sh(vh([",",Fh]),e.map(n,"properties"))])),Fh,"}"]);case"ObjectProperty":return vh([e.call(n,"key"),": ",e.call(n,"value")]);case"UnaryExpression":return vh(["+"===r.operator?"":r.operator,e.call(n,"argument")]);case"NullLiteral":return"null";case"BooleanLiteral":return r.value?"true":"false";case"StringLiteral":case"NumericLiteral":return JSON.stringify(r.value);case"Identifier":return JSON.stringify(r.name);default:throw new Error("unknown type: "+JSON.stringify(r.type))}},massageAstNode:function(e,t){return delete t.start,delete t.end,delete t.extra,delete t.loc,delete t.comments,delete t.errors,delete t.range,"Identifier"===e.type?{type:"StringLiteral",value:e.name}:"UnaryExpression"===e.type&&"+"===e.operator?t.argument:void 0}};var Bh={bracketSpacing:{since:"0.0.0",category:"Common",type:"boolean",default:!0,description:"Print spaces between brackets.",oppositeDescription:"Do not print spaces between brackets."},singleQuote:{since:"0.0.0",category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."},proseWrap:{since:"1.8.2",category:"Common",type:"choice",default:[{since:"1.8.2",value:!0},{since:"1.9.0",value:"preserve"}],description:"How to wrap prose.",choices:[{since:"1.9.0",value:"always",description:"Wrap prose if it exceeds the print width."},{since:"1.9.0",value:"never",description:"Do not wrap prose."},{since:"1.9.0",value:"preserve",description:"Wrap prose as-is."}]}};var Th={arrowParens:{since:"1.9.0",category:"JavaScript",type:"choice",default:[{since:"1.9.0",value:"avoid"},{since:"2.0.0",value:"always"}],description:"Include parentheses around a sole arrow function parameter.",choices:[{value:"always",description:"Always include parens. Example: `(x) => x`"},{value:"avoid",description:"Omit parens when possible. Example: `x => x`"}]},bracketSpacing:Bh.bracketSpacing,jsxBracketSameLine:{since:"0.17.0",category:"JavaScript",type:"boolean",default:!1,description:"Put > on the last line instead of at a new line."},semi:{since:"1.0.0",category:"JavaScript",type:"boolean",default:!0,description:"Print semicolons.",oppositeDescription:"Do not print semicolons, except at the beginning of lines which may need them."},singleQuote:Bh.singleQuote,jsxSingleQuote:{since:"1.15.0",category:"JavaScript",type:"boolean",default:!1,description:"Use single quotes in JSX."},quoteProps:{since:"1.17.0",category:"JavaScript",type:"choice",default:"as-needed",description:"Change when properties in objects are quoted.",choices:[{value:"as-needed",description:"Only add quotes around object properties where required."},{value:"consistent",description:"If at least one property in an object requires quotes, quote all properties."},{value:"preserve",description:"Respect the input use of quotes in object properties."}]},trailingComma:{since:"0.0.0",category:"JavaScript",type:"choice",default:[{since:"0.0.0",value:!1},{since:"0.19.0",value:"none"},{since:"2.0.0",value:"es5"}],description:"Print trailing commas wherever possible when multi-line.",choices:[{value:"es5",description:"Trailing commas where valid in ES5 (objects, arrays, etc.)"},{value:"none",description:"No trailing commas."},{value:"all",description:"Trailing commas wherever possible (including function arguments)."}]}},kh=["js","node"],Nh=[".js","._js",".bones",".cjs",".es",".es6",".frag",".gs",".jake",".jsb",".jscad",".jsfl",".jsm",".jss",".mjs",".njs",".pac",".sjs",".ssjs",".xsjs",".xsjslib"],Oh=["Jakefile"],Ph=["chakra","d8","gjs","js","node","qjs","rhino","v8","v8-shell"],_h={name:"JavaScript",type:"programming",tmScope:"source.js",aceMode:"javascript",codemirrorMode:"javascript",codemirrorMimeType:"text/javascript",color:"#f1e05a",aliases:kh,extensions:Nh,filenames:Oh,interpreters:Ph,languageId:183},Ih=Object.freeze({__proto__:null,name:"JavaScript",type:"programming",tmScope:"source.js",aceMode:"javascript",codemirrorMode:"javascript",codemirrorMimeType:"text/javascript",color:"#f1e05a",aliases:kh,extensions:Nh,filenames:Oh,interpreters:Ph,languageId:183,default:_h}),jh=[".jsx"],Mh={name:"JSX",type:"programming",group:"JavaScript",extensions:jh,tmScope:"source.js.jsx",aceMode:"javascript",codemirrorMode:"jsx",codemirrorMimeType:"text/jsx",languageId:178},Lh=Object.freeze({__proto__:null,name:"JSX",type:"programming",group:"JavaScript",extensions:jh,tmScope:"source.js.jsx",aceMode:"javascript",codemirrorMode:"jsx",codemirrorMimeType:"text/jsx",languageId:178,default:Mh}),Rh=["ts"],qh=["deno","ts-node"],Vh=[".ts"],Wh={name:"TypeScript",type:"programming",color:"#2b7489",aliases:Rh,interpreters:qh,extensions:Vh,tmScope:"source.ts",aceMode:"typescript",codemirrorMode:"javascript",codemirrorMimeType:"application/typescript",languageId:378},$h=Object.freeze({__proto__:null,name:"TypeScript",type:"programming",color:"#2b7489",aliases:Rh,interpreters:qh,extensions:Vh,tmScope:"source.ts",aceMode:"typescript",codemirrorMode:"javascript",codemirrorMimeType:"application/typescript",languageId:378,default:Wh}),Uh=[".tsx"],zh={name:"TSX",type:"programming",group:"TypeScript",extensions:Uh,tmScope:"source.tsx",aceMode:"javascript",codemirrorMode:"jsx",codemirrorMimeType:"text/jsx",languageId:94901924},Jh=Object.freeze({__proto__:null,name:"TSX",type:"programming",group:"TypeScript",extensions:Uh,tmScope:"source.tsx",aceMode:"javascript",codemirrorMode:"jsx",codemirrorMimeType:"text/jsx",languageId:94901924,default:zh}),Gh=[".json",".avsc",".geojson",".gltf",".har",".ice",".JSON-tmLanguage",".jsonl",".mcmeta",".tfstate",".tfstate.backup",".topojson",".webapp",".webmanifest",".yy",".yyp"],Hh=[".arcconfig",".htmlhintrc",".tern-config",".tern-project",".watchmanconfig","composer.lock","mcmod.info"],Xh={name:"JSON",type:"data",tmScope:"source.json",aceMode:"json",codemirrorMode:"javascript",codemirrorMimeType:"application/json",searchable:false,extensions:Gh,filenames:Hh,languageId:174},Yh=Object.freeze({__proto__:null,name:"JSON",type:"data",tmScope:"source.json",aceMode:"json",codemirrorMode:"javascript",codemirrorMimeType:"application/json",searchable:false,extensions:Gh,filenames:Hh,languageId:174,default:Xh}),Kh=["jsonc"],Qh=[".jsonc",".sublime-build",".sublime-commands",".sublime-completions",".sublime-keymap",".sublime-macro",".sublime-menu",".sublime-mousemap",".sublime-project",".sublime-settings",".sublime-theme",".sublime-workspace",".sublime_metrics",".sublime_session"],Zh=[".babelrc",".eslintrc.json",".jscsrc",".jshintrc",".jslintrc","jsconfig.json","language-configuration.json","tsconfig.json"],em={name:"JSON with Comments",type:"data",group:"JSON",tmScope:"source.js",aceMode:"javascript",codemirrorMode:"javascript",codemirrorMimeType:"text/javascript",aliases:Kh,extensions:Qh,filenames:Zh,languageId:423},tm=Object.freeze({__proto__:null,name:"JSON with Comments",type:"data",group:"JSON",tmScope:"source.js",aceMode:"javascript",codemirrorMode:"javascript",codemirrorMimeType:"text/javascript",aliases:Kh,extensions:Qh,filenames:Zh,languageId:423,default:em}),nm=[".json5"],rm={name:"JSON5",type:"data",extensions:nm,tmScope:"source.js",aceMode:"javascript",codemirrorMode:"javascript",codemirrorMimeType:"application/json",languageId:175},um=Object.freeze({__proto__:null,name:"JSON5",type:"data",extensions:nm,tmScope:"source.js",aceMode:"javascript",codemirrorMode:"javascript",codemirrorMimeType:"application/json",languageId:175,default:rm}),om=Ue(Ih),am=Ue(Lh),im=Ue($h),sm=Ue(Jh),lm=Ue(Yh),cm=Ue(tm),pm=Ue(um);var dm={languages:[As(om,e=>({since:"0.0.0",parsers:["babel","flow"],vscodeLanguageIds:["javascript","mongo"],interpreters:e.interpreters.concat(["nodejs"])})),As(om,()=>({name:"Flow",since:"0.0.0",parsers:["babel","flow"],vscodeLanguageIds:["javascript"],aliases:[],filenames:[],extensions:[".js.flow"]})),As(am,()=>({since:"0.0.0",parsers:["babel","flow"],vscodeLanguageIds:["javascriptreact"]})),As(im,()=>({since:"1.4.0",parsers:["typescript","babel-ts"],vscodeLanguageIds:["typescript"]})),As(sm,()=>({since:"1.4.0",parsers:["typescript","babel-ts"],vscodeLanguageIds:["typescriptreact"]})),As(lm,()=>({name:"JSON.stringify",since:"1.13.0",parsers:["json-stringify"],vscodeLanguageIds:["json"],extensions:[],filenames:["package.json","package-lock.json","composer.json"]})),As(lm,e=>({since:"1.5.0",parsers:["json"],vscodeLanguageIds:["json"],filenames:e.filenames.concat([".prettierrc"])})),As(cm,e=>({since:"1.5.0",parsers:["json"],vscodeLanguageIds:["jsonc"],filenames:e.filenames.concat([".eslintrc"])})),As(pm,()=>({since:"1.13.0",parsers:["json5"],vscodeLanguageIds:["json5"]}))],options:Th,printers:{estree:Ah,"estree-json":wh},parsers:{get babel(){return{}.parsers.babel},get"babel-flow"(){return{}.parsers["babel-flow"]},get"babel-ts"(){return{}.parsers["babel-ts"]},get json(){return{}.parsers.json},get json5(){return{}.parsers.json5},get"json-stringify"(){return{}.parsers["json-stringify"]},get __js_expression(){return{}.parsers.__js_expression},get __vue_expression(){return{}.parsers.__vue_expression},get __vue_event_binding(){return{}.parsers.__vue_event_binding},get flow(){return{}.parsers.flow},get typescript(){return{}.parsers.typescript},get __ng_action(){return{}.parsers.__ng_action},get __ng_binding(){return{}.parsers.__ng_binding},get __ng_interpolation(){return{}.parsers.__ng_interpolation},get __ng_directive(){return{}.parsers.__ng_directive}}};const{isFrontMatterNode:fm}=Lt;var hm=function(e,t,n){if(["raw","raws","sourceIndex","source","before","after","trailingComma"].forEach(e=>{delete t[e]}),fm(e)&&"yaml"===e.lang&&delete t.value,"css-comment"===e.type&&"css-root"===n.type&&0!==n.nodes.length){if((n.nodes[0]===e||fm(n.nodes[0])&&n.nodes[1]===e)&&(delete t.text,/^\*\s*@(format|prettier)\s*$/.test(e.text)))return null;if("css-root"===n.type&&he(n.nodes)===e)return null}if("value-root"===e.type&&delete t.text,"media-query"!==e.type&&"media-query-list"!==e.type&&"media-feature-expression"!==e.type||delete t.value,"css-rule"===e.type&&delete t.params,"selector-combinator"===e.type&&(t.value=t.value.replace(/\s+/g," ")),"media-feature"===e.type&&(t.value=t.value.replace(/ /g,"")),("value-word"===e.type&&(e.isColor&&e.isHex||["initial","inherit","unset","revert"].includes(t.value.replace().toLowerCase()))||"media-feature"===e.type||"selector-root-invalid"===e.type||"selector-pseudo"===e.type)&&(t.value=t.value.toLowerCase()),"css-decl"===e.type&&(t.prop=t.prop.toLowerCase()),"css-atrule"!==e.type&&"css-import"!==e.type||(t.name=t.name.toLowerCase()),"value-number"===e.type&&(t.unit=t.unit.toLowerCase()),"media-feature"!==e.type&&"media-keyword"!==e.type&&"media-type"!==e.type&&"media-unknown"!==e.type&&"media-url"!==e.type&&"media-value"!==e.type&&"selector-attribute"!==e.type&&"selector-string"!==e.type&&"selector-class"!==e.type&&"selector-combinator"!==e.type&&"value-string"!==e.type||!t.value||(t.value=t.value.replace(/'/g,'"').replace(/\\([^\dA-Fa-f])/g,"$1")),"selector-attribute"===e.type&&(t.attribute=t.attribute.trim(),t.namespace&&"string"==typeof t.namespace&&(t.namespace=t.namespace.trim(),0===t.namespace.length&&(t.namespace=!0)),t.value&&(t.value=t.value.trim().replace(/^["']|["']$/g,""),delete t.quoted)),"media-value"!==e.type&&"media-type"!==e.type&&"value-number"!==e.type&&"selector-root-invalid"!==e.type&&"selector-class"!==e.type&&"selector-combinator"!==e.type&&"selector-tag"!==e.type||!t.value||(t.value=t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g,(e,t,n)=>{const r=Number(t);return isNaN(r)?e:r+n.toLowerCase()})),"selector-tag"===e.type){const n=e.value.toLowerCase();["from","to"].includes(n)&&(t.value=n)}"css-atrule"===e.type&&"supports"===e.name.toLowerCase()&&delete t.value,"selector-unknown"===e.type&&delete t.value};const{builders:{hardline:mm,concat:gm,markAsRoot:Dm}}=dn,ym={"---":"yaml","+++":"toml"};var Em={parse:function(e){const t=Object.keys(ym).map(fe).join("|"),n=e.match(new RegExp("^(".concat(t,")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));if(null===n)return{frontMatter:null,content:e};const[r,u,o,a]=n;let i=ym[u];return"toml"!==i&&o&&o.trim()&&(i=o.trim()),{frontMatter:{type:"front-matter",lang:i,value:a,raw:r.replace(/\n$/,"")},content:r.replace(/[^\n]/g," ")+e.slice(r.length)}},print:function(e,t){if("yaml"===e.lang){const n=e.value.trim(),r=n?t(n,{parser:"yaml"},{stripTrailingHardline:!0}):"";return Dm(gm(["---",mm,r,r?mm:"","---"]))}}};const{builders:{hardline:Cm,concat:bm}}=dn,{print:Am}=Em;var vm=function(e,t,n){const r=e.getValue();if("front-matter"===r.type){const e=Am(r,n);return e?bm([e,Cm]):""}};const{parse:Fm}=Em;var xm={hasPragma:function(e){return Nl.hasPragma(Fm(e).content)},insertPragma:function(e){const{frontMatter:t,content:n}=Fm(e);return(t?t.raw+"\n\n":"")+Nl.insertPragma(n)}};const Sm=new Set(["red","green","blue","alpha","a","rgb","hue","h","saturation","s","lightness","l","whiteness","w","blackness","b","tint","shade","blend","blenda","contrast","hsl","hsla","hwb","hwba"]);function wm(e,t){const n=[].concat(t);let r,u=-1;for(;r=e.getParentNode(++u);)if(n.includes(r.type))return u;return-1}function Bm(e,t){const n=wm(e,t);return-1===n?null:e.getParentNode(n)}function Tm(e){return"value-operator"===e.type&&"*"===e.value}function km(e){return"value-operator"===e.type&&"/"===e.value}function Nm(e){return"value-operator"===e.type&&"+"===e.value}function Om(e){return"value-operator"===e.type&&"-"===e.value}function Pm(e){return"value-operator"===e.type&&"%"===e.value}function _m(e){return"value-comma_group"===e.type&&e.groups&&e.groups[1]&&"value-colon"===e.groups[1].type}function Im(e){return"value-paren_group"===e.type&&e.groups&&e.groups[0]&&_m(e.groups[0])}var jm={getAncestorCounter:wm,getAncestorNode:Bm,getPropOfDeclNode:function(e){const t=Bm(e,"css-decl");return t&&t.prop&&t.prop.toLowerCase()},hasSCSSInterpolation:function(e){if(e&&e.length)for(let t=e.length-1;t>0;t--)if("word"===e[t].type&&"{"===e[t].value&&"word"===e[t-1].type&&e[t-1].value.endsWith("#"))return!0;return!1},hasStringOrFunction:function(e){if(e&&e.length)for(let t=0;t<e.length;t++)if("string"===e[t].type||"func"===e[t].type)return!0;return!1},maybeToLowerCase:function(e){return e.includes("$")||e.includes("@")||e.includes("#")||e.startsWith("%")||e.startsWith("--")||e.startsWith(":--")||e.includes("(")&&e.includes(")")?e:e.toLowerCase()},insideValueFunctionNode:function(e,t){const n=Bm(e,"value-func");return n&&n.value&&n.value.toLowerCase()===t},insideICSSRuleNode:function(e){const t=Bm(e,"css-rule");return t&&t.raws&&t.raws.selector&&(t.raws.selector.startsWith(":import")||t.raws.selector.startsWith(":export"))},insideAtRuleNode:function(e,t){const n=[].concat(t),r=Bm(e,"css-atrule");return r&&n.includes(r.name.toLowerCase())},insideURLFunctionInImportAtRuleNode:function(e){const t=e.getValue(),n=Bm(e,"css-atrule");return n&&"import"===n.name&&"url"===t.groups[0].value&&2===t.groups.length},isKeyframeAtRuleKeywords:function(e,t){const n=Bm(e,"css-atrule");return n&&n.name&&n.name.toLowerCase().endsWith("keyframes")&&["from","to"].includes(t.toLowerCase())},isWideKeywords:function(e){return["initial","inherit","unset","revert"].includes(e.toLowerCase())},isSCSS:function(e,t){return"less"===e||"scss"===e?"scss"===e:/(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t)},isSCSSVariable:function(e){return!(!e||"word"!==e.type||!e.value.startsWith("$"))},isLastNode:function(e,t){const n=e.getParentNode();if(!n)return!1;const{nodes:r}=n;return r&&r.indexOf(t)===r.length-1},isLessParser:function(e){return"css"===e.parser||"less"===e.parser},isSCSSControlDirectiveNode:function(e){return"css-atrule"===e.type&&["if","else","for","each","while"].includes(e.name)},isDetachedRulesetDeclarationNode:function(e){return!!e.selector&&("string"==typeof e.selector&&/^@.+:.*$/.test(e.selector)||e.selector.value&&/^@.+:.*$/.test(e.selector.value))},isRelationalOperatorNode:function(e){return"value-word"===e.type&&["<",">","<=",">="].includes(e.value)},isEqualityOperatorNode:function(e){return"value-word"===e.type&&["==","!="].includes(e.value)},isMultiplicationNode:Tm,isDivisionNode:km,isAdditionNode:Nm,isSubtractionNode:Om,isModuloNode:Pm,isMathOperatorNode:function(e){return Tm(e)||km(e)||Nm(e)||Om(e)||Pm(e)},isEachKeywordNode:function(e){return"value-word"===e.type&&"in"===e.value},isForKeywordNode:function(e){return"value-word"===e.type&&["from","through","end"].includes(e.value)},isURLFunctionNode:function(e){return"value-func"===e.type&&"url"===e.value.toLowerCase()},isIfElseKeywordNode:function(e){return"value-word"===e.type&&["and","or","not"].includes(e.value)},hasComposesNode:function(e){return e.value&&"value-root"===e.value.type&&e.value.group&&"value-value"===e.value.group.type&&"composes"===e.prop.toLowerCase()},hasParensAroundNode:function(e){return e.value&&e.value.group&&e.value.group.group&&"value-paren_group"===e.value.group.group.type&&null!==e.value.group.group.open&&null!==e.value.group.group.close},hasEmptyRawBefore:function(e){return e.raws&&""===e.raws.before},isSCSSNestedPropertyNode:function(e){return!!e.selector&&e.selector.replace(/\/\*.*?\*\//,"").replace(/\/\/.*?\n/,"").trim().endsWith(":")},isDetachedRulesetCallNode:function(e){return e.raws&&e.raws.params&&/^\(\s*\)$/.test(e.raws.params)},isTemplatePlaceholderNode:function(e){return e.name.startsWith("prettier-placeholder")},isTemplatePropNode:function(e){return e.prop.startsWith("@prettier-placeholder")},isPostcssSimpleVarNode:function(e,t){return"$$"===e.value&&"value-func"===e.type&&t&&"value-word"===t.type&&!t.raws.before},isKeyValuePairNode:_m,isKeyValuePairInParenGroupNode:Im,isSCSSMapItemNode:function(e){const t=e.getValue();if(0===t.groups.length)return!1;const n=e.getParentNode(1);if(!(Im(t)||n&&Im(n)))return!1;const r=Bm(e,"css-decl");return!!(r&&r.prop&&r.prop.startsWith("$"))||(!!Im(n)||"value-func"===n.type)},isInlineValueCommentNode:function(e){return"value-comment"===e.type&&e.inline},isHashNode:function(e){return"value-word"===e.type&&"#"===e.value},isLeftCurlyBraceNode:function(e){return"value-word"===e.type&&"{"===e.value},isRightCurlyBraceNode:function(e){return"value-word"===e.type&&"}"===e.value},isWordNode:function(e){return["value-word","value-atword"].includes(e.type)},isColonNode:function(e){return"value-colon"===e.type},isMediaAndSupportsKeywords:function(e){return e.value&&["not","and","or"].includes(e.value.toLowerCase())},isColorAdjusterFuncNode:function(e){return"value-func"===e.type&&Sm.has(e.value.toLowerCase())},lastLineHasInlineComment:function(e){return/\/\//.test(e.split(/[\n\r]/).pop())},stringifyNode:function e(t){if(t.groups){return(t.open&&t.open.value?t.open.value:"")+t.groups.reduce((n,r,u)=>n+e(r)+("comma_group"===t.groups[0].type&&u!==t.groups.length-1?",":""),"")+(t.close&&t.close.value?t.close.value:"")}const n=t.raws&&t.raws.before?t.raws.before:"",r=t.raws&&t.raws.quote?t.raws.quote:"";return n+r+("atword"===t.type?"@":"")+(t.value?t.value:"")+r+(t.unit?t.unit:"")+(t.group?e(t.group):"")+(t.raws&&t.raws.after?t.raws.after:"")}};const{printNumber:Mm,printString:Lm,hasIgnoreComment:Rm,hasNewline:qm,isFrontMatterNode:Vm,isNextLineEmpty:Wm}=Lt,{builders:{concat:$m,join:Um,line:zm,hardline:Jm,softline:Gm,group:Hm,fill:Xm,indent:Ym,dedent:Km,ifBreak:Qm,breakParent:Zm},utils:{removeLines:eg}}=dn,{insertPragma:tg}=xm,{getAncestorNode:ng,getPropOfDeclNode:rg,maybeToLowerCase:ug,insideValueFunctionNode:og,insideICSSRuleNode:ag,insideAtRuleNode:ig,insideURLFunctionInImportAtRuleNode:sg,isKeyframeAtRuleKeywords:lg,isWideKeywords:cg,isSCSS:pg,isLastNode:dg,isLessParser:fg,isSCSSControlDirectiveNode:hg,isDetachedRulesetDeclarationNode:mg,isRelationalOperatorNode:gg,isEqualityOperatorNode:Dg,isMultiplicationNode:yg,isDivisionNode:Eg,isAdditionNode:Cg,isSubtractionNode:bg,isMathOperatorNode:Ag,isEachKeywordNode:vg,isForKeywordNode:Fg,isURLFunctionNode:xg,isIfElseKeywordNode:Sg,hasComposesNode:wg,hasParensAroundNode:Bg,hasEmptyRawBefore:Tg,isKeyValuePairNode:kg,isDetachedRulesetCallNode:Ng,isTemplatePlaceholderNode:Og,isTemplatePropNode:Pg,isPostcssSimpleVarNode:_g,isSCSSMapItemNode:Ig,isInlineValueCommentNode:jg,isHashNode:Mg,isLeftCurlyBraceNode:Lg,isRightCurlyBraceNode:Rg,isWordNode:qg,isColonNode:Vg,isMediaAndSupportsKeywords:Wg,isColorAdjusterFuncNode:$g,lastLineHasInlineComment:Ug}=jm;function zg(e){return"es5"===e.trailingComma||"all"===e.trailingComma}function Jg(e,t,n){const r=e.getValue(),u=[];let o=0;return e.map(e=>{const a=r.nodes[o-1];if(a&&"css-comment"===a.type&&"prettier-ignore"===a.text.trim()){const n=e.getValue();u.push(t.originalText.slice(t.locStart(n),t.locEnd(n)))}else u.push(e.call(n));o!==r.nodes.length-1&&("css-comment"===r.nodes[o+1].type&&!qm(t.originalText,t.locStart(r.nodes[o+1]),{backwards:!0})&&!Vm(r.nodes[o])||"css-atrule"===r.nodes[o+1].type&&"else"===r.nodes[o+1].name&&"css-comment"!==r.nodes[o].type?u.push(" "):(u.push(t.__isHTMLStyleAttribute?zm:Jm),Wm(t.originalText,e.getValue(),t.locEnd)&&!Vm(r.nodes[o])&&u.push(Jm))),o++},"nodes"),$m(u)}const Gg=/(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g,Hg=new RegExp(Gg.source+"|"+"(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source,")?")+"(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source,")")+"(".concat(/[A-Za-z]+/g.source,")?"),"g");function Xg(e,t){return e.replace(Gg,e=>Lm(e,t))}function Yg(e,t){const n=t.singleQuote?"'":'"';return e.includes('"')||e.includes("'")?e:n+e+n}function Kg(e){return e.replace(Hg,(e,t,n,r,u)=>!n&&r?Qg(r)+ug(u||""):e)}function Qg(e){return Mm(e).replace(/\.0(?=$|e)/,"")}var Zg={print:function(e,t,n){const r=e.getValue();if(!r)return"";if("string"==typeof r)return r;switch(r.type){case"front-matter":return $m([r.raw,Jm]);case"css-root":{const u=Jg(e,t,n),o=r.raws.after.trim();return $m([u,o?" ".concat(o):"",u.parts.length&&!t.__isHTMLStyleAttribute?Jm:""])}case"css-comment":{const e=r.inline||r.raws.inline,n=t.originalText.slice(t.locStart(r),t.locEnd(r));return e?n.trimEnd():n}case"css-rule":return $m([e.call(n,"selector"),r.important?" !important":"",r.nodes?$m([r.selector&&"selector-unknown"===r.selector.type&&Ug(r.selector.value)?zm:" ","{",r.nodes.length>0?Ym($m([Jm,Jg(e,t,n)])):"",Jm,"}",mg(r)?";":""]):";"]);case"css-decl":{const u=e.getParentNode(),{between:o}=r.raws,a=o.trim(),i=":"===a;let s=wg(r)?eg(e.call(n,"value")):e.call(n,"value");return!i&&Ug(a)&&(s=Ym($m([Jm,Km(s)]))),$m([r.raws.before.replace(/[\s;]/g,""),ag(e)?r.prop:ug(r.prop),a.startsWith("//")?" ":"",a,r.extend?"":" ",fg(t)&&r.extend&&r.selector?$m(["extend(",e.call(n,"selector"),")"]):"",s,r.raws.important?r.raws.important.replace(/\s*!\s*important/i," !important"):r.important?" !important":"",r.raws.scssDefault?r.raws.scssDefault.replace(/\s*!default/i," !default"):r.scssDefault?" !default":"",r.raws.scssGlobal?r.raws.scssGlobal.replace(/\s*!global/i," !global"):r.scssGlobal?" !global":"",r.nodes?$m([" {",Ym($m([Gm,Jg(e,t,n)])),Gm,"}"]):Pg(r)&&!u.raws.semicolon&&";"!==t.originalText[t.locEnd(r)-1]?"":t.__isHTMLStyleAttribute&&dg(e,r)?Qm(";",""):";"])}case"css-atrule":{const u=e.getParentNode(),o=Og(r)&&!u.raws.semicolon&&";"!==t.originalText[t.locEnd(r)-1];if(fg(t)){if(r.mixin)return $m([e.call(n,"selector"),r.important?" !important":"",o?"":";"]);if(r.function)return $m([r.name,$m([e.call(n,"params")]),o?"":";"]);if(r.variable)return $m(["@",r.name,": ",r.value?$m([e.call(n,"value")]):"",r.raws.between.trim()?r.raws.between.trim()+" ":"",r.nodes?$m(["{",Ym($m([r.nodes.length>0?Gm:"",Jg(e,t,n)])),Gm,"}"]):"",o?"":";"])}return $m(["@",Ng(r)||r.name.endsWith(":")?r.name:ug(r.name),r.params?$m([Ng(r)?"":Og(r)?""===r.raws.afterName?"":r.name.endsWith(":")?" ":/^\s*\n\s*\n/.test(r.raws.afterName)?$m([Jm,Jm]):/^\s*\n/.test(r.raws.afterName)?Jm:" ":" ",e.call(n,"params")]):"",r.selector?Ym($m([" ",e.call(n,"selector")])):"",r.value?Hm($m([" ",e.call(n,"value"),hg(r)?Bg(r)?" ":zm:""])):"else"===r.name?" ":"",r.nodes?$m([hg(r)?"":r.selector&&!r.selector.nodes&&"string"==typeof r.selector.value&&Ug(r.selector.value)||!r.selector&&"string"==typeof r.params&&Ug(r.params)?zm:" ","{",Ym($m([r.nodes.length>0?Gm:"",Jg(e,t,n)])),Gm,"}"]):o?"":";"])}case"media-query-list":{const t=[];return e.each(e=>{const r=e.getValue();"media-query"===r.type&&""===r.value||t.push(e.call(n))},"nodes"),Hm(Ym(Um(zm,t)))}case"media-query":return $m([Um(" ",e.map(n,"nodes")),dg(e,r)?"":","]);case"media-type":return Kg(Xg(r.value,t));case"media-feature-expression":return r.nodes?$m(["(",$m(e.map(n,"nodes")),")"]):r.value;case"media-feature":return ug(Xg(r.value.replace(/ +/g," "),t));case"media-colon":return $m([r.value," "]);case"media-value":return Kg(Xg(r.value,t));case"media-keyword":return Xg(r.value,t);case"media-url":return Xg(r.value.replace(/^url\(\s+/gi,"url(").replace(/\s+\)$/gi,")"),t);case"media-unknown":return r.value;case"selector-root":return Hm($m([ig(e,"custom-selector")?$m([ng(e,"css-atrule").customSelector,zm]):"",Um($m([",",ig(e,["extend","custom-selector","nest"])?zm:Jm]),e.map(n,"nodes"))]));case"selector-selector":return Hm(Ym($m(e.map(n,"nodes"))));case"selector-comment":return r.value;case"selector-string":return Xg(r.value,t);case"selector-tag":{const t=e.getParentNode(),n=t&&t.nodes.indexOf(r),u=n&&t.nodes[n-1];return $m([r.namespace?$m([!0===r.namespace?"":r.namespace.trim(),"|"]):"","selector-nesting"===u.type?r.value:Kg(lg(e,r.value)?r.value.toLowerCase():r.value)])}case"selector-id":return $m(["#",r.value]);case"selector-class":return $m([".",Kg(Xg(r.value,t))]);case"selector-attribute":return $m(["[",r.namespace?$m([!0===r.namespace?"":r.namespace.trim(),"|"]):"",r.attribute.trim(),r.operator?r.operator:"",r.value?Yg(Xg(r.value.trim(),t),t):"",r.insensitive?" i":"","]"]);case"selector-combinator":{if("+"===r.value||">"===r.value||"~"===r.value||">>>"===r.value){const t=e.getParentNode(),n="selector-selector"===t.type&&t.nodes[0]===r?"":zm;return $m([n,r.value,dg(e,r)?"":" "])}const n=r.value.trim().startsWith("(")?zm:"",u=Kg(Xg(r.value.trim(),t))||zm;return $m([n,u])}case"selector-universal":return $m([r.namespace?$m([!0===r.namespace?"":r.namespace.trim(),"|"]):"",r.value]);case"selector-pseudo":return $m([ug(r.value),r.nodes&&r.nodes.length>0?$m(["(",Um(", ",e.map(n,"nodes")),")"]):""]);case"selector-nesting":return r.value;case"selector-unknown":{const n=ng(e,"css-rule");if(n&&n.isSCSSNesterProperty)return Kg(Xg(ug(r.value),t));const u=e.getParentNode();if(u.raws&&u.raws.selector){const e=t.locStart(u),n=e+u.raws.selector.length;return t.originalText.slice(e,n).trim()}const o=e.getParentNode(1);if("value-paren_group"===u.type&&o&&"value-func"===o.type&&"selector"===o.value){const e=t.locStart(u.open)+1,n=t.locEnd(u.close)-1,r=t.originalText.slice(e,n).trim();return Ug(r)?$m([Zm,r]):r}return r.value}case"value-value":case"value-root":return e.call(n,"group");case"value-comment":return t.originalText.slice(t.locStart(r),t.locEnd(r));case"value-comma_group":{const t=e.getParentNode(),u=e.getParentNode(1),o=rg(e),a=o&&"value-value"===t.type&&("grid"===o||o.startsWith("grid-template")),i=ng(e,"css-atrule"),s=i&&hg(i),l=e.map(n,"groups"),c=[],p=og(e,"url");let d=!1,f=!1;for(let n=0;n<r.groups.length;++n){c.push(l[n]);const o=r.groups[n-1],h=r.groups[n],m=r.groups[n+1],g=r.groups[n+2];if(p){(m&&Cg(m)||Cg(h))&&c.push(" ");continue}if(!m)continue;if("value-word"===h.type&&h.value.endsWith("-")&&"value-atword"===m.type&&m.value.startsWith("prettier-placeholder-"))continue;const D="value-string"===h.type&&h.value.startsWith("#{"),y=d&&"value-string"===m.type&&m.value.endsWith("}");if(D||y){d=!d;continue}if(d)continue;if(Vg(h)||Vg(m))continue;if("value-atword"===h.type&&""===h.value)continue;if("~"===h.value)continue;if(h.value&&h.value.includes("\\")&&m&&"value-comment"!==m.type)continue;if(o&&o.value&&o.value.indexOf("\\")===o.value.length-1&&"value-operator"===h.type&&"/"===h.value)continue;if("\\"===h.value)continue;if(_g(h,m))continue;if(Mg(h)||Lg(h)||Rg(m)||Lg(m)&&Tg(m)||Rg(h)&&Tg(m))continue;if("--"===h.value&&Mg(m))continue;const E=Ag(h),C=Ag(m);if((E&&Mg(m)||C&&Rg(h))&&Tg(m))continue;if(og(e,"calc")&&(Cg(h)||Cg(m)||bg(h)||bg(m))&&Tg(m))continue;const b=(Cg(h)||bg(h))&&0===n&&("value-number"===m.type||m.isHex)&&u&&$g(u)&&!Tg(m),A=g&&"value-func"===g.type||g&&qg(g)||"value-func"===h.type||qg(h),v="value-func"===m.type||qg(m)||o&&"value-func"===o.type||o&&qg(o);if(yg(m)||yg(h)||og(e,"calc")||b||!(Eg(m)&&!A||Eg(h)&&!v||Cg(m)&&!A||Cg(h)&&!v||bg(m)||bg(h))||!(Tg(m)||E&&(!o||o&&Ag(o))))if(jg(h)){if("value-paren_group"===t.type){c.push(Km(Jm));continue}c.push(Jm)}else s&&(Dg(m)||gg(m)||Sg(m)||vg(h)||Fg(h))||i&&"namespace"===i.name.toLowerCase()?c.push(" "):a?h.source&&m.source&&h.source.start.line!==m.source.start.line?(c.push(Jm),f=!0):c.push(" "):C?c.push(" "):m&&"..."===m.value||c.push(zm)}return f&&c.unshift(Jm),s?Hm(Ym($m(c))):sg(e)?Hm(Xm(c)):Hm(Ym(Xm(c)))}case"value-paren_group":{const u=e.getParentNode();if(u&&xg(u)&&(1===r.groups.length||r.groups.length>0&&"value-comma_group"===r.groups[0].type&&r.groups[0].groups.length>0&&"value-word"===r.groups[0].groups[0].type&&r.groups[0].groups[0].value.startsWith("data:")))return $m([r.open?e.call(n,"open"):"",Um(",",e.map(n,"groups")),r.close?e.call(n,"close"):""]);if(!r.open){const t=e.map(n,"groups"),r=[];for(let e=0;e<t.length;e++)0!==e&&r.push($m([",",zm])),r.push(t[e]);return Hm(Ym(Xm(r)))}const o=Ig(e),a=r.groups[r.groups.length-1],i=a&&"value-comment"===a.type;return Hm($m([r.open?e.call(n,"open"):"",Ym($m([Gm,Um($m([",",zm]),e.map(e=>{const t=e.getValue(),r=n(e);return kg(t)&&"value-comma_group"===t.type&&t.groups&&t.groups[2]&&"value-paren_group"===t.groups[2].type?(r.contents.contents.parts[1]=Hm(r.contents.contents.parts[1]),Hm(Km(r))):r},"groups"))])),Qm(!i&&pg(t.parser,t.originalText)&&o&&zg(t)?",":""),Gm,r.close?e.call(n,"close"):""]),{shouldBreak:o})}case"value-func":return $m([r.value,ig(e,"supports")&&Wg(r)?" ":"",e.call(n,"group")]);case"value-paren":return r.value;case"value-number":return $m([Qg(r.value),ug(r.unit)]);case"value-operator":return r.value;case"value-word":return r.isColor&&r.isHex||cg(r.value)?r.value.toLowerCase():r.value;case"value-colon":{const t=e.getParentNode(),n=t&&t.groups.indexOf(r),u=n&&t.groups[n-1];return $m([r.value,u&&"\\"===u.value[u.value.length-1]||og(e,"url")?"":zm])}case"value-comma":return $m([r.value," "]);case"value-string":return Lm(r.raws.quote+r.value+r.raws.quote,t);case"value-atword":return $m(["@",r.value]);case"value-unicode-range":case"value-unknown":return r.value;default:throw new Error("Unknown postcss type ".concat(JSON.stringify(r.type)))}},embed:vm,insertPragma:tg,hasPrettierIgnore:Rm,massageAstNode:hm},eD={singleQuote:Bh.singleQuote},tD=[".css"],nD={name:"CSS",type:"markup",tmScope:"source.css",aceMode:"css",codemirrorMode:"css",codemirrorMimeType:"text/css",color:"#563d7c",extensions:tD,languageId:50},rD=Object.freeze({__proto__:null,name:"CSS",type:"markup",tmScope:"source.css",aceMode:"css",codemirrorMode:"css",codemirrorMimeType:"text/css",color:"#563d7c",extensions:tD,languageId:50,default:nD}),uD=[".pcss",".postcss"],oD={name:"PostCSS",type:"markup",tmScope:"source.postcss",group:"CSS",extensions:uD,aceMode:"text",languageId:262764437},aD=Object.freeze({__proto__:null,name:"PostCSS",type:"markup",tmScope:"source.postcss",group:"CSS",extensions:uD,aceMode:"text",languageId:262764437,default:oD}),iD=[".less"],sD={name:"Less",type:"markup",group:"CSS",extensions:iD,tmScope:"source.css.less",aceMode:"less",codemirrorMode:"css",codemirrorMimeType:"text/css",languageId:198},lD=Object.freeze({__proto__:null,name:"Less",type:"markup",group:"CSS",extensions:iD,tmScope:"source.css.less",aceMode:"less",codemirrorMode:"css",codemirrorMimeType:"text/css",languageId:198,default:sD}),cD=[".scss"],pD={name:"SCSS",type:"markup",tmScope:"source.css.scss",group:"CSS",aceMode:"scss",codemirrorMode:"css",codemirrorMimeType:"text/x-scss",extensions:cD,languageId:329},dD=Object.freeze({__proto__:null,name:"SCSS",type:"markup",tmScope:"source.css.scss",group:"CSS",aceMode:"scss",codemirrorMode:"css",codemirrorMimeType:"text/x-scss",extensions:cD,languageId:329,default:pD}),fD=Ue(rD),hD=Ue(aD),mD=Ue(lD),gD=Ue(dD);var DD={languages:[As(fD,()=>({since:"1.4.0",parsers:["css"],vscodeLanguageIds:["css"]})),As(hD,()=>({since:"1.4.0",parsers:["css"],vscodeLanguageIds:["postcss"]})),As(mD,()=>({since:"1.4.0",parsers:["less"],vscodeLanguageIds:["less"]})),As(gD,()=>({since:"1.4.0",parsers:["scss"],vscodeLanguageIds:["scss"]}))],options:eD,printers:{postcss:Zg},parsers:{get css(){return{}.parsers.css},get less(){return{}.parsers.less},get scss(){return{}.parsers.scss}}},yD=Ue(Object.freeze({__proto__:null,default:["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]}));const ED=new Set(yD);function CD(e){return bD(e,["TextNode"])&&!/\S/.test(e.chars)}function bD(e,t){return e&&t.some(t=>e.type===t)}function AD(e,t){const n=e.getValue(),r=e.getParentNode(0)||{},u=r.children||r.body||r.parts||[],o=u.indexOf(n);return-1!==o&&u[o+t]}function vD(e,t=1){return AD(e,-t)}function FD(e){return AD(e,1)}function xD(e){return bD(e,["MustacheCommentStatement"])&&"string"==typeof e.value&&"prettier-ignore"===e.value.trim()}var SD={getNextNode:FD,getPreviousNode:vD,hasPrettierIgnore:function(e){const t=e.getValue(),n=vD(e,2);return xD(t)||xD(n)},isNextNodeOfSomeType:function(e,t){return bD(FD(e),t)},isNodeOfSomeType:bD,isParentOfSomeType:function(e,t){return bD(e.getParentNode(0),t)},isPreviousNodeOfSomeType:function(e,t){return bD(vD(e),t)},isVoid:function(e){return function(e){return bD(e,["ElementNode"])&&"string"==typeof e.tag&&(function(e){return e.toUpperCase()===e}(e.tag[0])||e.tag.includes("."))}(e)&&(0===e.children||e.children.every(e=>CD(e)))||ED.has(e.tag)},isWhitespaceNode:CD};const{concat:wD,group:BD,hardline:TD,ifBreak:kD,indent:ND,join:OD,line:PD,softline:_D}=dn.builders,{getNextNode:ID,getPreviousNode:jD,hasPrettierIgnore:MD,isNextNodeOfSomeType:LD,isNodeOfSomeType:RD,isParentOfSomeType:qD,isPreviousNodeOfSomeType:VD,isVoid:WD,isWhitespaceNode:$D}=SD;function UD(e,t){const n=e.getValue();return wD(["<",n.tag,zD(e,t),Dy(n),GD(n)])}function zD(e,t){const n=e.getValue();return ND(wD([n.attributes.length?PD:"",OD(PD,e.map(t,"attributes")),n.modifiers.length?PD:"",OD(PD,e.map(t,"modifiers")),n.comments.length?PD:"",OD(PD,e.map(t,"comments"))]))}function JD(e,t,n){return wD(e.map((e,r)=>0===r?wD([_D,n(e,t,n)]):n(e,t,n),"children"))}function GD(e){return WD(e)?kD(wD([_D,"/>"]),wD([" />",_D])):kD(wD([_D,">"]),">")}function HD(e){const t=!1===e.escaped?"{{{":"{{",n=e.strip&&e.strip.open?"~":"";return wD([t,n])}function XD(e){const t=!1===e.escaped?"}}}":"}}",n=e.strip&&e.strip.close?"~":"";return wD([n,t])}function YD(e){const t=HD(e),n=e.openStrip.open?"~":"";return wD([t,n,"#"])}function KD(e){const t=XD(e),n=e.openStrip.close?"~":"";return wD([n,t])}function QD(e){const t=HD(e),n=e.closeStrip.open?"~":"";return wD([t,n,"/"])}function ZD(e){const t=XD(e),n=e.closeStrip.close?"~":"";return wD([n,t])}function ey(e){const t=HD(e),n=e.inverseStrip.open?"~":"";return wD([t,n])}function ty(e){const t=XD(e),n=e.inverseStrip.close?"~":"";return wD([n,t])}function ny(e,t){const n=e.getValue();return BD(wD([YD(n),hy(e,t),Dy(n.program),_D,KD(n)]))}function ry(e){return wD([TD,ey(e),"else",ty(e)])}function uy(e,t){const n=e.getParentNode(1);return wD([ey(n),"else ",hy(e,t),ty(n)])}function oy(e,t){const n=e.getValue();return wD([ay(n)?_D:TD,QD(n),e.call(t,"path"),ZD(n)])}function ay(e){return RD(e,["BlockStatement"])&&e.program.body.every(e=>$D(e))}function iy(e){return RD(e,["BlockStatement"])&&e.inverse}function sy(e,t){if(ay(e.getValue()))return"";const n=e.call(t,"program");return ND(wD([TD,n]))}function ly(e,t){const n=e.getValue(),r=e.call(t,"inverse"),u=wD([TD,r]);return function(e){return iy(e)&&1===e.inverse.body.length&&RD(e.inverse.body[0],["BlockStatement"])&&"if"===e.inverse.body[0].path.parts[0]}(n)?u:iy(n)?wD([ry(n),ND(u)]):""}function cy(e){return(e="string"==typeof e?e:"").split("\n").length-1}function py(e=0,t=0){return new Array(Math.min(e,t)).fill(TD)}function dy(e,t){const n={quote:'"',regex:/"/g},r={quote:"'",regex:/'/g},u=t.singleQuote?r:n,o=u===r?n:r;let a=!1;if(e.includes(u.quote)||e.includes(o.quote)){a=(e.match(u.regex)||[]).length>(e.match(o.regex)||[]).length}const i=a?o:u,s=e.replace(i.regex,"\\".concat(i.quote));return wD([i.quote,s,i.quote])}function fy(e,t){const n=my(e,t),r=gy(e,t);return r?ND(wD([n,PD,BD(r)])):n}function hy(e,t){const n=my(e,t),r=gy(e,t);return r?ND(BD(wD([n,PD,r]))):n}function my(e,t){return e.call(t,"path")}function gy(e,t){const n=e.getValue(),r=[];if(n.params.length){const n=e.map(t,"params");r.push(...n)}if(n.hash&&n.hash.pairs.length>0){const n=e.call(t,"hash");r.push(n)}return r.length?OD(PD,r):""}function Dy(e){return e&&e.blockParams.length?wD([" as |",e.blockParams.join(" "),"|"]):""}function yy(e,t,n){let r=0,u=0;for(;;){if(u===e.length)return null;let o=e.indexOf("\n",u);if(-1===o&&(o=e.length),r===t)return u+n>o?null:u+n;if(-1===o)return null;r+=1,u=o+1}}var Ey={print:function(e,t,n){const r=e.getValue();if(!r)return"";if(MD(e)){const e=yy(t.originalText,r.loc.start.line-1,r.loc.start.column),n=yy(t.originalText,r.loc.end.line-1,r.loc.end.column);return t.originalText.slice(e,n)}switch(r.type){case"Block":case"Program":case"Template":return BD(wD(e.map(n,"body")));case"ElementNode":{const u=LD(e,["ElementNode"])?TD:"";if(WD(r))return wD([BD(UD(e,n)),u]);const o=r.children.every(e=>$D(e));return wD([BD(UD(e,n)),BD(wD([o?"":ND(JD(e,t,n)),r.children.length?TD:"",wD(["</",r.tag,">"])])),u])}case"BlockStatement":{const t=e.getParentNode(1),u=t&&t.inverse&&1===t.inverse.body.length&&t.inverse.body[0]===r&&"if"===t.inverse.body[0].path.parts[0];return wD(u?[uy(e,n),sy(e,n),ly(e,n)]:[ny(e,n),BD(wD([sy(e,n),ly(e,n),oy(e,n)]))])}case"ElementModifierStatement":return BD(wD(["{{",hy(e,n),_D,"}}"]));case"MustacheStatement":{const t=qD(e,["AttrNode","ConcatStatement"]),u=qD(e,["ElementNode"])&&0===r.hash.pairs.length&&function(e){return 0===e.params.length}(r),o=t||u;return BD(wD([HD(r),o?ND(_D):"",hy(e,n),_D,XD(r)]))}case"SubExpression":return BD(wD(["(",fy(e,n),_D,")"]));case"AttrNode":{const u="TextNode"===r.value.type;if(u&&""===r.value.chars&&r.value.loc.start.column===r.value.loc.end.column)return wD([r.name]);const o=e.call(n,"value"),a=u?dy(o.parts.join(),t):o;return wD([r.name,"=",a])}case"ConcatStatement":{const r=t.singleQuote?"'":'"';return wD([r,...e.map(e=>n(e),"parts"),r])}case"Hash":return wD([OD(PD,e.map(n,"pairs"))]);case"HashPair":return wD([r.key,"=",e.call(n,"value")]);case"TextNode":{const t=2,n=!jD(e),u=!ID(e),o=!/\S/.test(r.chars),a=cy(r.chars);let i=function(e){return cy(((e="string"==typeof e?e:"").match(/^([^\S\n\r]*[\n\r])+/g)||[])[0]||"")}(r.chars),s=function(e){return cy(((e="string"==typeof e?e:"").match(/([\n\r][^\S\n\r]*)+$/g)||[])[0]||"")}(r.chars);if((n||u)&&o&&qD(e,["Block","ElementNode","Template"]))return"";o&&a?(i=Math.min(a,t),s=0):(LD(e,["BlockStatement","ElementNode"])&&(s=Math.max(s,1)),VD(e,["BlockStatement","ElementNode"])&&(i=Math.max(i,1)));if(e.stack.includes("attributes")){if(!function(e,t){return qD(e,["AttrNode"])&&e.getParentNode().name.toLowerCase()===t||qD(e,["ConcatStatement"])&&e.getParentNode(1).name.toLowerCase()===t}(e,"class"))return wD([r.chars]);let n="",u="";return qD(e,["ConcatStatement"])&&(VD(e,["MustacheStatement"])&&(n=" "),LD(e,["MustacheStatement"])&&(u=" ")),wD([...py(i,t),r.chars.replace(/^\s+/g,n).replace(/\s+$/,u),...py(s,t)])}let l="",c="";0===s&&LD(e,["MustacheStatement"])&&(c=" "),0===i&&VD(e,["MustacheStatement"])&&(l=" "),n&&(i=0,l=""),u&&(s=0,c="");let p=r.chars;return p.startsWith("{{")&&p.includes("}}")&&(p="\\"+p),wD([...py(i,t),p.replace(/^\s+/g,l).replace(/\s+$/,c),...py(s,t)])}case"MustacheCommentStatement":{const e=r.value.includes("}}")?"--":"";return wD(["{{!",e,r.value,e,"}}"])}case"PathExpression":return r.original;case"BooleanLiteral":return String(r.value);case"CommentStatement":return wD(["\x3c!--",r.value,"--\x3e"]);case"StringLiteral":return dy(r.value,t);case"NumberLiteral":return String(r.value);case"UndefinedLiteral":return"undefined";case"NullLiteral":return"null";default:throw new Error("unknown glimmer type: "+JSON.stringify(r.type))}},massageAstNode:function(e,t){if(delete t.loc,delete t.selfClosing,"TextNode"===e.type){const n=e.chars.trim();if(!n)return null;t.chars=n}}},Cy=["hbs","htmlbars"],by=[".handlebars",".hbs"],Ay={name:"Handlebars",type:"markup",group:"HTML",aliases:Cy,extensions:by,tmScope:"text.html.handlebars",aceMode:"handlebars",languageId:155};var vy={languages:[As(Ue(Object.freeze({__proto__:null,name:"Handlebars",type:"markup",group:"HTML",aliases:Cy,extensions:by,tmScope:"text.html.handlebars",aceMode:"handlebars",languageId:155,default:Ay})),()=>({since:null,parsers:["glimmer"],vscodeLanguageIds:["handlebars"]}))],printers:{glimmer:Ey},parsers:{get glimmer(){return{}.parsers.glimmer}}};var Fy={hasPragma:function(e){return/^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(e)},insertPragma:function(e){return"# @format\n\n"+e}};const{concat:xy,join:Sy,hardline:wy,line:By,softline:Ty,group:ky,indent:Ny,ifBreak:Oy}=dn.builders,{hasIgnoreComment:Py,isNextLineEmpty:_y}=Lt,{insertPragma:Iy}=Fy;function jy(e,t,n){if(0===n.directives.length)return"";const r=Sy(By,e.map(t,"directives"));return"FragmentDefinition"===n.kind||"OperationDefinition"===n.kind?ky(xy([By,r])):xy([" ",ky(Ny(xy([Ty,r])))])}function My(e,t,n){const r=e.getValue().length;return e.map((e,u)=>{const o=n(e);return _y(t.originalText,e.getValue(),t.locEnd)&&u<r-1?xy([o,wy]):o})}function Ly(e,t,n){const r=e.getNode(),u=[],{interfaces:o}=r,a=e.map(e=>n(e),"interfaces");for(let e=0;e<o.length;e++){const n=o[e];u.push(a[e]);const r=o[e+1];if(r){const e=t.originalText.slice(n.loc.end,r.loc.start),o=e.includes("#"),a=e.replace(/#.*/g,"").trim();u.push(","===a?",":" &"),u.push(o?By:" ")}}return u}var Ry={print:function(e,t,n){const r=e.getValue();if(!r)return"";if("string"==typeof r)return r;switch(r.kind){case"Document":{const u=[];return e.map((e,o)=>{u.push(xy([e.call(n)])),o!==r.definitions.length-1&&(u.push(wy),_y(t.originalText,e.getValue(),t.locEnd)&&u.push(wy))},"definitions"),xy([xy(u),wy])}case"OperationDefinition":{const u="{"!==t.originalText[t.locStart(r)],o=!!r.name;return xy([u?r.operation:"",u&&o?xy([" ",e.call(n,"name")]):"",r.variableDefinitions&&r.variableDefinitions.length?ky(xy(["(",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.map(n,"variableDefinitions"))])),Ty,")"])):"",jy(e,n,r),r.selectionSet&&(u||o)?" ":"",e.call(n,"selectionSet")])}case"FragmentDefinition":return xy(["fragment ",e.call(n,"name"),r.variableDefinitions&&r.variableDefinitions.length?ky(xy(["(",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.map(n,"variableDefinitions"))])),Ty,")"])):""," on ",e.call(n,"typeCondition"),jy(e,n,r)," ",e.call(n,"selectionSet")]);case"SelectionSet":return xy(["{",Ny(xy([wy,Sy(wy,e.call(e=>My(e,t,n),"selections"))])),wy,"}"]);case"Field":return ky(xy([r.alias?xy([e.call(n,"alias"),": "]):"",e.call(n,"name"),r.arguments.length>0?ky(xy(["(",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.call(e=>My(e,t,n),"arguments"))])),Ty,")"])):"",jy(e,n,r),r.selectionSet?" ":"",e.call(n,"selectionSet")]));case"Name":return r.value;case"StringValue":return r.block?xy(['"""',wy,Sy(wy,r.value.replace(/"""/g,"\\$&").split("\n")),wy,'"""']):xy(['"',r.value.replace(/["\\]/g,"\\$&").replace(/\n/g,"\\n"),'"']);case"IntValue":case"FloatValue":case"EnumValue":return r.value;case"BooleanValue":return r.value?"true":"false";case"NullValue":return"null";case"Variable":return xy(["$",e.call(n,"name")]);case"ListValue":return ky(xy(["[",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.map(n,"values"))])),Ty,"]"]));case"ObjectValue":return ky(xy(["{",t.bracketSpacing&&r.fields.length>0?" ":"",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.map(n,"fields"))])),Ty,Oy("",t.bracketSpacing&&r.fields.length>0?" ":""),"}"]));case"ObjectField":case"Argument":return xy([e.call(n,"name"),": ",e.call(n,"value")]);case"Directive":return xy(["@",e.call(n,"name"),r.arguments.length>0?ky(xy(["(",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.call(e=>My(e,t,n),"arguments"))])),Ty,")"])):""]);case"NamedType":return e.call(n,"name");case"VariableDefinition":return xy([e.call(n,"variable"),": ",e.call(n,"type"),r.defaultValue?xy([" = ",e.call(n,"defaultValue")]):"",jy(e,n,r)]);case"ObjectTypeExtension":case"ObjectTypeDefinition":return xy([e.call(n,"description"),r.description?wy:"","ObjectTypeExtension"===r.kind?"extend ":"","type ",e.call(n,"name"),r.interfaces.length>0?xy([" implements ",xy(Ly(e,t,n))]):"",jy(e,n,r),r.fields.length>0?xy([" {",Ny(xy([wy,Sy(wy,e.call(e=>My(e,t,n),"fields"))])),wy,"}"]):""]);case"FieldDefinition":return xy([e.call(n,"description"),r.description?wy:"",e.call(n,"name"),r.arguments.length>0?ky(xy(["(",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.call(e=>My(e,t,n),"arguments"))])),Ty,")"])):"",": ",e.call(n,"type"),jy(e,n,r)]);case"DirectiveDefinition":return xy([e.call(n,"description"),r.description?wy:"","directive ","@",e.call(n,"name"),r.arguments.length>0?ky(xy(["(",Ny(xy([Ty,Sy(xy([Oy("",", "),Ty]),e.call(e=>My(e,t,n),"arguments"))])),Ty,")"])):"",r.repeatable?" repeatable":"",xy([" on ",Sy(" | ",e.map(n,"locations"))])]);case"EnumTypeExtension":case"EnumTypeDefinition":return xy([e.call(n,"description"),r.description?wy:"","EnumTypeExtension"===r.kind?"extend ":"","enum ",e.call(n,"name"),jy(e,n,r),r.values.length>0?xy([" {",Ny(xy([wy,Sy(wy,e.call(e=>My(e,t,n),"values"))])),wy,"}"]):""]);case"EnumValueDefinition":return xy([e.call(n,"description"),r.description?wy:"",e.call(n,"name"),jy(e,n,r)]);case"InputValueDefinition":return xy([e.call(n,"description"),r.description?r.description.block?wy:By:"",e.call(n,"name"),": ",e.call(n,"type"),r.defaultValue?xy([" = ",e.call(n,"defaultValue")]):"",jy(e,n,r)]);case"InputObjectTypeExtension":case"InputObjectTypeDefinition":return xy([e.call(n,"description"),r.description?wy:"","InputObjectTypeExtension"===r.kind?"extend ":"","input ",e.call(n,"name"),jy(e,n,r),r.fields.length>0?xy([" {",Ny(xy([wy,Sy(wy,e.call(e=>My(e,t,n),"fields"))])),wy,"}"]):""]);case"SchemaDefinition":return xy(["schema",jy(e,n,r)," {",r.operationTypes.length>0?Ny(xy([wy,Sy(wy,e.call(e=>My(e,t,n),"operationTypes"))])):"",wy,"}"]);case"OperationTypeDefinition":return xy([e.call(n,"operation"),": ",e.call(n,"type")]);case"InterfaceTypeExtension":case"InterfaceTypeDefinition":return xy([e.call(n,"description"),r.description?wy:"","InterfaceTypeExtension"===r.kind?"extend ":"","interface ",e.call(n,"name"),r.interfaces.length>0?xy([" implements ",xy(Ly(e,t,n))]):"",jy(e,n,r),r.fields.length>0?xy([" {",Ny(xy([wy,Sy(wy,e.call(e=>My(e,t,n),"fields"))])),wy,"}"]):""]);case"FragmentSpread":return xy(["...",e.call(n,"name"),jy(e,n,r)]);case"InlineFragment":return xy(["...",r.typeCondition?xy([" on ",e.call(n,"typeCondition")]):"",jy(e,n,r)," ",e.call(n,"selectionSet")]);case"UnionTypeExtension":case"UnionTypeDefinition":return ky(xy([e.call(n,"description"),r.description?wy:"",ky(xy(["UnionTypeExtension"===r.kind?"extend ":"","union ",e.call(n,"name"),jy(e,n,r),r.types.length>0?xy([" =",Oy(""," "),Ny(xy([Oy(xy([By,"  "])),Sy(xy([By,"| "]),e.map(n,"types"))]))]):""]))]));case"ScalarTypeExtension":case"ScalarTypeDefinition":return xy([e.call(n,"description"),r.description?wy:"","ScalarTypeExtension"===r.kind?"extend ":"","scalar ",e.call(n,"name"),jy(e,n,r)]);case"NonNullType":return xy([e.call(n,"type"),"!"]);case"ListType":return xy(["[",e.call(n,"type"),"]"]);default:throw new Error("unknown graphql type: "+JSON.stringify(r.kind))}},massageAstNode:function(e,t){delete t.loc,delete t.comments},hasPrettierIgnore:Py,insertPragma:Iy,printComment:function(e){const t=e.getValue();if("Comment"===t.kind)return"#"+t.value.trimEnd();throw new Error("Not a comment: "+JSON.stringify(t))},canAttachComment:function(e){return e.kind&&"Comment"!==e.kind}},qy={bracketSpacing:Bh.bracketSpacing},Vy=[".graphql",".gql",".graphqls"],Wy={name:"GraphQL",type:"data",extensions:Vy,tmScope:"source.graphql",aceMode:"text",languageId:139};var $y={languages:[As(Ue(Object.freeze({__proto__:null,name:"GraphQL",type:"data",extensions:Vy,tmScope:"source.graphql",aceMode:"text",languageId:139,default:Wy})),()=>({since:"1.5.0",parsers:["graphql"],vscodeLanguageIds:["graphql"]}))],options:qy,printers:{graphql:Ry},parsers:{get graphql(){return{}.parsers.graphql}}};const{getLast:Uy}=Lt,{cjkPattern:zy,kPattern:Jy,punctuationPattern:Gy}={cjkPattern:"(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?",kPattern:"[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]",punctuationPattern:"[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"},Hy=["liquidNode","inlineCode","emphasis","strong","delete","link","linkReference","image","imageReference","footnote","footnoteReference","sentence","whitespace","word","break","inlineMath"],Xy=Hy.concat(["tableCell","paragraph","heading"]),Yy=new RegExp(Jy),Ky=new RegExp(Gy);function Qy(e,t){const[,n,r,u]=t.slice(e.position.start.offset,e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);return{numberText:n,marker:r,leadingSpaces:u}}var Zy={mapAst:function(e,t){return function e(n,r,u){u=u||[];const o=Object.assign({},t(n,r,u));return o.children&&(o.children=o.children.map((t,n)=>e(t,n,[o].concat(u)))),o}(e,null,null)},splitText:function(e,t){const n=[];return("preserve"===t.proseWrap?e:e.replace(new RegExp("(".concat(zy,")\n(").concat(zy,")"),"g"),"$1$2")).split(/([\t\n ]+)/).forEach((e,t,u)=>{t%2!=1?(0!==t&&t!==u.length-1||""!==e)&&e.split(new RegExp("(".concat(zy,")"))).forEach((e,t,n)=>{(0!==t&&t!==n.length-1||""!==e)&&(t%2!=0?r(Ky.test(e)?{type:"word",value:e,kind:"cjk-punctuation",hasLeadingPunctuation:!0,hasTrailingPunctuation:!0}:{type:"word",value:e,kind:Yy.test(e)?"k-letter":"cj-letter",hasLeadingPunctuation:!1,hasTrailingPunctuation:!1}):""!==e&&r({type:"word",value:e,kind:"non-cjk",hasLeadingPunctuation:Ky.test(e[0]),hasTrailingPunctuation:Ky.test(Uy(e))}))}):n.push({type:"whitespace",value:/\n/.test(e)?"\n":" "})}),n;function r(e){const t=Uy(n);var r,u;t&&"word"===t.type&&("non-cjk"===t.kind&&"cj-letter"===e.kind&&!t.hasTrailingPunctuation||"cj-letter"===t.kind&&"non-cjk"===e.kind&&!e.hasLeadingPunctuation?n.push({type:"whitespace",value:" "}):(r="non-cjk",u="cjk-punctuation",t.kind===r&&e.kind===u||t.kind===u&&e.kind===r||[t.value,e.value].some(e=>/\u3000/.test(e))||n.push({type:"whitespace",value:""}))),n.push(e)}},punctuationPattern:Gy,getFencedCodeBlockValue:function(e,t){const n=t.trimEnd().slice(e.position.start.offset,e.position.end.offset),r=n.match(/^\s*/)[0].length,u=new RegExp("^\\s{0,".concat(r,"}")),o=n.split("\n"),a=n[r],i=n.slice(r).match(new RegExp("^[".concat(a,"]+")))[0],s=new RegExp("^\\s{0,3}".concat(i)).test(o[o.length-1].slice(l(o.length-1)));return o.slice(1,s?-1:void 0).map((e,t)=>e.slice(l(t+1)).replace(u,"")).join("\n");function l(t){return e.position.indent[t-1]-1}},getOrderedListItemInfo:Qy,hasGitDiffFriendlyOrderedList:function(e,t){if(!e.ordered)return!1;if(e.children.length<2)return!1;const n=Number(Qy(e.children[0],t.originalText).numberText),r=Number(Qy(e.children[1],t.originalText).numberText);if(0===n&&e.children.length>2){const n=Number(Qy(e.children[2],t.originalText).numberText);return 1===r&&1===n}return 1===r},INLINE_NODE_TYPES:Hy,INLINE_NODE_WRAPPER_TYPES:Xy,isAutolink:function(e,t){if(!e||"link"!==e.type||1!==e.children.length)return!1;const n=e.children[0];return n&&t.locStart(e)===t.locStart(n)&&t.locEnd(e)===t.locEnd(n)}};const{getParserName:eE,getMaxContinuousCount:tE}=Lt,{builders:{hardline:nE,concat:rE,markAsRoot:uE},utils:{replaceNewlinesWithLiterallines:oE}}=dn,{print:aE}=Em,{getFencedCodeBlockValue:iE}=Zy;var sE=function(e,t,n,r){const u=e.getValue();if("code"===u.type&&null!==u.lang){const e=u.lang.match(/^[\w-]+/),t=e?e[0]:"",o=eE(t,r);if(o){const e=r.__inJsTemplate?"~":"`",t=e.repeat(Math.max(3,tE(u.value,e)+1)),a=n(iE(u,r.originalText),{parser:o},{stripTrailingHardline:!0});return uE(rE([t,u.lang,u.meta?" "+u.meta:"",nE,oE(a),nE,t]))}}switch(u.type){case"front-matter":return aE(u,n);case"importExport":return rE([n(u.value,{parser:"babel"},{stripTrailingHardline:!0}),nE]);case"jsx":return n("<$>".concat(u.value,"</$>"),{parser:"__js_expression",rootMarker:"mdx"},{stripTrailingHardline:!0})}return null};const{parse:lE}=Em,cE=["format","prettier"];function pE(e){const t="@(".concat(cE.join("|"),")"),n=new RegExp(["\x3c!--\\s*".concat(t,"\\s*--\x3e"),"\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t,"[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e")].join("|"),"m"),r=e.match(n);return r&&0===r.index}var dE={startWithPragma:pE,hasPragma:e=>pE(lE(e).content.trimStart()),insertPragma:e=>{const t=lE(e),n="\x3c!-- @".concat(cE[0]," --\x3e");return t.frontMatter?"".concat(t.frontMatter.raw,"\n\n").concat(n,"\n\n").concat(t.content):"".concat(n,"\n\n").concat(t.content)}};const{getOrderedListItemInfo:fE,mapAst:hE,splitText:mE}=Zy,gE=/^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;function DE(e,t,n){return hE(e,e=>{if(!e.children)return e;const r=e.children.reduce((e,r)=>{const u=e[e.length-1];return u&&t(u,r)?e.splice(-1,1,n(u,r)):e.push(r),e},[]);return Object.assign({},e,{children:r})})}var yE=function(e,t){return e=function(e){return DE(e,(e,t)=>"importExport"===e.type&&"importExport"===t.type,(e,t)=>({type:"importExport",value:e.value+"\n\n"+t.value,position:{start:e.position.start,end:t.position.end}}))}(e=function(e){return hE(e,e=>"import"!==e.type&&"export"!==e.type?e:Object.assign({},e,{type:"importExport"}))}(e=function(e,t){return hE(e,(e,n,[r])=>{if("text"!==e.type)return e;let{value:u}=e;return"paragraph"===r.type&&(0===n&&(u=u.trimStart()),n===r.children.length-1&&(u=u.trimEnd())),{type:"sentence",position:e.position,children:mE(u,t)}})}(e=function(e,t){return hE(e,(e,t,n)=>{if("list"===e.type&&0!==e.children.length){for(let t=0;t<n.length;t++){const r=n[t];if("list"===r.type&&!r.isAligned)return e.isAligned=!1,e}e.isAligned=r(e)}return e});function n(e){return 0===e.children.length?-1:e.children[0].position.start.column-1}function r(e){if(!e.ordered)return!0;const[r,u]=e.children;if(fE(r,t.originalText).leadingSpaces.length>1)return!0;const o=n(r);if(-1===o)return!1;if(1===e.children.length)return o%t.tabWidth==0;if(o!==n(u))return!1;if(o%t.tabWidth==0)return!0;return fE(u,t.originalText).leadingSpaces.length>1}}(e=function(e,t){return hE(e,(e,n,r)=>{if("code"===e.type){const n=/^\n?( {4,}|\t)/.test(t.originalText.slice(e.position.start.offset,e.position.end.offset));if(e.isIndented=n,n)for(let e=0;e<r.length;e++){const t=r[e];if(t.hasIndentedCodeblock)break;"list"===t.type&&(t.hasIndentedCodeblock=!0)}}return e})}(e=function(e){return hE(e,e=>"inlineCode"!==e.type?e:Object.assign({},e,{value:e.value.replace(/\s+/g," ")}))}(e=function(e){return DE(e,(e,t)=>"text"===e.type&&"text"===t.type,(e,t)=>({type:"text",value:e.value+t.value,position:{start:e.position.start,end:t.position.end}}))}(e=function(e,t){return hE(e,e=>"text"!==e.type?e:Object.assign({},e,{value:"*"!==e.value&&"_"!==e.value&&"$"!==e.value&&gE.test(e.value)&&e.position.end.offset-e.position.start.offset!==e.value.length?t.originalText.slice(e.position.start.offset,e.position.end.offset):e.value}))}(e,t))),t),t),t)))};const{getLast:EE,getMinNotPresentContinuousCount:CE,getMaxContinuousCount:bE,getStringWidth:AE}=Lt,{builders:{breakParent:vE,concat:FE,join:xE,line:SE,literalline:wE,markAsRoot:BE,hardline:TE,softline:kE,ifBreak:NE,fill:OE,align:PE,indent:_E,group:IE},utils:{normalizeDoc:jE},printer:{printDocToString:ME}}=dn,{replaceEndOfLineWith:LE,isFrontMatterNode:RE}=Lt,{getFencedCodeBlockValue:qE,hasGitDiffFriendlyOrderedList:VE,splitText:WE,punctuationPattern:$E,INLINE_NODE_TYPES:UE,INLINE_NODE_WRAPPER_TYPES:zE,isAutolink:JE}=Zy,GE=new Set(["importExport"]),HE=["heading","tableCell","link"],XE=new Set(["listItem","definition","footnoteDefinition"]);function YE(e,t,n,r){const u=e.getValue(),o=null===u.checked?"":u.checked?"[x] ":"[ ] ";return FE([o,nC(e,t,n,{processor:(e,u)=>{if(0===u&&"list"!==e.getValue().type)return PE(" ".repeat(o.length),e.call(n));const a=" ".repeat((i=t.tabWidth-r.length,l=3,i<(s=0)?s:i>l?l:i));var i,s,l;return FE([a,PE(a,e.call(n))])}})])}function KE(e,t){return function(e,t,n){n=n||(()=>!0);let r=-1;for(const u of t.children)if(u.type===e.type&&n(u)?r++:r=-1,u===e)return r}(e,t,t=>t.ordered===e.ordered)}function QE(e,t){const n=[].concat(t);let r,u=-1;for(;r=e.getParentNode(++u);)if(n.includes(r.type))return u;return-1}function ZE(e,t){const n=QE(e,t);return-1===n?null:e.getParentNode(n)}function eC(e,t,n){if("preserve"===n.proseWrap&&"\n"===t)return TE;const r="always"===n.proseWrap&&!ZE(e,HE);return""!==t?r?SE:" ":r?kE:""}function tC(e,t,n){const r=[];let u=null;const{children:o}=e.getValue();return o.forEach((e,t)=>{switch(uC(e)){case"start":null===u&&(u={index:t,offset:e.position.end.offset});break;case"end":null!==u&&(r.push({start:u,end:{index:t,offset:e.position.start.offset}}),u=null)}}),nC(e,t,n,{processor:(e,u)=>{if(0!==r.length){const e=r[0];if(u===e.start.index)return FE([o[e.start.index].value,t.originalText.slice(e.start.offset,e.end.offset),o[e.end.index].value]);if(e.start.index<u&&u<e.end.index)return!1;if(u===e.end.index)return r.shift(),!1}return e.call(n)}})}function nC(e,t,n,r){const u=(r=r||{}).postprocessor||FE,o=r.processor||(e=>e.call(n)),a=e.getValue(),i=[];let s;return e.map((e,n)=>{const r=e.getValue(),u=o(e,n);if(!1!==u){const e={parts:i,prevNode:s,parentNode:a,options:t};(function(e,t){const n=0===t.parts.length,r=UE.includes(e.type),u="html"===e.type&&zE.includes(t.parentNode.type);return n||r||u})(r,e)||(i.push(TE),s&&GE.has(s.type)||(function(e,t){const n=(t.prevNode&&t.prevNode.type)===e.type&&XE.has(e.type),r="listItem"===t.parentNode.type&&!t.parentNode.loose,u=t.prevNode&&"listItem"===t.prevNode.type&&t.prevNode.loose,o="next"===uC(t.prevNode),a="html"===e.type&&t.prevNode&&"html"===t.prevNode.type&&t.prevNode.position.end.line+1===e.position.start.line,i="html"===e.type&&"listItem"===t.parentNode.type&&t.prevNode&&"paragraph"===t.prevNode.type&&t.prevNode.position.end.line+1===e.position.start.line;return u||!(n||r||o||a||i)}(r,e)||oC(r,e))&&i.push(TE),oC(r,e)&&i.push(TE)),i.push(u),s=r}},"children"),u(i)}function rC(e){let t=e;for(;t.children&&0!==t.children.length;)t=t.children[t.children.length-1];return t}function uC(e){if("html"!==e.type)return!1;const t=e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);return null!==t&&(t[1]?t[1]:"next")}function oC(e,t){const n=t.prevNode&&"list"===t.prevNode.type,r="code"===e.type&&e.isIndented;return n&&r}function aC(e,t){const n=[" "].concat(t||[]);return new RegExp(n.map(e=>"\\".concat(e)).join("|")).test(e)?"<".concat(e,">"):e}function iC(e,t,n){if(null==n&&(n=!0),!e)return"";if(n)return" "+iC(e,t,!1);if((e=e.replace(/\\(["')])/g,"$1")).includes('"')&&e.includes("'")&&!e.includes(")"))return"(".concat(e,")");const r=e.split("'").length-1,u=e.split('"').length-1,o=r>u?'"':u>r||t.singleQuote?"'":'"';return e=(e=e.replace(/\\/,"\\\\")).replace(new RegExp("(".concat(o,")"),"g"),"\\$1"),"".concat(o).concat(e).concat(o)}var sC={preprocess:yE,print:function(e,t,n){const r=e.getValue();if(function(e){const t=ZE(e,["linkReference","imageReference"]);return t&&("linkReference"!==t.type||"full"!==t.referenceType)}(e))return FE(WE(t.originalText.slice(r.position.start.offset,r.position.end.offset),t).map(n=>"word"===n.type?n.value:""===n.value?"":eC(e,n.value,t)));switch(r.type){case"front-matter":return t.originalText.slice(r.position.start.offset,r.position.end.offset);case"root":return 0===r.children.length?"":FE([jE(tC(e,t,n)),GE.has(rC(r).type)?"":TE]);case"paragraph":return nC(e,t,n,{postprocessor:OE});case"sentence":return nC(e,t,n);case"word":{let n=r.value.replace(/[$*]/g,"\\$&").replace(new RegExp(["(^|".concat($E,")(_+)"),"(_+)(".concat($E,"|$)")].join("|"),"g"),(e,t,n,r,u)=>(n?"".concat(t).concat(n):"".concat(r).concat(u)).replace(/_/g,"\\_"));const u=(e,t,n)=>"sentence"===e.type&&0===n,o=(e,n,r)=>JE(e.children[r-1],t);return n!==r.value&&(e.match(void 0,u,o)||e.match(void 0,u,(e,t,n)=>"emphasis"===e.type&&0===n,o))&&(n=n.replace(/^(\\?[*_])+/,e=>e.replace(/\\/g,""))),n}case"whitespace":{const n=e.getParentNode(),u=n.children.indexOf(r),o=n.children[u+1],a=o&&/^>|^([*+-]|#{1,6}|\d+[).])$/.test(o.value)?"never":t.proseWrap;return eC(e,r.value,{proseWrap:a})}case"emphasis":{let u;if(JE(r.children[0],t))u=t.originalText[r.position.start.offset];else{const t=e.getParentNode(),n=t.children.indexOf(r),o=t.children[n-1],a=t.children[n+1];u=o&&"sentence"===o.type&&o.children.length>0&&"word"===EE(o.children).type&&!EE(o.children).hasTrailingPunctuation||a&&"sentence"===a.type&&a.children.length>0&&"word"===a.children[0].type&&!a.children[0].hasLeadingPunctuation||ZE(e,"emphasis")?"*":"_"}return FE([u,nC(e,t,n),u])}case"strong":return FE(["**",nC(e,t,n),"**"]);case"delete":return FE(["~~",nC(e,t,n),"~~"]);case"inlineCode":{const e=CE(r.value,"`"),t="`".repeat(e||1),n=e&&!/^\s/.test(r.value)?" ":"";return FE([t,n,r.value,n,t])}case"link":switch(t.originalText[r.position.start.offset]){case"<":{const e="mailto:",n=r.url.startsWith(e)&&t.originalText.slice(r.position.start.offset+1,r.position.start.offset+1+e.length)!==e?r.url.slice(e.length):r.url;return FE(["<",n,">"])}case"[":return FE(["[",nC(e,t,n),"](",aC(r.url,")"),iC(r.title,t),")"]);default:return t.originalText.slice(r.position.start.offset,r.position.end.offset)}case"image":return FE(["![",r.alt||"","](",aC(r.url,")"),iC(r.title,t),")"]);case"blockquote":return FE(["> ",PE("> ",nC(e,t,n))]);case"heading":return FE(["#".repeat(r.depth)+" ",nC(e,t,n)]);case"code":{if(r.isIndented){const e=" ".repeat(4);return PE(e,FE([e,FE(LE(r.value,TE))]))}const e=t.__inJsTemplate?"~":"`",n=e.repeat(Math.max(3,bE(r.value,e)+1));return FE([n,r.lang||"",r.meta?" "+r.meta:"",TE,FE(LE(qE(r,t.originalText),TE)),TE,n])}case"html":{const t=e.getParentNode(),n="root"===t.type&&EE(t.children)===r?r.value.trimEnd():r.value,u=/^<!--[\S\s]*-->$/.test(n);return FE(LE(n,u?TE:BE(wE)))}case"list":{const u=KE(r,e.getParentNode()),o=VE(r,t);return nC(e,t,n,{processor:(e,a)=>{const i=function(){const e=r.ordered?(0===a?r.start:o?1:r.start+a)+(u%2==0?". ":") "):u%2==0?"- ":"* ";return r.isAligned||r.hasIndentedCodeblock?function(e,t){const n=r();return e+" ".repeat(n>=4?0:n);function r(){const n=e.length%t.tabWidth;return 0===n?0:t.tabWidth-n}}(e,t):e}(),s=e.getValue();return 2===s.children.length&&"html"===s.children[1].type&&s.children[0].position.start.column!==s.children[1].position.start.column?FE([i,YE(e,t,n,i)]):FE([i,PE(" ".repeat(i.length),YE(e,t,n,i))])}})}case"thematicBreak":{const t=QE(e,"list");if(-1===t)return"---";return KE(e.getParentNode(t),e.getParentNode(t+1))%2==0?"***":"---"}case"linkReference":return FE(["[",nC(e,t,n),"]","full"===r.referenceType?FE(["[",r.identifier,"]"]):"collapsed"===r.referenceType?"[]":""]);case"imageReference":switch(r.referenceType){case"full":return FE(["![",r.alt||"","][",r.identifier,"]"]);default:return FE(["![",r.alt,"]","collapsed"===r.referenceType?"[]":""])}case"definition":{const e="always"===t.proseWrap?SE:" ";return IE(FE([FE(["[",r.identifier,"]:"]),_E(FE([e,aC(r.url),null===r.title?"":FE([e,iC(r.title,t,!1)])]))]))}case"footnote":return FE(["[^",nC(e,t,n),"]"]);case"footnoteReference":return FE(["[^",r.identifier,"]"]);case"footnoteDefinition":{const u=e.getParentNode().children[e.getName()+1],o=1===r.children.length&&"paragraph"===r.children[0].type&&("never"===t.proseWrap||"preserve"===t.proseWrap&&r.children[0].position.start.line===r.children[0].position.end.line);return FE(["[^",r.identifier,"]: ",o?nC(e,t,n):IE(FE([PE(" ".repeat(4),nC(e,t,n,{processor:(e,t)=>0===t?IE(FE([kE,e.call(n)])):e.call(n)})),u&&"footnoteDefinition"===u.type?kE:""]))])}case"table":return function(e,t,n){const r=TE.parts[0],u=e.getValue(),o=[];e.map(e=>{const r=[];e.map(e=>{r.push(ME(e.call(n),t).formatted)},"children"),o.push(r)},"children");const a=o.reduce((e,t)=>e.map((e,n)=>Math.max(e,AE(t[n]))),o[0].map(()=>3)),i=xE(r,[c(o[0]),l(),xE(r,o.slice(1).map(e=>c(e)))]);if("never"!==t.proseWrap)return FE([vE,i]);const s=xE(r,[c(o[0],!0),l(!0),xE(r,o.slice(1).map(e=>c(e,!0)))]);return FE([vE,IE(NE(s,i))]);function l(e){return FE(["| ",xE(" | ",a.map((t,n)=>{const r=e?3:t;switch(u.align[n]){case"left":return":"+"-".repeat(r-1);case"right":return"-".repeat(r-1)+":";case"center":return":"+"-".repeat(r-2)+":";default:return"-".repeat(r)}}))," |"])}function c(e,t){return FE(["| ",xE(" | ",t?e:e.map((e,t)=>{switch(u.align[t]){case"right":return d(e,a[t]);case"center":return f(e,a[t]);default:return p(e,a[t])}}))," |"])}function p(e,t){const n=t-AE(e);return FE([e," ".repeat(n)])}function d(e,t){const n=t-AE(e);return FE([" ".repeat(n),e])}function f(e,t){const n=t-AE(e),r=Math.floor(n/2),u=n-r;return FE([" ".repeat(r),e," ".repeat(u)])}}(e,t,n);case"tableCell":return nC(e,t,n);case"break":return/\s/.test(t.originalText[r.position.start.offset])?FE(["  ",BE(wE)]):FE(["\\",TE]);case"liquidNode":return FE(LE(r.value,TE));case"importExport":case"jsx":return FE([r.value,TE]);case"math":return FE(["$$",TE,r.value?FE([FE(LE(r.value,TE)),TE]):"","$$"]);case"inlineMath":return t.originalText.slice(t.locStart(r),t.locEnd(r));case"tableRow":case"listItem":default:throw new Error("Unknown markdown type ".concat(JSON.stringify(r.type)))}},embed:sE,massageAstNode:function(e,t,n){return delete t.position,delete t.raw,"front-matter"!==e.type&&"code"!==e.type&&"yaml"!==e.type&&"import"!==e.type&&"export"!==e.type&&"jsx"!==e.type||delete t.value,"list"===e.type&&delete t.isAligned,"list"!==e.type&&"listItem"!==e.type||(delete t.spread,delete t.loose),"text"===e.type?null:("inlineCode"===e.type&&(t.value=e.value.replace(/[\t\n ]+/g," ")),"definition"!==e.type&&"linkReference"!==e.type||(t.label=e.label.trim().replace(/[\t\n ]+/g," ").toLowerCase()),"definition"!==e.type&&"link"!==e.type&&"image"!==e.type||!e.title||(t.title=e.title.replace(/\\(["')])/g,"$1")),n&&"root"===n.type&&n.children.length>0&&(n.children[0]===e||RE(n.children[0])&&n.children[1]===e)&&"html"===e.type&&dE.startWithPragma(e.value)?null:void 0)},hasPrettierIgnore:function(e){const t=+e.getName();return 0!==t&&"next"===uC(e.getParentNode().children[t-1])},insertPragma:dE.insertPragma},lC={proseWrap:Bh.proseWrap,singleQuote:Bh.singleQuote},cC=["pandoc"],pC=[".md",".markdown",".mdown",".mdwn",".mdx",".mkd",".mkdn",".mkdown",".ronn",".workbook"],dC=["contents.lr"],fC={name:"Markdown",type:"prose",aliases:cC,aceMode:"markdown",codemirrorMode:"gfm",codemirrorMimeType:"text/x-gfm",wrap:true,extensions:pC,filenames:dC,tmScope:"source.gfm",languageId:222},hC=Ue(Object.freeze({__proto__:null,name:"Markdown",type:"prose",aliases:cC,aceMode:"markdown",codemirrorMode:"gfm",codemirrorMimeType:"text/x-gfm",wrap:true,extensions:pC,filenames:dC,tmScope:"source.gfm",languageId:222,default:fC}));var mC={languages:[As(hC,e=>({since:"1.8.0",parsers:["markdown"],vscodeLanguageIds:["markdown"],filenames:e.filenames.concat(["README"]),extensions:e.extensions.filter(e=>".mdx"!==e)})),As(hC,()=>({name:"MDX",since:"1.15.0",parsers:["mdx"],vscodeLanguageIds:["mdx"],filenames:[],extensions:[".mdx"]}))],options:lC,printers:{mdast:sC},parsers:{get remark(){return{}.parsers.remark},get markdown(){return{}.parsers.remark},get mdx(){return{}.parsers.mdx}}};const{isFrontMatterNode:gC}=Lt;var DC=Object.freeze({__proto__:null,default:["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]}),yC=["accesskey","charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","tabindex","target","type"],EC=["title"],CC=["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"],bC=["accesskey","alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","tabindex","target","type"],AC=["autoplay","controls","crossorigin","loop","muted","preload","src"],vC=["href","target"],FC=["color","face","size"],xC=["dir"],SC=["cite"],wC=["alink","background","bgcolor","link","text","vlink"],BC=["clear"],TC=["accesskey","autofocus","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","tabindex","type","value"],kC=["height","width"],NC=["align"],OC=["align","char","charoff","span","valign","width"],PC=["align","char","charoff","span","valign","width"],_C=["value"],IC=["cite","datetime"],jC=["open"],MC=["title"],LC=["open"],RC=["compact"],qC=["align"],VC=["compact"],WC=["height","src","type","width"],$C=["disabled","form","name"],UC=["color","face","size"],zC=["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"],JC=["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"],GC=["cols","rows"],HC=["align"],XC=["align"],YC=["align"],KC=["align"],QC=["align"],ZC=["align"],eb=["profile"],tb=["align","noshade","size","width"],nb=["manifest","version"],rb=["align","allow","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"],ub=["align","alt","border","crossorigin","decoding","height","hspace","ismap","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"],ob=["accept","accesskey","align","alt","autocomplete","autofocus","checked","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","readonly","required","size","src","step","tabindex","title","type","usemap","value","width"],ab=["cite","datetime"],ib=["prompt"],sb=["accesskey","for","form"],lb=["accesskey","align"],cb=["type","value"],pb=["as","charset","color","crossorigin","href","hreflang","imagesizes","imagesrcset","integrity","media","nonce","referrerpolicy","rel","rev","sizes","target","title","type"],db=["name"],fb=["compact"],hb=["charset","content","http-equiv","name","scheme"],mb=["high","low","max","min","optimum","value"],gb=["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","tabindex","type","typemustmatch","usemap","vspace","width"],Db=["compact","reversed","start","type"],yb=["disabled","label"],Eb=["disabled","label","selected","value"],Cb=["for","form","name"],bb=["align"],Ab=["name","type","value","valuetype"],vb=["width"],Fb=["max","value"],xb=["cite"],Sb=["async","charset","crossorigin","defer","integrity","language","nomodule","nonce","referrerpolicy","src","type"],wb=["autocomplete","autofocus","disabled","form","multiple","name","required","size","tabindex"],Bb=["name"],Tb=["media","sizes","src","srcset","type"],kb=["media","nonce","title","type"],Nb=["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"],Ob=["align","char","charoff","valign"],Pb=["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"],_b=["accesskey","autocomplete","autofocus","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","tabindex","wrap"],Ib=["align","char","charoff","valign"],jb=["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"],Mb=["align","char","charoff","valign"],Lb=["datetime"],Rb=["align","bgcolor","char","charoff","valign"],qb=["default","kind","label","src","srclang"],Vb=["compact","type"],Wb=["autoplay","controls","crossorigin","height","loop","muted","playsinline","poster","preload","src","width"],$b={"*":["accesskey","autocapitalize","autofocus","class","contenteditable","dir","draggable","enterkeyhint","hidden","id","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","slot","spellcheck","style","tabindex","title","translate"],a:yC,abbr:EC,applet:CC,area:bC,audio:AC,base:vC,basefont:FC,bdo:xC,blockquote:SC,body:wC,br:BC,button:TC,canvas:kC,caption:NC,col:OC,colgroup:PC,data:_C,del:IC,details:jC,dfn:MC,dialog:LC,dir:RC,div:qC,dl:VC,embed:WC,fieldset:$C,font:UC,form:zC,frame:JC,frameset:GC,h1:HC,h2:XC,h3:YC,h4:KC,h5:QC,h6:ZC,head:eb,hr:tb,html:nb,iframe:rb,img:ub,input:ob,ins:ab,isindex:ib,label:sb,legend:lb,li:cb,link:pb,map:db,menu:fb,meta:hb,meter:mb,object:gb,ol:Db,optgroup:yb,option:Eb,output:Cb,p:bb,param:Ab,pre:vb,progress:Fb,q:xb,script:Sb,select:wb,slot:Bb,source:Tb,style:kb,table:Nb,tbody:Ob,td:Pb,textarea:_b,tfoot:Ib,th:jb,thead:Mb,time:Lb,tr:Rb,track:qb,ul:Vb,video:Wb},Ub=Object.freeze({__proto__:null,a:yC,abbr:EC,applet:CC,area:bC,audio:AC,base:vC,basefont:FC,bdo:xC,blockquote:SC,body:wC,br:BC,button:TC,canvas:kC,caption:NC,col:OC,colgroup:PC,data:_C,del:IC,details:jC,dfn:MC,dialog:LC,dir:RC,div:qC,dl:VC,embed:WC,fieldset:$C,font:UC,form:zC,frame:JC,frameset:GC,h1:HC,h2:XC,h3:YC,h4:KC,h5:QC,h6:ZC,head:eb,hr:tb,html:nb,iframe:rb,img:ub,input:ob,ins:ab,isindex:ib,label:sb,legend:lb,li:cb,link:pb,map:db,menu:fb,meta:hb,meter:mb,object:gb,ol:Db,optgroup:yb,option:Eb,output:Cb,p:bb,param:Ab,pre:vb,progress:Fb,q:xb,script:Sb,select:wb,slot:Bb,source:Tb,style:kb,table:Nb,tbody:Ob,td:Pb,textarea:_b,tfoot:Ib,th:jb,thead:Mb,time:Lb,tr:Rb,track:qb,ul:Vb,video:Wb,default:$b}),zb=Ue(DC),Jb=Ue(Ub);const{getParserName:Gb,isFrontMatterNode:Hb}=Lt,{CSS_DISPLAY_TAGS:Xb,CSS_DISPLAY_DEFAULT:Yb,CSS_WHITE_SPACE_TAGS:Kb,CSS_WHITE_SPACE_DEFAULT:Qb}={CSS_DISPLAY_TAGS:{area:"none",base:"none",basefont:"none",datalist:"none",head:"none",link:"none",meta:"none",noembed:"none",noframes:"none",param:"block",rp:"none",script:"block",source:"block",style:"none",template:"inline",track:"block",title:"none",html:"block",body:"block",address:"block",blockquote:"block",center:"block",div:"block",figure:"block",figcaption:"block",footer:"block",form:"block",header:"block",hr:"block",legend:"block",listing:"block",main:"block",p:"block",plaintext:"block",pre:"block",xmp:"block",slot:"contents",ruby:"ruby",rt:"ruby-text",article:"block",aside:"block",h1:"block",h2:"block",h3:"block",h4:"block",h5:"block",h6:"block",hgroup:"block",nav:"block",section:"block",dir:"block",dd:"block",dl:"block",dt:"block",ol:"block",ul:"block",li:"list-item",table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell",fieldset:"block",button:"inline-block",details:"block",summary:"block",dialog:"block",meter:"inline-block",progress:"inline-block",object:"inline-block",video:"inline-block",audio:"inline-block",select:"inline-block",option:"block",optgroup:"block"},CSS_DISPLAY_DEFAULT:"inline",CSS_WHITE_SPACE_TAGS:{listing:"pre",plaintext:"pre",pre:"pre",xmp:"pre",nobr:"nowrap",table:"initial",textarea:"pre-wrap"},CSS_WHITE_SPACE_DEFAULT:"normal"},Zb=uA(zb),eA=function(e,t){const n=Object.create(null);for(const r of Object.keys(e))n[r]=t(e[r],r);return n}(Jb,uA),tA=new Set(["\t","\n","\f","\r"," "]),nA=e=>e.replace(/[\t\n\f\r ]+$/,""),rA=e=>e.match(/^[\t\n\f\r ]*/)[0];function uA(e){const t=Object.create(null);for(const n of e)t[n]=!0;return t}function oA(e,t){return!("ieConditionalComment"!==e.type||!e.lastChild||e.lastChild.isSelfClosing||e.lastChild.endSourceSpan)||("ieConditionalComment"===e.type&&!e.complete||(!(!DA(e)||!e.children.some(e=>"text"!==e.type&&"interpolation"!==e.type))||!(!vA(e,t)||iA(e)||"interpolation"===e.type)))}function aA(e){if("attribute"===e.type)return!1;if(!e.parent)return!1;if("number"!=typeof e.index||0===e.index)return!1;return function(e){return"comment"===e.type&&"prettier-ignore"===e.value.trim()}(e.parent.children[e.index-1])}function iA(e){return"element"===e.type&&("script"===e.fullName||"style"===e.fullName||"svg:style"===e.fullName||yA(e)&&("script"===e.name||"style"===e.name))}function sA(e){return EA(e).startsWith("pre")}function lA(e){return"element"===e.type&&0!==e.children.length&&(["html","head","ul","ol","select"].includes(e.name)||e.cssDisplay.startsWith("table")&&"table-cell"!==e.cssDisplay)}function cA(e){return hA(e)||"element"===e.type&&"br"===e.fullName||pA(e)}function pA(e){return dA(e)&&fA(e)}function dA(e){return e.hasLeadingSpaces&&(e.prev?e.prev.sourceSpan.end.line<e.sourceSpan.start.line:"root"===e.parent.type||e.parent.startSourceSpan.end.line<e.sourceSpan.start.line)}function fA(e){return e.hasTrailingSpaces&&(e.next?e.next.sourceSpan.start.line>e.sourceSpan.end.line:"root"===e.parent.type||e.parent.endSourceSpan&&e.parent.endSourceSpan.start.line>e.sourceSpan.end.line)}function hA(e){switch(e.type){case"ieConditionalComment":case"comment":case"directive":return!0;case"element":return["script","select"].includes(e.name)}return!1}function mA(e){const{type:t,lang:n}=e.attrMap;return"module"===t||"text/javascript"===t||"text/babel"===t||"application/javascript"===t||"jsx"===n?"babel":"application/x-typescript"===t||"ts"===n||"tsx"===n?"typescript":"text/markdown"===t?"markdown":"text/html"===t?"html":t&&(t.endsWith("json")||t.endsWith("importmap"))?"json":"text/x-handlebars-template"===t?"glimmer":void 0}function gA(e){return"block"===e||"list-item"===e||e.startsWith("table")}function DA(e){return EA(e).startsWith("pre")}function yA(e){return"element"===e.type&&!e.hasExplicitNamespace&&!["html","svg"].includes(e.namespace)}function EA(e){return"element"===e.type&&(!e.namespace||yA(e))&&Kb[e.name]||Qb}const CA=new Set(["template","style","script"]);function bA(e,t){return AA(e,t)&&!CA.has(e.fullName)}function AA(e,t){return"vue"===t.parser&&"element"===e.type&&"root"===e.parent.type&&"html"!==e.fullName.toLowerCase()}function vA(e,t){return AA(e,t)&&(bA(e,t)||e.attrMap.lang&&"html"!==e.attrMap.lang)}var FA={HTML_ELEMENT_ATTRIBUTES:eA,HTML_TAGS:Zb,htmlTrim:e=>(e=>e.replace(/^[\t\n\f\r ]+/,""))(nA(e)),htmlTrimPreserveIndentation:e=>(e=>e.replace(/^[\t\f\r ]*?\n/g,""))(nA(e)),splitByHtmlWhitespace:e=>e.split(/[\t\n\f\r ]+/),hasHtmlWhitespace:e=>/[\t\n\f\r ]/.test(e),getLeadingAndTrailingHtmlWhitespace:e=>{const[,t,n,r]=e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/);return{leadingWhitespace:t,trailingWhitespace:r,text:n}},canHaveInterpolation:function(e){return e.children&&!iA(e)},countChars:function(e,t){let n=0;for(let r=0;r<e.length;r++)e[r]===t&&n++;return n},countParents:function(e,t){let n=0;for(let r=e.stack.length-1;r>=0;r--){const u=e.stack[r];u&&"object"==typeof u&&!Array.isArray(u)&&t(u)&&n++}return n},dedentString:function(e,t=function(e){let t=1/0;for(const n of e.split("\n")){if(0===n.length)continue;if(!tA.has(n[0]))return 0;const e=rA(n).length;n.length!==e&&e<t&&(t=e)}return t===1/0?0:t}(e)){return 0===t?e:e.split("\n").map(e=>e.slice(t)).join("\n")},forceBreakChildren:lA,forceBreakContent:function(e){return lA(e)||"element"===e.type&&0!==e.children.length&&(["body","script","style"].includes(e.name)||e.children.some(e=>function(e){return e.children&&e.children.some(e=>"text"!==e.type)}(e)))||e.firstChild&&e.firstChild===e.lastChild&&"text"!==e.firstChild.type&&dA(e.firstChild)&&(!e.lastChild.isTrailingSpaceSensitive||fA(e.lastChild))},forceNextEmptyLine:function(e){return Hb(e)||e.next&&e.sourceSpan.end&&e.sourceSpan.end.line+1<e.next.sourceSpan.start.line},getLastDescendant:function e(t){return t.lastChild?e(t.lastChild):t},getNodeCssStyleDisplay:function(e,t){if(e.prev&&"comment"===e.prev.type){const t=e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);if(t)return t[1]}let n=!1;if("element"===e.type&&"svg"===e.namespace){if(!function(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}(e,e=>"svg:foreignObject"===e.fullName))return"svg"===e.name?"inline-block":"block";n=!0}switch(t.htmlWhitespaceSensitivity){case"strict":return"inline";case"ignore":return"block";default:return"vue"===t.parser&&e.parent&&"root"===e.parent.type?"block":"element"===e.type&&(!e.namespace||n||yA(e))&&Xb[e.name]||Yb}},getNodeCssStyleWhiteSpace:EA,getPrettierIgnoreAttributeCommentData:function(e){const t=e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);return!!t&&(!t[1]||t[1].split(/\s+/))},hasPrettierIgnore:aA,inferScriptParser:function(e,t){return"script"!==e.name||e.attrMap.src?"style"===e.name?function(e){const{lang:t}=e.attrMap;return t&&"postcss"!==t&&"css"!==t?"scss"===t?"scss":"less"===t?"less":void 0:"css"}(e):t&&vA(e,t)?mA(e)||!("src"in e.attrMap)&&Gb(e.attrMap.lang,t):void 0:e.attrMap.lang||e.attrMap.type?mA(e):"babel"},isVueCustomBlock:bA,isVueNonHtmlBlock:vA,isDanglingSpaceSensitiveNode:function(e){return!(t=e.cssDisplay,gA(t)||"inline-block"===t||iA(e));var t},isIndentationSensitiveNode:sA,isLeadingSpaceSensitiveNode:function(e,t){const n=function(){if(Hb(e))return!1;if(("text"===e.type||"interpolation"===e.type)&&e.prev&&("text"===e.prev.type||"interpolation"===e.prev.type))return!0;if(!e.parent||"none"===e.parent.cssDisplay)return!1;if(DA(e.parent))return!0;if(!e.prev&&("root"===e.parent.type||DA(e)&&e.parent||iA(e.parent)||bA(e.parent,t)||(n=e.parent.cssDisplay,gA(n)||"inline-block"===n)))return!1;var n;if(e.prev&&!function(e){return!gA(e)}(e.prev.cssDisplay))return!1;return!0}();return n&&!e.prev&&e.parent&&e.parent.tagDefinition&&e.parent.tagDefinition.ignoreFirstLf?"interpolation"===e.type:n},isPreLikeNode:DA,isScriptLikeTag:iA,isTextLikeNode:function(e){return"text"===e.type||"comment"===e.type},isTrailingSpaceSensitiveNode:function(e,t){return!Hb(e)&&(!("text"!==e.type&&"interpolation"!==e.type||!e.next||"text"!==e.next.type&&"interpolation"!==e.next.type)||!(!e.parent||"none"===e.parent.cssDisplay)&&(!!DA(e.parent)||!(!e.next&&("root"===e.parent.type||DA(e)&&e.parent||iA(e.parent)||bA(e.parent,t)||(n=e.parent.cssDisplay,gA(n)||"inline-block"===n)))&&!(e.next&&!function(e){return!gA(e)}(e.next.cssDisplay))));var n},isWhitespaceSensitiveNode:function(e){return iA(e)||"interpolation"===e.type||sA(e)},isUnknownNamespace:yA,preferHardlineAsLeadingSpaces:function(e){return hA(e)||e.prev&&cA(e.prev)||pA(e)},preferHardlineAsTrailingSpaces:cA,shouldNotPrintClosingTag:function(e,t){return!e.isSelfClosing&&!e.endSourceSpan&&(aA(e)||oA(e.parent,t))},shouldPreserveContent:oA,unescapeQuoteEntities:function(e){return e.replace(/&apos;/g,"'").replace(/&quot;/g,'"')}};const{htmlTrim:xA,getLeadingAndTrailingHtmlWhitespace:SA,hasHtmlWhitespace:wA,canHaveInterpolation:BA,getNodeCssStyleDisplay:TA,isDanglingSpaceSensitiveNode:kA,isIndentationSensitiveNode:NA,isLeadingSpaceSensitiveNode:OA,isTrailingSpaceSensitiveNode:PA,isWhitespaceSensitiveNode:_A}=FA,IA=[function(e){return e.map(e=>{if("element"===e.type&&e.tagDefinition.ignoreFirstLf&&0!==e.children.length&&"text"===e.children[0].type&&"\n"===e.children[0].value[0]){const[t,...n]=e.children;return e.clone({children:1===t.value.length?n:[t.clone({value:t.value.slice(1)}),...n]})}return e})},function(e){const t=e=>"element"===e.type&&e.prev&&"ieConditionalStartComment"===e.prev.type&&e.prev.sourceSpan.end.offset===e.startSourceSpan.start.offset&&e.firstChild&&"ieConditionalEndComment"===e.firstChild.type&&e.firstChild.sourceSpan.start.offset===e.startSourceSpan.end.offset;return e.map(e=>{if(e.children){const n=e.children.map(t);if(n.some(Boolean)){const t=[];for(let r=0;r<e.children.length;r++){const u=e.children[r];if(!n[r+1])if(n[r]){const e=u.prev,n=u.firstChild,r=u.sourceSpan.constructor,o=new r(e.sourceSpan.start,n.sourceSpan.end),a=new r(o.start,u.sourceSpan.end);t.push(u.clone({condition:e.condition,sourceSpan:a,startSourceSpan:o,children:u.children.slice(1)}))}else t.push(u)}return e.clone({children:t})}}return e})},function(e){return function(e,t,n){return e.map(e=>{if(e.children){const r=e.children.map(t);if(r.some(Boolean)){const t=[];for(let u=0;u<e.children.length;u++){const o=e.children[u];if("text"!==o.type&&!r[u]){t.push(o);continue}const a="text"===o.type?o:o.clone({type:"text",value:n(o)});if(0===t.length||"text"!==t[t.length-1].type){t.push(a);continue}const i=t.pop(),s=i.sourceSpan.constructor;t.push(i.clone({value:i.value+a.value,sourceSpan:new s(i.sourceSpan.start,a.sourceSpan.end)}))}return e.clone({children:t})}}return e})}(e,e=>"cdata"===e.type,e=>"<![CDATA[".concat(e.value,"]]>"))},function(e,t){if("html"===t.parser)return e;const n=/{{([\S\s]+?)}}/g;return e.map(e=>{if(!BA(e))return e;const t=[];for(const r of e.children){if("text"!==r.type){t.push(r);continue}const e=r.sourceSpan.constructor;let u=r.sourceSpan.start,o=null;const a=r.value.split(n);for(let n=0;n<a.length;n++,u=o){const r=a[n];n%2!=0?(o=u.moveBy(r.length+4),t.push({type:"interpolation",sourceSpan:new e(u,o),children:0===r.length?[]:[{type:"text",value:r,sourceSpan:new e(u.moveBy(2),o.moveBy(-2))}]})):(o=u.moveBy(r.length),0!==r.length&&t.push({type:"text",value:r,sourceSpan:new e(u,o)}))}}return e.clone({children:t})})},function(e){return e.map(e=>{if(!e.children)return e;if(0===e.children.length||1===e.children.length&&"text"===e.children[0].type&&0===xA(e.children[0].value).length)return e.clone({children:[],hasDanglingSpaces:0!==e.children.length});const t=_A(e),n=NA(e);return e.clone({isWhitespaceSensitive:t,isIndentationSensitive:n,children:e.children.reduce((e,n)=>{if("text"!==n.type||t)return e.concat(n);const r=[],{leadingWhitespace:u,text:o,trailingWhitespace:a}=SA(n.value);u&&r.push({type:"whitespace"});const i=n.sourceSpan.constructor;return o&&r.push({type:"text",value:o,sourceSpan:new i(n.sourceSpan.start.moveBy(u.length),n.sourceSpan.end.moveBy(-a.length))}),a&&r.push({type:"whitespace"}),e.concat(r)},[]).reduce((e,t,n,r)=>{if("whitespace"===t.type)return e;const u=0!==n&&"whitespace"===r[n-1].type,o=n!==r.length-1&&"whitespace"===r[n+1].type;return e.concat(Object.assign({},t,{hasLeadingSpaces:u,hasTrailingSpaces:o}))},[])})})},function(e,t){return e.map(e=>Object.assign(e,{cssDisplay:TA(e,t)}))},function(e){return e.map(e=>Object.assign(e,{isSelfClosing:!e.children||"element"===e.type&&(e.tagDefinition.isVoid||e.startSourceSpan===e.endSourceSpan)}))},function(e,t){return e.map(e=>"element"!==e.type?e:Object.assign(e,{hasHtmComponentClosingTag:e.endSourceSpan&&/^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset,e.endSourceSpan.end.offset))}))},function(e,t){return e.map(e=>e.children?0===e.children.length?e.clone({isDanglingSpaceSensitive:kA(e)}):e.clone({children:e.children.map(e=>Object.assign({},e,{isLeadingSpaceSensitive:OA(e,t),isTrailingSpaceSensitive:PA(e,t)})).map((e,t,n)=>Object.assign({},e,{isLeadingSpaceSensitive:(0===t||n[t-1].isTrailingSpaceSensitive)&&e.isLeadingSpaceSensitive,isTrailingSpaceSensitive:(t===n.length-1||n[t+1].isLeadingSpaceSensitive)&&e.isTrailingSpaceSensitive}))}):e)},function(e){const t=e=>"element"===e.type&&0===e.attrs.length&&1===e.children.length&&"text"===e.firstChild.type&&!wA(e.children[0].value)&&!e.firstChild.hasLeadingSpaces&&!e.firstChild.hasTrailingSpaces&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces&&e.isTrailingSpaceSensitive&&!e.hasTrailingSpaces&&e.prev&&"text"===e.prev.type&&e.next&&"text"===e.next.type;return e.map(e=>{if(e.children){const n=e.children.map(t);if(n.some(Boolean)){const t=[];for(let r=0;r<e.children.length;r++){const u=e.children[r];if(n[r]){const n=t.pop(),o=e.children[++r],a=e.sourceSpan.constructor,{isTrailingSpaceSensitive:i,hasTrailingSpaces:s}=o;t.push(n.clone({value:n.value+"<".concat(u.rawName,">")+u.firstChild.value+"</".concat(u.rawName,">")+o.value,sourceSpan:new a(n.sourceSpan.start,o.sourceSpan.end),isTrailingSpaceSensitive:i,hasTrailingSpaces:s}))}else t.push(u)}return e.clone({children:t})}}return e})}];var jA=function(e,t){for(const n of IA)e=n(e,t);return e};var MA={hasPragma:function(e){return/^\s*<!--\s*@(format|prettier)\s*-->/.test(e)},insertPragma:function(e){return"\x3c!-- @format --\x3e\n\n"+e.replace(/^\s*\n/,"")}};const{builders:{concat:LA,group:RA}}=dn;var qA={isVueEventBindingExpression:function(e){const t=e.trim();return/^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t)||/^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t)},printVueFor:function(e,t){const{left:n,operator:r,right:u}=function(e){const t=/([^]*?)\s+(in|of)\s+([^]*)/,n=/,([^,\]}]*)(?:,([^,\]}]*))?$/,r=/^\(|\)$/g,u=e.match(t);if(!u)return;const o={};o.for=u[3].trim();const a=u[1].trim().replace(r,""),i=a.match(n);i?(o.alias=a.replace(n,""),o.iterator1=i[1].trim(),i[2]&&(o.iterator2=i[2].trim())):o.alias=a;return{left:"".concat([o.alias,o.iterator1,o.iterator2].filter(Boolean).join(",")),operator:u[2],right:o.for}}(e);return LA([RA(t("function _(".concat(n,") {}"),{parser:"babel",__isVueForBindingLeft:!0}))," ",r," ",t(u,{parser:"__js_expression"},{stripTrailingHardline:!0})])},printVueSlotScope:function(e,t){return t("function _(".concat(e,") {}"),{parser:"babel",__isVueSlotScope:!0},{stripTrailingHardline:!0})}},VA=$e((function(e){!function(t,n){e.exports?e.exports=n():t.parseSrcset=n()}(We,(function(){return function(e,t){var n=t&&t.logger||console;function r(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function u(t){var n,r=t.exec(e.substring(D));if(r)return n=r[0],D+=n.length,n}for(var o,a,i,s,l,c=e.length,p=/^[ \t\n\r\u000c]+/,d=/^[, \t\n\r\u000c]+/,f=/^[^ \t\n\r\u000c]+/,h=/[,]+$/,m=/^\d+$/,g=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,D=0,y=[];;){if(u(d),D>=c)return y;o=u(f),a=[],","===o.slice(-1)?(o=o.replace(h,""),C()):E()}function E(){for(u(p),i="",s="in descriptor";;){if(l=e.charAt(D),"in descriptor"===s)if(r(l))i&&(a.push(i),i="",s="after descriptor");else{if(","===l)return D+=1,i&&a.push(i),void C();if("("===l)i+=l,s="in parens";else{if(""===l)return i&&a.push(i),void C();i+=l}}else if("in parens"===s)if(")"===l)i+=l,s="in descriptor";else{if(""===l)return a.push(i),void C();i+=l}else if("after descriptor"===s)if(r(l));else{if(""===l)return void C();s="in descriptor",D-=1}D+=1}}function C(){var t,r,u,i,s,l,c,p,d,f=!1,h={};for(i=0;i<a.length;i++)l=(s=a[i])[s.length-1],c=s.substring(0,s.length-1),p=parseInt(c,10),d=parseFloat(c),m.test(c)&&"w"===l?((t||r)&&(f=!0),0===p?f=!0:t=p):g.test(c)&&"x"===l?((t||r||u)&&(f=!0),d<0?f=!0:r=d):m.test(c)&&"h"===l?((u||r)&&(f=!0),0===p?f=!0:u=p):f=!0;f?n&&n.error&&n.error("Invalid srcset descriptor found in '"+e+"' at '"+s+"'."):(h.url=o,t&&(h.w=t),r&&(h.d=r),u&&(h.h=u),y.push(h))}}}))}));const{builders:{concat:WA,ifBreak:$A,join:UA,line:zA}}=dn;var JA={printImgSrcset:function(e){const t=VA(e,{logger:{error(e){throw new Error(e)}}}),n=t.some(({w:e})=>e),r=t.some(({h:e})=>e);if(n+r+t.some(({d:e})=>e)>1)throw new Error("Mixed descriptor in srcset is not supported");const u=n?"w":r?"h":"d",o=n?"w":r?"h":"x",a=e=>Math.max(...e),i=t.map(e=>e.url),s=a(i.map(e=>e.length)),l=t.map(e=>e[u]).map(e=>e?e.toString():""),c=l.map(e=>{const t=e.indexOf(".");return-1===t?e.length:t}),p=a(c);return UA(WA([",",zA]),i.map((e,t)=>{const n=[e],r=l[t];if(r){const u=s-e.length+1,a=p-c[t],i=" ".repeat(u+a);n.push($A(i," "),r+o)}return WA(n)}))},printClassNames:function(e){return e.trim().split(/\s+/).join(" ")}};const{builders:GA,utils:{mapDoc:HA,normalizeParts:XA}}=dn,{replaceEndOfLineWith:YA}=Lt,{print:KA}=Em,{breakParent:QA,dedentToRoot:ZA,fill:ev,group:tv,hardline:nv,ifBreak:rv,indent:uv,join:ov,line:av,literalline:iv,softline:sv}=GA,{htmlTrimPreserveIndentation:lv,splitByHtmlWhitespace:cv,countChars:pv,countParents:dv,dedentString:fv,forceBreakChildren:hv,forceBreakContent:mv,forceNextEmptyLine:gv,getLastDescendant:Dv,getPrettierIgnoreAttributeCommentData:yv,hasPrettierIgnore:Ev,inferScriptParser:Cv,isVueCustomBlock:bv,isVueNonHtmlBlock:Av,isScriptLikeTag:vv,isTextLikeNode:Fv,preferHardlineAsLeadingSpaces:xv,shouldNotPrintClosingTag:Sv,shouldPreserveContent:wv,unescapeQuoteEntities:Bv,isPreLikeNode:Tv}=FA,{insertPragma:kv}=MA,{printVueFor:Nv,printVueSlotScope:Ov,isVueEventBindingExpression:Pv}=qA,{printImgSrcset:_v,printClassNames:Iv}=JA;function jv(e){const t=XA(e);return 0===t.length?"":1===t.length?t[0]:GA.concat(t)}function Mv(e,t,n){const r=e.getValue();if(hv(r))return jv([QA,jv(e.map(e=>{const t=e.getValue(),n=t.prev?a(t.prev,t):"";return jv([n?jv([n,gv(t.prev)?nv:""]):"",o(e)])},"children"))]);const u=r.children.map(()=>Symbol(""));return jv(e.map((e,t)=>{const n=e.getValue();if(Fv(n)){if(n.prev&&Fv(n.prev)){const t=a(n.prev,n);if(t)return gv(n.prev)?jv([nv,nv,o(e)]):jv([t,o(e)])}return o(e)}const r=[],i=[],s=[],l=[],c=n.prev?a(n.prev,n):"",p=n.next?a(n,n.next):"";return c&&(gv(n.prev)?r.push(nv,nv):c===nv?r.push(nv):Fv(n.prev)?i.push(c):i.push(rv("",sv,{groupId:u[t-1]}))),p&&(gv(n)?Fv(n.next)&&l.push(nv,nv):p===nv?Fv(n.next)&&l.push(nv):s.push(p)),jv([].concat(r,tv(jv([jv(i),tv(jv([o(e),jv(s)]),{id:u[t]})])),l))},"children"));function o(e){const r=e.getValue();return Ev(r)?jv([].concat(Kv(r,t),YA(t.originalText.slice(t.locStart(r)+(r.prev&&Jv(r.prev)?eF(r).length:0),t.locEnd(r)-(r.next&&Hv(r.next)?rF(r,t).length:0)),iv),Zv(r,t))):n(e)}function a(e,t){return Fv(e)&&Fv(t)?e.isTrailingSpaceSensitive?e.hasTrailingSpaces?xv(t)?nv:av:"":xv(t)?nv:sv:Jv(e)&&(Ev(t)||t.firstChild||t.isSelfClosing||"element"===t.type&&0!==t.attrs.length)||"element"===e.type&&e.isSelfClosing&&Hv(t)?"":!t.isLeadingSpaceSensitive||xv(t)||Hv(t)&&e.lastChild&&Yv(e.lastChild)&&e.lastChild.lastChild&&Yv(e.lastChild.lastChild)?nv:t.hasLeadingSpaces?av:sv}}function Lv(e,t){let n=e.startSourceSpan.end.offset;e.firstChild&&Gv(e.firstChild)&&(n-=tF(e).length);let r=e.endSourceSpan.start.offset;return e.lastChild&&Yv(e.lastChild)?r+=nF(e,t).length:Xv(e)&&(r-=rF(e.lastChild,t).length),t.originalText.slice(n,r)}function Rv(e,t,n){const r=e.getValue();if(!r.attrs||0===r.attrs.length)return r.isSelfClosing?" ":"";const u=r.prev&&"comment"===r.prev.type&&yv(r.prev.value),o="boolean"==typeof u?()=>u:Array.isArray(u)?e=>u.includes(e.rawName):()=>!1,a=e.map(e=>{const r=e.getValue();return o(r)?jv(YA(t.originalText.slice(t.locStart(r),t.locEnd(r)),iv)):n(e)},"attrs"),i="element"===r.type&&"script"===r.fullName&&1===r.attrs.length&&"src"===r.attrs[0].fullName&&0===r.children.length,s=[uv(jv([i?" ":av,ov(av,a)]))];return r.firstChild&&Gv(r.firstChild)||r.isSelfClosing&&Xv(r.parent)||i?s.push(r.isSelfClosing?" ":""):s.push(r.isSelfClosing?av:sv),jv(s)}function qv(e,t,n){const r=e.getValue();return jv([Vv(r,t),Rv(e,t,n),r.isSelfClosing?"":Wv(r)])}function Vv(e,t){return e.prev&&Jv(e.prev)?"":jv([Kv(e,t),eF(e)])}function Wv(e){return e.firstChild&&Gv(e.firstChild)?"":tF(e)}function $v(e,t){return jv([e.isSelfClosing?"":Uv(e,t),zv(e,t)])}function Uv(e,t){return e.lastChild&&Yv(e.lastChild)?"":jv([Qv(e,t),nF(e,t)])}function zv(e,t){return(e.next?Hv(e.next):Xv(e.parent))?"":jv([rF(e,t),Zv(e,t)])}function Jv(e){return e.next&&!Fv(e.next)&&Fv(e)&&e.isTrailingSpaceSensitive&&!e.hasTrailingSpaces}function Gv(e){return!e.prev&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces}function Hv(e){return e.prev&&"docType"!==e.prev.type&&!Fv(e.prev)&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces}function Xv(e){return e.lastChild&&e.lastChild.isTrailingSpaceSensitive&&!e.lastChild.hasTrailingSpaces&&!Fv(Dv(e.lastChild))&&!Tv(e)}function Yv(e){return!e.next&&!e.hasTrailingSpaces&&e.isTrailingSpaceSensitive&&Fv(Dv(e))}function Kv(e,t){return Gv(e)?tF(e.parent):Hv(e)?rF(e.prev,t):""}function Qv(e,t){return Xv(e)?rF(e.lastChild,t):""}function Zv(e,t){return Yv(e)?nF(e.parent,t):Jv(e)?eF(e.next):""}function eF(e){switch(e.type){case"ieConditionalComment":case"ieConditionalStartComment":return"\x3c!--[if ".concat(e.condition);case"ieConditionalEndComment":return"\x3c!--<!";case"interpolation":return"{{";case"docType":return"<!DOCTYPE";case"element":if(e.condition)return"\x3c!--[if ".concat(e.condition,"]>\x3c!--\x3e<").concat(e.rawName);default:return"<".concat(e.rawName)}}function tF(e){switch(e.isSelfClosing,e.type){case"ieConditionalComment":return"]>";case"element":if(e.condition)return">\x3c!--<![endif]--\x3e";default:return">"}}function nF(e,t){if(e.isSelfClosing,Sv(e,t))return"";switch(e.type){case"ieConditionalComment":return"<!";case"element":if(e.hasHtmComponentClosingTag)return"<//";default:return"</".concat(e.rawName)}}function rF(e,t){if(Sv(e,t))return"";switch(e.type){case"ieConditionalComment":case"ieConditionalEndComment":return"[endif]--\x3e";case"ieConditionalStartComment":return"]>\x3c!--\x3e";case"interpolation":return"}}";case"element":if(e.isSelfClosing)return"/>";default:return">"}}function uF(e,t=e.value){return e.parent.isWhitespaceSensitive?e.parent.isIndentationSensitive?YA(t,iv):YA(fv(lv(t)),nv):ov(av,cv(t)).parts}var oF={preprocess:jA,print:function(e,t,n){const r=e.getValue();switch(r.type){case"front-matter":return jv(YA(r.raw,iv));case"root":return t.__onHtmlRoot&&t.__onHtmlRoot(r),GA.concat([tv(Mv(e,t,n)),nv]);case"element":case"ieConditionalComment":{if(wv(r,t))return jv([].concat(Kv(r,t),tv(qv(e,t,n)),YA(Lv(r,t),iv),$v(r,t),Zv(r,t)));const o=1===r.children.length&&"interpolation"===r.firstChild.type&&r.firstChild.isLeadingSpaceSensitive&&!r.firstChild.hasLeadingSpaces&&r.lastChild.isTrailingSpaceSensitive&&!r.lastChild.hasTrailingSpaces,a=Symbol("element-attr-group-id");return jv([tv(jv([tv(qv(e,t,n),{id:a}),0===r.children.length?r.hasDanglingSpaces&&r.isDanglingSpaceSensitive?av:"":jv([mv(r)?QA:"",(u=jv([o?rv(sv,"",{groupId:a}):r.firstChild.hasLeadingSpaces&&r.firstChild.isLeadingSpaceSensitive?av:"text"===r.firstChild.type&&r.isWhitespaceSensitive&&r.isIndentationSensitive?ZA(sv):sv,Mv(e,t,n)]),o?rv(uv(u),u,{groupId:a}):!vv(r)&&!bv(r,t)||"root"!==r.parent.type||"vue"!==t.parser||t.vueIndentScriptAndStyle?uv(u):u),(r.next?Hv(r.next):Xv(r.parent))?r.lastChild.hasTrailingSpaces&&r.lastChild.isTrailingSpaceSensitive?" ":"":o?rv(sv,"",{groupId:a}):r.lastChild.hasTrailingSpaces&&r.lastChild.isTrailingSpaceSensitive?av:("comment"===r.lastChild.type||"text"===r.lastChild.type&&r.isWhitespaceSensitive&&r.isIndentationSensitive)&&new RegExp("\\n[\\t ]{".concat(t.tabWidth*dv(e,e=>e.parent&&"root"!==e.parent.type),"}$")).test(r.lastChild.value)?"":sv])])),$v(r,t)])}case"ieConditionalStartComment":case"ieConditionalEndComment":return jv([Vv(r),zv(r)]);case"interpolation":return jv([Vv(r,t),jv(e.map(n,"children")),zv(r,t)]);case"text":if("interpolation"===r.parent.type){const e=/\n[^\S\n]*?$/,t=e.test(r.value),n=t?r.value.replace(e,""):r.value;return jv([jv(YA(n,iv)),t?nv:""])}return ev(XA([].concat(Kv(r,t),uF(r),Zv(r,t))));case"docType":return jv([tv(jv([Vv(r,t)," ",r.value.replace(/^html\b/i,"html").replace(/\s+/g," ")])),zv(r,t)]);case"comment":return jv([Kv(r,t),jv(YA(t.originalText.slice(t.locStart(r),t.locEnd(r)),iv)),Zv(r,t)]);case"attribute":{if(null===r.value)return r.rawName;const e=Bv(r.value),t=pv(e,"'")<pv(e,'"')?"'":'"';return jv([r.rawName,jv(["=",t,jv(YA('"'===t?e.replace(/"/g,"&quot;"):e.replace(/'/g,"&apos;"),iv)),t])])}default:throw new Error("Unexpected node type ".concat(r.type))}var u},insertPragma:kv,massageAstNode:function(e,t){return delete t.sourceSpan,delete t.startSourceSpan,delete t.endSourceSpan,delete t.nameSpan,delete t.valueSpan,"text"===e.type||"comment"===e.type||gC(e)||"yaml"===e.type||"toml"===e.type?null:("attribute"===e.type&&delete t.value,void("docType"===e.type&&delete t.value))},embed:function(e,t,n,r){const u=e.getValue();switch(u.type){case"element":if(vv(u)||"interpolation"===u.type)return;if(!u.isSelfClosing&&Av(u,r)){const o=Cv(u,r);if(!o)return;const a=Lv(u,r);let i=/^\s*$/.test(a),s="";return i||(s=n(lv(a),{parser:o},{stripTrailingHardline:!0}),i=""===s),jv([Kv(u,r),tv(qv(e,r,t)),i?"":nv,s,i?"":nv,$v(u,r),Zv(u,r)])}break;case"text":if(vv(u.parent)){const e=Cv(u.parent);if(e){const t="markdown"===e?fv(u.value.replace(/^[^\S\n]*?\n/,"")):u.value,o={parser:e};if("html"===r.parser&&"babel"===e){let e="script";const{attrMap:t}=u.parent;t&&("module"===t.type||"text/babel"===t.type&&"module"===t["data-type"])&&(e="module"),o.__babelSourceType=e}return GA.concat([jv([QA,Kv(u,r),n(t,o,{stripTrailingHardline:!0}),Zv(u,r)])])}}else if("interpolation"===u.parent.type)return jv([uv(jv([av,n(u.value,Object.assign({__isInHtmlInterpolation:!0},"angular"===r.parser?{parser:"__ng_interpolation",trailingComma:"none"}:"vue"===r.parser?{parser:"__vue_expression"}:{parser:"__js_expression"}),{stripTrailingHardline:!0})])),u.parent.next&&Hv(u.parent.next)?" ":av]);break;case"attribute":{if(!u.value)break;if(/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r.originalText.slice(u.valueSpan.start.offset,u.valueSpan.end.offset)))return jv([u.rawName,"=",u.value]);if("lwc"===r.parser){if(/^{[\S\s]*}$/.test(r.originalText.slice(u.valueSpan.start.offset,u.valueSpan.end.offset)))return jv([u.rawName,"=",u.value])}const e=function(e,t,n){const r=t=>new RegExp(t.join("|")).test(e.fullName),u=()=>Bv(e.value);let o=!1;const a=(e,t)=>{const n="NGRoot"===e.type?"NGMicrosyntax"===e.node.type&&1===e.node.body.length&&"NGMicrosyntaxExpression"===e.node.body[0].type?e.node.body[0].expression:e.node:"JsExpressionRoot"===e.type?e.node:e;!n||"ObjectExpression"!==n.type&&"ArrayExpression"!==n.type&&("__vue_expression"!==t.parser||"TemplateLiteral"!==n.type&&"StringLiteral"!==n.type)||(o=!0)},i=e=>tv(e),s=(e,t=!0)=>tv(jv([uv(jv([sv,e])),t?sv:""])),l=e=>o?i(e):s(e),c=(e,n)=>t(e,Object.assign({__onHtmlBindingRoot:a},n),{stripTrailingHardline:!0});if("srcset"===e.fullName&&("img"===e.parent.fullName||"source"===e.parent.fullName))return s(_v(u()));if("class"===e.fullName&&!n.parentParser){const e=u();if(!e.includes("{{"))return Iv(e)}if("style"===e.fullName&&!n.parentParser){const e=u();if(!e.includes("{{"))return s(c(e,{parser:"css",__isHTMLStyleAttribute:!0}))}if("vue"===n.parser){if("v-for"===e.fullName)return Nv(u(),c);if("slot-scope"===e.fullName)return Ov(u(),c);const t=["^:","^v-bind:"],n=["^v-","^#"];if(r(["^@","^v-on:"])){const e=u();return l(c(e,{parser:Pv(e)?"__js_expression":"__vue_event_binding"}))}if(r(t))return l(c(u(),{parser:"__vue_expression"}));if(r(n))return l(c(u(),{parser:"__js_expression"}))}if("angular"===n.parser){const t=(e,t)=>c(e,Object.assign({},t,{trailingComma:"none"})),n=["^\\*"],o=["^\\[.+\\]$","^bind(on)?-","^ng-(if|show|hide|class|style)$"],a=["^i18n(-.+)?$"];if(r(["^\\(.+\\)$","^on-"]))return l(t(u(),{parser:"__ng_action"}));if(r(o))return l(t(u(),{parser:"__ng_binding"}));if(r(a)){const t=u().trim();return s(ev(uF(e,t)),!t.includes("@@"))}if(r(n))return l(t(u(),{parser:"__ng_directive"}));const i=/{{([\S\s]+?)}}/g,p=u();if(i.test(p)){const e=[];return p.split(i).forEach((n,r)=>{if(r%2==0)e.push(jv(YA(n,iv)));else try{e.push(tv(jv(["{{",uv(jv([av,t(n,{parser:"__ng_interpolation",__isInHtmlInterpolation:!0})])),av,"}}"])))}catch(t){e.push("{{",jv(YA(n,iv)),"}}")}}),tv(jv(e))}}return null}(u,(e,t)=>n(e,Object.assign({__isInHtmlAttribute:!0},t),{stripTrailingHardline:!0}),r);if(e)return jv([u.rawName,'="',tv(HA(e,e=>"string"==typeof e?e.replace(/"/g,"&quot;"):e)),'"']);break}case"front-matter":return KA(u,n)}}};var aF={htmlWhitespaceSensitivity:{since:"1.15.0",category:"HTML",type:"choice",default:"css",description:"How to handle whitespaces in HTML.",choices:[{value:"css",description:"Respect the default value of CSS display property."},{value:"strict",description:"Whitespaces are considered sensitive."},{value:"ignore",description:"Whitespaces are considered insensitive."}]},vueIndentScriptAndStyle:{since:"1.19.0",category:"HTML",type:"boolean",default:!1,description:"Indent script and style tags in Vue files."}},iF=["xhtml"],sF=[".html",".htm",".html.hl",".inc",".st",".xht",".xhtml"],lF={name:"HTML",type:"markup",tmScope:"text.html.basic",aceMode:"html",codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",color:"#e34c26",aliases:iF,extensions:sF,languageId:146},cF=Object.freeze({__proto__:null,name:"HTML",type:"markup",tmScope:"text.html.basic",aceMode:"html",codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",color:"#e34c26",aliases:iF,extensions:sF,languageId:146,default:lF}),pF=[".vue"],dF={name:"Vue",type:"markup",color:"#2c3e50",extensions:pF,tmScope:"text.html.vue",aceMode:"html",languageId:391},fF=Object.freeze({__proto__:null,name:"Vue",type:"markup",color:"#2c3e50",extensions:pF,tmScope:"text.html.vue",aceMode:"html",languageId:391,default:dF}),hF=Ue(cF),mF=Ue(fF);var gF={languages:[As(hF,()=>({name:"Angular",since:"1.15.0",parsers:["angular"],vscodeLanguageIds:["html"],extensions:[".component.html"],filenames:[]})),As(hF,e=>({since:"1.15.0",parsers:["html"],vscodeLanguageIds:["html"],extensions:e.extensions.concat([".mjml"])})),As(hF,()=>({name:"Lightning Web Components",since:"1.17.0",parsers:["lwc"],vscodeLanguageIds:["html"],extensions:[],filenames:[]})),As(mF,()=>({since:"1.10.0",parsers:["vue"],vscodeLanguageIds:["vue"]}))],printers:{html:oF},options:aF,parsers:{get html(){return{}.parsers.html},get vue(){return{}.parsers.vue},get angular(){return{}.parsers.angular},get lwc(){return{}.parsers.lwc}}};var DF={isPragma:function(e){return/^\s*@(prettier|format)\s*$/.test(e)},hasPragma:function(e){return/^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/.test(e)},insertPragma:function(e){return"# @format\n\n".concat(e)}};const{getLast:yF}=Lt;function EF(e,t){return e&&"string"==typeof e.type&&(!t||t.includes(e.type))}function CF(e){return"prettier-ignore"===e.value.trim()}function bF(e){return e&&e.leadingComments&&0!==e.leadingComments.length}function AF(e){return e&&e.middleComments&&0!==e.middleComments.length}function vF(e){return e&&e.indicatorComment}function FF(e){return e&&e.trailingComment}function xF(e){return e&&e.endComments&&0!==e.endComments.length}function SF(e){const t=[];let n;for(const r of e.split(/( +)/g))" "!==r?" "===n?t.push(r):t.push((t.pop()||"")+r):void 0===n&&t.unshift(""),n=r;return" "===n&&t.push((t.pop()||"")+" "),""===t[0]&&(t.shift(),t.unshift(" "+(t.shift()||""))),t}var wF={getLast:yF,getAncestorCount:function(e,t){let n=0;const r=e.stack.length-1;for(let u=0;u<r;u++){const r=e.stack[u];EF(r)&&t(r)&&n++}return n},isNode:EF,isEmptyNode:function(e){return!(e.children&&0!==e.children.length||function(e){return bF(e)||AF(e)||vF(e)||FF(e)||xF(e)}(e))},mapNode:function e(t,n,r){return n("children"in t?Object.assign({},t,{children:t.children.map(r=>e(r,n,t))}):t,r)},defineShortcut:function(e,t,n){Object.defineProperty(e,t,{get:n,enumerable:!1})},isNextLineEmpty:function(e,t){let n=0;const r=t.length;for(let u=e.position.end.offset-1;u<r;u++){const e=t[u];if("\n"===e&&n++,1===n&&/\S/.test(e))return!1;if(2===n)return!0}return!1},isLastDescendantNode:function(e){switch(e.getValue().type){case"tag":case"anchor":case"comment":return!1}const t=e.stack.length;for(let n=1;n<t;n++){const t=e.stack[n],r=e.stack[n-1];if(Array.isArray(r)&&"number"==typeof t&&t!==r.length-1)return!1}return!0},getBlockValueLineContents:function(e,{parentIndent:t,isLastDescendant:n,options:r}){const u=e.position.start.line===e.position.end.line?"":r.originalText.slice(e.position.start.offset,e.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1],o=null===e.indent?(a=u.match(/^( *)\S/m))?a[1].length:1/0:e.indent-1+t;var a;const i=u.split("\n").map(e=>e.slice(o));return"preserve"===r.proseWrap||"blockLiteral"===e.type?s(i.map(e=>0===e.length?[]:[e])):s(i.map(e=>0===e.length?[]:SF(e)).reduce((e,t,n)=>0===n||0===i[n-1].length||0===t.length||/^\s/.test(t[0])||/^\s|\s$/.test(yF(e))?e.concat([t]):e.concat([e.pop().concat(t)]),[]).map(e=>e.reduce((e,t)=>0!==e.length&&/\s$/.test(yF(e))?e.concat(e.pop()+" "+t):e.concat(t),[])).map(e=>"never"===r.proseWrap?[e.join(" ")]:e));function s(t){if("keep"===e.chomping)return 0===yF(t).length?t.slice(0,-1):t;let r=0;for(let e=t.length-1;e>=0&&0===t[e].length;e--)r++;return 0===r?t:r>=2&&!n?t.slice(0,-(r-1)):t.slice(0,-r)}},getFlowScalarLineContents:function(e,t,n){const r=t.split("\n").map((e,t,n)=>0===t&&t===n.length-1?e:0!==t&&t!==n.length-1?e.trim():0===t?e.trimEnd():e.trimStart());return"preserve"===n.proseWrap?r.map(e=>0===e.length?[]:[e]):r.map(e=>0===e.length?[]:SF(e)).reduce((t,n,u)=>0===u||0===r[u-1].length||0===n.length||"quoteDouble"===e&&yF(yF(t)).endsWith("\\")?t.concat([n]):t.concat([t.pop().concat(n)]),[]).map(e=>"never"===n.proseWrap?[e.join(" ")]:e)},getLastDescendantNode:function e(t){return"children"in t&&0!==t.children.length?e(yF(t.children)):t},hasPrettierIgnore:function(e){const t=e.getValue();if("documentBody"===t.type){const t=e.getParentNode();return xF(t.head)&&CF(yF(t.head.endComments))}return bF(t)&&CF(yF(t.leadingComments))},hasLeadingComments:bF,hasMiddleComments:AF,hasIndicatorComment:vF,hasTrailingComment:FF,hasEndComments:xF};const BF=dn.builders,{conditionalGroup:TF,breakParent:kF,concat:NF,dedent:OF,dedentToRoot:PF,fill:_F,group:IF,hardline:jF,ifBreak:MF,join:LF,line:RF,lineSuffix:qF,literalline:VF,markAsRoot:WF,softline:$F}=BF,{replaceEndOfLineWith:UF,isPreviousLineEmpty:zF}=Lt,{insertPragma:JF,isPragma:GF}=DF,{getAncestorCount:HF,getBlockValueLineContents:XF,getFlowScalarLineContents:YF,getLast:KF,getLastDescendantNode:QF,hasLeadingComments:ZF,hasMiddleComments:ex,hasIndicatorComment:tx,hasTrailingComment:nx,hasEndComments:rx,hasPrettierIgnore:ux,isLastDescendantNode:ox,isNextLineEmpty:ax,isNode:ix,isEmptyNode:sx,defineShortcut:lx,mapNode:cx}=wF;function px(e){switch(e.type){case"document":lx(e,"head",()=>e.children[0]),lx(e,"body",()=>e.children[1]);break;case"documentBody":case"sequenceItem":case"flowSequenceItem":case"mappingKey":case"mappingValue":lx(e,"content",()=>e.children[0]);break;case"mappingItem":case"flowMappingItem":lx(e,"key",()=>e.children[0]),lx(e,"value",()=>e.children[1])}return e}function dx(e,t,n,r,u){switch(e.type){case"root":return NF([LF(jF,n.map((t,r)=>{const o=e.children[r],a=e.children[r+1];return NF([u(t),gx(o,a)?NF([jF,"...",nx(o)?NF([" ",n.call(u,"trailingComment")]):""]):!a||nx(a.head)?"":NF([jF,"---"])])},"children")),0===e.children.length||(a=QF(e),ix(a,["blockLiteral","blockFolded"])&&"keep"===a.chomping)?"":jF]);case"document":{const o=t.children[n.getName()+1];return LF(jF,["head"===Dx(e,o,t,r)?LF(jF,[0===e.head.children.length&&0===e.head.endComments.length?"":n.call(u,"head"),NF(["---",nx(e.head)?NF([" ",n.call(u,"head","trailingComment")]):""])].filter(Boolean)):"",mx(e)?n.call(u,"body"):""].filter(Boolean))}case"documentHead":return LF(jF,[].concat(n.map(u,"children"),n.map(u,"endComments")));case"documentBody":{const t=LF(jF,n.map(u,"children")).parts,r=LF(jF,n.map(u,"endComments")).parts,o=0===t.length||0===r.length?"":(e=>ix(e,["blockFolded","blockLiteral"])?"keep"===e.chomping?"":NF([jF,jF]):jF)(QF(e));return NF([].concat(t,o,r))}case"directive":return NF(["%",LF(" ",[e.name].concat(e.parameters))]);case"comment":return NF(["#",e.value]);case"alias":return NF(["*",e.value]);case"tag":return r.originalText.slice(e.position.start.offset,e.position.end.offset);case"anchor":return NF(["&",e.value]);case"plain":return Ax(e.type,r.originalText.slice(e.position.start.offset,e.position.end.offset),r);case"quoteDouble":case"quoteSingle":{const t="'",n='"',u=r.originalText.slice(e.position.start.offset+1,e.position.end.offset-1);if("quoteSingle"===e.type&&u.includes("\\")||"quoteDouble"===e.type&&/\\[^"]/.test(u)){const o="quoteDouble"===e.type?n:t;return NF([o,Ax(e.type,u,r),o])}if(u.includes(n))return NF([t,Ax(e.type,"quoteDouble"===e.type?u.replace(/\\"/g,n).replace(/'/g,t.repeat(2)):u,r),t]);if(u.includes(t))return NF([n,Ax(e.type,"quoteSingle"===e.type?u.replace(/''/g,t):u,r),n]);const o=r.singleQuote?t:n;return NF([o,Ax(e.type,u,r),o])}case"blockFolded":case"blockLiteral":{const t=HF(n,e=>ix(e,["sequence","mapping"])),o=ox(n);return NF(["blockFolded"===e.type?">":"|",null===e.indent?"":e.indent.toString(),"clip"===e.chomping?"":"keep"===e.chomping?"+":"-",tx(e)?NF([" ",n.call(u,"indicatorComment")]):"",(null===e.indent?OF:PF)(fx(null===e.indent?r.tabWidth:e.indent-1+t,NF(XF(e,{parentIndent:t,isLastDescendant:o,options:r}).reduce((t,n,r,u)=>t.concat(0===r?jF:"",_F(LF(RF,n).parts),r!==u.length-1?0===n.length?jF:WF(VF):"keep"===e.chomping&&o?0===n.length?PF(jF):PF(VF):""),[]))))])}case"sequence":return LF(jF,n.map(u,"children"));case"sequenceItem":return NF(["- ",fx(2,e.content?n.call(u,"content"):"")]);case"mappingKey":case"mappingValue":return e.content?n.call(u,"content"):"";case"mapping":return LF(jF,n.map(u,"children"));case"mappingItem":case"flowMappingItem":{const o=sx(e.key),a=sx(e.value);if(o&&a)return NF([": "]);const s=n.call(u,"key"),l=n.call(u,"value");if(a)return"flowMappingItem"===e.type&&"flowMapping"===t.type?s:"mappingItem"!==e.type||!yx(e.key.content,r)||nx(e.key.content)||t.tag&&"tag:yaml.org,2002:set"===t.tag.value?NF(["? ",fx(2,s)]):NF([s,Ex(e)?" ":"",":"]);if(o)return NF([": ",fx(2,l)]);const c=Symbol("mappingKey");return ZF(e.value)||!hx(e.key.content)?NF(["? ",fx(2,s),jF,LF("",n.map(u,"value","leadingComments").map(e=>NF([e,jF]))),": ",fx(2,l)]):!function(e){if(!e)return!0;switch(e.type){case"plain":case"quoteDouble":case"quoteSingle":return e.position.start.line===e.position.end.line;case"alias":return!0;default:return!1}}(e.key.content)||ZF(e.key.content)||ex(e.key.content)||nx(e.key.content)||rx(e.key)||ZF(e.value.content)||ex(e.value.content)||rx(e.value)||!yx(e.value.content,r)?TF([NF([IF(NF([MF("? "),IF(fx(2,s),{id:c})])),MF(NF([jF,": ",fx(2,l)]),i(NF([Ex(e)?" ":"",":",ZF(e.value.content)||rx(e.value)&&e.value.content&&!ix(e.value.content,["mapping","sequence"])||"mapping"===t.type&&nx(e.key.content)&&hx(e.value.content)||ix(e.value.content,["mapping","sequence"])&&null===e.value.content.tag&&null===e.value.content.anchor?jF:e.value.content?RF:"",l])),{groupId:c})])]):NF([s,Ex(e)?" ":"",": ",l])}case"flowMapping":case"flowSequence":{const t="flowMapping"===e.type?"{":"[",a="flowMapping"===e.type?"}":"]",s="flowMapping"===e.type&&0!==e.children.length&&r.bracketSpacing?RF:$F,l=0!==e.children.length&&("flowMappingItem"===(o=KF(e.children)).type&&sx(o.key)&&sx(o.value));return NF([t,i(NF([s,NF(n.map((t,n)=>NF([u(t),n===e.children.length-1?"":NF([",",RF,e.children[n].position.start.line!==e.children[n+1].position.start.line?bx(t,r.originalText):""])]),"children")),MF(",","")])),l?"":s,a])}case"flowSequenceItem":return n.call(u,"content");default:throw new Error("Unexpected node type ".concat(e.type))}var o,a;function i(e){return BF.align(" ".repeat(r.tabWidth),e)}}function fx(e,t){return"number"==typeof e&&e>0?BF.align(" ".repeat(e),t):BF.align(e,t)}function hx(e){if(!e)return!0;switch(e.type){case"plain":case"quoteDouble":case"quoteSingle":case"alias":case"flowMapping":case"flowSequence":return!0;default:return!1}}function mx(e){return 0!==e.body.children.length||rx(e.body)}function gx(e,t){return nx(e)||t&&(0!==t.head.children.length||rx(t.head))}function Dx(e,t,n,r){return n.children[0]===e&&/---(\s|$)/.test(r.originalText.slice(r.locStart(e),r.locStart(e)+4))||0!==e.head.children.length||rx(e.head)||nx(e.head)?"head":!gx(e,t)&&(!!t&&"root")}function yx(e,t){if(!e)return!0;switch(e.type){case"plain":case"quoteSingle":case"quoteDouble":break;case"alias":return!0;default:return!1}if("preserve"===t.proseWrap)return e.position.start.line===e.position.end.line;if(/\\$/m.test(t.originalText.slice(e.position.start.offset,e.position.end.offset)))return!1;switch(t.proseWrap){case"never":return!e.value.includes("\n");case"always":return!/[\n ]/.test(e.value);default:return!1}}function Ex(e){return e.key.content&&"alias"===e.key.content.type}function Cx(e){return rx(e)&&!ix(e,["documentHead","documentBody"])}function bx(e,t){const n=e.getValue(),r=e.stack[0];return r.isNextEmptyLinePrintedChecklist=r.isNextEmptyLinePrintedChecklist||[],r.isNextEmptyLinePrintedChecklist[n.position.end.line]||!ax(n,t)||(r.isNextEmptyLinePrintedChecklist[n.position.end.line]=!0,Cx(e.getParentNode()))?"":$F}function Ax(e,t,n){const r=YF(e,t,n);return LF(jF,r.map(e=>_F(LF(RF,e).parts)))}var vx={preprocess:function(e){return cx(e,px)},print:function(e,t,n){const r=e.getValue(),u=e.getParentNode(),o=r.tag?e.call(n,"tag"):"",a=r.anchor?e.call(n,"anchor"):"",i=ix(r,["mapping","sequence","comment","directive","mappingItem","sequenceItem"])&&!ox(e)?bx(e,t.originalText):"";return NF(["mappingValue"!==r.type&&ZF(r)?NF([LF(jF,e.map(n,"leadingComments")),jF]):"",o,o&&a?" ":"",a,o||a?ix(r,["sequence","mapping"])&&!ex(r)?jF:" ":"",ex(r)?NF([1===r.middleComments.length?"":jF,LF(jF,e.map(n,"middleComments")),jF]):"",ux(e)?NF(UF(t.originalText.slice(r.position.start.offset,r.position.end.offset).trimEnd(),VF)):IF(dx(r,u,e,t,n)),nx(r)&&!ix(r,["document","documentHead"])?qF(NF(["mappingValue"!==r.type||r.content?" ":"","mappingKey"===u.type&&"mapping"===e.getParentNode(2).type&&hx(r)?"":kF,e.call(n,"trailingComment")])):"",Cx(r)?fx("sequenceItem"===r.type?2:0,NF([jF,LF(jF,e.map(e=>NF([zF(t.originalText,e.getValue(),t.locStart)?jF:"",n(e)]),"endComments"))])):"",i])},massageAstNode:function(e,t){if(ix(t))switch(delete t.position,t.type){case"comment":if(GF(t.value))return null;break;case"quoteDouble":case"quoteSingle":t.type="quote"}},insertPragma:JF},Fx={bracketSpacing:Bh.bracketSpacing,singleQuote:Bh.singleQuote,proseWrap:Bh.proseWrap},xx=["yml"],Sx=[".yml",".mir",".reek",".rviz",".sublime-syntax",".syntax",".yaml",".yaml-tmlanguage",".yaml.sed",".yml.mysql"],wx=[".clang-format",".clang-tidy",".gemrc","glide.lock","yarn.lock"],Bx={name:"YAML",type:"data",tmScope:"source.yaml",aliases:xx,extensions:Sx,filenames:wx,aceMode:"yaml",codemirrorMode:"yaml",codemirrorMimeType:"text/x-yaml",languageId:407};var Tx=[dm,DD,vy,$y,mC,gF,{languages:[As(Ue(Object.freeze({__proto__:null,name:"YAML",type:"data",tmScope:"source.yaml",aliases:xx,extensions:Sx,filenames:wx,aceMode:"yaml",codemirrorMode:"yaml",codemirrorMimeType:"text/x-yaml",languageId:407,default:Bx})),e=>({since:"1.14.0",parsers:["yaml"],vscodeLanguageIds:["yaml","ansible","home-assistant"],filenames:e.filenames.filter(e=>"yarn.lock"!==e)}))],printers:{yaml:vx},options:Fx,parsers:{get yaml(){return{}.parsers.yaml}}}];const{version:kx}=ht,{getSupportInfo:Nx}=yt,Ox=Tx.map(t=>e(t,["parsers"]));function Px(e,t=1){return(...n)=>{const r=n[t]||{},u=r.plugins||[];return n[t]=Object.assign({},r,{plugins:[...Ox,...Array.isArray(u)?u:Object.values(u)]}),e(...n)}}const _x=Px(Ki.formatWithCursor);return{formatWithCursor:_x,format:(e,t)=>_x(e,t).formatted,check(e,t){const{formatted:n}=_x(e,t);return n===e},doc:dn,getSupportInfo:Px(Nx,0),version:kx,util:bs,__debug:{parse:Px(Ki.parse),formatAST:Px(Ki.formatAST),formatDoc:Px(Ki.formatDoc),printToDoc:Px(Ki.printToDoc),printDocToString:Px(Ki.printDocToString)}}}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_sorting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/sorting */ "./src/js/parts/sorting.js");
/* harmony import */ var _parts_sorting__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_sorting__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_ajax_post_expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/ajax/post-expand */ "./src/js/parts/ajax/post-expand.js");
/* harmony import */ var _parts_ajax_archive_tezaurus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/ajax/archive-tezaurus */ "./src/js/parts/ajax/archive-tezaurus.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
// files
    
    
    
//





/***/ }),

/***/ "./src/js/parts/ajax/archive-tezaurus.js":
/*!***********************************************!*\
  !*** ./src/js/parts/ajax/archive-tezaurus.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prettier */ "./node_modules/prettier/standalone.js");
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prettier__WEBPACK_IMPORTED_MODULE_1__);


const expandButtons = document.querySelectorAll('[data-expand]');
const letterButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[data-letter]');


const getTezaurus = (letter, action) => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: `${window.location.origin}/wp-admin/admin-ajax.php`,
        method: 'GET',
        cahce: false,
        data: {
            action: action,
            letter: letter
        },
        beforeSend: () => {
            console.log('ушел запросичек');
        },
        success: (data) => {
            const response = JSON.parse(data);
            console.log(response); 
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.changable-container').html(response.html);
        }
    });
};

letterButton.on('click', (evt) => {
    evt.preventDefault();
    const target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(evt.currentTarget);
    const letterItem = target.data('letter');

    
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.letter.letter--current').removeClass('letter--current');
    target.addClass('letter--current');
    getTezaurus(letterItem, 'search_by_letter');
});

// $(document).on('click', '[data-word-id]', (e) => {
//     e.preventDefault();
//     const wordId = $(e.currentTarget).data('word-id');
//     getTezaurus(wordId, 'get_single_word');
// });




/***/ }),

/***/ "./src/js/parts/ajax/post-expand.js":
/*!******************************************!*\
  !*** ./src/js/parts/ajax/post-expand.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

const expandButtons = document.querySelectorAll('[data-expand]');
const postExpand = (id, button) => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: `${window.location.origin}/wp-admin/admin-ajax.php`,
        method: 'POST',
        cahce: false,
        data: {
            action: 'expand_post',
            post_id: id
        },
        beforeSend: () => {
            console.log('ушел запросичек');
        },
        success: (data) => {
            const response = JSON.parse(data);
            console.log(response);
            const parent = button.closest('.article').querySelector('.article_desc');
            parent.innerHTML = `<div class="single-post_content">${response.template}</div>`;
        }
    })
};
expandButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = button.dataset['expand'];
        postExpand(postId, button);
    });
});



/***/ }),

/***/ "./src/js/parts/sorting.js":
/*!*********************************!*\
  !*** ./src/js/parts/sorting.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const sortingButtons = document.querySelectorAll('button[data-sorting]');

const clickHandler = (button, sortingItem) => {
    button.innerHTML = sortingItem.getAttribute('data-sorting-name');
    count += 1;
    console.log(count);
};

// Открытие и закрытие сортировки
let count = 0;
for (let i = 0; i < sortingButtons.length; i++) {
    const button = sortingButtons[i];
    const sorting = button.closest('div.section-head').querySelector('div[data-sorting]');
    const sortQueries = sorting.querySelectorAll('[data-sorting-name]');

    const sortHandler = (e) => {
        e.preventDefault();
        button.innerHTML = e.target.getAttribute('data-sorting-name');
        if (sorting.querySelector('.sorting_item--current')) {
            sorting.querySelector('.sorting_item--current').classList.remove('sorting_item--current');
        }
        e.target.classList.add('sorting_item--current');
    };
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        button.classList.toggle('button-sorting--active');
        sorting.classList.toggle('sorting--opened');
    });

    sortQueries.forEach((query) => {
        query.addEventListener('click', sortHandler, false);
    });


    // Закрытие сортировки при клике вне элемента

    document.addEventListener('click', (evt) => {
        const target = evt.target;
        const activeButton = target === button;
        const blockSorting = target === sorting || target === sorting.contains(target);
        const activeSorting = sorting.classList.contains('sorting--opened');
        if (!activeButton && !blockSorting && activeSorting) {
            button.classList.remove('button-sorting--active');
            sorting.classList.remove('sorting--opened');
        }        
    });
}


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map