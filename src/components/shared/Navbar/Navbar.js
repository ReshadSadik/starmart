import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>{user.email}</h2>
      <h2>this is navbar</h2>
    </div>
  );
};

export default Navbar;
