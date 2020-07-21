
export default class ApiService {

    _apiBase = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            // eslint-disable-next-line no-useless-concat
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return res.json();
    };

    async getAllCharacters() {
        return await this.getResource('/all.json');
    }

    async getOneCharacter(id) {
        return await this.getResource(`/id/${id}.json`);
    }

    async getHeroPowerStats(id) {
        return await this.getResource(`/id/${id}.json`);
    }

}


