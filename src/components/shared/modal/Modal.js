import React, { Component, createRef } from "react";
import $ from "jquery";

class Modal extends Component {
  modal = createRef();

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      if (this.props.open) {
        this.toggle();
      } else {
        this.hide();
      }
    }
  }

  toggle() {
    $(this.modal.current).modal("toggle");
  }

  hide() {
    $(this.modal.current).modal("hide");
  }

  render() {
    const {
      title,
      body,
      submitButtonLabel,
      onSubmitClick,
      onClose
    } = this.props;
    return (
      <div className="modal" tabIndex="-1" role="dialog" ref={this.modal}>
        >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{body}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSubmitClick}
              >
                {submitButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
