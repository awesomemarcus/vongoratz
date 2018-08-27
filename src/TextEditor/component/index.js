import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import BoldMark from './BoldMark';
import ItalicMark from './ItalicMark';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'my first paragraph',
              },
            ],
          },
        ],
      },
    ],
  },
})

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: initialValue,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.renderMark = this.renderMark.bind(this);
  }

  onChange({ value }) {
    console.log(value);
    this.setState({ value });
  }

  onKeyDown(e, change) {
    console.log(e.ctrlKey);

    if (!e.ctrlKey) return;
    e.preventDefault();

    switch (e.key) {
      case 'b': {
        change.toggleMark('bold');
        return true;
      }
      case 'i': {
        change.toggleMark('italic');
        return true;
      }

      default: {
        return;
      }
    }
  }

  renderMark(props) {
    switch(props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
      case 'italic':
        return <ItalicMark {...props} />
    }
  }

  render() {
    return (
      <Editor
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        renderMark={this.renderMark}/>
    )
  }


}