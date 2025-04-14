import { Sdk } from "types"
import { getTileWidthBySizeString } from "@stackla/widget-utils"

declare const sdk: Sdk

export function getSlidesPerView(screenWidth: number = window.innerWidth): number {
  const {
    enable_custom_tiles_per_page: isCustomTilesPerPageEnabled,
    tiles_per_page: tilesPerPage,
    inline_tile_size: tileSizeString
  } = sdk.getStyleConfig()

  screenWidth = Math.min(screenWidth, 1130)
  const tileSize = getTileWidthBySizeString(tileSizeString).replace("px", "")
  const tileSizeWithMargin = Number(tileSize)
  const slidesPerView = Math.ceil(screenWidth / tileSizeWithMargin)

  if (isCustomTilesPerPageEnabled && tilesPerPage) {
    return parseInt(tilesPerPage)
  }

  return slidesPerView
}
