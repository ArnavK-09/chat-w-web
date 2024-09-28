// Imports
import QueryInput from "~/components/QueryInput";
import QueryResult from "~/components/QueryResult";
import Branding from "~/components/Branding";
import { useState } from "react";
import { initialPrompt } from "~/lib/constants";
import { randomNumber } from "~/lib/utils";
import { useCopilotChat, useCopilotReadable } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import { browser } from "wxt/browser";

/**
 * Whole app recites here
 */
function App() {
  // State
  const [inputBoxValue, setInputBoxValue] = useState("");
  const [webContent, setWebContent] = useState<{
    tab: any;
    res: { title: string; content: string };
  }>({
    tab: null,
    res: {
      title: "",
      content: "",
    },
  });

  // Processing user query with A.I.
  const proceedFurtherQuery = async () => {
    setInputBoxValue("");
    const tempPrompt = `Content of user's website:-\n${JSON.stringify(webContent.res)}\n\nUser's Query about their website:  `;
    await appendMessage(
      new TextMessage({
        content: tempPrompt + inputBoxValue,
        role: Role.User,
      }),
    );
  };

  /**
   * Browser stuff
   */
  (async () => {
    const data = JSON.parse(await browser.runtime.sendMessage("getData"));
    setWebContent(data);
  })();

  /**
   * Copilot system
   */
  const {
    visibleMessages, // An array of messages that are currently visible in the chat.
    appendMessage, // A function to append a message to the chat.
    isLoading, // A boolean indicating if the chat is loading.
  } = useCopilotChat({
    id: `${randomNumber(0, 100000)}`,
    makeSystemMessage: () => initialPrompt,
  });

  return (
    <>
      <main
        className={`!z-[1000] w-[500px] h-[520px] grid place-items-center overflow-x-hidden overflow-y-scroll py-14 text-white bg-[#191a1a]`}
      >
        <div className="divide-y-2 relative top-0 flex-col w-[100vw] min-h-[620px] pb-10 !overflow-y-scroll overflow-x-hidden divide-[#202222]">
          <div className="overflow-y-scroll h-auto min-h-full absolute w-[100%]">
            {(visibleMessages as TextMessage[])
              .filter((x) => x.role == "assistant")
              .map((x) => {
                const filteredChats = visibleMessages as TextMessage[];
                const indexOfAIMsg = filteredChats.findIndex(
                  (y) => y.id == x.id && x.role == "assistant",
                );
                const actionMessage = filteredChats[indexOfAIMsg - 1];
                return (
                  <>
                    <QueryResult
                      key={x.id}
                      title={
                        actionMessage.content.split(
                          "User's Query about their website: ",
                        )[
                          actionMessage.content.split(
                            "User's Query about their website: ",
                          ).length - 1
                        ]
                      }
                      content={`${x.content}`}
                    />
                  </>
                );
              })}
          </div>
          {visibleMessages.length == 0 && webContent.tab !== null && (
            <div className="!select-none grid mx-auto h-[100vh] w-[100vw] place-items-center !overflow-hidden">
              <div className="flex flex-col gap-3 text-center">
                <h2 className="text-5xl">🤯</h2>
                <h2 className="text-xl font-semibold tracking-tight text-white/85">
                  Come'on Ask <br />
                  Something below....
                </h2>
              </div>
            </div>
          )}
          {visibleMessages.length == 0 && webContent.tab == null && (
            <div className="!select-none grid mx-auto h-[100vh] w-[100vw] place-items-center !overflow-hidden">
              <div className="flex flex-col gap-3 text-center">
                <h2 className="text-5xl">⚽</h2>
                <h2 className="text-xl font-semibold tracking-tight text-white/85">
                  Loading
                  <br />
                  Please wait...
                </h2>
              </div>
            </div>
          )}
        </div>
        {webContent.tab !== null && (
          <div className="!fixed !bottom-4 px-4 z-[1000]">
            <QueryInput
              state={inputBoxValue}
              setState={setInputBoxValue}
              onSubmit={proceedFurtherQuery}
            />
          </div>
        )}
        <Branding />
      </main>
    </>
  );
}

export default App;
