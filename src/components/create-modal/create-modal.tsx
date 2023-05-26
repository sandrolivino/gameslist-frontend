import { useEffect, useState } from 'react';
import { useGameDataMutate } from '../../hooks/useGameDataMutate';
import { GameData } from '../../interface/GameData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>

            <input placeholder={label} value={value} onChange={event => updateValue(event.target.value)}></input>


        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [genre, setGenre] = useState("");
    const [platforms, setPlatforms] = useState("");
    const [score, setScore] = useState(0);
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");

    const { mutate, isSuccess, isLoading } = useGameDataMutate();

    const submit = () => {
        const gameData: GameData = {
            title,
            year,
            imgUrl,
            genre,
            platforms,
            score,
            shortDescription,
            longDescription
        }
        mutate(gameData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle} />
                    <Input label="Ano" value={year} updateValue={setYear} />
                    <Input label="Gênero" value={genre} updateValue={setGenre} />
                    <Input label="Plataformas" value={platforms} updateValue={setPlatforms} />
                    <Input label="Score" value={score} updateValue={setScore} />
                    <Input label="Url da imagem" value={imgUrl} updateValue={setImgUrl} />
                    <Input label="Descrição curta" value={shortDescription} updateValue={setShortDescription} />
                    <Input label="Descrição longa" value={longDescription} updateValue={setLongDescription} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}