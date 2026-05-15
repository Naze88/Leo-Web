import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { sendChatMessage } from "../services/chatApi.js";

const quickPrompts = [
  "What food is best?",
  "Grooming help",
  "Store hours",
];

function ChatBot({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi. I am Leo Bot. Ask me about Corgi food, toys, grooming, pickup, or your cart.",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);

  const submitMessage = async (messageText = draft) => {
    const text = messageText.trim();

    if (!text || isLoading) {
      return;
    }

    setDraft("");
    setMessages((items) => [...items, { role: "user", text }]);
    setIsLoading(true);

    try {
      const { reply } = await sendChatMessage(text, cartItems);
      setMessages((items) => [...items, { role: "bot", text: reply }]);
    } catch {
      setMessages((items) => [
        ...items,
        { role: "bot", text: "Sorry, the chat service is not available right now. Please try again soon." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitMessage();
  };

  return (
    <section className={`chatbot${isOpen ? " open" : ""}`} aria-label="Leo Corgi House chat bot">
      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-brand">
              <div className="chat-avatar">
                <Bot />
              </div>
              <div>
                <p className="eyebrow">Auto support</p>
                <h2>Leo Bot</h2>
                <span>Corgi care assistant</span>
              </div>
            </div>
            <button className="icon-button" type="button" aria-label="Close chat" onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          <div className="chat-status">
            <Sparkles />
            <span>Online now</span>
            <span>{cartCount} in cart</span>
          </div>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`chat-row ${message.role}`} key={`${message.role}-${index}`}>
                {message.role === "bot" && (
                  <span className="chat-mini-avatar">
                    <Bot />
                  </span>
                )}
                <div className={`chat-message ${message.role}`}>{message.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-row bot">
                <span className="chat-mini-avatar">
                  <Bot />
                </span>
                <div className="chat-message bot typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="quick-prompts">
            {quickPrompts.map((prompt) => (
              <button type="button" onClick={() => submitMessage(prompt)} key={prompt}>
                {prompt}
              </button>
            ))}
          </div>

          <form className="chat-form" onSubmit={onSubmit}>
            <input
              aria-label="Message Leo Bot"
              placeholder="Ask Leo Bot..."
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
            />
            <button className="icon-button" type="submit" aria-label="Send message">
              <Send />
            </button>
          </form>
        </div>
      )}

      <button className="chat-launcher" type="button" aria-label="Open chat bot" onClick={() => setIsOpen((value) => !value)}>
        {isOpen ? <X /> : <MessageCircle />}
        {!isOpen && <span>Chat</span>}
      </button>
    </section>
  );
}

export default ChatBot;
