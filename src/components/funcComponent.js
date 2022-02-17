import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from "react";

function AddProduct() {
    //typeOfData [stateDate, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [items, setItem] = useState(initialValue);
    const formData = createRef();
    

    //add product handler method
    const add = (event) => {
        event.preventDefault();
        //console.log(event.target.item_name.value);
        // const formData = event.target;
        // const newItem = {
        //     item_name: formData.item_name.value,
        //     dateIn: formData.dateIn.value,
        //     qty: formData.qty.value
        // }
        
        const newItem = {
            item_name: formData.current.item_name.value,
            dateIn: formData.current.dateIn.value,
            qty: Number(formData.current.qty.value)
        }
        //console.log(newItem)
        //add a new item inside items array
        setItem([...items, newItem]);
        console.log(items);
    }
    //increment qty by 1
    const incrementQty = (event)=>{
        //console.log (event.target.value)
        const indexOfArray = event.target.value;
        items[indexOfArray].qty = items[indexOfArray].qty + 1;
        setItem([...items])
    //decrease qty by 1
    }
    const decrementQty = (event)=>{
        const indexOfArray = event.target.value;
        items[indexOfArray].qty = items[indexOfArray].qty - 1;
        setItem([...items])
    }
    return (
        <div>
            <Form onSubmit={add} ref={formData}>
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
                        items.map((item, index) => {
                            return (
                                <tr key= {index}>
                                    <td>{index}</td>
                                    <td>{item.item_name}</td>
                                    <td>{item.dateIn}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                    <Button 
                                        variant="success" 
                                        onClick= {event=>incrementQty(event)}
                                        value={index}>+</Button>
                                    <Button 
                                    variant="danger"
                                    onClick= {event=>decrementQty(event)}
                                    value={index}>-</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AddProduct;