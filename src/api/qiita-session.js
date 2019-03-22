import axios from 'axios'

export default class QiitaSession {
  static loadArticle(onComplete) {
    return axios
             .get('https://qiita.com/api/v2/items')
             .then((response) => onComplete(response.data));
  }
}