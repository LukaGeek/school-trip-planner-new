'use client';
import { useState } from 'react';

export default function ChatbaseLazyWidget() {
  const [loaded, setLoaded] = useState(false);

  // Load Chatbase script and identify user
  const loadChatbase = async () => {
    if (loaded) return; // already loaded
    setLoaded(true);

    // 1️⃣ Initialize window.chatbase
    if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === 'q') return target.q;
          return (...args) => target(prop, ...args);
        },
      });
    }

    // 2️⃣ Inject Chatbase script
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = 'chatbase-embed';
    script.async = true;
    document.body.appendChild(script);

    // 3️⃣ Fetch user token from your API
    try {
      const res = await fetch('/api/chatbase-token');
      const data = await res.json();
      if (data.token && window.chatbase) {
        window.chatbase('identify', { token: data.token });
      }
    } catch (err) {
      console.error('Chatbase identify error:', err);
    }
  };

  return (
    <button
      onClick={loadChatbase}
      className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      Chat with us
    </button>
  );
}