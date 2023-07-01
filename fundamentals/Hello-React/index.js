const element = React.createElement(
    'p',
    {id: "hello"},
    'Hello World!!'
)

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(element)