document.getElementById("save").addEventListener("click", () => {
    const currency = document.getElementById("currency").value;
    // Use chrome.storage.sync to save the selected currency
    chrome.storage.sync.set({ targetCurrency: currency }, () => {
      alert("Currency saved: " + currency);
    });
  });
  