// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const styles = {
  lightblue: {backgroundColor: 'lightblue',fontWeight:'700',fontStyle:'italic'},
  pink: {backgroundColor: 'pink',fontWeight:'700',fontStyle:'italic'},
  orange: {backgroundColor: 'orange',fontWeight:'700',fontStyle:'italic'},
}

const smallBox = (
  <div
    className="box box--small"
    style={{
      backgroundColor: 'lightblue',
      fontStyle: 'italic',
      fontWeight: '300',
    }}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{fontStyle: 'italic', backgroundColor: 'pink', fontWeight: '300'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{fontStyle: 'italic', backgroundColor: 'orange', fontWeight: '300'}}
  >
    large orange box
  </div>
)

const smallBox2 = (
  <div
    className="box box--small"
    style={styles.lightblue}
  >
    small lightblue box
  </div>
)
const mediumBox2 = (
  <div
    className="box box--medium"
    style={styles.pink}
  >
    medium pink box
  </div>
)
const largeBox2 = (
  <div
    className="box box--large"
    style={styles.orange}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <div>teste 2 :</div>
      {smallBox2}
      {mediumBox2}
      {largeBox2}
    </div>
  )
}

export default App
