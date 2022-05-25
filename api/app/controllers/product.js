const express = require("express");
require('../helpers/common');
const { PrismaClient } = require("@prisma/client");
const { HttpStatus } = require("../../lib/constants");
const app = express();
app.use(express.json());
const prisma = new PrismaClient();
// const { validateToken } = require("../../config/JWT");
const createProduct = app.post("/create_product", async function (req, res) {
    try {
      const message = "product created successfully";
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      })
      const userId = user.id
      const { name, description, price, ratings, brand } = req.body;
      const createdProduct = await prisma.product.create({
        data: {
          name: name,
          description: description,
          price: parseInt(price),
          ratings: parseInt(ratings),
          brand: brand,
          user: { connect: { id: userId } },
        },
      });
      res.status(HttpStatus.STATUS_CREATED).json({ message });
    } catch (err) {
      console.error(err);
      return res.status(HttpStatus.STATUS_ERROR).json(err);
    }
  }
);

const getProducts = app.get("/list_products", async function (req, res) {
    try {
      const allProducts = await prisma.product.findMany();
      res.status(HttpStatus.
        STATUS_OK).json(allProducts);
    } catch (err) {
      console.log(res)
      res.status(HttpStatus.STATUS_ERROR).json(err);
    }
  }
);

module.exports = {
  createProduct,
  getProducts,
};
