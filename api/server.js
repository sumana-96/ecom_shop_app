const express = require("express");
const cors = require('cors');
const router = express.Router();
const product = require("./routes/product.js");
const user = require("./routes/user.js");
const app = express();
app.use(cors());
app.use("/", product);
app.use("/", user);
app.use(express.json());


const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "E-Shop API",
      version: "1.0.0",
      description: "E-Shop API Information",
      contact: {
        name: "me",
      },
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },

  apis: ["server.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { explorer: true })
);

/**
 * @swagger
 * /list_products:
 * get:
 *   description: Use to request all products
 *   responses:
 *    '200':
 *     description: A successful response
 */

app.listen(4000);

module.exports = router;
