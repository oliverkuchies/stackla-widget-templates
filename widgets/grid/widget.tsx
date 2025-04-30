import { loadWidget, loadAllUnloadedTiles, ISdk } from "@stackla/widget-utils"
import { config } from "./config"

declare const sdk: ISdk

loadWidget({
  config: config,
  callbacks: {
    onHover: [
      event => {
        const tile = event.detail.tile
        tile.style.transition = "opacity 0.5s"
        tile.style.opacity = "0.5"
      }
    ],
    onMouseLeave: [
      event => {
        const tile = event.detail.tile
        tile.style.transition = "opacity 0.5s"
        tile.style.opacity = "1"
      }
    ]
  }
})

sdk.querySelectorAll(".icon-play").forEach(el => {
  el.addEventListener("mouseover", () => {
    el.style.transform = "scale(2)"
    el.style.transition = "transform 0.5s"
  })

  el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)"
    el.style.transition = "transform 0.5s"
  })
})

loadAllUnloadedTiles()
