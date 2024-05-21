<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Dantalian5/devjobs-web-app">
    <img src="./public/favicon/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">DevJobs web app</h3>

  <p align="center">
    Frontend Mentor - Devjobs web app solution
    <br />
    <a href="https://github.com/Dantalian5/devjobs-web-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://devjobs-web-app-five.vercel.app/">View Live Demo</a>
    ·
    <a href="https://github.com/Dantalian5/devjobs-web-app/issues">Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](images/screenshot.png)

The project involves a Single Page Application (SPA) featuring an interactive dashboard where users can view a series of job offers displayed on cards. Each card provides basic information about the job and serves as a link to comprehensive details about the job offer, including specific details and application procedures. The job information is stored and managed using Firestore. Additionally, the website allows users to choose between two visual themes: a dark theme and a light theme. Special attention has been given to ensure that the website is fully responsive and accessible, ensuring an optimal user experience across devices of varying sizes and for people with different accessibility needs.
This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

**Code:**

- HTML5 Markdown
- CSS / SCSS
- Javascript / Typescript

**Framework:**

- [React](https://reactjs.org/) - JS library
- Vite (bundler)

**Libraries:**

- React Router
- React Query
- Zustand

**Database:**

- Firestore

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Dantalian5/devjobs-web-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run dev server
   ```sh
   npm run dev;
   ```

- For local server use:

4.  Run (remember to uncoment the code using de local server and comment the firestore code)
    ```sh
    npm run server;
    ```

- For firestore server use:

4.  Updload all data stored on data.json to firestore, using **importdatatofs.cjs** to manually upload. !! Remember to use your own firestore credential :|
    ```sh
    node importdatatofs.cjs;
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ROADMAP -->

## Roadmap

### Users should be able to:

- [x] View the optimal layout for each page depending on their device's screen size
- [x] See hover states for all interactive elements throughout the site
- [x] Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- [x] Be able to click a job from the index page so that they can read more information and apply for the job
- [x] **Bonus**: Have the correct color scheme chosen for them based on their computer preferences.
- [x] Personal **bonus**: add firestore backend **db**.

**For Version 2.0:**

- [ ] Personal **bonus**: add a RESTfull **api** and **db** using node and mongodb as backend.

See the [open issues](https://github.com/Dantalian5/devjobs-web-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Website - [Marcos Valenzuela](https://marcosvalenzuela.netlify.app)
- Frontend Mentor - [@Dantalian5](https://www.frontendmentor.io/profile/Dantalian5)
- Github - [@Dantalian5](https://github.com/Dantalian5)
- Linkedin - [Marcos Valenzuela](https://www.linkedin.com/in/marcos-valenzuela-coding)
- Twitter - [@Dantalian5](https://www.twitter.com/Dantalian5)

Project Link: [https://github.com/Dantalian5/devjobs-web-app](https://github.com/Dantalian5/devjobs-web-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [FrontendMentor](www.frontendmentor.io)
- [Bruno Moleta](https://github.com/brunomoleta) -- Thank you for all your wonderful contributions :) .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Dantalian5/devjobs-web-app.svg?style=for-the-badge
[contributors-url]: https://github.com/Dantalian5/devjobs-web-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Dantalian5/devjobs-web-app.svg?style=for-the-badge
[forks-url]: https://github.com/Dantalian5/devjobs-web-app/network/members
[stars-shield]: https://img.shields.io/github/stars/Dantalian5/devjobs-web-app.svg?style=for-the-badge
[stars-url]: https://github.com/Dantalian5/devjobs-web-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/Dantalian5/devjobs-web-app.svg?style=for-the-badge
[issues-url]: https://github.com/Dantalian5/devjobs-web-app/issues
[license-shield]: https://img.shields.io/github/license/Dantalian5/devjobs-web-app.svg?style=for-the-badge
[license-url]: https://github.com/Dantalian5/devjobs-web-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
