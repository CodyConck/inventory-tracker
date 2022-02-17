import { Form, Button, Table } from "react-bootstrap";
import { createRef, Component } from "react";

class AddInventory extends Component {
    constructor() {
        super();
        this.state = {
            //items arry
            items: []
        }
        this.formData = createRef();
    }
    //add product handler method
    add = (event) => {
        event.preventDefault();
    //console.log(formData.current)
        const newItem = {
            item_name: this.formData.current.item_name.value,
            dateIn: this.formData.current.dateIn.value,
            qty: Number(this.formData.current.qty.value)
        }
        //add a new item inside items array
        this.state.items.push(newItem)
        this.setState({
            items: this.state.items
        });
        //console.log(items);
    }
    //increment qty by 1
     incrementQty = (event) => {
        //console.log (event.target.value)
        const indexOfArray = event.target.value;
        this.state.items[indexOfArray].qty = this.state.items[indexOfArray].qty + 1;
        this.setState({
            items: this.state.items
        });
    }
    //decrease qty by 1
     decrementQty = (event) => {
        const indexOfArray = event.target.value;
        this.state.items[indexOfArray].qty = this.state.items[indexOfArray].qty - 1;
        this.setState({
            items: this.state.items
        });
    }
          
    render() {
    return (
        <div>
        <Form onSubmit={this.add} ref={this.formData}>
            <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Freezer Item</Form.Label>
                <Form.Control type="text" placeholder="Enter Item" name="item_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateIn">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder="Date" name="dateIn" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicQty">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="How Many: qty" name="qty" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add to Inventory
            </Button>
        </Form>

        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Item Name:</th>
                    <th>Date Added:</th>
                    <th>Qty</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.items.map((item, index) => {
                        return (
                            <tr key= {index}>
                                <td>{index}</td>
                                <td>{item.item_name}</td>
                                <td>{item.dateIn}</td>
                                <td>{item.qty}</td>
                                <td>
                                <Button 
                                    variant="success" 
                                    onClick= {event=>this.incrementQty(event)}
                                    value={index}>+</Button>
                                <Button 
                                    variant="danger"
                                    onClick= {event=>this.decrementQty(event)}
                                    value={index}>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div >
    )
}
    
}
export default AddInventory;