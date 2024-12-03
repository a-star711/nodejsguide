// npm -global command, comes with node
// npm --v

// local dep - use it only in this particular project
// npm i <packageName>

// global dependency = use it in any project
// npm i -g <packageName>
// sudo npm i -g <packageName> (mac)


// package.json - manifest file ( stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// dev dependencies ( npm i -D or --save-dev) for packages that are not used in prod  ( like testing stuff,linters & etc)

// Nodemon automatically restarts app / can be installed as dependency or even global dependency so u can use it in all of your projects

// Uninstall packages ( npm uninstall package name ) - > new approach -> delete node_modules -> remove package.lock.json & also remove 
// from dependencies then run new npm i so it installs freshly without the package that u removed from dep 

// useful link explaining all of the basics of package.json https://nodesource.com/blog/the-basics-of-package-json
