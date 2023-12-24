# Anto-Productivity-App
Developer: Anthony Raj 

![Mockup image]()

[View live website]()


## Table of Contents
  1. [About](#about)
  2. [Project Goals](#project-goals)
  3. [User Experience](#user-experience)
      1. [Target Audience](#target-audience)
      2. [User Requirements and Expectations](#user-requirements-and-expectations)
      3. [User Stories](#user-stories)
      4. [Site Owner Stories](#site-owner-stories)
  4. [Technical Design](#technical-design)
      1. [Agile Design](#agile-design)
      2. [CRUD Functionality](#crud-functionality)
      3. [Colours](#colours)
      4. [Fonts](#fonts)
      5. [Wireframes](#wireframes)
  5. [Technologies Used](#technologies-used)
      1. [Coding Languages](#coding-languages)
      2. [Frameworks and Tools](#frameworks-and-tools)
      3. [Libraries](#libraries)
  6. [Front-End](#front-end)
      1. [React](#react)
  7. [Back-End API](#back-end-api)
      1. [Django REST Framework](#django-rest-framework)
  8. [Features](#features)
  9. [Future features / improvements](#future-features--improvements)
  10. [Validation](#validation)
      1. [HTML](#html-validation)
      2. [CSS](#css-validation)
      3. [ESLint JavaScript JSX Validation](#eslint-javascript-jsx-validation)
      4. [Chrome Dev Tools Lighthouse](#chrome-dev-tools-lighthouse-validation)
      5. [WAVE Validation](#wave-validation)
  11. [Testing](#testing)
      1. [Device Testing](#device-testing)
      2. [Browser Compatibility](#browser-compatibility)
      3. [Manual Testing](#manual-testing)
  12. [Bugs](#bugs)
  13. [Deployment](#deployment)
      1. [Heroku](#heroku)
      2. [Forking GitHub Repo](#forking-the-github-repository)
      3. [Clone a GitHub Repo](#clone-a-github-repository)
  14. [Credits](#credits)
      1. [Tutorial](#tutorials)
      2. [Code](#code)
      3. [Literature](#literature)
      4. [Misc](#misc)
  15. [Acknowledgements](#acknowledgements)

  ## About

The Anto-Productivity-App It web app has been developed to provide user's the chance to create, Edit, Delete, Assign to others and carry out tasks online.

## Project Goals

The goal for this project was to build a productivity platform in which users can create tasks where other users who feel they can help, can carry out the work as described in the task detail. Tasks can be assigned to members and packs can also be created to group tasks together.


The key functionality aspects:

- The site to be simple and use intuitive navigation across all pages
- User authentication
- User interaction via Tasks, My Invention Task and My Duty Task
- User's to have their own profiles with brief description, profile image and tab group consisting of their owned tasks, packs and other users tasks which they have been assigned
- CRUD functionality for task, My Invention Task, My Duty Task and their Profile
- Tasks filtering by keyword search, new tasks and high priority tasks
- Responsiveness to allow pleasant usage of the app across a range of devices with varying display sizes






## Technologies Used

### Coding Languages

- HTML
- CSS
- Javascript
- React (18.2.0)

### Frameworks and Tools

- [Axios](https://axios-http.com/docs/intro) - Axios is a Promise API. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - Library to decode JSON Web token. Justification: I used JWT to securely transmit data and to have the ability to verify that the content has not been tampered with.
- [React 18](https://17.reactjs.org/) - JavaScript library for building user interfaces. Justification: To be able to showcase my newly learnt skills and for building interactive user interfaces quickly.
- [React-Bootstrap 1.6.3](https://react-bootstrap-v4.netlify.app/) - CSS framework. Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React library. Justification: I used this component to load content (tasks/comments/users) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Javascript framework for routing. Justification: I used this library to enable navigation between views of components and to have the ability to control what is presented to the user based on the URL they have accessed in the browser. 
- [React ChartJS2](https://react-chartjs-2.js.org/) - React Library. Justification: I used this component for producing the doughnut chart on the main page. 
- [React Multi Select Component](https://www.npmjs.com/package/react-multi-select-component) - React Library. Justification: I used this component to have the ability to select multiple tasks to assign to a pack.

- [Am I Responsive](http://ami.responsivedesign.is/) - Website responsive test site. Justification: I used this to create the multi-device mock-up at the top of this README.md file
- [Balsamiq](https://balsamiq.com/) - Mock up software. Justification: I used this to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) - Developer tool. Justification: I used this for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) - File storage. Justification: I used this to store static files
- [Font Awesome](https://fontawesome.com/) - Icon library. Justification: I used this to style the site with icons.
- [Google Fonts](https://fonts.google.com/) - Font library. Justification: I used this to import fonts
- [Git](https://git-scm.com/) - Version control system. Justification: I used this for version control and to push the code to GitHub
- [GitHub](https://github.com/) - Cloud based hosting service. Justification: I used this as a remote repository to store project code
- [Gitpod](https://gitpod.io) - Cloud development environment. Justification: I used this to host a virtual workspace
- [Microsoft Paint] (https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H) - Graphics editor. Justification: I used this to edit the images for testing user stories.
- [Affinity Designer] (https://affinity.serif.com/en-gb/designer/) - Graphics editor. Justification: I used this to create the 404 and no search results images.
- Validation:
  - [WC3 Validator](https://validator.w3.org/) - HTML Validator. Justification: I used this to validate the applications HTML code
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - CSS Validator. Justification: I used this to validate the applications CSS code
  - [ESLint](https://eslint.org/) - JavaScript Validator. Justification: I used this to validate applications JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) Site auditing tool. Justification: I used this to validate performance, accessibility, best practice and SEO of the application
  - [Wave](https://wave.webaim.org/) - Site accesibility auditor. Justification: I used this to evaluate the applications accessibility

### Libraries

#### Installed Libraries

| Package       | Version        |
| ------------- | ------------- |
| axios |1.6.2 |
| bootstrap | 4.6.0 |
| jwt-decode | 3.1.2 |
| react-bootstrap | 1.6.3 |
| react-chartjs-2 | 3.0.4 |
| react-dom | 18.2.0 |
| react-infinite-scroll-component |6.1.0 |
| react-multi-select-component | 4.3.4 |
| react-router-dom | 5.3.0 |
| react-scripts | 5.0.1 |
| react-scroll | 1.8.9 |
| mui/material | 5.14.20|
| web-vitals | 2.1.4 |




### Home page

The home page of the productivity app features a visually engaging carousel highlighting key app functionalities related to work, study, and fitness. Below the carousel, a welcoming card introduces users to the "Anto-Productivity-App," emphasizing productivity enhancement and efficient task management. For users not logged in, prominent login and signup buttons are provided. The page concludes with a responsive footer displaying contact information and social media links. Implemented using React, the page maintains a cohesive design through React Bootstrap and custom CSS modules. Overall, the home page effectively communicates the app's purpose and encourages user interaction.

<details>
<summary>Home page image</summary>
<img src="documentation/features/home_page.png">
</details>
