async function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    const userMessage = input.value;
    if (!userMessage) return;

    chat.innerHTML += `<p><b>أنت:</b> ${userMessage}</p>`;

    const response = await fetch("https://adamaabide-arabic-ai-chat.hf.space/run/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [userMessage, []] })
    });

    const result = await response.json();
    const botMessage = result.data[0];

    chat.innerHTML += `<p><b>AI:</b> ${botMessage}</p>`;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}
