import React, { useState } from 'react';
    import { Configuration, OpenAIApi } from 'openai';

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const AIAssistant = () => {
      const [messages, setMessages] = useState([]);
      const [input, setInput] = useState('');

      const sendMessage = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        try {
          const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: input,
            max_tokens: 150,
          });

          const assistantMessage = response.data.choices[0].text.trim();
          setMessages([...newMessages, { sender: 'assistant', text: assistantMessage }]);
        } catch (error) {
          console.error('Error fetching response from OpenAI:', error);
        }
      };

      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">AI Assistant</h2>
          <div className="mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'assistant' ? 'text-blue-500' : ''}`}>
                <strong>{msg.sender === 'assistant' ? 'Assistant:' : 'You:'}</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 border rounded-l"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-r">
              Send
            </button>
          </div>
        </div>
      );
    };

    export default AIAssistant;
