# JS1 Course Assignment

## About

This is the repository for my Course Assignment for the JavaScript 1 Course.
I'll be using the PokéAPI for the project.

The website is designed with the "mobile-first" principle, but it will also work at larger screens.

## Finding an API

Initially I had an idea of making something with the PokéAPI. Then I discarded the idea beacuse of how the API works. When calling fetch() on the URL and json() on the response it returns an array of objects with two properties: name and url. That's it. And that's obviously not enough for the requirements in this assignment. So I started looking at other API's, but couldn't quite let go of the PokéAPI idea. Then I came up with the solution of calling fetch() inside a for loop, and then get more details from each result. That worked and gave me what I wanted. 

There might be faster way of fetcing them all, but it works and I'm quite happy with the result.
