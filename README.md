## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Website functionalities](#Website-functionalities)

## General info

this project is clone of airbnb as a part of angular development course.

## Technologies

Project is created with:

- Angular 14
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

header page has clickable buttons

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

- inner-page

by clicking one of the hotels, you will be taken to inner page where hotel information is displayed in detail, you can also make a reservation from this page.
![Algorithm schema](./images/inner_page_1.png)

hotel name and image gallery, you can scroll through images with image slider.
![Algorithm schema](./images/inner_page_2 .png)

hotel details, description, what hotel offers, each section has button to get more detailed information with modal

![Algorithm schema](./images/inner_page_3.png)
![Algorithm schema](./images/inner_page_modal_1.png)
![Algorithm schema](./images/inner_page_modal_3.png)
![Algorithm schema](./images/inner_page_modal_2.png)

calendar which lets you pick up range of days you want to reserve hotel, also map which shows hotel location, and host information

![Algorithm schema](./images/inner_page_4.png)

inner page footer
![Algorithm schema](./images/inner_page_5.png)

hotel reservation area that lets you pick date range and number of guests children and pets you want to reserve. reserve button takes you to payments page where you will finalize you reserve.

![Algorithm schema](./images/inner_page_6.png)

- payment page

by submiting reserve details and clicking reserve button, you will be taken to payment page.
where you can finalize your reserve, on payment page you can select which option do you want for your payment, also enter card information and mobile number, in case you already have card information saved, card information will be submited automatically.

![Algorithm schema](./images/payment_1.png)

by clicking reserve button on payment page, your order will be saved on order-history page in account section.
in case you leave this page, you can continue your order with 24 hours and finalize your order with link to this page. also in for of pending order, this order will be saved in order-history too. but with yellow  background, idicating that you need to finish reservation or cancel order.

- Account page

registration page, where you can submit your email and password and make a new account
![Algorithm schema](./images/register.png)

login page, where you can enter your email and password which you have already created and log in to your account

![Algorithm schema](./images/login.png)

by clicking on account button on header you will be taken to your account. initial page is account detail page, where your information is displayed, by clicking change button you can change your information and then either click apply to make changes or click cancel to cancel changes.
![Algorithm schema](./images/account_1.png)

order history page, where you can see your reserved orders, yellow background orders are not yet reserved, by clicking on orders you can see their details, also, by clicking on yellow orders you can finalize your reservation.

![Algorithm schema](./images/order_history_1.png)
![Algorithm schema](./images/order_history_2.png)
![Algorithm schema](./images/order_history_3.png)

password page, by clicking on password section of account you will be taken to your password change page, where you can enter your current password and your new password, and change your password.
![Algorithm schema](./images/password.png)

- footer components 

by clicking on footers privacy button, you will be taken to privacy, page where privacy information is displayed

![Algorithm schema](./images/privacy.png)

by clicking on contact page on footer, you will be taken to contact page where contact information is displayed 
![Algorithm schema](./images/contact.png)

by clicking on terms page on footer, you will be taken to terms page where terms and conditions are displayed

![Algorithm schema](./images/terms.png)