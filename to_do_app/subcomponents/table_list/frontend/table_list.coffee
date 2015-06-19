defineComponent

  propTypes:
    items: React.PropTypes.instanceOf Immutable.List

  render: ({div, input, label, h2, li, ul}) ->
    div className: 'items-list',
      h2 {},'To Do:'
      ul className: 'items',
        @props.items.map (item, index) =>
          key = index
          li key: index, className: 'checkbox',
            input @_checkboxProps key, index, item[1]
            label htmlFor: key, item[0]

  _checkboxProps: (key, index, toggled) ->
    key: key
    className: key
    checked: toggled
    id: key
    name: key
    type: 'checkbox'
    value: index
    onChange: @_onChange

  _onChange: (e) ->
    target = e.target or e.srcElement
    @_onSelect target.value

  _onSelect: (item) ->
    @dispatch 'Items.select', item


    # div className: 'table-list',
    #   table {},
    #     tbody {},
    #         @_tableRows DOM, @props.items

  # _tableRows: (DOM, items) ->
  #   {tr, span, td} = DOM
  #   @props.items.map (item, index) =>
  #     tr {},
  #       td key: index, span {}, item
