# Artpear
Artpear is a place where local artist can post their art, skills or services. Seekers can post opportunity information and request artists to display work, photograph or perform at these events. Maybe the opportunity is one-time occasion or a running exposition at a gallery.

Technologies:  
Artpear is built with MEAN stack. 
Middelware: Express, Passport, CORS

General approach:  
We created our ERD  and wireframes on Draw.io and stored in Google Drive  
  [Link to ERD](https://drive.google.com/file/d/0BzvvgvDgOCV6LUtMTHF2TmpTdjA/view?usp=sharing)  
  
  [Link to Wireframes](https://drive.google.com/file/d/0BzvvgvDgOCV6TUtSQ2RlMXZhNjQ/view?usp=sharing)  
  
We manged our project with Trello.  

  [User Stories at Trello](https://trello.com/wdiproject39)
  
We tried to take a minimalist approach, to contain scope creep, and to ensure we had a working example that met the basic requirements. Also that it was built in a way that would be easily scalable and that we could build it app and add more to it later.

unsolved problems or major hurdles:
We Have a great project, with great structure. It's all there for the most part. Not everything is hooked up though. Having some issues with routes, that will be quickly solved. Final touches in styling will do much to bring some beauty to this beast.

Installation instructions:
  -Back end deployed on Heroku 
  -Front end is on Github pages
  
User stories:
Can be found at the Trello link provided above. Oh what the hell, here it is  [User Stories at Trello](https://trello.com/wdiproject39)



<Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple).>

URL

<The URL Structure (path only, no root url)>

Methods:

<The request types>

GET | POST | EDIT | DELETE | PUT

URL Params

<If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints.>

Required:

id=[integer]

Optional:

photo_id=[alphanumeric]

Data Params

<If making a post request, what should the body payload look like? URL Params rules apply here too.>

Success Response:

<What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!>

Code: 200 
Content: { id : 12 }
Error Response:

<Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be.>

Code: 401 UNAUTHORIZED 
Content: { error : "Log in" }
OR

Code: 422 UNPROCESSABLE ENTRY 
Content: { error : "Email Invalid" }
Sample Call:

<Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable.>

Notes:

<This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here.>
