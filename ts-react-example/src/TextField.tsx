import React, {useRef, useState} from "react";

interface Person {
    firstN: string;
    lastN: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (a:string) => void;
    obj?: Person;
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField:React.FC<Props> = ({handleChange}) => {
    const [count,setCount] = useState<number|null>(null);
    setCount(count?count+1:1);
    const [user,setUser] = useState<Person>({firstN:'name',lastN:'last'});
    let me:Person = {lastN:'v',firstN:'s'};
    setUser(user?me:me);

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    );
};
