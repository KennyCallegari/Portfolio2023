import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

interface IProjectAsset {
  rosarioBackground?: string,
  meditatioBackground?: string,
  misterGoodCoffeeBackground?: string,
  companiBackground?: string,
  companiOutilsBackground?: string,
  ectorBackground?: string,
}

export const AssetsStoreModel = types
  .model("AssetsStore")
  .props({
    projectAssets: types.frozen<IProjectAsset>(),
  })
  .actions(withSetPropAction)

export interface AssetsStore extends Instance<typeof AssetsStoreModel> {}
export interface AssetsStoreSnapshot extends SnapshotOut<typeof AssetsStoreModel> {}
