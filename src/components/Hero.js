import React from 'react';

const Hero = props => {
  return (
    <li
      onClick={() => props.onSelect(props.hero)}
      className={props.hero === props.selectedHero ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => props.onDelete(e, props.hero)}
      >
        Delete
      </button>
      <button
        className="edit-button"
        onClick={e => props.onEdit(e, props.hero)}
      >
        Edit
      </button>
      <div className="hero-element">
        <div className="badge">
          {props.hero.id}
        </div>
        <div className="name">
          {props.hero.name}
        </div>
        <div className="saying">
          {props.hero.saying}
        </div>
        <div className="saying">
          {props.hero.image}
        </div>
      </div>
    </li>
  );
};

export default Hero;
