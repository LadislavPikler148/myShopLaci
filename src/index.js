import { productCatalog, createHeader, collationId} from "./ProductCatalog";
import { addCSSStyleOnElement } from "./elementStyle";
import {createDropdown} from "./createDropdown.js";
import { fetchData } from "./fetchData.js";
(async function() {
  const productData = await fetchData("http://localhost:8080/products.json");
  const categories = await fetchData("http://localhost:8080/categories.json");
  createDropdown(categories);
  productCatalog(productData, categories, 1);
})();
createHeader(document.body, "My E-shop");
addCSSStyleOnElement(
  "div",
  "{border:4px solid #6D6875; padding: 20px; margin-bottom: 16px; display:flex; flex-direction:row-reverse; justify-content:flex-end;}"
);
addCSSStyleOnElement("p", "{padding-left:54px; line-height:36px;}");
addCSSStyleOnElement("img", "{width:160px; height:auto; object-fit:cover;}");
addCSSStyleOnElement("select", "{margin-bottom: 30px;}")
 