import "./index.html";
import "./styles/app.scss";

import React from "react";
import {render} from 'react-dom';
import HelloWorld from "./components/helloworld";

render(<HelloWorld />, document.querySelector('#mount'));
