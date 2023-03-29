# JS1 Course Assignment

## About

This is the repository for my Course Assignment for the JavaScript 1 Course.
I'll be using the PokéAPI for the project.

## Finding an API

Initially I had an idea of making something with the PokéAPI. Then I discarded that beacuse of how the API works. When calling fetch() on the URL and json() on the response it returns an array of objects with two properties: name and url. That's it. And that's obviously not enough for the requirements in this assignment. So I started looking at other API's, but couldn't quite let go of the idea. Then I came up with the solution of calling fetch() on the URL + id. That worked and gave me the result I wanted. 

There might be faster way of fetcing them all, but it works and I'm quite happy with the result.

## index.html

The idea behind the homepage is to show the results as Pokémon cards.

## contact.html

Create a form with the following inputs and validation rules.

- Name - required
- Subject - must have a value with a minimum length of 10
- Email - must have a value and be formatted like an email address
- Address - must have a value with a minimum length of 25
  When the form on this page is submitted, write code to validate the input. If any of the inputs fail validation display an error message for the relevant input.

If all validation passes, add a message above the form indicating the form passed validation.

## Rules

- Sharing APIs and copying and sharing of any code will result in your assignment being given a mark of zero.
- You may only use plain JavaScript for this assignment, no libraries or frameworks. You will be given a mark of zero if you use a library or framework for your JavaScript code.

## Submission

- Create a folder called your-name-js1-ca, e.g. mary-smith-js1-ca
- Add all your code to this folder, zip the folder and submit the zip file
