// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config")

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)

config.resolver.assetExts.push("glb", "gltf", "mtl", "obj", "png", "jpg")
config.resolver.sourceExts.push("mjs")

module.exports = config
