defineComponent

  watchStorePaths: ->
    listData: ['Items', 'items']

  getInitialState: ->
    listData: Immutable.List()

  render: (reactDom) ->
    {div} = reactDom
    div {},
      div className: 'mainapp',
        @_renderToDoList reactDom
        @_renderInput reactDom

  _renderInput: ({div, form, input, button}) ->
    div className: 'input-form-container',
      @inputForm()

  _renderToDoList: ({div}) ->
    div className: 'items-list-container',
      @tableList
        items: @state.listData


