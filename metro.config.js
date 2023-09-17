const { getDefaultConfig } = require("metro-config")
const { getDefaultConfig: getDefaultExpoConfig } = require("@expo/metro-config")

let metroConfig
let isExpo = false
try {
  const Constants = require("expo-constants")
  // True if the app is running in an `expo build` app or if it's running in Expo Go.
  isExpo =
    Constants.executionEnvironment === "standalone" ||
    Constants.executionEnvironment === "storeClient"
} catch {}

if (isExpo) {
  /**
   *  Expo metro config
   * Learn more https://docs.expo.io/guides/customizing-metro

   * For one idea on how to support symlinks in Expo, see:
   * https://github.com/infinitered/ignite/issues/1904#issuecomment-1054535068
   */
  metroConfig = (() => {
    const config = getDefaultExpoConfig(__dirname)

    const { transformer, resolver } = config

    config.transformer = {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    }
    config.resolver = {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...resolver.sourceExts, "svg"],
    }

    return config
  })()
} else {
  /**
   * Vanilla metro config - we're using a custom metro config because we want to support symlinks
   * out of the box. This allows you to use pnpm and/or play better in a monorepo.
   *
   * You can safely delete this file and remove @rnx-kit/metro-* if you're not
   * using PNPM or monorepo or symlinks at all.
   *
   * However, it doesn't hurt to have it either.
   */

  metroConfig = (async () => {
    const {
      resolver: { sourceExts, assetExts },
    } = await getDefaultConfig()
    return {
      transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false,
          },
        }),
      },
      resolver: {
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"],
      },
    }
  })()
}

module.exports = metroConfig
