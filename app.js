//external modules
const express = require('express');
//core modules
const path = require('path');
//Local modules
//topic express routers
const { hostRouter } = require('./routes/hostHandler');
const userRouter = require('./routes/userRouter');
const rootDir = require('./utilities/pathUtil');
const app = express();
//for ejs 
app.set('view engine', 'ejs');
//views folder ki files me apply
app.set('views','views');
//to make public folder accessible from outside by default all the folders are private
app.use(express.static(path.join(rootDir, 'public')));
//to convert url parameters into jsonobject
app.use(express.urlencoded({extended:true}));
app.use("/store",userRouter);
app.use("/host", hostRouter);
app.get('/', (req, res) => {
  res.redirect('/store');
})
const { PageNotFound } = require('./Controllers/404');
app.use(PageNotFound);
const PORT=3001;
app.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
});

// use is for all matches wildcard type nut get/post etc for exact match