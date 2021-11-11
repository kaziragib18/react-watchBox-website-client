import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar'

const NotFound = () => {
      return (
            <div className="w-100 mt-3">
                  <img style={{ width: '40%' }} src="https://miro.medium.com/max/1838/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="404_page" />
                  <h2 className="fs-6 text-success">Looks like your are lost!</h2>
                  <h2 className="fs-6 text-success">Page you are looking for is not available</h2>
                  <Link to="/home">
                        <Button className="btn btn-success mt-1">Go Back</Button>
                  </Link>
            </div>
      );
};

export default NotFound;