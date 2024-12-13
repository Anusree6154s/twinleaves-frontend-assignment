export const fetchData = async (page) => {
  try {
    const res = await fetch(
      "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products?page=" +
        page
    );
    const data = await res.json();
    const products = data.products;

    // const res2 = await fetch("https://picsum.photos/200/?blur");
    // const image = res2.url;

    const prettifiedProducts = products.map((product, index) => {
      return {
        id: product.sku_code,
        img: "https://fastly.picsum.photos/id/606/200/200.jpg?blur=5&hmac=yPzw2cEREt2W8cuwXRKY0FNCvlGfKq6uY1lVLUSer_o",
        name: product.name,
        price: product.mrp.mrp,
        category: product.main_category,
      };
    });

    console.log("prettifiedProducts", prettifiedProducts);
    return {
      totalItems: data.totalResults,
      items: prettifiedProducts,
    };
  } catch (error) {
    console.log(error);
  }
};
