import React, { Component } from "react";
import http from "../Services/httpService";
import config from "../config.json";
const teamID = 1;
class messagingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      new_message: "",
      errors: {},
    };
  }
  async componentDidMount() {
    http.get(config.apiEndpoint + "/message/" + teamID).then((res) => {
      this.setState({ messages: res.data });
      console.log(res);
    });
  }
  handleSubmit() {}

  render() {
    const { messages } = this.state;
    return (
      <React.Fragment>
        <table className="financeTable">
          <thead>
            <tr>
              <th>Message</th>
              <th>Date</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((messages) => (
              <tr key={messages.message_id}>
                <td>{messages.message}</td>
                <td>{("" + messages.stamp).substring(0, 10)}</td>
                <td>{("" + messages.stamp).substring(11, 19)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label></label>
            <p>Send a message to the team!</p>
            <textarea
              className="message-box"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="inv-btn">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default messagingForm;
