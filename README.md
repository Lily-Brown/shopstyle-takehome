# ShopStyle Take-Home

## Synopsis

This is the repository for the ShopStyle Take-Home Assignment to create a front-end for a sample API.

### Requirements

The exercise is to implement a search box with autocomplete with an API with the following search params:

- c​: The search string
- per_page​: number of results to return, keep the value at “5”
- with_people​: Flag to indicate search result to include celebrity items
- app​: ID of application making the call. Keep the value as “100266a“
- t​: Timestamp

The necessary guidelines:

- JQuery can be used. Usage of other frameworks/libraries is strongly discouraged.
- Please implement a single web page that could include HTML, CSS and JavaScript codes.

## Installation

1 - Fork and clone this repository.

2 - CD into the project directory: ```> cd shopstyle-takehome```

3 - Install Node Packages: ```> npm install```

4 - Start your server: ```> nodemon```

5 - View your application at: [http://localhost:3000](http://localhost:3000/).


## UI Screenshot

Main Page

<img src='http://i.imgur.com/dfws9eO.png' width=500px>

Search Results

<img src='http://i.imgur.com/BSPOYWb.png' width=500px>

Filtering by Language and Type

<img src='http://i.imgur.com/b8EUhli.png' width=500px>


## Features

- Search Updates as the User Types
- Allows User to Filter by Language
- Allows User to Filter by Type

## Future Work

- More Interesting UI
- 'Data Not Available' and other messages/labels appear in Filtered Language
- Use Country Code to display Origin Country of data