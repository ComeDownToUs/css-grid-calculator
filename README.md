This was done up in approx 2-3 hours so there are defintely going to be holes in it.
Please have a look at challenge_guidelines.png in the root of this repo to see guidelines for challenge

Run using `npm run dev`

Tests (there are some extremely basic nightwatch ones in place) may be added later as may the other functions that I didn't get around to


### TODO:
- Move styles to be local so classnames can be reused without conflicts
- Use scss to greatly reduce the hassle of writing styles
- Testing
- Naming of saved entries
- Remove repeated code
- A third display using flexbox (bootstrap 4 or bulma)


Some notes:
- Save only works on a completed equation (i.e. the last button to be pressed was equals)
- Tablet layout is the Bootstrap SM specs (768-992px)
- Mobile is <768px
- CSS Grid seemed the only way to do the layout without repeating parts, as its not fully supported, I made an alternative version of the layout using Bootstrap in case that was viewed as a cheat
- I used vue with vuex so that a user could easily toggle between the two available layouts without excessive code repetition or a user losing (or needing to reload) their data up to that point. Use vue devtools to easily track the underlying operations
- I set it up with vue-cli so that I could easily integrate tests but I really didn't have the time to take an especially tidy approach
- Result has been designed to mimic a generic calculator (i.e. it displays a running total), the total sequence is maintained and saved in the results




Uses Digital 7 font from http://www.fontspace.com/style-7/digital-7




Below is the Vue-cli automatically generated readme
-------------------
# vuex-grid-calculator

> Testing the CSS grid with a bootstrap alternative

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
