const shoppingList = ["banana", "apple", "carrot"]

const element = (
    <div>
        Items left to purchase: {shoppingList.length}
    </div>
)

const compiledElement = React.createElement(
    'div',
    {},
    'Items left to purchase ',
    shoppingList.length
)