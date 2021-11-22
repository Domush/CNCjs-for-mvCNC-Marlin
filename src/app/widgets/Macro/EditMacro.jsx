import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'app/components/Buttons';
import { Confirm } from 'app/components/ConfirmationDialog/ConfirmationDialogLib';
import Modal from 'app/components/ToolModal/ToolModal';
import Space from 'app/components/Space';
import { Form, Input, Textarea } from 'app/components/Validation';
const i18n = require('app/lib/i18n');
const validations = require('app/lib/validations');
const insertAtCaret = require('./insertAtCaret');
const variables = require('./variables');
const styles = require('./index.styl');

const {
  modalContainerStyle: modalContainerStyle,
  modalBodyStyle: modalBodyStyle,
  modalFooterStyle: modalFooterStyle,
} = require('./modalStyle');

const MAX_CHARACTERS = '128';

class EditMacro extends PureComponent {
  static propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object,
  };

  fields = {
    name: null,
    content: null,
  };

  get value() {
    const { name, content, description } = this.form.getValues();

    return {
      name: name,
      content: content,
      description,
    };
  }

  handleDeleteClick = () => {
    const { state, actions } = this.props;
    const { id, name } = state.modal.params;

    Confirm({
      title: 'Delete Macro',
      content: (
        <>
          <p>Are you sure you want to delete this macro?</p>
          <p>
            <strong>{name}</strong>
          </p>
        </>
      ),
      confirmLabel: 'Delete',
      onConfirm: () => {
        actions.deleteMacro(id);
        actions.closeModal();
      },
    });
  };

  render() {
    const { state, actions } = this.props;
    const { id, name, content, description } = state.modal.params;

    return (
      <Modal size="large" onClose={actions.closeModal} title={i18n._('Edit Macro')}>
        <div style={modalContainerStyle}>
          <div style={modalBodyStyle}>
            <Form
              ref={(c) => {
                this.form = c;
              }}
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="form-group">
                <label>{i18n._('Macro Name')}</label>
                <Input
                  ref={(c) => {
                    this.fields.name = c;
                  }}
                  type="text"
                  maxLength={MAX_CHARACTERS}
                  className="form-control"
                  name="name"
                  value={name}
                  validations={[validations.required]}
                />
              </div>
              <div className="form-group">
                <div className={styles['macro-commands']}>
                  <label>{i18n._('Macro Commands')}</label>

                  <Dropdown
                    id="add-macro-dropdown"
                    className="pull-right"
                    onSelect={(eventKey) => {
                      const textarea = ReactDOM.findDOMNode(this.fields.content).querySelector('textarea');
                      if (textarea) {
                        insertAtCaret(textarea, eventKey);
                      }

                      actions.updateModalParams({
                        content: textarea.value,
                      });
                    }}
                  >
                    <Dropdown.Toggle className={styles.btnLink} style={{ boxShadow: 'none' }}>
                      <i className="fa fa-plus" />
                      <Space width="8" />
                      {i18n._('Macro Variables')}
                      <Space width="4" />
                      <i className="fa fa-caret-down" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={styles.macroVariablesDropdown}>
                      {variables.map((v) => {
                        if (typeof v === 'object') {
                          return v.type === 'header' ? (
                            <Dropdown.Header key={uniqueId()}>{v.text}</Dropdown.Header>
                          ) : (
                            <Dropdown.Item key={uniqueId()} eventKey={v} className={styles['dropdown-item']}>
                              {v.text}
                            </Dropdown.Item>
                          );
                        }

                        return (
                          <Dropdown.Item eventKey={v} key={uniqueId()} className={styles['dropdown-item']}>
                            {v}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Textarea
                  ref={(c) => {
                    this.fields.content = c;
                  }}
                  rows="10"
                  className="form-control"
                  name="content"
                  value={content}
                  validations={[validations.required]}
                />
              </div>
              <div className="form-group">
                <label>Macro Description</label>
                <Textarea
                  rows="4"
                  maxLength={MAX_CHARACTERS}
                  className="form-control"
                  name="description"
                  value={description}
                />
              </div>
            </Form>
          </div>
          <div style={modalFooterStyle}>
            <Button btnStyle="danger" className="pull-left" onClick={this.handleDeleteClick}>
              {i18n._('Delete')}
            </Button>
            <Button
              onClick={() => {
                actions.closeModal();
              }}
            >
              {i18n._('Cancel')}
            </Button>
            <Button
              style={{ backgroundColor: '#3e85c7', color: 'white', backgroundImage: 'none' }}
              onClick={() => {
                this.form.validate((err) => {
                  if (err) {
                    return;
                  }

                  const { name, content, description } = this.value;

                  actions.updateMacro(id, { name, content, description });
                  actions.closeModal();
                });
              }}
            >
              {i18n._('Save Changes')}
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default EditMacro;
