import { products } from "../data/products.js";

const productList = products.map((product) => `${product.title} ($${product.price})`).join(", ");

function findProductAnswer(message) {
  const lowerMessage = message.toLowerCase();
  const matchedProduct = products.find((product) => {
    const title = product.title.toLowerCase();
    const tag = product.tag.toLowerCase();
    return lowerMessage.includes(product.category) || lowerMessage.includes(title) || lowerMessage.includes(tag);
  });

  if (!matchedProduct) {
    return null;
  }

  return `${matchedProduct.title} is $${matchedProduct.price}. ${matchedProduct.description} You can find it on the Shop page and add it to your cart.`;
}

export async function sendChatMessage(message, cartItems = []) {
  const lowerMessage = message.toLowerCase();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const productAnswer = findProductAnswer(message);

  let reply = "I can help with Corgi food, toys, grooming, store hours, pickup, and your cart. Try asking about treats, grooming, or today's pickup.";

  if (productAnswer) {
    reply = productAnswer;
  } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    reply = "Hi, welcome to Leo Corgi House. I can help you choose food, toys, grooming kits, or plan a store visit.";
  } else if (lowerMessage.includes("food") || lowerMessage.includes("kibble") || lowerMessage.includes("treat")) {
    reply = "For food, I recommend Corgi Chicken Kibble for daily meals and Tiny Triumph Treats for training rewards.";
  } else if (lowerMessage.includes("toy") || lowerMessage.includes("play") || lowerMessage.includes("zoom")) {
    reply = "For play time, the Zoomies Play Set is the best pick. It has soft fetch toys, a chew rope, and enrichment pieces.";
  } else if (lowerMessage.includes("groom") || lowerMessage.includes("bath") || lowerMessage.includes("coat")) {
    reply = "For grooming, try the Fresh Corgi Coat Spa Kit. It includes shampoo, a brush, towel, and paw balm for thick Corgi coats.";
  } else if (lowerMessage.includes("walk") || lowerMessage.includes("harness") || lowerMessage.includes("leash")) {
    reply = "The Short-Leg Walk Bundle is made for daily strolls. It includes a harness, leash, bags, and pocket treats.";
  } else if (lowerMessage.includes("cart") || lowerMessage.includes("basket")) {
    reply = cartCount > 0 ? `You currently have ${cartCount} item${cartCount === 1 ? "" : "s"} in your cart.` : "Your cart is empty right now. Visit the Shop page to add Corgi picks.";
  } else if (lowerMessage.includes("hour") || lowerMessage.includes("open") || lowerMessage.includes("time")) {
    reply = "Leo Corgi House is open Mon-Sat 9:00-20:00 and Sun 10:00-18:00.";
  } else if (lowerMessage.includes("where") || lowerMessage.includes("location") || lowerMessage.includes("address")) {
    reply = "You can visit us at 123 Cozy Lane, Happy Town.";
  } else if (lowerMessage.includes("pickup") || lowerMessage.includes("delivery")) {
    reply = "Local pickup is free today. Delivery can be arranged after checkout.";
  } else if (lowerMessage.includes("recommend") || lowerMessage.includes("best")) {
    reply = `Popular Corgi picks: ${productList}. For a first order, I would choose kibble, treats, and the coat spa kit.`;
  }

  await new Promise((resolve) => window.setTimeout(resolve, 450));
  return { reply };
}
