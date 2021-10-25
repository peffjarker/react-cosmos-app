import React, { Component } from 'react';

import EditVillain from './EditVillain';
import Villain from './Villain';

import api from '../apivillain';

class Villains extends Component {
  constructor() {
    super();

    this.state = {
      villains: [],
      creatingVillain: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.get().then(json => this.setState({ villains: json }));
  }

  handleSelect(villain) {
    this.setState({ selectedVillain: villain });
  }

  handleEdit(event, villain) {
    this.setState({ selectedVillain: villain});
    console.log(event);
    console.log(villain);
  }

  handleDelete(event, villain) {
    event.stopPropagation();

    api.destroy(villain).then(() => {
      let villains = this.state.villains;
      villains = villains.filter(v => v !== villain);
      this.setState({ villains: villains });

      if (this.selectedVillain === villain) {
        this.setState({ selectedVillain: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingVillain: true,
      selectedVillain: { id: '', name: '', saying: '' }
    });
  }

  handleCancel() {
    this.setState({ addingVillain: false, selectedVillain: null });
  }

  handleSave() {
    let villains = this.state.villains;

    if (this.state.addingVillain) {
      api
        .create(this.state.selectedVillain)
        .then(result => {
          console.log('Successfully created!');

          villains.push(this.state.selectedVillain);
          this.setState({
            villains: villains,
            selectedVillain: null,
            addingVillain: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedVillain)
        .then(() => {
          this.setState({ selectedVillain: null });
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedVillain = this.state.selectedVillain;
    selectedVillain[event.target.name] = event.target.value;
    this.setState({ selectedVillain: selectedVillain });
  }

  render() {
    return (
      <div>
        <ul className="heroes">
          {this.state.villains.map(villain => {
            return (
              <Villain
                key={villain.id}
                villain={villain}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
                selectedVillain={this.state.selectedVillain}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New Villain</button>
          <EditVillain
            addingVillain={this.state.addingVillain}
            onChange={this.handleOnChange}
            selectedVillain={this.state.selectedVillain}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default Villains;
