defineActions 'Items',

  addTask: (item) ->
    @stores.Items.addTask item

  select: (index) ->
    @stores.Items.select index

  removeSelected: ->
    @stores.Items.removeSelected()

  #removeTask: (index) ->
  #  @stores.Items.removeTask index
