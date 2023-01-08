## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Website functionalities](#Website-functionalities)

## General info

this project is clone of airbnb as a part of angular development course.

## Technologies

Project is created with:

- AngularJS 14
- typescript
- rxjs
- ngrx
- bootstrap
- primeNG
- sweetalert
- font-awasome

## Setup

To run this project, install it locally using npm:

```
$ clone github reposity
$ npm install
$ ng serve

```

## Website functionalities

this segments explains how website works and what you can do with it.

- view page
  when you first visit website, initial page looks like this.
  ![Algorithm schema](./images/1.png)

header of page has clickable buttons

- airbnb logo, which takes you to home(initial page)
- log in , lets you log in to your account
- register, lets you register account
  ![Algorithm schema](./images/header.png)

filter that lets you filter hotels based on certain characteristics, these characteristics are associated with icons and text
![Algorithm schema](./images/filter.png)

filter button at the right side of the filter bar displays filter modal, that lets you filter hotels with more specific data
![Algorithm schema](./images/filter-modal.png)

card display area, where hotels are displayed, hotels are taken from API and then displayed on view page
![Algorithm schema](./images/card-area.png)

footer of website, which has 3 buttons which take you to following pages

- privacy
- contact
- terms
  ![Algorithm schema](./images/footer.png)
