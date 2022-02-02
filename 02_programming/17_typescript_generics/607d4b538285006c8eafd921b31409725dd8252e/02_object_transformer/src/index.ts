type Product = {
  productName: string|number[];
  quantity: number;
};
const product: Product = {
  productName: "mjöllnyr",
  quantity: 1,
};
function productTransformer(product: Product): [string, string | number | number[]][] {
  return Object.entries(product);
}
console.log(productTransformer({
  productName: "mjöllnyr",
  quantity: 1,
}))

// Leave the line below for tests to work properly.
export { productTransformer };
