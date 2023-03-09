import React from "react";
import { Configuration, OpenAIApi } from "openai";

function OpenAi() {
  const generateText = async (e) => {
    const searchBox = document.getElementById("searchBox").value;
    let ans = document.getElementById("textResponse");

    ans.value = "Loading...";

    const configuration = new Configuration({
      apiKey: "YOUR_API_kEY",
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: searchBox }],
    });
    if (response.status === 200) {
      ans.value = response.data.choices[0].message.content;
    }
  };

  return (
    <div className="container mt-4">
      <div className="input-group justify-content-center">
        <input
          type="text"
          name="searchBox"
          className="w-75 border"
          id="searchBox"
        />
        <button onClick={generateText} className="btn btn-success">
          Go
        </button>
      </div>
      <textarea
        // type="textarea"
        className="row mt-4 min-vh-100 input-group-text"
        id="textResponse"
        style={{ width: "inherit" }}
        value=""
      />
      {/* <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default OpenAi;
