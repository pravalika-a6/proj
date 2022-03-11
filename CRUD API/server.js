let express = require("express");
let bodyparser = require("body-parser");
let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//use login module
app.use("/login",require("./login/login"));
app.use("/register",require("./register/register"));
// app.use("/update",require("./update/update"));
// app.use("/delete",require("./delete/delete"));
app.use("/fetch",require("./fetch/fetch"));

app.listen(3000);
console.log("server listening the port no.3000")