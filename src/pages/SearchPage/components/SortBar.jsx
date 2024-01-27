const SortBar = () => {
    return(
        <>
        {/* TODO: dropdowns for every option */}
            <div className="flex justify-around p-1 m-1 rounded-[2rem] border-solid border-black border-[1px]">
                <span>sort bar</span>
                
                <button>sort by 1</button>
                <button>sort by 2</button>
                <button>sort by 3</button>

            </div>
        </>
    );
};
export default SortBar;