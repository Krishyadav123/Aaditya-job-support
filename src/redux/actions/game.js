import {
  RETRIEVE_GAME,
  RETRIEVE_GAME_DETAILS,
  CREATE_GAME,
  UPDATE_GAME,
  DELETE_GAME,
  RESTORE_GAME,
} from "./types";

import GameService from "../../redux/services/game.service";

export const retrieveGame =
  (
    keyword = "",
    page = "",
    perPage = "",
    platform = "",
    category = "",
    minPrice = "",
    maxPrice = "",
    currency = "",
    adType = "",
    status = ""
  ) =>
  async (dispatch) => {
    try {
      const res = await GameService.getAll(
        keyword,
        page,
        perPage,
        platform,
        category,
        minPrice,
        maxPrice,
        currency,
        adType,
        status
      );
      dispatch({
        type: RETRIEVE_GAME,
        payload: res.data.listPages,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const retrieveSingaleGame = (id) => async (dispatch) => {
  try {
    const res = await GameService.get(id);
    dispatch({
      type: RETRIEVE_GAME_DETAILS,
      payload: { seller: res?.data?.userInfo },
    });
  } catch (err) {
    console.log(err);
  }
};

export const createGame = (data) => async (dispatch) => {
  try {
    const res = await GameService.create(data);

    dispatch({
      type: CREATE_GAME,
      payload: res.data.pageInfo,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateGame = (id, data) => async (dispatch) => {
  try {
    const res = await GameService.update(id, data);

    dispatch({
      type: UPDATE_GAME,
      payload: res.data.adInfo,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteGame = (id) => async (dispatch) => {
  try {
    const res = await GameService.deleteGame(id);

    dispatch({
      type: DELETE_GAME,
      payload: res.data.pageInfo,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const restoreGame = (id) => async (dispatch) => {
  try {
    const res = await GameService.restore(id);

    dispatch({
      type: RESTORE_GAME,
      payload: res.data.adInfo,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
