// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
const express = require("express");
const {
  routerLogin,
  routerRegister,
  routerHomePage,
  routerDetailBerita,
  routerHalamanVideo,
  routerMovieNews,
  routerSerialNews,
  routerFeedback,
  routerAdmin,
  routerAdminUpdate,
} = require("./routers");
const { errDataNotFound } = require("./middleware/errorHandling");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views",["views/pages", "views/admin/pages"]);
app.use(express.static("views"));

//Halaman Homepage
app.use("/", routerHomePage, errDataNotFound);
//Halaman Login
app.use("/login", routerLogin, errDataNotFound);
//Halaman Register
app.use("/register", routerRegister, errDataNotFound);
//Halaman Detail Berita
app.use("/detailBerita", routerDetailBerita, errDataNotFound);
//Halaman video
app.use("/video", routerHalamanVideo, errDataNotFound);
//Halaman Movie News
app.use("/movienews", routerMovieNews, errDataNotFound);
//Halaman Serial News
app.use("/serialnews", routerSerialNews, errDataNotFound);
//Halaman Feedback
app.use("/feedback", routerFeedback, errDataNotFound);

//Halaman Admin
//Halaman Login Admin
app.use("/adminlogin", routerAdmin)
//Halaman Update Admin
app.use("/adminupdate", routerAdminUpdate)


//Bad Request 404
app.get("*", function (req, res) {
  res.render("error.ejs", {
    error: {
      message: req.url + "ini tidak tersedia bro",
      data: 404,
    },
    err404: "404 Tidak Ditemukan",
  });
});

app.listen(port, () => {
  console.log(`Selamat datang di Filmen : ${port}`);
});
