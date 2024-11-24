
// useState LESSON

import React, { useState } from 'react';
import './Lesson1.css';
import '../../Lesson.css';

function Lesson1() {
    const [buttonState, setButtonState] = useState(false);
    const toggleButton = () => {
        setButtonState(!buttonState);
    }

    return (
        <>
        <section className='example-container'>
            <p style={{ textAlign: 'center' }}>Click to change class</p>
            <button onClick={toggleButton} className={buttonState ? 'class-1' : 'class-2'}>Button</button>
        </section>
        </>
    )
}

export default Lesson1