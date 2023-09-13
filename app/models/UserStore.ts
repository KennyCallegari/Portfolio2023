import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const UserStoreModel = types
  .model("UserStore")
  .props({
    locale: "",
    hasSeenOnBoarding: false,
  })
  .actions(withSetPropAction)

export interface UserStore extends Instance<typeof UserStoreModel> {}
export interface UserStoreSnapshot extends SnapshotOut<typeof UserStoreModel> {}
