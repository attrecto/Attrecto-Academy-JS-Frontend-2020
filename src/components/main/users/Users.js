import React, { Component } from "react";
import { getUsers, deleteUser } from "../../../services/users";
import { Button, EditorTitle, Table } from "../../shared";
import { NavLink } from "react-router-dom";
import Modal from "../../shared/modal/Modal";

class Users extends Component {
  state = {
    users: [],
    modalData: {
      title: "Remove User",
      submitButtonLabel: "Remove"
    },
    modalOpen: false
  };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }

  openRemoveUserModal = user => {
    this.setState({
      modalData: {
        ...this.state.modalData,
        body: `Are you sure to delete ${user.name}?`,
        id: user.id
      },
      modalOpen: true
    });
  };

  removeUser = async () => {
    await deleteUser(this.state.modalData.id);
    const users = await getUsers();
    this.setState({ users, modalOpen: false });
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <EditorTitle
              title="Users"
              buttonTitle="Create User"
              navLink="/user"
            />
            <Table columns={["#", "Name", ""]} dark>
              {this.state.users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td className="text-right">
                    <NavLink to={`/user/${user.id}`} className="mr-2">
                      <Button>Edit</Button>
                    </NavLink>
                    <Button onClick={() => this.openRemoveUserModal(user)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </div>

        <Modal
          open={this.state.modalOpen}
          title={this.state.modalData.title}
          body={this.state.modalData.body}
          submitButtonLabel={this.state.modalData.submitButtonLabel}
          onSubmitClick={this.removeUser}
          onClose={this.onCloseModal}
        />
      </div>
    );
  }
}

export default Users;
