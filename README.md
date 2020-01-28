# API Workshop

## Getting Started

This workshop is pretty bare bone, so all we'll need to get started is `node`, ideallt `node 12`.

To get the project up and running, fork and pull this repo then run:

```bash
yarn
yarn start

```

I'm using yarn here, but feel free to use NPM.

That's it, we're running! You should see a message that says `Ready on port 3000`.

## The assignment

Ok, now that we've got the project running and have had a chance to look through the code, you should quickly see that (surprise) nothing works! Your assingment has two parts:

1. Get this code running! Once you're done, we want the single endpoint that we have now to match [this api contract]()
    a. Only worry about implemeting the 200 status to start, the error codes can come after!
2. Add another endpoint! This can do whatever you want, with one caveat - it _has_ to use teh weather api AND another source of data. Ideally this will be another api, but it can be anything you want. This new endpoint needs to follow our existing pattern, and be fully documented.

Working in groups here is encouraged, even just as accountability buddies. Once you're done the project (take as long as you want, and do the best you can) you can submit it for review!

### Submitting the project

This part is simple - just open a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) against the original project repo that you forked from. 

Preferably, you'll have an easy to follow commit history that has _descriptive_ commit messages.

## Vocabulary

There are some things that are going to be foreign in this repo, don't be afraid! Most importantly, the folder structure is laid out as follows:

```
 - src
    - controllers
    - gateways
    - services
    - index.js
```

This is a common way to structure a server, and will let us seperate our concerns for a much more readable codebase. Here's a brief outline of how the thought behind this organization:

### Controllers

The controller is responsible for sending and recieving requests from the `router` (which in this case is inside out `index.js` file). It's the ONLY place we should be operating on `req` or `res`. This is the place where we would add any validation, return any error codes, or send back a payload.i You can think of controllers as a gatekeeper to your application.

### Services

The service is where _business logic_ lives. This is a pretty abstract terms, but basically anything requiring a decision that isn't related to validation or gatekeeping goes here. For example, if we want to mix two api reponses, or manipulate a reponse in any way, this is where that code would live (hint hint). You can think of services as the brains of the operation.

### Gateways

The gateway is where any outgoing requests from our server live. If we need to fetch information from anywhere (an API, a JSON file, a database, etc) it goes into a gateway. The ONLY responsibity a gateway should have is the getting and sending of data. You can think of gateways as your applications radio tower.
