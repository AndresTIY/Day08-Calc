## Intro to JS HW, Calculator
- create an index.html with a form that includes
  1. 2 text input fields
  2. "calculate" button
  3. an area to display output
- use the DOM API and the elements on the page to set this up
  - when you click the "calc" button, the value in the first box should be added to the value in the second box
  - output should be injected into the area for displaying output
- stylize it and make it look good

## working through
- what works in console.dir()?
  - (document) // shows entire html document
  - (document.forms) // shows everything under the forms css selector
  - (document.forms[0])//  === form.calc-form, which is the class name i gave the form html tag. documents->forms->.calc-form(className)
    - ('.calc-form') // does nothing but i don't get an error
  - (document.forms[0][0]) // path is documents->forms->input @ index 0
  - (document.forms[0][0].value) // gives me correct value
  - use `document.querySelector('cssSelector')`
    - in the example, div was given a class name and then plugged in
    - `document.querySelector('.classname')`
    - `document.querySelector(document.forms[0][0].value)`
      - expected that to work but didn't. that's a direct path and not a css selector
  - body is a selector, so is form, and now input



## jess explained a few things

- use ids in html for js
- `<input id="one" type="text">`
- in js file
  - `var input1 = document.querySelector('#one');`
  - run it in the console and we get the full input tag listed above^
- console.dir(input1)



iNput1
console.dir(iNput1)
iNput1.value
console.dir(#result)
console.dir(document.querySelector('#result')
  )
