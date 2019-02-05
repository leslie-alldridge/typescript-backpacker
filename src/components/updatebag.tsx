import * as React from "react";

interface State {
    updateInput: string;
    desInput: string;
}

interface Props {
    key: number;
    id: number;
    description: string;
    destination: string;
}

class UpdateBag extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      updateInput: "",
      desInput: "",
    };
    this.destinationChange = this.destinationChange.bind(this);
    this.desChange = this.desChange.bind(this);
  }

  destinationChange(e) {
    this.setState({
      updateInput: e.target.value
    });
  }

  desChange(e) {
    this.setState({
      desInput: e.target.value
    });
  }

  updateBagDB(e, id, destination, description) {
    // $("#checkAll").click(event => {
    //   const form = $("#theForm");
    //   if (form[0].checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    //   form.addClass("was-validated");
    // });
    e.preventDefault();
    // this.props.updateBagDB(id, destination, description);
    this.setState({
      updateInput: '',
      desInput: '',
    })
  }
    
  render() {
    return (
      <div id="container">
      <div id="line" className="row">
         <div className="col-md-6">
            <h4 id="updateTitle">Update Bag</h4>
            <form  noValidate={false} id="theForm" onSubmit={(e) =>
               {
               this.updateBagDB(e,
               this.props.id,
               this.state.updateInput,
               this.state.desInput
               );
               }}>
               <div className="form-group">
                  <input required
                  onChange={this.desChange}
                  type="text"
                  className="form-control add-todo"
                  placeholder="New bag description"
                  value=""
                  />
               </div>
               <div className="form-group">
                  <input required
                  onChange={this.destinationChange}
                  type="text"
                  className="form-control add-todo"
                  placeholder="New bag destination"
                  id="bottomInput"
                  value=""
                  />
               </div>
               <button
                  type="submit"
                  id="checkAll"
                  className="btn btn-success"
                  >
               Save Changes
               </button>
            </form>
         </div>
      </div>
   </div>
    );
  }
}

export default UpdateBag;