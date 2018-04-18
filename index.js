import {getAPI} from '../privates/editorAPI';

export function Info(appData) {

  /**
   * @doc Info
   * @example
   * editorSDK
   *  .info
   *  .getDashboardUrl()
   *  .then(() => {
   *    // fulfillFunction
   *  });
   *
   * @param {String} token
   * @returns {Promise}
   */
  function getDashboardUrl(token) {
    return getAPI().then(api => {
      return api.editor.info.getDashboardUrl(appData, token)
    });
  }

  /**
   * @doc Info
   * @example
   * editorSDK.info.getEditorSessionId().then(() => { fulfillFunction });
   *
   * @param {String} token
   * @returns {Promise}
   */
  function getEditorSessionId(token) {
    return getAPI().then(api => {
      return api.editor.info.getEditorSessionId(appData, token)
    });
  }
  /**
   * @doc Info
   * @example
   * editorSDK.info.getEditorReadyTimestamp().then((siteId) => { fulfillFunction });
   *
   * @param {String} token
   * @returns {Promise}
   */
  function getEditorReadyTimestamp(token) {
    return getAPI().then(api => api.editor.info.getEditorReadyTimestamp(appData, token));
  }

  /**
   * @doc Info
   * @example
   * editorSDK.info.getEditorMode().then(() => { fulfillFunction });
   *
   * @param {String} token
   * @returns {Promise}
   */
  function getEditorMode(token) {
    return getAPI().then(api => api.editor.info.getEditorMode(appData, token));
  }


  return {
    getDashboardUrl,
    getEditorSessionId,
    getEditorReadyTimestamp,
    getEditorMode
  }
}