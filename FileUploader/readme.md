It is supposed to be used in conjunction with Ngrok to be able to use it on the internet. First of all, do:

1.  `brew install ngrok`
2.  `npm i`
3.  `npm run dev`, to run `node --watch back/index.js`
4.  `ngrok http 80` or any other port that the local server is listening on
5.  Now, аfter logging in to ngrok, it will throw you a tunnel link to your local server, which you can paste into the address bar of any browser on any computer on the Internet and use the download button to download the files to your computer
