function summarizeText() {
  let text = document.getElementById("inputText").value;
  if (!text.trim()) {
    alert("Please enter some text to summarize!");
    return;
  }

  // Simple summarization: keep first few sentences
  let sentences = text.split(".");
  let summary = sentences.slice(0, 3).join(".") + (sentences.length > 3 ? "..." : "");

  document.getElementById("outputText").value = summary;
}

function copySummary() {
  let summary = document.getElementById("outputText");
  summary.select();
  document.execCommand("copy");
  alert("Summary copied to clipboard!");
}
