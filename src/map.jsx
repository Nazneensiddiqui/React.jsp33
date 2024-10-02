
const Map=()=>{
    const subject=["php", "html", "js","react","python"];
    const ans=subject.map((key)=>{
        return(
            <>
            <li>{key}</li>
            </>
        )
    })


return(
<>
<h1>hello world</h1>
<ol>{ans}</ol>


</>
)

}
export default Map;