const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8080
var cors = require('cors')


app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


const routes = {
  book: require("./routes/book"),
  author: require("./routes/author")
}

app.use("/book", routes.book)
app.use("/author", routes.author)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
