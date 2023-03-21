document.getElementById("generate-reading").addEventListener("click", function() {
  const hexagram = generateHexagram();
  const hexagramNumber = getHexagramNumber(hexagram);
  const [hexagramName, hexagramDescription] = getHexagramInfo(hexagramNumber);

  let resultText = `<strong>Hexagram #${hexagramNumber}: ${hexagramName}</strong><br><br>${hexagramDescription}`;

  // Check for changing lines and generate a new hexagram
  if (hexagram.some(line => line === 6 || line === 9)) {
      const changedHexagram = generateChangedHexagram(hexagram);
      const changedHexagramNumber = getHexagramNumber(changedHexagram);
      const [changedHexagramName, changedHexagramDescription] = getHexagramInfo(changedHexagramNumber);

      resultText += `<br><br><strong>Changed Hexagram #${changedHexagramNumber}: ${changedHexagramName}</strong><br><br>${changedHexagramDescription}`;
  }

  document.getElementById("result").innerHTML = resultText;
});
