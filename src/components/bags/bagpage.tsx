import * as React from "react";
import BagList from "./baglist";
import UpdateBag from "./updatebag";
import { BagEntity, BagItemEntity, AuthEntity } from "../../model";

interface Props {
  fetchBags(user): void;
  deleteBags(id, user): void;
  updateBags(id, description, destination, username): void;
  showItems(id, user): void;
  checkItem(id, item, user): void;
  saveItem(id, item, user): void;
  deleteItem(id, bagid, input, user): void;
  bags: BagEntity[];
  item: BagItemEntity[];
  authentication: AuthEntity[];
}

interface State {
  viewList: boolean;
  viewListID: number;
  viewBagUpdate: number;
  bagState: [];
}

export default class BagPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      viewList: false,
      viewListID: null,
      viewBagUpdate: 0,
      bagState: []
    };
    this.updateBagToggle = this.updateBagToggle.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addInventory = this.addInventory.bind(this);
  }

  componentDidMount() {
    console.log(this.props.authentication[0].user["username"]);

    this.props.fetchBags(this.props.authentication[0].user["username"]);
  }

  addInventory(viewListID) {
    this.setState(prevState => ({
      viewListID: prevState.viewListID == viewListID ? null : viewListID,
      viewBagUpdate: null
    }));
    this.props.showItems(
      viewListID,
      this.props.authentication[0].user["username"]
    );
  }

  updateBagToggle(id) {
    this.setState(prevState => ({
      viewBagUpdate: prevState.viewBagUpdate == id ? null : id,
      viewListID: null
    }));
  }

  deleteItem(id) {
    this.props.deleteBags(id, this.props.authentication[0].user["username"]);
  }

  render() {
    return (
      <div id="cont" className="container">
        <div id="containerBags">
          <h3 id="bagHead">
            <i className="fas fa-suitcase" /> Your Current Bags :
          </h3>
          {this.props.bags.map(bag => (
            <div key={bag.id} id="card" className="card">
              <div
                data-aos="flip-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                className="card-body"
              >
                <h5 className="card-title">{bag.description}</h5>
                <p className="card-text">{bag.destination}</p>
                <button
                  id="mainBtn"
                  onClick={() => {
                    this.addInventory(bag.id);
                  }}
                  className="btn btn-primary"
                >
                  Add Items to Bag
                </button>
                <button
                  id="mainBtn"
                  onClick={() => this.updateBagToggle(bag.id)}
                  className="btn btn-secondary"
                >
                  Edit Bag
                </button>
                <button
                  id="mainBtn"
                  onClick={() => this.deleteItem(bag.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                {this.state.viewListID === bag.id && (
                  <BagList
                    authentication={this.props.authentication}
                    deleteItem={this.props.deleteItem}
                    saveItem={this.props.saveItem}
                    checkItem={this.props.checkItem}
                    item={this.props.item}
                    key={bag.id}
                    id={bag.id}
                    description={bag.description}
                    destination={bag.destination}
                  />
                )}
                {this.state.viewBagUpdate == bag.id && (
                  <UpdateBag
                    authentication={this.props.authentication}
                    updateBags={this.props.updateBags}
                    key={bag.id}
                    id={bag.id}
                    description={bag.description}
                    destination={bag.destination}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
