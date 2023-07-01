const element = (
    <p id="hello">Hello World!!</p>
);

const complicatedElement = React.createElement(
  "nav",
  { id: "main-nav" },
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      React.createElement("a", { href: "/" }, "Home")
    ),
    React.createElement(
      "li",
      null,
      React.createElement("a", { href: "/archives" }, "Archives")
    )
  )
);

const complicatedElementWithJSX = (
    <nav id="main-nav">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/archives">Archives</a>
            </li>
        </ul>
    </nav>
);
