# < Syntax />

## About

< Syntax /> is a web app designed to hone the typing speed and syntactical skills of any developer. Developers of all levels can benefit from practicing the fundamentals. 

Don't believe me? Give it a try [HERE](https://caldonic7.github.io/Syntax-Client/). Simply sign up (using a fake email is recommended), create a goal, then start practicing to see how fast you can level up and achieve your goals.

![Home or Dashboard](public/images/screenshot.png)

#

If you are interested in seeing how I created this app you can check out the code for my [front end repo](https://github.com/CaldoNic7/Syntax-Client) or my back end [API](https://syntax-typing-practice.herokuapp.com/) and it's corresponding [git hub repo](https://github.com/CaldoNic7/Syntax-back-end).

#
## Technologies

Technologies I used to build this SPA include...

 + JavaScript

 + React

 + HTML/CSS

 + Bootstrap

 + Python

 + Django

 + PostSQL

## Installation

1. Fork and Clone this repository.
2. Change into the new directory.
3. Install dependencies with `npm install` and `npm install moment --save`
4. Checkout to a new development branch with `git checkout -b dev`.
5. Make your changes then add and commit them with `git add` and `git commit`
6. When finished, push to your fork with `git push origin dev` and submit a pull request.


### Dependencies

[momentjs](https://momentjs.com/)
```
npm install moment --save
```

#

## User Stories
### Version 1
#### As a user I would like to be able to ...

1. sign up with my email and a password
2. sign in with my email and password
3. change my password once i'm signed in
    and sign out if i am signed in
#### I would also like to...
4. create goals
5. view a snapshot of my progress on my goals
6. view my goals details
7. update my goals
8. delete my goals
#### In my goals i would like to...
1. set the language I want to focus on practicing
2. set a deadline for a specific goals completion
3. set how often I want to practice (ie 30min every day)
    and receive reminders to sign in and practice.

#### As a developer I want to provide users with...

1. a well thought out app that is intuitive and seamless in design
2. an aesthetically pleasing design
3. The ability to CRUD on 'SMART' goals quickly and easily.

#
## Outstanding Tasks
Here are some of the things I plan to tackle as I continue to work on developing this app...
  * Styling
  * Game Play
  * adding a username
  * profile with picture
  * Leader Board
  * Social interaction via comments and a chat function
  * User vs User Challenges
  * Trivia
  * Practice Problems
  
## Wire Frames
### Home when a user is not signed in

![Home when a user is not signed in](public/images/1-signed-out-home.png)

### Sign-Up

![Sign-Up](public/images/2-sign-up.png)

### Sign-In

![Sign-in](public/images/3-sign-in.png)

### Home or Dashboard for a signed-in user

![Home or Dashboard](public/images/4-dashboard.png)

### Create an additional goal

![Create an additional Goal](public/images/5-create-new-goal.png)

### Update or Delete a goal

![Update and Delete a Goal](public/images/6-update-goal.png)

### Profile Settings (including change password)

![Profile Settings](public/images/7-profile.png)

#

Entity Relationship Diagrams (ERD) and API Routes
### ERD
![](public/images/ERD.png)
### API Routes

User Routes
| NAME         | URL       | Verb | AUTHENTICATED |          Description             |
|:------------:|:---------:|:----:|:-------------:|:--------------------------------:|
|signUp        |/sign-up/  |POST  |      NO       | creates new user                 |
|signIn        |/sign-in/  |POST  |      NO       | signs user in and creates token  |
|signOut       |/sing-out/ |DELETE|      YES      | signs user out and deletes token |
|changePassword|/change-pw/|PATCH |      YES      | changes user password            | 

Goal Routes
| NAME          | URL            | Verb  |          Description             |
|:-------------:|:--------------:|:-----:|:--------------------------------:|
|createGoal     |/goals/         |POST   | creates new goal                 |
|indexUserGoals |/goals/         |GET    | shows all of that users goals    |
|showGoal       |/goals/:goalId/ |GET    | shows a specific goal            |
|updateGoal     |/goals/:goalId/ |PATCH  | updates a goal                   | 
|deleteGoal     |/goals/:goalId/ |DELETE | deletes a goal                   | 

#

## Planning Process and Problem Solving Strategy
### Planning
I spent the entire first day planning my project and setting up the templates. I like to put pencil to paper first just to get all my ideas out and get them organized. Once I had a basic first draft and i had written down any "grand ideas" that are for future versions (allowing me to no think about them again until I am ready) I got busy making my wire frames. Once the wire frames were done I jotted down a general timeline and order of operations for the build. Then I got to work following those basic guidelines I had set for myself. 

### Problem Solving
Whenever I encountered a bug if there is an error code I made sure I understood what the error code was telling me before I tried any fixes. If I don't know whats wrong I don't know where to start trying to fix it. Once I understood what was wrong I worked through the order of events checking my code for obvious syntax mistakes if that applied and thinking through the logic of each step. A lot of times I could fix whatever was wrong or at least find exactly what was breaking the code that way. Once I knew where the code was broking and generally why, I started my search in the appropriate docs and on google to find a solution. If I got stuck for more than 10 minutes without making any progress i'd reach out to trusted peers and see if any of them had any advice or time to look at it with me. Most of the issues I had were resolved fairly quickly in this way but if I was still stuck then I created an issue ticket to get an instructors help.
#

## Styling

### Colors:

background1:  (Darkest)
```
#2B4450
rgba(43, 68, 80, 1)
```
background2: (dark)
```
#497285
rgba(73, 114, 133, 1)

```
background3: (white)
```
#FFFFFF
rgba(255, 255, 255, 1)
```
accent1: (light)
```
#DFEBED
rgba(223, 235, 237, 1)
```
accent2: (orange)
```
#F78536
rgba(247, 133, 54, 1)
