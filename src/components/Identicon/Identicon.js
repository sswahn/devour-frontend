function Identicon({ seed = "user", size = 48 }) {

  // hash
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }

  const hue = Math.abs(hash) % 360
  const color = `hsl(${hue}, 60%, 55%)`

  const grid = 5
  const cell = size / grid
  const cells = []

  let bitIndex = 0

  for (let x = 0; x < Math.ceil(grid / 2); x++) {
    for (let y = 0; y < grid; y++) {

      const bit = (hash >> bitIndex) & 1
      bitIndex++

      if (bit) {

        // left
        cells.push(
          <rect
            key={`l-${x}-${y}`}
            x={x * cell}
            y={y * cell}
            width={cell}
            height={cell}
            fill={color}
          />
        )

        // mirrored right
        cells.push(
          <rect
            key={`r-${x}-${y}`}
            x={(grid - x - 1) * cell}
            y={y * cell}
            width={cell}
            height={cell}
            fill={color}
          />
        )
      }
    }
  }

  return (
    <svg width={size} height={size}>
      <rect width="100%" height="100%" fill="#f0f0f0" />
      {cells}
    </svg>
  )
}

export default Identicon
