defineComponent

  getDefaultProps: ->
    submission: ''

  _handleSubmit: (e) ->
    submission = React.findDOMNode(@refs.text).value.trim()
    e.preventDefault()
    @dispatch 'Items.addTask', submission

  _handleRemove: (e) ->
    e.preventDefault()
    @dispatch 'Items.removeSelected'

  render: ({div, br, form, input, button}) ->
    div {className: 'input-form'},
      div {className: 'submit-task'},
        form onSubmit: @_handleSubmit,
          div {className: 'submit-task-input'},
            input type: 'text', ref: 'text'
          div {className: 'submit-button'},
            input type: 'submit', value: 'Submit Task'
      div {className: 'remove-task'},
        form onClick: @_handleRemove,
          input type: 'button', value: 'Remove Tasks'

