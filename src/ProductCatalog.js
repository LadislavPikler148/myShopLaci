import { isDeclaration } from "babel-types";

export const productCatalog = (products, categories, value) => {
  products.forEach(item => {
    const { name, price, thumbnail, categoryId } = item;
    appendItemFromCatalog(document.body, thumbnail, name, categoryId, price);
  });
  categories.forEach(item => {
    const { name, id } = item;
    if (id == value) {
      var categoryId = item.name;
      console.log(categoryId);
    }
  });
};

export const appendItemFromCatalog = (appendTo,img,itemName, category ,itemPrice) => {
  let newElement = document.createElement("div");
  let newP = document.createElement("p");
  newP.innerHTML = `Názov produktu: ${itemName} <br> Product category: ${category} <br> Cena: ${itemPrice} &euro;`;
  appendTo.appendChild(newElement);
  newElement.appendChild(newP);
  let newImgElement = document.createElement("img");
  newImgElement.setAttribute("src", img);
  newElement.appendChild(newImgElement);
};

export const createHeader = (appendTo, text) => {
  let newHeaderElement = document.createElement("h2");
  newHeaderElement.innerText = text;
  appendTo.appendChild(newHeaderElement);
};

export const collationId = (productObject) => {
  for (let attr in productObject) {
    console.log(productObject)
  }
}