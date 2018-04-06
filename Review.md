# Review Questions

## What is Node.js?

Node.js is a run-time environment that executes server-side JavaScript.

## What is Express?

Express is a framework for Node.js used to build web apps and APIs.

## Mention two parts of Express that you learned about this week.

I learned how to structure multiple resource using express.Router.
I learned how to employ custom middleware in Express.

## What is Middleware?

A set up functions used by an application to perform data manipulation.
In the context of Express, middleware has access and can manipulate the
homies req and res, can execute any code, end the request-response process
and call the next middleware function using next().

## What is a Resource?

The data that our API manages and represented symbolically by a URL.

## What can the API return to help clients know if a request was successful?

The API can return error messages.

## How can we partition our application into sub-applications?

By using router to separate distinct resources into their own files,
which will be imported into the main server app.

## What is CORS and why do we need it?

CORS (Cross-Origin Resource Sharing) enables the server to respond to
request from different hosts.
