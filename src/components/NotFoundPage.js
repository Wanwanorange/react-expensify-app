import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  // Client side routing: use Link for internal rerouting
  <div>
    404 :( <Link to="/">Go home!</Link>
  </div>
);

export default NotFoundPage;