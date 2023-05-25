export default function SongDetailsEdit(){
    function handleSubmit(e:any){
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
    }
    return(
        <div className="max-w-lg col-start-2 p-5 bg-black rounded col-span-full">
            <form action="" className="grid grid-cols-6" onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="song-name" className="text-3xl text-white col-span-full">Song Name</label>
                <input type="text" name="song-name" id="song-name" className="text-xl col-span-full" />
                <input type="submit" value="Submit" className="p-5 text-white rounded" />
            </form>

        </div>
    )
}