const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://arvindbarhi7:I1amPABL38hfS2lt@cluster0.vu0yrtk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((connection) => {
    dbConnection = true;
    console.log("Connected to database");
  });
