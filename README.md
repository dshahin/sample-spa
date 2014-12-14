Salesforce SPA
==========
Use modern front end tools to develop Single Page Apps for the Force.com platform.
All deployed static resources and visualforce page are generated automatically.

installation
==========

 * ```npm install```
 * ```gulp``` - watches for changes in src and automatically runs grunt tasks
 * ```protractor``` (while page is being served locally)

the stack
==========
* node.js - running locally to power most of the stack
* npm - manage developer dependencies
* bower - front end dependency managment for static resource
* jsr-mocks - local browser shim for javascript remoting manager
* karma - continuous unit testing
* protractor - simultaneous functional testing in multiple browsers
* gulp - build management
  * serve - serve the page to chrome
  * scripts - concatenate and minify scripts
  * pages - turn templates into html and visualforce pages
  * unit - karma test runner
  * styles - minify
  * images - minify images 
  * watch - watch local source files for changes
  * zip - prepare static resource for sfdc
  * bower - install/manage static resource dependencies
  * vf - copy visualforce page into sfdc src/pages directory
  * push - use force cli to push resources to sfdc (in progress)
  * unit - run jasmin unit tests in multiple browsers via karma testrunner
