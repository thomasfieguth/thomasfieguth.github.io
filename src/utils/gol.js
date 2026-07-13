/**
 * Conway's Game of Life — pure simulation, no framework/canvas dependency.
 * Consumers own the canvas and drive `step`/`addCell` on their own timers.
 *
 * `state.cells` is sparse: `Map<"col,row", { protected: number }>`, keyed
 * only by live cells. `protected` counts down from PROTECTED_TICKS and
 * keeps a cell alive regardless of neighbour count while > 0 — this is
 * what lets a stationary mouse "paint" a cell that doesn't immediately
 * die to the standard rules.
 */

export const CELL_SIZE = 10
export const PROTECTED_TICKS = 6

const NEIGHBOR_OFFSETS = [
  [-1, -1], [0, -1], [1, -1],
  [-1,  0],          [1,  0],
  [-1,  1], [0,  1], [1,  1],
]

function key(col, row) {
  return `${col},${row}`
}

function parseKey(k) {
  const [col, row] = k.split(',').map(Number)
  return [col, row]
}

export function gridDimensions(canvasWidth, canvasHeight) {
  return {
    cols: Math.ceil(canvasWidth / CELL_SIZE),
    rows: Math.ceil(canvasHeight / CELL_SIZE),
  }
}

export function pixelToCell(x, y) {
  return {
    col: Math.floor(x / CELL_SIZE),
    row: Math.floor(y / CELL_SIZE),
  }
}

export function createState() {
  return { cells: new Map(), cols: 0, rows: 0 }
}

export function resize(state, canvasWidth, canvasHeight) {
  const { cols, rows } = gridDimensions(canvasWidth, canvasHeight)
  state.cols = cols
  state.rows = rows

  for (const k of state.cells.keys()) {
    const [col, row] = parseKey(k)
    if (col < 0 || col >= cols || row < 0 || row >= rows) {
      state.cells.delete(k)
    }
  }
}

export function addCell(state, col, row) {
  if (col < 0 || col >= state.cols || row < 0 || row >= state.rows) return

  const k = key(col, row)
  const existing = state.cells.get(k)
  if (existing) {
    existing.protected = PROTECTED_TICKS
  } else {
    state.cells.set(k, { protected: PROTECTED_TICKS })
  }
}

export function step(state) {
  // Candidates = every live cell plus its (in-bounds) dead neighbours.
  const candidateKeys = new Set()
  for (const k of state.cells.keys()) {
    candidateKeys.add(k)
    const [col, row] = parseKey(k)
    for (const [dx, dy] of NEIGHBOR_OFFSETS) {
      const nCol = col + dx
      const nRow = row + dy
      if (nCol < 0 || nCol >= state.cols || nRow < 0 || nRow >= state.rows) continue
      candidateKeys.add(key(nCol, nRow))
    }
  }

  const next = new Map()
  for (const k of candidateKeys) {
    const [col, row] = parseKey(k)

    let liveNeighbors = 0
    for (const [dx, dy] of NEIGHBOR_OFFSETS) {
      if (state.cells.has(key(col + dx, row + dy))) liveNeighbors++
    }

    const current = state.cells.get(k)

    if (current) {
      const survives = current.protected > 0 || liveNeighbors === 2 || liveNeighbors === 3
      if (survives) {
        next.set(k, { protected: Math.max(0, current.protected - 1) })
      }
    } else if (liveNeighbors === 3) {
      next.set(k, { protected: 0 })
    }
  }

  state.cells = next
}
