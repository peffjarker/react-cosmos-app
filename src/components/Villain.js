import React from 'react';

const Villain = props => {
  return (
    <li
      onClick={() => props.onSelect(props.villain)}
      className={props.villain === props.selectedVillain ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => props.onDelete(e, props.villain)}
      >
        Delete
      </button>
      <button
        className="edit-button"
        onClick={e => props.onEdit(e, props.villain)}
      >
        Edit
      </button>
      <div className="hero-element">
        <div className="badge">
          {props.villain.id}
        </div>
        <div className="name">
          {props.villain.name}
        </div>
        <div className="saying">
          {props.villain.saying}
        </div>
      </div>
    </li>
  );
};

export default Villain;
