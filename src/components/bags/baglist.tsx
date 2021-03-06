import * as React from "react";
import { BagItemEntity, AuthEntity } from "../../model";

interface Props {
  key: number;
  id: number;
  description: string;
  destination: string;
  checkItem(id, item, user): void;
  saveItem(id, item, user): void;
  deleteItem(id, bagid, input, user): void;
  item: BagItemEntity[];
  authentication: AuthEntity[];
}

interface State {
  formInput: string;
}

class BagList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      formInput: ""
    };
    this.formChange = this.formChange.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(id, bagid, input) {
    this.props.deleteItem(
      id,
      bagid,
      input,
      this.props.authentication[0].user["username"]
    );
  }

  formChange(e) {
    this.setState({
      formInput: e.target.value
    });
  }

  checkItem(id, item) {
    this.props.checkItem(
      id,
      item,
      this.props.authentication[0].user["username"]
    );
  }

  saveItem(e, id, input) {
    e.preventDefault();
    this.props.saveItem(
      id,
      input,
      this.props.authentication[0].user["username"]
    );
    this.setState({
      formInput: ""
    });
  }

  render() {
    return (
      <div id="container">
        <div id="line" className="row">
          <div className="col-md-6">
            <div className="todolist not-done">
              <h3 id="list">Bag List</h3>
              <form
                id="todoForm"
                onSubmit={e => {
                  this.saveItem(e, this.props.id, this.state.formInput);
                }}
              >
                <input
                  required
                  onChange={this.formChange}
                  type="text"
                  className="form-control add-todo"
                  placeholder="Item Description"
                  value={this.state.formInput || ""}
                />
                <button id="checkAll" type="submit" className="btn btn-success">
                  Add Item
                </button>
              </form>
              <hr />
              <ul>
                {this.props.item.map(item => {
                  if (item.archived == true)
                    return (
                      <li key={item.id}>
                        {item.bagitem}
                        <i
                          onClick={() => {
                            this.checkItem(this.props.id, item.bagitem);
                          }}
                          className="fas fa-check"
                          id="tick"
                        />
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="todolist">
              <h4>Items Checked</h4>
              <ul id="done-items" className="list-unstyled">
                {this.props.item.map(item => {
                  if (item.archived == false)
                    return (
                      <li key={item.id}>
                        {item.bagitem}
                        <i
                          onClick={() => {
                            this.delete(item.id, item.bagid, item.bagitem);
                          }}
                          id="trash"
                          className="fas fa-trash-alt"
                        />
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BagList;
