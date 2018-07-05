"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
require("core-js/es7/reflect");
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9wb2x5ZmlsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIOztHQUVHO0FBRUgsbUVBQW1FO0FBQ25FLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLGlDQUFpQztBQUNqQyw0QkFBNEI7QUFFNUIsK0VBQStFO0FBQy9FLG9FQUFvRTtBQUVwRSxnRUFBZ0U7QUFDaEUsZ0NBQWdDO0FBR2hDLHlDQUF5QztBQUN6QyxrR0FBa0c7QUFDbEcsK0JBQTZCO0FBRzdCOzs7O0lBSUk7QUFDSiw4RUFBOEU7QUFFOUU7OztHQUdHO0FBRUYsc0dBQXNHO0FBQ3RHLGlHQUFpRztBQUNqRyxzSEFBc0g7QUFFdEg7OztFQUdFO0FBQ0gsNERBQTREO0FBRTVEOztHQUVHO0FBQ0gsNkJBQTJCLENBQUUsNkJBQTZCO0FBSTFEOztHQUVHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgYW5kIGlzIGxvYWRlZCBiZWZvcmUgdGhlIGFwcC5cclxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cclxuICpcclxuICogVGhpcyBmaWxlIGlzIGRpdmlkZWQgaW50byAyIHNlY3Rpb25zOlxyXG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXHJcbiAqICAgMi4gQXBwbGljYXRpb24gaW1wb3J0cy4gRmlsZXMgaW1wb3J0ZWQgYWZ0ZXIgWm9uZUpTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgeW91ciBtYWluXHJcbiAqICAgICAgZmlsZS5cclxuICpcclxuICogVGhlIGN1cnJlbnQgc2V0dXAgaXMgZm9yIHNvLWNhbGxlZCBcImV2ZXJncmVlblwiIGJyb3dzZXJzOyB0aGUgbGFzdCB2ZXJzaW9ucyBvZiBicm93c2VycyB0aGF0XHJcbiAqIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoZW1zZWx2ZXMuIFRoaXMgaW5jbHVkZXMgU2FmYXJpID49IDEwLCBDaHJvbWUgPj0gNTUgKGluY2x1ZGluZyBPcGVyYSksXHJcbiAqIEVkZ2UgPj0gMTMgb24gdGhlIGRlc2t0b3AsIGFuZCBpT1MgMTAgYW5kIENocm9tZSBvbiBtb2JpbGUuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgaW4gaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2d1aWRlL2Jyb3dzZXItc3VwcG9ydC5odG1sXHJcbiAqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBCUk9XU0VSIFBPTFlGSUxMU1xyXG4gKi9cclxuXHJcbi8qKiBJRTksIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgYWxsIG9mIHRoZSBmb2xsb3dpbmcgcG9seWZpbGxzLiAqKi9cclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3dlYWstbWFwJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG5cclxuLyoqIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBmb3IgTmdDbGFzcyBzdXBwb3J0IG9uIFNWRyBlbGVtZW50cyAqL1xyXG4vLyBpbXBvcnQgJ2NsYXNzbGlzdC5qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSBjbGFzc2xpc3QuanNgLlxyXG5cclxuLyoqIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBmb3IgdGhlIFJlZmxlY3QgQVBJLiAqL1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xyXG5cclxuXHJcbi8qKiBFdmVyZ3JlZW4gYnJvd3NlcnMgcmVxdWlyZSB0aGVzZS4gKiovXHJcbi8vIFVzZWQgZm9yIHJlZmxlY3QtbWV0YWRhdGEgaW4gSklULiBJZiB5b3UgdXNlIEFPVCAoYW5kIG9ubHkgQW5ndWxhciBkZWNvcmF0b3JzKSwgeW91IGNhbiByZW1vdmUuXHJcbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFdlYiBBbmltYXRpb25zIGBAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNgXHJcbiAqIE9ubHkgcmVxdWlyZWQgaWYgQW5pbWF0aW9uQnVpbGRlciBpcyB1c2VkIHdpdGhpbiB0aGUgYXBwbGljYXRpb24gYW5kIHVzaW5nIElFL0VkZ2Ugb3IgU2FmYXJpLlxyXG4gKiBTdGFuZGFyZCBhbmltYXRpb24gc3VwcG9ydCBpbiBBbmd1bGFyIERPRVMgTk9UIHJlcXVpcmUgYW55IHBvbHlmaWxscyAoYXMgb2YgQW5ndWxhciA2LjApLlxyXG4gKiovXHJcbi8vIGltcG9ydCAnd2ViLWFuaW1hdGlvbnMtanMnOyAgLy8gUnVuIGBucG0gaW5zdGFsbCAtLXNhdmUgd2ViLWFuaW1hdGlvbnMtanNgLlxyXG5cclxuLyoqXHJcbiAqIEJ5IGRlZmF1bHQsIHpvbmUuanMgd2lsbCBwYXRjaCBhbGwgcG9zc2libGUgbWFjcm9UYXNrIGFuZCBEb21FdmVudHNcclxuICogdXNlciBjYW4gZGlzYWJsZSBwYXJ0cyBvZiBtYWNyb1Rhc2svRG9tRXZlbnRzIHBhdGNoIGJ5IHNldHRpbmcgZm9sbG93aW5nIGZsYWdzXHJcbiAqL1xyXG5cclxuIC8vICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gLy8gKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9kaXNhYmxlX29uX3Byb3BlcnR5ID0gdHJ1ZTsgLy8gZGlzYWJsZSBwYXRjaCBvblByb3BlcnR5IHN1Y2ggYXMgb25jbGlja1xyXG4gLy8gKHdpbmRvdyBhcyBhbnkpLl9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFMgPSBbJ3Njcm9sbCcsICdtb3VzZW1vdmUnXTsgLy8gZGlzYWJsZSBwYXRjaCBzcGVjaWZpZWQgZXZlbnROYW1lc1xyXG5cclxuIC8qXHJcbiAqIGluIElFL0VkZ2UgZGV2ZWxvcGVyIHRvb2xzLCB0aGUgYWRkRXZlbnRMaXN0ZW5lciB3aWxsIGFsc28gYmUgd3JhcHBlZCBieSB6b25lLmpzXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBmbGFnLCBpdCB3aWxsIGJ5cGFzcyBgem9uZS5qc2AgcGF0Y2ggZm9yIElFL0VkZ2VcclxuICovXHJcbi8vICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZW5hYmxlX2Nyb3NzX2NvbnRleHRfY2hlY2sgPSB0cnVlO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBab25lIEpTIGlzIHJlcXVpcmVkIGJ5IGRlZmF1bHQgZm9yIEFuZ3VsYXIgaXRzZWxmLlxyXG4gKi9cclxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEFQUExJQ0FUSU9OIElNUE9SVFNcclxuICovXHJcbiJdfQ==