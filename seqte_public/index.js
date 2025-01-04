import React from 'react';
import ReactDOM from 'react-dom';
import './term.css';
// import cfg from './config.json';

_config = {
    name: 'trash',
    gridSize: 50 // squares tall/wide = 100x50 chars
}

const DisplayChar = ({
    content, // i.e. one char 'a', '$'
    accent // Boolean
    }) => {
    if (accent) {
        return (
            <span className='trash-char trash-accent'>{ content }</span>
        );
    } else {
        return (
            <span className='trash-char'>{ content }</span>
        );
    }
}

const TrashShell = ({ 
    lines,          // queue of lines to display
    accents=[],     // mask for characters to accent = zero
    config={}       // config object
 }) => {
    return (
        <div className='trash-shell'>
            {   "asdf" +
                lines.slice(config.gridSize)
                .map((line, i) => {                 // each line max 100 char
                    const chars = line.split('');
                    chars.map((char, j) => {
                        DisplayChar({
                            content: char,
                            accent: accents.includes(i * 100 + j)
                        })
                    })
                })
            }
        </div>
    );
};

const App = () => {
    return (
        <div>Hello World</div>
    );
    /*
    return (
        <TrashShell
            lines={[
                ['Hello, World!1'],
                ['Hello, World!2'],
                ['Hello, World!3']
            ]}
            accents={[7, 8, 9, 10, 11, 12]}
            config={_config}
        />
    );*/
};

const init = () => {
    const root = ReactDOM.createRoot(document.getElementById('trash-root'));

    root.render(<App />);
};

window.init = init;