# Online Registration System for Maple Valley Day Camp
    
<img src="https://img.shields.io/badge/Look-I made this!-purple" alt="I Made This badge"></img>
<img src="https://img.shields.io/github/package-json/v/coleloui/MapleValley" alt="package-json">
<img src="https://img.shields.io/github/last-commit/coleloui/MapleValley" alt="last commit">
<img src="https://img.shields.io/github/followers/coleloui/MapleValley" alt="followers">

## Project Description
>       
>       On online registration system for volunteers and parents of campers of Girl Scouts  
>       Maple Valley Day Camp that will replace paper registration and facilitate camp planning  
>       by allowing registration details to be easily shared to camp planning committee.
>       

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Team](#team)

### Installation
>       
>       Several npm packages need to be installed: 
>       bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, nodemailer, sequelize
>       
[Deployed application](https://protected-lowlands-08660.herokuapp.com/)

### Usage
>       
>       Visit the url site, https://protected-lowlands-08660.herokuapp.com/. 
>       

#### Volunteer and Parent Users
>       
> 1.    First time users will need to register with an email account and password.
> 2.    After logging in, at the landing profile page, users will see a recap of registrations they have already completed, if any.
>   These recaps contain a button to view the complete registration submission of the noted camper or volunteer.
> 3.    Clicking on the register button on the profile page will present the user with one of four registration categories to select from. 
>   *   Adult Volunteer
>   *   PA or LIT Volunteer (grades 7 - 12)
>   *   Campers (grades K - 6)
>   *   Boys or Cherubs (a unit for children of adult volunteers while the volunteers work at camp)
>
>       These buttons drive the registration sections and specific questions that need to be completed for the different categories of camp attendees.
> 
> 4.    Personal data questions are presented on the first registration page. The user completes and clicks Next to proceed.
> 5.    Health History data questions are presented on the second page. The user completes and clicks Submit to complete registration.
> 6.    A registration acknowledgement email is sent to the email provided.
>       

#### Camp Managers
>       
> 1.    Upon login, Managers of camp are routed to a manager profile page.
> 2.    Currently managers can view a registration recap per camper category/level.
> 3.    Inside the category/level recap, the manager user can view the complete registration submission of the noted camper or volunteer by clicking the camper name.
>       

### Technologies
>       
>       npm express and express-handlebars: web server and pages
>       npm sequelize, connect-session-sequelize, mysql2: database
>       npm express-session, bcrypt and dotenv: user sessions and authentication
>       npm nodemailer: sending emails, sequelize
>       css styling: bulma
>       

### Team
>       
>       For questions or comments, please contact one of the following:
>       Abdul: abdulkadir.aba786@gmail.com
>       Diana: dianastebbins97@gmail.com
>       Louis: coleloui18@gmail.com
>       Valerio: notitiami@gmail.com
>       

<img src="https://avatars3.githubusercontent.com/u/54616681?s=400" alt="abdul profile pic" width="200px" height="200px">
<img src="https://avatars2.githubusercontent.com/u/60168608?v=4" alt="diana profile pic" width="200px" height="200px">
<img src="https://avatars3.githubusercontent.com/u/16417094?s=400" alt="louis profile pic" width="200px" height="200px">
<img src="https://avatars2.githubusercontent.com/u/60993964?s=400" alt="valerio profile pic" width="200px" height="200px">


