const priceRegex = /([€$£])\s?(\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?)/g;

const conversionRates = {
  "$": 0.85,
  "€": 1,
  "£": 1.15
};

function convertPrice(match, symbol, amount) {
  const cleanAmount = parseFloat(amount.replace(/,/g, ''));
  const rate = conversionRates[symbol];
  if (rate) {
    const converted = (cleanAmount * rate).toFixed(2);
    return `${symbol}${amount} → €${converted}`;
  }
  return match;
}

function processTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.match(priceRegex)) {
      node.nodeValue = node.nodeValue.replace(priceRegex, convertPrice);
    }
  }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  processTextNodes();
} else {
  document.addEventListener("DOMContentLoaded", processTextNodes);
}
