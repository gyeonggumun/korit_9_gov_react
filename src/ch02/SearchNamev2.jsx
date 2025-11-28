function SearchNamev2() {
const [result, setResult] = useState("값 없음");
const [inputValue, setInputValue] = useState("");
    const names = [
        {
        name: "김준일",
        age: 32,
    },
        {
        name: "김준이",
        age: 33,
    },
        {
        name: "김준삼",
        age: 34,
    },
]
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setResult("값 없음");

        for (let i = 0; i < names.length; i++) {
            const profile = names[i];
            if(profile.name === e.target.value) {
                setResult(profile.age);
                break;
            }
        }

    }

        


    return <div>
        <input type="text" value={inputValue} onChange={handleOnChange}/>
        <h2>{result}</h2>
    </div>
}

export default SearchNamev2;