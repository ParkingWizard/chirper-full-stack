import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface Chirp {
    id: number,
    userid: number,
    chirp: string,
    _created: Date,
    name: string
}

export interface INewChirpProps extends RouteComponentProps{

}

const NewChirp: React.SFC<INewChirpProps> = props => {

    const [chirp, setChirp] = useState<string>('');

    const addChirp = async () => {
        event.preventDefault()
        let body = { userid: 1, chirp }
        try {
            await fetch('/api/chirps', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            })
            props.history.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="form-group p-3" onSubmit={() => addChirp()}>
                <input type="text" className="form-control my-2" value={chirp} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChirp(event.target.value)} placeholder="chirp" />
                {/* <input type="text" className="form-control my-2" value={userid} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserid(event.target.value)}/> */}
                <input type="submit" className="btn btn-primary " />
            </form>
        </>
    )

}

export default NewChirp;