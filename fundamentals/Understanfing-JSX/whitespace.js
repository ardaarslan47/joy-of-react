const daysUntilSanta = 123

const element = (
    <div>
        <b>Days until santa: </b>
        {daysUntilSanta}
    </div>
)

// for white space

const elementWithWhiteSpace = (
    <div>
        <b>Days until santa:</b>
        {' '}
        {daysUntilSanta}
    </div>
)

const elementStyle = (
    <p style={{ backgroundColor: 'red', margin: '30px' }}></p>
)