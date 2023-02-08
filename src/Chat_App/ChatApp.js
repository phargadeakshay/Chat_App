import React from "react";
import { useState } from "react";
import classnames from "classnames";
const ChatApp = () => {
    const Akshay = "Akshay";
    const Vishal = "Vishal";
    const users = [Akshay, Vishal];
    const [messages, setMessages] = useState([
        {
          user: Akshay,
          text: "Hey!!",
        },
        {
          user: Vishal,
          text: "Hello",
        },
      ]);
  return (
    <div className="container mx-auto mt-12 flex">
    {users.map((user) => (
      <div>
        <p>User {user}</p>
        <div
          style={{ width: "375px", height: "600px" }}
          className="border border-gray-300 bg-gray-100 overflow-y-auto"
        >
          <div className="h-full flex flex-col">
            <div className="pb-2 grow flex flex-wrap items-end">
              <div className="w-full">
                {messages.map((message) => (
                  <div
                    className={classnames("px-3 py-1 flex w-full", {
                      "justify-start": message.user !== user,
                      "justify-end": message.user === user,
                    })}
                  >
                    <div
                      className={classnames("px-4 py-2 rounded", {
                        "bg-white": message.user !== user,
                        "bg-green-200": message.user === user,
                      })}
                    >
                      <p className="text-sm font-semibold">{message.user}</p>
                      <p className="text-base">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  );
};

export default ChatApp;
