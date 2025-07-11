import React from 'react';
import './Header.css';

const Header = () => {
  const handleViewMenu = () => {
    const section = document.getElementById('explore-menu');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Craving something tasty? You're in the right place! Whether you're in the mood for spicy street food, classic comfort meals, or sweet desserts, we've got it all. Browse our menu, place your order in just a few clicks, and enjoy freshly prepared dishes delivered straight to your door.
        </p>
        <button onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
