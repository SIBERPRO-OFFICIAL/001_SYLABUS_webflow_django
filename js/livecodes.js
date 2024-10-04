import { createPlayground } from 'https://cdn.jsdelivr.net/npm/livecodes@0.6.0';

const config = {
  markup: {
    language: 'html',
    content: ``,
  },
  style: {
    language: 'css',
    content: '',
  },
  //script: {
  //  language: 'javascript',
  //  content: 'console.log("hello from JavaScript!");',
  //},
  activeEditor: 'markup',
  theme: "light",
};

createPlayground(
  '#livecodes', {
  config, params: {
    console: 'open',
    lite: true,
  }
}
);
