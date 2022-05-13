import React from "react";
import { Button } from "uiw";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function Addcustomer(props){
    const [open, setOpen] = React.useState(false);
    const [customer,setCustomer]=React.useState({
        firstname:'', lastname:'', streetaddress:'', postcode:'', city:'', email:'', phone:''
    })
    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
    
        const handleInputChange=(e)=>{
          setCustomer({...customer,[e.target.name]: e.target.value})  
        };
    
        const addCustomer = () => {
            props.saveCustomer(customer);
            handleClose();
        }

    return(
        <div>
            <Button style={{margin:10}} type="success" icon="file-add" onClick={handleClickOpen}>
                Add Customer
            </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>New Customer</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="firstname"
                            value={customer.firstname}
                            onChange={e=> handleInputChange(e)}
                            label="Firstname"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            name="lastname"
                            value={customer.lastname}
                            onChange={e=> handleInputChange(e)}
                            label="Lastname"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            name="streetaddress"
                            value={customer.streetaddress}
                            onChange={e=> handleInputChange(e)}
                            label="Street Address"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            name="postcode"
                            value={customer.postcode}
                            onChange={e=> handleInputChange(e)}
                            label="Postal code"
                            fullWidth
                        />
                         <TextField
                            margin="dense"
                            name="city"
                            value={customer.city}
                            onChange={e=> handleInputChange(e)}
                            label="City"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            name="email"
                            value={customer.email}
                            onChange={e=> handleInputChange(e)}
                            label="Email"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            name="phone"
                            value={customer.phone}
                            onChange={e=> handleInputChange(e)}
                            label="Phone Number"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={addCustomer}>Save</Button>
                    </DialogActions>
                  </Dialog>    
        </div>
            
            
            );
}
export default Addcustomer;