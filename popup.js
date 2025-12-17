const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: changeBgColor,
        args: [color]
      });
    });
  });
});

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}
