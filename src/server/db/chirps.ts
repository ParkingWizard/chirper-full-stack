import { Query } from './index';

const all = async () => Query('SELECT chirps.*, users.name FROM chirps JOIN users ON chirps.userid=users.id ORDER BY chirps._created DESC');
const one = async (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const newChirp = async (userid: number, chirp: string) => Query('INSERT INTO chirps (userid, chirp) VALUES (?)', [userid, chirp]);
const delChirp = async (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);
const updateChirp = async (chirp: string, id: number) => Query(`UPDATE chirps SET chirp = "${chirp}" WHERE id = ${id}`);



export default {
    all,
    one,
    newChirp,
    delChirp,
    updateChirp
};


