import { Injectable } from "@angular/core";
import { Project } from "../model/project.model";
import { of, Observable } from "rxjs";

@Injectable()
export class ProjectsService {
    getProject() {
        return this.projects;
    }

    projects: Project[] = [];

    constructor() {
      this.projects.push({
          id: 10,
          coverPhoto: "assets/img/Redesign_VM/cover3.jpg",
          photoUrl : ["assets/img/Redesign_VM/cover4.jpg", "assets/img/Redesign_VM/2.prototypingArtboard.jpg", "assets/img/Redesign_VM/3.testingjpg.jpg", "assets/img/Redesign_VM/HP_old2.jpg", "assets/img/Redesign_VM/HP_new3.jpg", "assets/img/Redesign_VM/GP_old2.jpg", "assets/img/Redesign_VM/GP_new3.jpg", "assets/img/Redesign_VM/DP_old3.jpg", "assets/img/Redesign_VM/DP_new4.jpg", "assets/img/Redesign_VM/more.jpg"],
          title: "Cohesive Redesign of the platform",
          alt: "Platform Redesign",
          description: ["goal: Develop a fully new design concept based on the best UX & UI practices",
              "Elements created for the project: Home page, Grid Page, Product detail page, Inspiration Articles page, Account area",
              "During this project we followed the 4 steps process: Understanding the user, Ideation, Prototyping, Testing, Repeat.",
              "1. Understanding: First of all, we conducted Market research, Competitor Analysis, and User Research. We defined 2 types of user behaviors and based on them created several variations of the most common user flows on the platform.",
              "2. Ideation: After defining the problem and getting more Understanding, we prepared some design Ideas on the paper and conducted the first cards sorting test, where we asked a user to organize UI blocks and share their opinion.",
              "Before we started the Prototyping phase, we developed our design language with rules of usage for fonts, colors, shapes, and spacing",
              "3. Prototyping: Every week we were working on one particular page, going through all the steps of Understanding, Prototyping, Testing, and Evaluation. The result of each week was a Hi-Fidelity prototype of a new page in Sketch.",
              "4. Testing: We were doing user testing in the Understanding phase and Usability test with the prototypes we Created",
              "5. Next steps: After the design month for MVP 1 we started to develop and AB-test our design. It was the new Home page, Grid page, and Product detail page. It took around a month to develop each page, we had to develop a lot of components from scratch like a new Menu, filters, grid item, pagination, and many more. After that, we started working on the redesign for MVP 2 which was the scope of Inspiration pages, Account Area, Price alert, and Brand page",
              "Team: 3 designers",
              "Timeline: 1 month for MVP 1, overall duration of the project - 1 year" ],
          projectTags : ["User oriented design",
          "Responsive design and layout",
          "E-commerce platform Redesign",
          "Prototyping in Sketch, Photoshop, Invision",
          "Design language development",
          "User testing, usability testing, AB testing",
          "competitor analysis"]
      });
        this.projects.push({
            id: 9,
            coverPhoto: "assets/img/Andeor.jpg",
            photoUrl : ["assets/img/Andeor.jpg", "assets/img/andeor2.jpg", "assets/img/andeor3.jpg" ],
            title: "Dance School web-site design",
            alt: "Dance School Site",
            description: ["Responsive design and layout for a dancing school. Made in dark colours with the use of black and white photos to stand out the chamber theater atmosphere. You will find the main information on the site about dancing classes, groups and projects, reviews, photos, and a contact form."],
            projectTags : ["Dancing school web-design",
            "Responsive design and layout",
            "Dark interface",
            "One page site",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"]
        });
        this.projects.push({
            id: 8,
            coverPhoto: "assets/img/night_guide/cover.jpg",
            photoUrl: ["assets/img/night_guide/cover.jpg",
                "assets/img/night_guide/map.jpg",
                "assets/img/night_guide/details.jpg",
                "assets/img/night_guide/prototype.png"],
            title: "Mobile App design for Night Guide",
            alt: "Mobile App design for Night Guide",
            description: ["goal: Create a design for night life mobile application",
                "Elements created for the project: Name, Logo, Colors, Fonts and Icons",
                "Pages: Prototype made in Figma. User flow starts on a home screen, where a user sees the logo.\
                The user needs to allow access to the maps for the application to be able to search the clubs around\
                users current location and create the route to the choosen club.\
                The interface consists of 2 view screens: on the map and as a list. From both view types user goes to details\
                page by clicking on the club. Details show number of visitors, current event at the club and avarage check.\
                From details page the user can go back and explore more options or click the button to navigate to the club.\
                At this point the session counts as converted. It helps to collect statistics and attract more clubs/restaurans/bars."],
            projectTags: ["MobileAppDesign",
                "MaterialDesign",
                "DarkUI",
                "ClearUserFlow",
                "dontMakeMeThink",
                "Figma"]
        });
        this.projects.push({
            id: 7,
            coverPhoto: "assets/img/Voice_Gift/1.Singers.png",
            photoUrl: ["assets/img/Voice_Gift/1.Singers.png",
                "assets/img/Voice_Gift/2.Info.png",
                "assets/img/Voice_Gift/2.1.png",
                "assets/img/Voice_Gift/3.Confirmation.png",
                "assets/img/Voice_Gift/3.1Video_preview.png",
                "assets/img/Voice_Gift/3.2Payment.png",
                "assets/img/Voice_Gift/4.Payment_confirmed.png",
                "assets/img/Voice_Gift/Homepage.png"],
            title: "Voice gift service",
            alt: "Voice gift service",
            description: ["Online service offers users to buy a personalised voice message: \
            Song, poem or anything else from a professional artists.\
            I wanted to create a simple and interesting design with a clear user flow starting \
            at Introduction to the service on the Home page, choosing the artist and the message \
            and purchasing the gift. I like the filter system that I came up with in this project. \
            We needed to filter artists by gender and type of art.\
            I was able to create a rotation circle filters around the video block.",
            "You can find below the animation showing my idea.\
            I like the playful mood that the design brings and how clean design collaborates \
            with the colours in this project."],
            projectTags : ["desktop application",
            "Purchase user flow",
            "Playful design",
            "Music goods and services",
            "Unusual filter system",
            "Figma"]
        });
        // this.projects.push({
        //     id: 9,
        //     photoUrl : ["assets/img/Newsletter2.jpg"],
        //     title: "Subscribtion Form design and Layout",
        //     alt: "Subscribtion Form",
        //     description: ["Web-design and full implementation of forms for newsletter subscription. \
        //     The task was to create attractive for a user and in line with The EU General Data Protection \
        //     Regulation (GDPR) newsletter subscription form. For the project were designed and developed a \
        //     full page in the platform, section in the footer and a pop-up both for desktop and mobile."],
        //     projectTags : ["Newsletter subscription forms",
        //     "GDPR frced redesign",
        //     "Responsive web-design",
        //     "Pink-grey palette indesign",
        //     "HTML",
        //     "SASS"]
        //  });

        this.projects.push({
            id: 6,
            coverPhoto: "assets/img/filters2.jpg",
            photoUrl : ["assets/img/filters2.jpg"],
            title: "Mobile Filters design and implementation",
            alt: "Mobile Filters",
            description: ["Navigation and filtering among many fashion articles include seasonality, occasion, style filters. Filter panel is designed universally for desktop and smartphone. Front-end implementation also was provided. Filters are always a very interactive section, therefore I liked to work on usability and interaction design at this project. Collapsed/ expanded filters, buttons to increase a list of options to a filter,  active filter status in collapsed and expanded modes and removing active filters globally or from a specific filter. Those behaviors were the biggest things to think about and I like the final result."],
            projectTags : ["Filter’s panel",
                "Intraction design",
                "HTML, CSS, JavaScript",
                "Collapsed filters"
                ]
        });
        this.projects.push({
            id: 5,
            coverPhoto: "assets/img/Style_guide/cover3.jpg",
            photoUrl: ["assets/img/Style_guide/cover3.jpg",
                "assets/img/Style_guide/colors.jpg",
                "assets/img/Style_guide/buttons.jpg",
                "assets/img/Style_guide/typography.jpg",
                "assets/img/Style_guide/screen_breaks.jpg",
                "assets/img/Style_guide/sketch_2.jpg"],
            title: "Style guide development",
            alt: "Style guide development",
            description: ["Problem: No consistency in design",
                "Solution: Created a design library for designers and developers",
                "Elements: Colors, Buttons, Typography, Spaces, Shapes and Forms, Checkboxes, and Radio buttons, icons.",
                "Components: Login form, Toast massages, 404 page, product item.",
                "Result: -Fully functional cloud-based Sketch library for fast hi-fi prototyping by Designers.",
                "-CSS and JS library inside the frontend project for inbuild styles. The element gets CSS style automaticaly based on the aplied HTML classes to this element.",
                "-A landing page with all use cases of elements and components coded and ready to be copied and pasted in the code by developers",
                "Timeline and team: 2 months, 2 interaction engineers"],
            projectTags: ["Design language development",
                "Responsive design",
                "Core components design",
                "Sketch",
                "HTML",
                "SASS",
                "JavaScript",
                "JSP"]
        });
        this.projects.push({
            id: 4,
            coverPhoto: "assets/img/Apps2.jpg",
            photoUrl : ["assets/img/Apps2.jpg"],
            title: "Apps promotion page",
            alt: "Apps promotion page",
            description: ["Company colours combined together led to a nice Pink-yellow gradients. To reach better readability, typography is performed in white colour. To show the surface of 3 phones and bring the floating effect were used depth and perspective design methods. The image with 3 phones was created out of one frontal positioned phone by using transformation of smart objects in Adobe Photoshop.  Design represents the page on desktop and mobile. Design was fully implemented by designer in front-end."],
            projectTags : ["Typography on a background",
            "Pin yellow gradient",
            "Apps web-page design ",
            "Responsive design",
            "Shadows as depth representation",
            "Smart bjects in Photoshop",
            "Sketch",
            "HTML",
            "SASS"]
        });
        // this.projects.push({
        //     id: 5,
        //     photoUrl : ["assets/img/pionica1.jpg", "assets/img/pionica2.jpg", "assets/img/pionica3.jpg", "assets/img/pionica4.jpg"],
        //     title: "Brand identity design",
        //     alt: "Brand identity design",
        //     description: ["Brand identity for a make up stylist. Tender logo represents the power of natural beauty of every customer and inspires the make up artist to create the same fresh and lite looks. As a scope of the work was to create the logo, business cards, certificates for trainings attendance, and gift cards."],
        //     projectTags : ["Polygraph and print design",
        //     "Make up stylist logo",
        //     "Make up stylist business card",
        //     "Pion i brand intentity",
        //     "AdobePhotoshop"]
        // });
        this.projects.push({
            id: 3,
            coverPhoto: "assets/img/phonetemplate2.gif",
            photoUrl : ["assets/img/phonetemplate2.gif", "assets/img/shoppingquest1.jpg", "assets/img/shoppingquest2.jpg"],
            title: "Interaction design",
            alt: "Interaction design",
            description: ["Interaction design played a big role in human-computer interaction. It helps to show the system statuses and reactions which are one of the essentials in usability. The project is a gift finder, that is 4 questions namely gender, occasion, budget, and interests. Design solution preceded a user test and competitor analysis. The name for a project was found with the use of a design thinking methods."],
            projectTags : ["Gift finder design",
            "Interaction design",
            "Design thinking methods",
            "AdobeXD"]
        });
        // this.projects.push({
        //     id: 3,
        //     photoUrl : ["assets/img/invitation2.jpg", "assets/img/Invitation1.jpg", "assets/img/invitation3.jpg"],
        //     title: "Graphic Design",
        //     alt: "Water-colour flowers",
        //     description: ["Water-colour flowers printed on a paper board with design fonts were made for a photo-shooting gift card. Made flower print can be also perfect complement to a wedding invitation or a post card with all the best wishes. There are also collection of item with this print available on sosity6/irinaziborova"],
        //     projectTags : ["Water-colour flowers print",
        //     "Print graphic design",
        //     "Wedding invitation",
        //     "AdobePhotoshop"]
        // });
        this.projects.push({
            id: 2,
            coverPhoto: "assets/img/1.jpg",
            photoUrl : ["assets/img/1.jpg","assets/img/4.jpg", "assets/img/3.jpg","assets/img/2.jpg"],
            title: "E-commerce site Design",
            alt: "E-commerce site Nicetop photo",
            description: ["Nicetop.ru is a Russian e-commerce site for a woman, man, and children fashion. The site is made in white, black and ight green colors. The design foresees a desktop and a mobile layout. The design solution is based on the project prescription from a stakeholder and consists of all core elements and site pages namely Home page, Results page, Brand page, Item detail page, and others. Many complementary sectors like delivery, payment, personal account sections, and a page with size tables were also developed during the project."],
            projectTags : ["Design language development",
            "Responsive design",
            "Core compoents design",
            "Mobile Filters",
            "Grid Item and a quick viw",
            "Home page, Results page, Item detail page design",
            "white interface with black and green accents",
            "E-commerce design",
            "AdobePhotoshop"]
        });
        this.projects.push({
            id: 1,
            coverPhoto: "assets/img/Marcopolo.jpg",
            photoUrl : ["assets/img/Marcopolo.jpg"],
            title: "Hotel web-site design",
            alt: "Marco Polo Hotel site",
            description: ["Marco Polo hotel is a small accomodation in the hart of St. Petersburg, Russia. Every suite is unique and made in Classical Russian design. To reflect this interior in my web-design were used red-wine and gold colours and a corporate monogram."],
            projectTags : ["Hotel web-site",
                "Resonsive design",
                "Classic style",
                "Booking system",
                "Dynamic pages"]
        });
    }
}
