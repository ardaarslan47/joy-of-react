function render(reactElement, containerDOMElement) {
  const element = document.createElement(reactElement.type);

  element.innerText = reactElement.children;
  for (const key in reactElement.props) {
    const value = reactElement.props[key];
    element.setAttribute(key, value);
  }
  
  containerDOMElement.append(element);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://wikipedia.org/",
  },
  children: "Read more on Wikipedia",
};

const containerDOMElement = document.querySelector("#root");

render(reactElement, containerDOMElement);
