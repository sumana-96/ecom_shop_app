// const {express} = require("express");
const { PrismaClient } = require("@prisma/client");
// const app = express();
// app.use(express.json());
const prisma = new PrismaClient();

// const createProduct = async function (req, res) {
//       console.log(req.body)
//       console.log('body ====', req.body)

//       const { name, description, price, ratings } = req.body;
//       console.log('body ====', req.body)
//       const createdProduct = await prisma.product.create({
//               data: {
//                 name: name,
//                 description: description,
//                 price: price,
//                 ratings: ratings,
//                 userId: 2
//               },
//                });

//     //   const createdProduct = await prisma.product.create(req.body);
//       res.status(201).json(createdProduct);
//   }

// const getProducts= async function (req, res) {
//     try {
//         const allProducts = await prisma.product.findMany();
//         res.status(200).json(allProducts);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//   }

// module.exports = {
//   createProduct,
//   getProducts
// }
