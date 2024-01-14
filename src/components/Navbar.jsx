import React, { Fragment } from 'react'
import { Alert, Button } from 'flowbite-react';


const Navbar = () => {
  return (
    <Fragment>
      <div className="font-Montserrat text-2xl" >
      HI
      <Button>Click me</Button>
      <Alert color="failure"> Hi Man</Alert>
      </div>
    </Fragment>
  )
}

export default Navbar
