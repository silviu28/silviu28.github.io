import { useEffect, useRef, useState } from 'react'
import './NodeGraph.css'

const NodeGraph = ({ width, height, nodeCount, scatter=.75, linksPerNode=3 }) => {
  const ref = useRef(null)
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])

  // This draws random nodeCount nodes.
  const init = canvas => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const newNodes = []

    // First push scattered nodes
    for (let i = 0; i < nodeCount; ++i) {
      const node = {
        index: i,
        x: (Math.random() * width) % (width * scatter),
        y: (Math.random() * height) % (height * scatter),
        r: 5,
      }
      newNodes.push(node)
    }

    const newEdges = []

    // Draw edges connecting to random nodes
    newNodes.forEach(n => {
      for (let i = 0; i < linksPerNode; ++i) {
        const c = Math.floor(Math.random() * nodeCount)
        const vertex = {
          from: n.index,
          to: newNodes[c].index,
        }
        newEdges.push(vertex)
      }
    })
    setNodes(newNodes)
    setEdges(newEdges)
  }

  // Redraw everything
  const repaint = canvas => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, width, height)
    
    nodes.forEach(n => {
      ctx.beginPath()
      ctx.fillStyle = 'rgb(128, 128, 128)'
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
      ctx.fill()
    })

    edges.forEach(e => {
      ctx.beginPath()
      ctx.strokeStyle = 'rgb(128, 128, 128)'
      ctx.moveTo(nodes[e.from].x, nodes[e.from].y)
      ctx.lineTo(nodes[e.to].x, nodes[e.to].y)
      ctx.stroke()
    })
  }

  // Scramble nodes around
  const scramble = () => {
    let scrambled = nodes.map(n => ({ ... n }))
    const count = 1 + Math.floor(Math.random() * nodeCount)
    for (let i = 0; i < count; ++i) {
      scrambled[i].x += (Math.random() < .5 ? -1 : 1)
      scrambled[i].y += (Math.random() < .5 ? -1 : 1)
    }
    setNodes(scrambled)
  }

  // Initialize the canvas
  useEffect(() => {
    const canvas = ref.current
    if (canvas && canvas.getContext) {
      init(canvas)
    }
  }, [])

  // Repaints the canvas for every change
  useEffect(() => {
    const canvas = ref.current
    if (canvas && nodes.length && edges.length) {
      repaint(canvas)
      // Animate node dispersion. Commented code is bad
      // const interval = setInterval(() => {
      //   scramble()
      //   repaint(canvas)
      // }, 5000)
      // return () => clearInterval(interval)
    }
  }, [nodes, edges])

  return (
    <canvas ref={ref}
      className='node-graph'
      width={width}
      height={height} />
  )
}

export default NodeGraph