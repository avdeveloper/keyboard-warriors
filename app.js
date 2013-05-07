var express = require("express"),
    app = module.exports = express();

app.use(express.static("public"));
app.use(express.bodyParser());
app.engine(".html", require("ejs").__express);
app.set("views", __dirname + "/public");
app.set("view engine", "html");

app.get("/", function (req, res) {
  res.render("index");
});


if (!module.parent) {
  var port = process.env.PORT || 8080;
  app.listen(port);
  console.log("Express app started on port %s", port);
}
