## Website Performance Optimization portfolio project

The goal of this project is to optimize a website provided by Udacity, using the skills learned in the Optimization mini-course in the Frontend Developer Nanodegree program.  To succeed, FPS needs to remain at 60 throughout the site, and the Google Page Speed Insights score needs to be above 90 (to start, it was in the 20s).

### How to Run the App
1. Clone or download the project onto your local machine.
2. Ensure you have NodeJS installed. If not, go to [https://nodejs.org](https://nodejs.org) to download and install the appropriate package for your OS.
3. From the command line, run `sudo npm install` to install the npm command.
4. From the command line, run `npm install -g grunt-cli` to install grunt-cli.
5. Move to the `dist` directory within the project in your command line. Type `python -m SimpleHTTPServer 8080`. This will run the website on your local host. If you do not have Python installed, visit [https://www.python.org](https://www.python.org).
6. Open your browser and enter `localhost:8080` to ensure the website is running locally as expected.
7. Download ngrok from [https://ngrok.com/](https://ngrok.com/).
8. Open a new tab or window in your command line, and move to the directory where ngrok was downloaded.
9. Enter the command  `./ngrok 8080`. This tells ngrok to take whatever is at port 8080 and push it online via a tunnel.
10. ngrok should return a status of successful, as well as a url for the online version of the site. Copy this url and paste it into the form at [https://developers.google.com/speed/pagespeed/insights/](Google Page Speed Insights). This should return a score of 90 or above for both mobile and desktop.


#### Grunt
Grunt is used in this application to run common tasks in development, such as uglifying/minifying code and moving CSS inline in certain cases where appropriate. After downloading the application to your local machine, you should not need to run any Grunt commands. The code in dist will be minified for you already. On the development side, it helps create the production code utilizing Gruntfile.js and package.json.

### Optimizations Made
#### index.html
#### views/js/main.js
* Removed document queries from loops where possible in 
#### pizza.html
