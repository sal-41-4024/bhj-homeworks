class Chat {
    #chat_widget_messages;
    #message_container;

    #randomMessages = [
            "Линия занята",
            "Напишите позже",
            "Попробуйте ещё"
        ];

    constructor(chat_widget) {
        this.#chat_widget_messages = chat_widget.querySelector("#chat-widget__messages");
        this.#message_container = chat_widget.querySelector(".chat-widget__messages-container");
    };

    #getRandomMessage() {
        const index = Math.floor(Math.random() * this.#randomMessages.length);
        return this.#randomMessages[index];
    }

    #getTime() {
        return new Date().toLocaleTimeString();
    }

    #generateMessageHTML (sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.className = sender === "client" ? "message message_client" : "message";

        const timeDiv = document.createElement("div");
        timeDiv.className = "message__time";
        timeDiv.textContent = this.#getTime();

        const textDiv = document.createElement("div");
        textDiv.className = "message__text";
        textDiv.textContent = text;

        messageDiv.appendChild(timeDiv);
        messageDiv.appendChild(textDiv);
        this.#chat_widget_messages.appendChild(messageDiv);
        this.#message_container.scrollTop = this.#message_container.scrollHeight;
    }

    sendMessage(text) {
        this.#generateMessageHTML("client", text);
    }

    receiveReply() {
        this.#generateMessageHTML("bot", this.#getRandomMessage());
    }
}


const open = document.getElementsByClassName("chat-widget__side")[0];
const chat_widget = document.getElementsByClassName("chat-widget")[0];
const chat_widget_input = document.getElementById("chat-widget__input");

const chat = new Chat(chat_widget);

open.addEventListener("click", () => {
    chat_widget.classList.add("chat-widget_active");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        chat.sendMessage(chat_widget_input.value);
        chat.receiveReply();
    };
});