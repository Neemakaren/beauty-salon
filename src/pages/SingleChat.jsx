import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import { service1 } from "../assets/images";
import { BsFastForward } from "react-icons/bs";

import client, {
  DATABASE_ID,
  COLLECTION_ID_MESSAGES,
  databases,
} from "../appwriteconfig";

import { ID, Query } from "appwrite";

const SingleChat = ({ items }) => {
  const { staffId } = useParams();

  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");

  useEffect(() => {
    getMessages();

      const unsubscribe = client.subscribe(
        [
          `databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES}.documents`,
        ],
        (response) => {
          if (
            response.events.includes(
              "databases.*.collections.*.documents.*.create"
            )
          ) {
            console.log("A MESSAGE WAS CREATED");
            setMessages((prevState) => [response.payload, ...prevState]);
          }

          if (
            response.events.includes(
              "databases.*.collections.*.documents.*.delete"
            )
          ) {
            console.log("A MESSAGE WAS DELETED!!!");
            setMessages((prevState) =>
              prevState.filter(
                (message) => message.$id !== response.payload.$id));
          }
        });
        return () => {
          unsubscribe();
        };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = {
      body: messageBody,
    };

    let response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      ID.unique(),
      payload
    );

    console.log("created", response);
    setMessages((prevState) => [response, ...messages]);

    setMessageBody("");
  };

  const getMessages = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      [Query.orderAsc("$createdAt"), Query.limit(20)]
    );
    setMessages(response.documents);
  };

  const deleteMessage = async (message_id) => {
    databases.deleteDocument(DATABASE_ID, COLLECTION_ID_MESSAGES, message_id);
    // setMessages((prevState) =>
    //   messages.filter((message) => message.$id !== message_id)
    // );
  };

  return (
    <main>
      <hr className="border-[#6B0606] opacity-10 border-[2px]" />
      <section className="container mx-auto border-2 gap-3 flex flex-col md:flex-row my-16">
        {data
          .filter((item) => item.id == staffId)
          .map((product) => {
            return (
              <div className="border-r-4">
                <img
                  src={product.profile}
                  alt=""
                  className="object-cover p-6 "
                />
                <div className="flex flex-col pl-6">
                  <h5>{product.description}</h5>
                  <div>
                    <div className=" flex flex-col gap-6  lg:text-[1em] font-semibold">
                      <p className="">
                        Nail Care
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        Hair Styling
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        Make up
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        Cosmetology
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        SPA procedures
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="w-full flex flex-col justify-between">
          <div className="">
            <div className="flex gap-3 items-center">
              <img
                src={service1}
                alt="userImage"
                width={45}
                height={45}
                className="rounded-full m-4"
              />
              <div>
                <h2 className="text-[14px] font-medium"></h2>
                <h2 className="text-[12px]"></h2>
              </div>
            </div>
          </div>
          <div>
            {messages.map((message) => (
              <div key={message.$id} className="flex flex-col gap-1 mt-2 py-3">
                <div className="flex justify-between px-3">
                  <small>{new Date(message.$createdAt).toLocaleString()}</small>
                  <BsFastForward
                    onClick={() => {
                      deleteMessage(message.$id);
                    }}
                  />
                </div>
                <div className="p-4 bg-[rgba(219,26,90,1)] w-fit rounded-2xl font-Cedarville text-white">
                  <span>{message.body}</span>
                </div>
              </div>
            ))}
          </div>

          <form action="" onSubmit={handleSubmit} className="mt-10">
            <textarea
              required
              maxLength="1000"
              placeholder="start your conversation here...."
              onChange={(e) => setMessageBody(e.target.value)}
              value={messageBody}
              className="outline-none w-full pl-2 text-[18px] border-b-[2px] bg-gray-100 placeholder-gray-400 resize-none font-Cedarville leading-loose "
            ></textarea>
            <div className="flex justify-end">
              <input
                type="submit"
                value="send"
                className="text-white px-6 py-1 text-[1.2em] bg-red-500"
              />
            </div>
          </form>
          {/* <form action="">
            <textarea
              name=""
              id=""
              cols="9"
              rows="13"
              placeholder="start your conversation here...."
              className="outline-none  w-full mt-8 py-4 pl-2 text-[18px] border-b-[2px] border-gray-400 placeholder-gray-400 resize-none h-[100%] font-Licorice leading-loose "
            ></textarea>
            <div className="flex">
              <button className="text-white px-6 py-1 text-[1.2em] my-4 bg-red-500">
                send
              </button>
            </div>
          </form> */}
        </div>
      </section>

      {/* <div className="grid grid-cols-2 md:gap-10 md:grid-cols-5 container mx-auto">
        {items.slice(0, 5).map((item, id) => (
          <div key={id} className="">
            <div className="flex items-center justify-center p-4">
                <img src={item.image_link} alt={item.name} className="" />
              </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-[1em]">{item.name}</p>
              <span className="opacity-50 text-[1.1em]">$20 / 50ml</span>
              <div className="flex gap-3 my-2">
                <button className="bg-[#6B0606] text-white px-2">50ml</button>
                <button className="bg-[#6B0606] text-white px-2">70ml</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </main>
  );
};

export default SingleChat;
