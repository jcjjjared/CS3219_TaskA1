# CS3219_TaskA1

References
1. https://github.com/docker/labs/blob/master/beginner/chapters/setup.md
2. https://docs.docker.com/get-started/
3. https://www.dailysmarty.com/posts/steps-for-deploying-a-static-html-site-with-docker-and-nginx
4. https://phoenixnap.com/kb/docker-nginx-reverse-proxy
5. https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/
6. https://www.thoughts-in-motion.com/articles/creating-a-static-web-server-with-node-js-and-express/

Set up:
1. In the root of the directory, run 'docker-compose up -d --build' - This creates the server and frontend images.
2. Once up, open your browser and go to http://localhost:8081/ - The hello world page should be served by the server as nginx redirects the get request "/" to the server, which serves the static html page.
