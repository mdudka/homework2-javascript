## Homework part 2

This is a simple project that demonstrates interaction with Post entities from [Go REST](https://gorest.co.in/) 
open api. Simple error handling is implemented using the APIError class, which extends the built-in Error clas
You can add fetch all Posts, fetch one Post by ID or create own Post and send it to API with POST request.
In order for the created posts to be stored in the API, an access token is used.

I understand that access tokens are private and should not be shared in open sources.
However, for the sake of speed and convenience, I have saved my own token
in the PostsManager.js file as the apiToken constant.
You can also [create your own token](https://gorest.co.in/my-account/access-tokens) 
and replace the value of the apiToken constant with it.


### How to start
1. Clone repository
2. Optionally [get your access token](https://gorest.co.in/my-account/access-tokens) and change it in 
PostsManager.js or skip this part to continue with mine.
3. Open index.html using some web server, for example, 
LiveServer in VSCode (simply opening it in a browser won't work due to the module syntax).
