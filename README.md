# Travel Portugal


## Index
- [Project description](#project-description)
- [UX](#ux)
- [Features](#features)
- [Wireframes](#wireframes)
- [Technologies](#technologies-used)
- [Wireframes](#wireframes)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

# Project description
Travel Portugal is a one page application designed to help users plan their next holidays and discover several touristic activities in Portugal.These activities include: Accommodations, touristic attractions, restaurants, cafes, parks, bars and clubs. Users have available a list of recommendations of the most known places to visit in Portugal in order to help planning future holidays, with a brief description of each place. Users can use the interactive map to search for all activities available on any city in portugal with more detailed information where it'll show all the information such as location, address, site and contact. 

## UX
### Who is it for ? 
- English users for now.
- Travel agencies that look to gather more information to create their holiday bundles.
- Tourists that want to plan their holidays or already booked a holiday to Portugal.
- Users curious about what Portugal has to offer. 

### User Stories
- As a tourist or Travel Agency, I want to find easily the information I need.
- As a general user, I want a contact option, in case I need more detailed information.
- As a tourist, I want to see recommended options to have an idea where to go or a start point to plan my holidays.
- As a travel agency, I want to have information on all attractions or any specific activities in a certain location.
- As a tourist, I want to be able to find any commodities available to me on a specific city I want to visit.


## Features
### Existing Features
- Navbar 
    - Allows user to navigate easily through the different sections of the page.
- Weather 
    - Allows the user to know the current weather in the capital.
- Features section 
    - Gives a brief introduction on what the user can expect and search for using the interactive map, without overloading the user with a lot of information.
- Recommendations section 
    - A Carousel that shows the top 10 most visited attractions in Portugal, with a brief description on each one, easy to navigate, with arrows below the carousel or in a more interactive way, by dragging and moving the slides to pass through different attractions.
- Interactive map 
    - Using Google maps API, provides de user a map centered in Portugal. The user here is able to search for any city and any types of activities using the dropdown menu. 
- Autocomplete 
    - Integrated in the City input box, it helps the user choose the correct location when they type in what they're looking for.    
- Contact icon
    - Provides a simple way to contact Travel Portugal with a single click. It will show a simple form where the user can submit-request for information. User can close the form, and return to the page and keep browsing. EmailJS was used for the email send functionality.
- Footer - Provides links to the relevant social websites.
## Wireframes

## Technologies Used

- **HTML** 
    - Used to create the main structure of the website.

- **CSS** 
    - Used to style and layout the website.

- [Bootstrap](https://getbootstrap.com/)
    - Framework used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Font Awesome](https://fontawesome.com/)
    - All footer icons and contact bubble are from Font Awesome. 

- [Popper.js](https://popper.js.org/) 
    - Used for Navbar 

- [Github Pages](https://pages.github.com/) 
    - Used to host the live website. 

- [Google Fonts](https://fonts.google.com/) 
    - Pacifico and PT Sans Narrow fonts 

- [EmailJS](https://www.emailjs.com/)
    - Adds the ability to send emails from contact form.
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
    - Touch enabled jQuery plugin that lets you create a responsive carousel slider.
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/)
    - Used for the interactive map.

- [OpenWeather API](https://openweathermap.org/api)
    - To display current weather data

## Testing

- **W3C Validation Services**
  - Markup Validation Service - It detected some minor errors that were easily fixed.
  - Link Checker - No errors, all links working properly.
  - CSS Validation service - Only warnings and errors regarding Bootstrap and unknown vendor extensions.

- **Google Audits** - Audit report here

- **Tested Devices**

  - One Plus 7 pro
  - Fire HD 10
  - Ipad
  - Iphone 11
  - Macbook Pro 13"
  - Windows Desktop

- **Browsers**

  - Edge
  - Chrome
  - Firefox
  - Safari


**Non-automated testing:**
For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Links:

    Checked all links especially the footer social icons, to make sure they were opening on a new tab correctly.

**Used dev tools extensively** to be able to test the website on all devices with portrait and landscape resolutions. It was a challenge to set it correctly, especially when there's so many using different stock images, with different sizes aspect ratios and many different devices/resolutions. The use of media queries was the main key here.  

## Deployment

This page is hosted in GitHub Pages

    Log into GitHub.
    Go to settings and scroll down to GitHub Pages section.
    Select as a source master branch.
    The page is now automatically refreshed and the project is deployed.
    To access the project scroll down again to GitHub Pages section and click on the provided link.
    Link also at top of this Readme file.

How To Run This Project Locally

    Go to Travel Portugal repository page.
    Click on "Clone or download" green button.
    Copy the URL to the repository.
    Open the terminal in your local IDE.
    Choose the working directory where you would like to have the cloned repository.
    Type git clone, and add the URL you copied from Github: git clone https://github.com/brainvibe/travel-portugal.git .
    Press Enter and your local clone will be created.



## Credits

### Content
- The text from *Recommendations* section was copied from [Google Travel](https://www.google.com/travel/)

### Media

- Recommendation section Photos were download from [Google Travel](https://www.google.com/travel)



### Acknowledgements

- Auto-hide collapse menu code from [here](https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click).
- Smooth Scrolling from [W3schools](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp).
- Opaque overlay from the Whiskey Drop Code institute mini-project.
- EmailJS implementation from Code institute MailJS lesson.

As usual I want to thank my mentor *Victor Miclovich* for his great knowledge and experience with valuable feedback in our mentoring sessions.

## Disclaimer
### All content for educational use only.

