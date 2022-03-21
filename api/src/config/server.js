const express = require("express");
const router = express.Router();
// const product = require('../routes/product.router');
const productApi = require("../api/product.api.js");

//  router.use('/', product);
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");

const saltRounds = 10;

const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("./JWT");

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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));
app.use(cookieParser());
app.use(bodyParser.json());

/**
 * @swagger
 * /list_products:
 * get:
 *   description: Use to request all products
 *   responses:
 *    '200':
 *     description: A successful response
 */

app.post("/signup", body("password").isLength({ min: 6 }),
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const message = "user created successfully";
      const {
        email,
        password,
        confirmPassword,
        first_name,
        last_name,
        isAdmin,
      } = req.body;

      if (password !== confirmPassword) {
        return res.json("password not matched");
      } else {
        const hash = await bcrypt.hash(password, saltRounds);
        const createdUser = await prisma.user.create({
          data: {
            email: email,
            password: hash,
            first_name: first_name,
            last_name: last_name,
            isAdmin: isAdmin,
          },
        });
        res.status(201).json(message);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

app.post("/login", async function (req, res) {
  try {
    const message = "user logged in successfully";
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const accessToken = createTokens(user);
        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
        });
        res.status(200).json({ message });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.post("/create_product", validateToken, async function (req, res) {
  try {
    const message = "product created successfully";
    const userId = req.body.user;
    const { name, description, price, ratings, brand } = req.body;
    const createdProduct = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        ratings: ratings,
        brand: brand,
        user: { connect: { id: userId } },
      },
    });
    res.status(201).json({ message });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

app.get("/list_products", validateToken, async function (req, res) {
    try {
      const allProducts = await prisma.product.findMany();
      res.status(200).json(allProducts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // productApi.getProducts
);

app.listen(3000);

module.exports = router;
