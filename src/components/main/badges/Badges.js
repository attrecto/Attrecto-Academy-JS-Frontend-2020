import React, { Component } from "react";
import { getBadges, deleteBadge } from "../../../services/badges";
import { Button, EditorTitle } from "../../shared";
import { NavLink } from "react-router-dom";
import Modal from "../../shared/modal/Modal";

import "./Badges.css";

class Badges extends Component {
  state = {
    badges: [],
    modalData: {
      title: "Remove Badge",
      submitButtonLabel: "Remove"
    },
    modalOpen: false
  };

  async componentDidMount() {
    const badges = await getBadges();
    this.setState({ badges });
  }

  openRemoveBadgeModal = badge => {
    this.setState({
      modalData: {
        ...this.state.modalData,
        body: `Are you sure to delete ${badge.name}?`,
        id: badge.id
      },
      modalOpen: true
    });
  };

  removeBadge = async () => {
    await deleteBadge(this.state.modalData.id);
    const badges = await getBadges();
    this.setState({ badges, modalOpen: false });
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="Badges container">
        <div className="row">
          <div className="col-12">
            <EditorTitle
              title="Badges"
              buttonTitle="Create Badge"
              navLink="/badge"
            />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>{""}</th>
                </tr>
              </thead>
              <tbody>
                {this.state.badges.map((badge, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{badge.name}</td>
                    <td>{badge.description}</td>
                    <td className="text-right">
                      <NavLink to={`/badge/${badge.id}`} className="mr-2">
                        <Button>Edit</Button>
                      </NavLink>
                      <Button onClick={() => this.openRemoveBadgeModal(badge)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Modal
          open={this.state.modalOpen}
          title={this.state.modalData.title}
          body={this.state.modalData.body}
          submitButtonLabel={this.state.modalData.submitButtonLabel}
          onSubmitClick={this.removeBadge}
          onClose={this.onCloseModal}
        />
      </div>
    );
  }
}

export default Badges;
