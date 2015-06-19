defineStore 'Items',

  items: Immutable.List()

  addTask: (item)->
    item = [item, 0]
    @items = @items.push item

  select: (index) ->
    item = @items.get index
    @items = @items.set index, [item[0], 1]

  removeSelected: ->
    @items = @items.filter (item) => item[1] == 0

  export: -> {@items}
