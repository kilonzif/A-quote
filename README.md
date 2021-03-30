# AQuote

## Description

A-quote is a angular website project that allows a user to add a new quote, upvote or downvote existing quotes .The most upvoted quote is then highlighted. The user can also delete the quotes.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.


## Author 

[Mugera Hughes](https://github.com/MugeraH)

## Installation

- Firstly, in order to run this application in your local machine, you need to have installed npm and Angular.
- Clone the application using `git clone https://github.com/MugeraH/A-quote.git`
- Then run `npm install` to install application dependacies locally
- Run `ng serve -o` to start application

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



## BDD
### 1. ADD QUOTE

#### Inputs
- Your Name
- Quote title
- Quote Description
- Quote Author

#### Behaviour
User inputs the above inputs,clicks the add quote button and a new quote is created. If the user does not enter input and clicks button Add Quote,the user is prompted to input missing fields. When the user enters items in a field and then clears the field, an alert message is shown. 

#### Outputs
- New quote displayed by a card


### 2. UPVOTE AND DOWNVOTE

#### Button Clicks
- Thumbs-up icon
- Thumbs-down icon

#### Behaviour

User clicks on the thumbs up button to upvote and on the thumbs down button to downvote. The highest upvoted quote is then highlighted and a favoutite icon appears next to its title.

#### Outputs

- Most upvoted quote is highlighted

### 3. DELETE QUOTE

#### Button Clicks
- Trash icon


#### Behaviour

User clicks on the trash icon to delete a quote,they will be prompted to confirm the action they have selected and then the specific quote is deleted

#### Outputs

- Selected quote is deleted

## Technologies Used

- HTML
- CSS
- JavaScript
- Angular
- Bootstrap


## Contact

For any further questions, contributions or feedback, get in touch with me through the following contacts;

- Email: bwosihughes24@gmail.com
- Phone: +254734505023

### License

[MIT License](https://github.com/MugeraH/A-quote/blob/main/license) Copyright (c) {2021}






