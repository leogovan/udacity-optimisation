# frontend-nanodegree-optimistaion-project

## Description

This is my project for the Udacity Frontend Nanodegree: Website Optimisation.

### Part 1: Optimize PageSpeed Insights score for index.html

A live version of this part can be viewed at [github.io](https://leogovan.github.io/udacity-optimisation/).

The task here was to achieve a [Google pagepeed](https://developers.google.com/speed/pagespeed/insights/) score of 90 or more. Optimisations made:

1. Added a print media query to the print CSS file reference
2. Inlined minified CSS styles for non-render blocking (using grunt.js plugin contrib-cssmin)
3. Used the a [webfont loader](https://github.com/typekit/webfontloader) snippet to remove it as a render-blocking resource
4. Made the Google Analytics script reference asynchronous
5. Reduce the size of the local images using the grunt.js plugin responsive-images

### Part 2: Optimize Frames per Second in pizza.html

To run this, download/clone from [github.com](https://github.com/udacity/frontend-nanodegree-mobile-portfolio) and click on views/pizza.html. The optimisations were made to views/js/main.js.

The task here was to make sure the application ran at 60fps or higher. Optimisations made:

1. Changed out querySelector for getElementsByID as more performant: https://jsperf.com/getelementbyid-vs-queryselector (line 407)
2. Changed out querySelectorAll for getElementsByClassName as more performant: https://jsperf.com/getelementsbyclassname-vs-queryselectorall/15 (line 472)
3. Used the Udacity class solution https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/273584856175461/lessons/4147498575/concepts/41542085800923 to refactor changePizzaSlices() (line 458)
4. Changed out querySelectorAll for getElementsByClassName as more performant: https://jsperf.com/getelementsbyclassname-vs-queryselectorall/15 (line 530)
5. Refactored the loop within updatePositions() so that it was not accessing the DOM each time it ran (line 532)
6. Reduced number of pizzas generated from 200 to 30 (line 559)
7. Took the DOM accessing out of the loop as per https://www.w3schools.com/js/js_performance.asp (line 558)
8. Changed out querySelector for getElementById as more performant: https://jsperf.com/getelementbyid-vs-queryselector (line 558)