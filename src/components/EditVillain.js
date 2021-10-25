import React from 'react';

const EditVillain = props => {
  if (props.selectedVillain) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>id: </label>
            {props.addingVillain
              ? <input
                  type="number"
                  name="id"
                  placeholder="id"
                  value={props.selectedVillain.id}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedVillain.id}
                </label>}
          </div>
          <div>
            <label>name: </label>
            <input
              name="name"
              value={props.selectedVillain.name}
              placeholder="name"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>saying: </label>
            <input
              name="saying"
              value={props.selectedVillain.saying}
              placeholder="saying"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditVillain;
