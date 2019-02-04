import * as React from 'react'
import BagList from "./BagList";
// import UpdateBag from "./UpdateBag";

interface Props {

}

interface State {
    viewList: boolean,
    viewListID: number,
    viewBagUpdate: boolean,
    bagState: [] 
}

class BagPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      viewList: false,
      viewListID: null,
      viewBagUpdate: null,
      bagState: [] 
    };
    this.updateBagToggle = this.updateBagToggle.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addInventory = this.addInventory.bind(this);
  }

  componentDidMount(){
      //get bags
  }

  addInventory(viewListID) {
    this.setState(prevState => ({
      viewListID: prevState.viewListID == viewListID ? null : viewListID,
      viewBagUpdate: null
    }));
    //show items
  }

  updateBagToggle(id) {
    this.setState(prevState => ({
      viewBagUpdate: prevState.viewBagUpdate == id ? null : id,
      viewListID: null
    }));
  }

  deleteItem(id) {
      //delete bag id
  }

  render() {
    return (
      <div id="cont" className="container">
        <div id="containerBags">
          <h3 id="bagHead">
            <i className="fas fa-suitcase" /> Your Current Bags :
          </h3>
          <BagList key={1}
                    id={1}
                    description="test"
                    destination="desc"/>
          {/* {this.props.bagsData.bag.map(bag => (
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
                    key={bag.id}
                    id={bag.id}
                    description={bag.description}
                    destination={bag.destination}
                  />
                )}
                {this.state.viewBagUpdate === bag.id && (
                  <UpdateBag
                    key={bag.id}
                    id={bag.id}
                    description={bag.description}
                    destination={bag.destination}
                  />
                )} */}
              {/* </div>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default BagPage;