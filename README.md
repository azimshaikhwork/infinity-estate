00:00 - Intro
02:42 - Project preview
07:57 - Install React js and Tailwind CSS and create the first template
22:13 - Create pages and routes
28:13 - Create Header component 
44:58 - Create and run the server 
54:38 - Connect to database 
01:05:32 - Create user model
01:12:25 - Create a test api route { server and client servers are different initially so here we refactored the structure andmade things more accessable}
01:22:35 - Create sign up API route {you never used the json middlewareand i guess its still validatin against shcema no you wrote singup instead of signup silly right yeah that was an error but the main was actually you left a space after /auth so the route was broken you made schema without using schema from mongoose os ti was and error
hash passwords before storing it in dbs 
so you cannot send hashed password when you made the key as password pass its reference}

01:40:28 - Create a middleware and a function to handle possible errors{ tp many routes will have try and catch so itll become repetitive so we put it in middleware i fuck up big time in many of the cases learn writing pro-efficient code}
01:50:03 - Complete sign up page Ul {tailwind is easy it just needs to be used to it}
01:58:55 - Complete sign up page functionality{
    here [e.target.id] is  dynamic jey and we use thisto make code easier cause spread keeps data and on change detects changes so [] takes the id of whatever is changed
    using fetch learn axios
    writing proxy for cross connection communication in vite config.js
    export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false,
      },
    },
  },
  plugins: [react()],
})

}
02:15:53 - Create sign in API route
02:33:40 - Complete sign in page functionality{so we did the functionality and then caught an unknown error the nwe had to switch to try and catch casue the error was not defined on the backend}
02:38:51 - Add redux toolkit
02:53:27 - Add redux persist
03:00:01 - Add Google OAuth functionality
03:27:54 - Update the header and make the profile page private
03:36:09 - Complete profile page Ul
03:43:58 - Complete image upload functionality
04:11:40 - Create update user API route
04:28:41 - Complete update user functionality 
04:47:15 - Add delete user functionality
04:57:08 - Add sign out user functionality
05:02:36 - Add create listing API route
05:16:29 - Complete create listing page Ul
05:41:55 - Complete upload listing images functionality 
06:09:38 - Complete create listing page functionality 
06:36:55 - Create get user listings API route
06:44:38 - Complete show user listings functionality
07:00:06 - Complete delete user listing functionality
07:09:14 - Create update listing API route
07:16:55 - Complete update listing functionality 
07:33:18 - Add image slider to the listing page
07:52:34 - Complete listing page
08:05:10 - Add contact landlord functionality to the listing page
08:27:53 - Create search API route
08:45:07 - Complete header search form functionality
08:53:41 - Create search page Ul
09:09:43 - Add onChange and onSubmit functionality to the search page
09:33:29 - Create the listing item component and show listings
10:05:20 - Add show more listings functionality
10:14:00 - Complete home page
10:39:04 - Complete about page
10:42:11 - Deploy to render
