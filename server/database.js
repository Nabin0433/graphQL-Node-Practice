const mongoose = require("mongoose");
const mongodb_uri = 'mongodb+srv://user:rootUser123@cluster0.2sixxpy.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.info(
            `Mongodb connected succesfully 🙅🙅`
        );
    })
    .catch((error) => {
        console.log(error);
        console.error(
            "Error : Mongoose cannot be connected at this moment due to no internet or poor connection ❌ ❌ ❌ ❌"
        );
    });

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose is disconnected due to app termination ❌ ❌ ❌ ❌");
    });
    process.exit(0);
});