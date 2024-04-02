"use strict";

const User = require("./models/userModel");
const { Products, ProductCategories } = require("./models/productsModel");

module.exports = async () => {
  /* Exampla Data */
  // Deleted All Records:
  await User.deleteMany().then(() => console.log(" - User Deleted All"));
  await ProductCategories.deleteMany().then(() =>
    console.log(" - ProductCategories Deleted All")
  );
  await Products.deleteMany().then(() =>
    console.log(" - Products Deleted All")
  );

  // Admin:
  const admin = await User.create({
    email: "admin@admin.com",
    password: "Admin@1234",
    firstName: "Admin",
    lastName: "Admin",
  });

  
  // Example Category:
  const categories = [];

  for (let key in [...Array(20)]) {
    const category = await ProductCategories.create({
      name: `Decor ${key}`,
    });
    categories.push(category);
  }
  const products = [];
  // Example Product:
  for (let key in [...Array(20)]) {
    const randomCategoryIndex = Math.floor(Math.random() *  categories.length);


    const product = await Products.create({
      category: categories[randomCategoryIndex]._id,
      title: `home decor ${key}`,
      description: "home decor",
      price: 5 * key,
      discountPercentage: (200 * 20) / 100,
      rating: 4,
      stock: key,
      brand: "Ikea",
      thumbnail:
        "https://i.pinimg.com/564x/79/02/08/790208203c5dd25c12db3029f46882f4.jpg",

      images: [
        "https://i.pinimg.com/564x/86/5f/6a/865f6a1a05da0cc8d4194e978755d90a.jpg",
        "https://i.pinimg.com/564x/b6/e6/2a/b6e62a222dcb39b8ee6b5a460afe6a98.jpg",
        "https://i.pinimg.com/564x/ea/c8/5d/eac85d4a2e50550ae71a5b8be522254c.jpg",
      ],
    });
    products.push(product)
  }
  console.log("* Synchronized *");
};
