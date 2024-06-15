Hello everyone, and today I'm excited to share my final project with you—a website dedicated to pet turtle care. The website consists of several pages: Home, Turtle Basics, Habitat Setup, Feeding, Turtle Health, Species, Turtle Stories, Turtle News, About Us, Contact Us, FAQ, Turtle Articles, and Login/Register. Most of the pages utilize React state management and event handling. I have also implemented CSS responsive layouts on most pages to ensure a seamless user experience across different devices.

Here is a detailed introduction to each page and its features:

Home: The home page uses dynamic routing to navigate between individual turtle species introduction pages and the main homepage.
Turtle Basics: This page provides basic information about turtles, featuring expandable sections to display various details, making the content organized and tidy.
Habitat Setup: I integrated the Leaflet library with an external map API on this page. Users can click on the map to view the native habitats and information of various turtles. The chart below shows the optimal temperature and humidity for turtle survival.
Feeding: This section provides different feeding plans and food types suitable for various turtle species. Users can input the turtle's name and age to view relevant information.
Health: Users can select health conditions of turtles for diagnosis. The chart below shows the normal weight change of turtles over time.
Species: This page focuses on introducing turtle species unique to China. I used drag-and-drop functionality here; users can drag turtles into a designated area to view detailed information, or they can click or search using the search bar.
Turtle Stories: Users can share their turtle stories and read others' stories, with the option to like and interact.
Articles: Similar to the stories page, users can publish and read articles about turtles.
News: This page, implemented using TypeScript for React components, enhances type safety. It displays the latest news and events related to turtles.
About Us: This section includes my personal introduction and the motivation behind this platform. I also added the Canvas API to draw illustrations or dynamic graphics of turtles, enhancing interactivity. User reviews are displayed in a carousel format.
FAQ: Users can search for and view frequently asked questions and answers about turtles.
Contact Us: Users can submit their feedback and questions here.
Login/Register: Currently, this page has only the front-end design without backend integration.
Thank you for listening. I hope this platform will be helpful to turtle enthusiasts.
Turtle Care Sharing Website
Welcome to the Turtle Care Sharing website—a dedicated platform for pet turtle enthusiasts. This project aims to provide comprehensive information and resources for turtle lovers around the world.

Table of Contents
Project Overview
Pages and Features
Home
Turtle Basics
Habitat Setup
Feeding
Turtle Health
Species
Turtle Stories
Articles
News
About Us
FAQ
Contact Us
Login/Register
Technologies Used
Installation
Usage
License
Project Overview
The Turtle Care Sharing website is built using React and TypeScript to ensure a dynamic and type-safe web application. The project consists of multiple pages, each designed to provide valuable information and features related to turtle care. CSS responsive layouts are implemented across most pages to ensure a seamless user experience on various devices.

Pages and Features
Home
The home page uses dynamic routing to navigate between individual turtle species introduction pages and the main homepage.

Turtle Basics
Provides basic information about turtles with expandable sections to display various details, making the content organized and tidy.

Habitat Setup
Integrated with the Leaflet library and an external map API, this page allows users to click on the map to view the native habitats and information of various turtles. A chart displays the optimal temperature and humidity for turtle survival.

Feeding
Offers different feeding plans and food types suitable for various turtle species. Users can input the turtle's name and age to view relevant feeding information.

Turtle Health
Allows users to select health conditions of turtles for diagnosis. Includes a chart showing the normal weight change of turtles over time.

Species
Focuses on introducing turtle species unique to China. Features drag-and-drop functionality; users can drag turtles into a designated area or click/search to view detailed information.

Turtle Stories
Users can share their turtle stories and read others' stories, with the option to like and interact.

Articles
Similar to the stories page, users can publish and read articles about turtles.

News
Implemented using TypeScript for React components, enhancing type safety. Displays the latest news and events related to turtles.

About Us
Includes a personal introduction and the motivation behind this platform. The Canvas API is used to draw illustrations or dynamic graphics of turtles, enhancing interactivity. User reviews are displayed in a carousel format.

FAQ
Users can search for and view frequently asked questions and answers about turtles.

Contact Us
Allows users to submit their feedback and questions.

Login/Register
Currently, this page has only the front-end design without backend integration.

Technologies Used
React
TypeScript
Leaflet (Map API)
Canvas API
Recharts (Chart Library)
CSS (Responsive Layouts)
Installation
Clone the repository:

git clone https://github.com/oceansource1/turtle-care-website.git
Navigate to the project directory:

cd turtle-care-sharing
Install dependencies:

npm install
Usage
Start the development server:

npm start
Open your browser and navigate to:

http://localhost:3000
