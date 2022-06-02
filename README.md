# Time tracking dashboard

Live version: [![Netlify Status](https://api.netlify.com/api/v1/badges/964e634a-5aac-4505-b0c7-37b8c470e70d/deploy-status)](https://lucky-nougat-bbe19b.netlify.app/)

This is a front-end coding challenge from [Frontend Mentor](https://www.frontendmentor.io).

The page is a dashboard, that presents information from a JSON file.
There are six categories, each one with a custom top label.
A user profile is displayed to the left, along with the options to present the hours tracked in different periods of time.

The layout is responsive and was created with a grid container.
There is a single media breakpoint, at 375px.
For the style, I used SASS, because I wanted to experiment creating a styled component in React with only SASS.
My overall feeling about this is that, well, there are much better options than the one I've chosen.
Nonetheless, it was a great project to get better acquaintanced with SASS: the separation in multiple files for each component, nesting, mixins and base style helped creating a solid structure that I felt could be easily expanded for bigger projects.
React-wise, there is not much going on in here, just the changing of the periods of time to display, which is handled by a single stateful variable. 
