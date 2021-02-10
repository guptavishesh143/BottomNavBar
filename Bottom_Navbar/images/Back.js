import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13.207}
      height={26.556}
      viewBox="0 0 13.207 26.556"
      {...props}
    >
      <G data-name="Play icon">
        <Path
          data-name="Path 17 Copy"
          d="M10.388.567a1.6 1.6 0 012.82 1.036v23.35A1.6 1.6 0 0110.398 26L.393 14.433a1.6 1.6 0 01-.012-2.086z"
          fill="#8692aa"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
