Salesforce SPA
==========
Use modern front end tools to develop Single Page Apps for the Force.com platform.
All deployed static resources and visualforce page are generated automatically.
This repo is an example for reference, and is meant to be installed as part of a Saleforce project in MavensMate.
It assumes there is a top level directory at the same level as src called ```spa```, with apps in ```spa/appName.spa```

The files are generated into the ```dist``` directory, a Visualforce page and a zipped static resource.  There is also an example Apex controller that works with the example page and resource. 

installation
==========

 * ```npm install```
 * ```gulp``` - watches for changes in src and automatically runs grunt tasks

testing
==========
Unit tests run automatically every time the javascript or tests change.  Uses karma.js testrunner to run jasmine tests in mutiple browsers simultaneously.  Watch the output of gulp when saving a source file for test results.

To run functional tests, type ```protractor``` from a separate terminal window, while serving the page (either via ```gulp serve``` or simply ```gulp```.  You may need to edit protractor.conf.js to point to your local selenium drivers.  Use ```webdriver-manager``` to install and manage your drivers, which is included when you install protractor.js globally.

the stack
==========
* node.js - running locally to power most of the stack
* npm - manage developer dependencies
* bower - front end dependency managment for static resource
* jasmine - the test framework used in both protractor and karma 
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
